// Storage Manager: LocalStorage Engine for Persistence
// Handles Streaks, Mistake Bank, XP/Emeralds, Topic Diagnostics, and Parent Reset

const STORAGE_KEY = "SOF_OLYMPIAD_V1";

class StorageManager {
  constructor() {
    this.data = this.load();
    this.checkDailyStreak();
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
        lastActiveDate: new Date().toISOString().split('T')[0]
      },
      completedSets: [], // e.g. ["IGKO-1", "IMO-2"]
      mistakes: [],      // array of wrong questions
      topicStats: {},    // "Subject:Topic" -> { attempted: 0, correct: 0 }
      examHistory: [],   // list of mock exam results
      unlockedBadges: ["badge-math-miner"] // initial welcome badge
    };
  }

  load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        return { ...this.getDefaultData(), ...parsed };
      }
    } catch (e) {
      console.error("Failed to load state from localStorage:", e);
    }
    const def = this.getDefaultData();
    this.save(def);
    return def;
  }

  save(dataToSave = null) {
    try {
      const payload = dataToSave || this.data;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch (e) {
      console.error("Failed to persist state:", e);
    }
  }

  // Daily Streak Engine
  checkDailyStreak() {
    const today = new Date().toISOString().split('T')[0];
    const lastDate = this.data.profile.lastActiveDate;

    if (lastDate !== today) {
      const d1 = new Date(today);
      const d2 = new Date(lastDate);
      const diffDays = Math.floor((d1 - d2) / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        // Practiced yesterday, increment streak!
        this.data.profile.streak += 1;
      } else if (diffDays > 1) {
        // Missed a day, reset streak to 1
        this.data.profile.streak = 1;
      }
      this.data.profile.lastActiveDate = today;
      this.save();
    }
  }

  // Record question attempt
  recordAttempt(question, chosenAnswer, isCorrect) {
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
          const parts = key.split(':');
          weak.push({
            subject: parts[0],
            topic: parts[1],
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

  getLevel() {
    // 100 XP per level
    return Math.floor(this.data.profile.xp / 100) + 1;
  }

  getXpInCurrentLevel() {
    return this.data.profile.xp % 100;
  }

  // Completed Set Tracking
  markSetCompleted(subject, setNum) {
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
    this.data.examHistory.unshift({
      date: new Date().toLocaleDateString(),
      subject: result.subject,
      score: result.score,
      total: result.total,
      timeTakenSecs: result.timeTakenSecs,
      percentage: Math.round((result.score / result.total) * 100)
    });
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
      this.data = { ...this.getDefaultData(), ...parsed };
      this.save();
      return true;
    } catch (e) {
      console.error("Invalid import JSON:", e);
      return false;
    }
  }
}

window.storageManager = new StorageManager();
