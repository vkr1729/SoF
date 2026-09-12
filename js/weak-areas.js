// Weak Areas Diagnostic & Smart Nudge Controller
// Analyzes syllabus topic accuracy and generates 1-click 5-question Power Workouts

class WeakAreasController {
  constructor() {}

  render() {
    const nudgeContainer = document.getElementById('smart-nudge-banner');
    const topicsGrid = document.getElementById('topics-mastery-grid');
    if (!topicsGrid) return;

    const stats = window.storageManager.getTopicStats();
    const weakTopics = window.storageManager.getWeakTopics(0.70);

    // Render Smart Nudge Banner
    if (weakTopics.length > 0) {
      const topWeak = weakTopics[0];
      const mascot = window.storageManager.getMascot();
      const mascotName = mascot === 'alex' ? 'Alex' : (mascot === 'creeper' ? 'Sparky' : 'Steve');

      nudgeContainer.innerHTML = `
        <div style="background: #fffbeb; border: 2px solid #fde68a; border-radius: 20px; padding: 22px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; box-shadow: 0 4px 0 #fef3c7;">
          <div style="display: flex; align-items: center; gap: 16px;">
            <div style="font-size: 42px;">⚡</div>
            <div>
              <div style="font-size: 13px; font-weight: 800; color: #b45309; text-transform: uppercase;">
                ${mascotName}'s Targeted Power Workout Recommendation
              </div>
              <h3 style="font-size: 19px; font-weight: 900; color: #78350f; margin: 2px 0 4px;">
                Focus Topic: ${topWeak.topic} (${topWeak.subject})
              </h3>
              <p style="font-size: 14px; color: #92400e;">
                Current accuracy is <strong>${topWeak.accuracy}%</strong> (${topWeak.correct}/${topWeak.attempted} correct). 
                Let's conquer 5 quick questions to push it into the Green Diamond zone!
              </p>
            </div>
          </div>
          <button class="btn-tactile btn-yellow" style="padding: 12px 22px; font-size: 15px;" onclick="window.weakAreas.startPowerWorkout('${topWeak.subject}', '${topWeak.topic}')">
            Start 5-Q Power Workout ⚡
          </button>
        </div>
      `;
      nudgeContainer.style.display = 'block';
    } else {
      nudgeContainer.innerHTML = `
        <div style="background: #f0fdf4; border: 2px solid #bbf7d0; border-radius: 20px; padding: 18px 24px; display: flex; align-items: center; gap: 16px;">
          <div style="font-size: 36px;">💎</div>
          <div>
            <h3 style="font-size: 17px; font-weight: 900; color: #15803d;">All Topics Looking Strong!</h3>
            <p style="font-size: 14px; color: #166534;">
              Keep practicing daily sets to maintain your top score in IGKO, IMO, and NSO.
            </p>
          </div>
        </div>
      `;
      nudgeContainer.style.display = 'block';
    }

    // Render All Topics Mastery Cards
    const allTopics = this.getAllKnownTopics();
    topicsGrid.innerHTML = allTopics.map(t => {
      const key = `${t.subject}:${t.topic}`;
      const stat = stats[key] || { attempted: 0, correct: 0 };
      const pct = stat.attempted > 0 ? Math.round((stat.correct / stat.attempted) * 100) : null;

      let tagClass = 'tag-gray';
      let tagText = 'Not Started';
      let statusColor = '#64748b';

      if (pct !== null) {
        if (pct >= 80) {
          tagClass = 'tag-green';
          tagText = `Strong (${pct}%)`;
          statusColor = '#15803d';
        } else if (pct >= 60) {
          tagClass = 'tag-yellow';
          tagText = `Good (${pct}%)`;
          statusColor = '#b45309';
        } else {
          tagClass = 'tag-red';
          tagText = `Needs Practice (${pct}%)`;
          statusColor = '#b91c1c';
        }
      }

      return `
        <div class="card-box" style="padding: 18px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <span class="brand-badge" style="background: ${this.getSubjectColor(t.subject)}; color: #fff;">${t.subject}</span>
            <span style="font-size: 12px; font-weight: 800; color: ${statusColor};">${tagText}</span>
          </div>
          <h4 style="font-size: 16px; font-weight: 800; color: #1e293b; margin-bottom: 6px;">${t.topic}</h4>
          <p style="font-size: 13px; color: #64748b; margin-bottom: 14px;">
            ${stat.attempted > 0 ? `${stat.correct} of ${stat.attempted} answered correctly` : 'Ready for practice'}
          </p>
          <button class="btn-tactile btn-blue" style="width: 100%; font-size: 13px; padding: 8px 12px;" onclick="window.weakAreas.startPowerWorkout('${t.subject}', '${t.topic}')">
            Practice Topic (5 Qs)
          </button>
        </div>
      `;
    }).join('');
  }

  startPowerWorkout(subject, topic) {
    let sourceBank = [];
    if (subject === 'IGKO' && window.IGKO_QUESTIONS) sourceBank = window.IGKO_QUESTIONS;
    else if (subject === 'IMO' && window.IMO_QUESTIONS) sourceBank = window.IMO_QUESTIONS;
    else if (subject === 'NSO' && window.NSO_QUESTIONS) sourceBank = window.NSO_QUESTIONS;

    // Filter questions by topic
    let topicQuestions = sourceBank.filter(q => q.topic.toLowerCase().includes(topic.toLowerCase()) || topic.toLowerCase().includes(q.topic.toLowerCase()));
    if (topicQuestions.length < 5) {
      topicQuestions = sourceBank.filter(q => q.subject === subject).slice(0, 5);
    }
    const workoutQuestions = topicQuestions.slice(0, 5);

    // Launch into quiz engine
    window.quizEngine.startCustomWorkout(`⚡ Power Workout: ${topic}`, workoutQuestions);
    window.app.switchTab('quiz');
  }

  getAllKnownTopics() {
    return [
      { subject: "IMO", topic: "Number Sense" },
      { subject: "IMO", topic: "Addition" },
      { subject: "IMO", topic: "Subtraction" },
      { subject: "IMO", topic: "Time & Calendar" },
      { subject: "IMO", topic: "Shapes & Geometry" },
      { subject: "IMO", topic: "Money" },
      { subject: "NSO", topic: "Plants" },
      { subject: "NSO", topic: "Animals" },
      { subject: "NSO", topic: "Human Body" },
      { subject: "NSO", topic: "Air, Water & Weather" },
      { subject: "IGKO", topic: "Plants & Animals" },
      { subject: "IGKO", topic: "India & The World" },
      { subject: "IGKO", topic: "Science & Technology" },
      { subject: "IGKO", topic: "Current Affairs" }
    ];
  }

  getSubjectColor(subj) {
    if (subj === 'IGKO') return '#f59e0b';
    if (subj === 'IMO') return '#0284c7';
    if (subj === 'NSO') return '#16a34a';
    return '#64748b';
  }
}

window.weakAreas = new WeakAreasController();
