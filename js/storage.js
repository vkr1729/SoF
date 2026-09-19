// Storage Manager: LocalStorage Engine for Persistence
// Handles Streaks, Mistake Bank, XP/Emeralds, Topic Diagnostics, and Parent Reset

const STORAGE_KEY = "SOF_OLYMPIAD_V1";

class StorageManager {
  constructor() {
    this.data = this.load();
    this.checkDailyStreak();
  }

  // True when localStorage is usable (private-mode Safari and disabled
  // cookies throw on access — the app then runs on memory for the session).
  static isPersistent() {
    try {
      const probe = '__sof_probe__';
      localStorage.setItem(probe, '1');
      localStorage.removeItem(probe);
      return true;
    } catch (e) {
      return false;
    }
  }

  getDefaultData() {
    return {
      profile: {
        name: "Champion",
        mascot: "steve",
        hearts: 5,
        emeralds: 50,
        xp: 0,
        streak: 1,
        lastActiveDate: window.SOFUtils.localDay()
      },
      completedSets: [], // e.g. ["IGKO-1", "IMO-2"]
      mistakes: [],      // array of wrong questions
      topicStats: {},    // "Subject:Topic" -> { attempted: 0, correct: 0 }
      examHistory: [],   // list of mock exam results
      unlockedBadges: ["badge-math-miner"] // initial welcome badge
    };
  }

  // Deep-merge saved state over defaults so a corrupt or partial payload
  // (e.g. profile present but topicStats missing) can never break lookups.
  mergeDefaults(parsed) {
    const def = this.getDefaultData();
    if (!parsed || typeof parsed !== 'object') return def;
    return {
      ...def,
      ...parsed,
      profile: { ...def.profile, ...(parsed.profile || {}) },
      topicStats: parsed.topicStats || {},
      mistakes: Array.isArray(parsed.mistakes) ? parsed.mistakes : [],
      completedSets: Array.isArray(parsed.completedSets) ? parsed.completedSets : [],
      examHistory: Array.isArray(parsed.examHistory) ? parsed.examHistory : [],
      unlockedBadges: Array.isArray(parsed.unlockedBadges) ? parsed.unlockedBadges : def.unlockedBadges
    };
  }

  load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        return this.mergeDefaults(JSON.parse(raw));
      }
    } catch (e) {
      // Corrupt JSON, disabled storage, or quota state — fall through to
      // defaults. window.SOF_STORAGE_OK tells the UI persistence is off.
      console.error("Failed to load state from localStorage:", e);
      window.SOF_STORAGE_OK = false;
    }
    const def = this.getDefaultData();
    this.save(def);
    return def;
  }

  save(dataToSave = null) {
    try {
      const payload = dataToSave || this.data;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
      window.SOF_STORAGE_OK = true;
    } catch (e) {
      // QuotaExceededError or disabled storage: keep the session running on
      // memory and flag it instead of crashing the practice flow.
      window.SOF_STORAGE_OK = false;
      console.error("Failed to persist state:", e);
    }
  }

  // Daily Streak Engine (device-local days, so IST bedtimes behave).
  checkDailyStreak() {
    const today = window.SOFUtils.localDay();
    const lastDate = this.data.profile.lastActiveDate;

    if (lastDate !== today) {
      const d1 = new Date(today + 'T00:00:00');
      const d2 = new Date(lastDate + 'T00:00:00');
      const diffDays = Math.round((d1 - d2) / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        // Practiced yesterday, increment streak!
        this.data.profile.streak += 1;
      } else if (diffDays !== 0) {
        // Missed a day (or unreadable date), reset streak to 1
        this.data.profile.streak = 1;
      }
      this.data.profile.lastActiveDate = today;
      // Fresh hearts every day.
      this.data.profile.hearts = 5;
      this.save();
    }
  }

  // Record question attempt
  recordAttempt(question, chosenAnswer, isCorrect, isRevision = false) {
    if (isRevision) return;
    if (!question || typeof question !== 'object') return;
    const topicKey = `${question.subject}:${question.topic}`;
    if (!this.data.topicStats[topicKey]) {
      this.data.topicStats[topicKey] = { attempted: 0, correct: 0 };
    }
    this.data.topicStats[topicKey].attempted += 1;
    if (isCorrect) {
      this.data.topicStats[topicKey].correct += 1;
      this.addXP(25);
      this.addEmeralds(10);
    } else {
      // Add to Mistake Bank
      this.addMistake(question, chosenAnswer);
      this.addXP(5); // encouragement XP even on mistake
    }
    this.save();
  }

  // Mistake Bank Operations
  addMistake(question, chosenAnswer) {
    const existingIndex = this.data.mistakes.findIndex(m => m.id === question.id);
    const record = {
      id: question.id,
      subject: question.subject,
      set: question.set,
      topic: question.topic,
      question: question.question,
      options: question.options,
      correctAnswer: question.answer,
      chosenAnswer: chosenAnswer,
      explanation: question.explanation,
      mastered: false,
      timestamp: Date.now()
    };

    if (existingIndex >= 0) {
      this.data.mistakes[existingIndex] = record;
    } else {
      this.data.mistakes.unshift(record);
      // Quota protection: keep mistake bank bounded at 200 items
      if (this.data.mistakes.length > 200) {
        this.data.mistakes = this.data.mistakes.slice(0, 200);
      }
    }
    this.save();
  }

  getMistakes(filterSubject = null) {
    let list = this.data.mistakes || [];
    if (filterSubject && filterSubject !== 'ALL') {
      list = list.filter(m => m.subject === filterSubject);
    }
    return list;
  }

  markMistakeMastered(questionId) {
    const item = this.data.mistakes.find(m => m.id === questionId);
    if (item) {
      item.mastered = true;
      this.addXP(50);
      this.addEmeralds(25);
      this.save();
    }
  }

  removeMistake(questionId) {
    this.data.mistakes = this.data.mistakes.filter(m => m.id !== questionId);
    this.save();
  }

  // Topic Statistics & Weak Areas
  getTopicStats() {
    return this.data.topicStats || {};
  }

  getWeakTopics(threshold = 0.70) {
    const stats = this.getTopicStats();
    const weak = [];

    for (let key in stats) {
      const item = stats[key];
      if (item.attempted >= 2) { // Need at least 2 attempts to calculate accuracy
        const acc = item.correct / item.attempted;
        if (acc < threshold) {
          // Split on the FIRST colon only — topic names may contain ':'.
          const sep = key.indexOf(':');
          weak.push({
            subject: sep >= 0 ? key.slice(0, sep) : key,
            topic: sep >= 0 ? key.slice(sep + 1) : '',
            attempted: item.attempted,
            correct: item.correct,
            accuracy: Math.round(acc * 100)
          });
        }
      }
    }
    return weak;
  }

  // XP, Emeralds & Level
  addXP(amount) {
    this.data.profile.xp += amount;
    this.save();
  }

  addEmeralds(amount) {
    this.data.profile.emeralds += amount;
    this.save();
  }

  // Hearts economy (0..5). Wrong practice answers cost one, correct answers
  // restore one, a new day refills to 5.
  addHearts(delta) {
    const cur = Number.isFinite(this.data.profile.hearts) ? this.data.profile.hearts : 5;
    this.data.profile.hearts = Math.max(0, Math.min(5, cur + delta));
    this.save();
  }

  setHearts(value) {
    this.data.profile.hearts = Math.max(0, Math.min(5, value));
    this.save();
  }

  getLevel() {
    // 100 XP per level
    return Math.floor(this.data.profile.xp / 100) + 1;
  }

  getXpInCurrentLevel() {
    return this.data.profile.xp % 100;
  }

  // Completed Set Tracking
  markSetCompleted(subject, setNum, isRevision = false) {
    if (isRevision) return;
    const setKey = `${subject}-${setNum}`;
    if (!this.data.completedSets.includes(setKey)) {
      this.data.completedSets.push(setKey);
      this.addXP(100);
      this.addEmeralds(50);
      this.save();
    }
  }

  isSetCompleted(subject, setNum) {
    return this.data.completedSets.includes(`${subject}-${setNum}`);
  }

  // Save Exam Simulation Result
  saveExamResult(result) {
    const score = Number(result && result.score);
    const total = Number(result && result.total);
    if (!Number.isFinite(score) || !Number.isFinite(total) || total <= 0) return;
    this.data.examHistory.unshift({
      date: new Date().toLocaleDateString(),
      subject: result.subject,
      score: result.score,
      total: result.total,
      timeTakenSecs: result.timeTakenSecs,
      percentage: Math.round((result.score / result.total) * 100)
    });
    // Quota protection: keep exam history bounded at 20 records
    if (this.data.examHistory.length > 20) {
      this.data.examHistory = this.data.examHistory.slice(0, 20);
    }
    this.addXP(150);
    this.addEmeralds(100);
    this.save();
  }

  // Active Mascot
  setMascot(mascotId) {
    this.data.profile.mascot = mascotId;
    this.save();
  }

  getMascot() {
    return this.data.profile.mascot || 'steve';
  }

  // Reset & Backup for Parents
  resetAll() {
    this.data = this.getDefaultData();
    this.save();
  }

  exportJson() {
    return JSON.stringify(this.data, null, 2);
  }

  importJson(str) {
    try {
      const parsed = JSON.parse(str);
      this.data = this.mergeDefaults(parsed);
      this.save();
      return true;
    } catch (e) {
      console.error("Invalid import JSON:", e);
      return false;
    }
  }
}

window.storageManager = new StorageManager();
