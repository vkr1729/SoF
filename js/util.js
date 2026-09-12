// Shared helpers: HTML escaping, option shuffling, subject colors, topic normalization.
// Loaded before all other js/ files. Zero dependencies, offline-safe.

(function () {
  'use strict';

  // Escape bank-controlled text before innerHTML interpolation (stored-XSS guard).
  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, (c) => {
      switch (c) {
        case '&': return '&amp;';
        case '<': return '&lt;';
        case '>': return '&gt;';
        case '"': return '&quot;';
        default: return '&#39;';
      }
    });
  }

  // Single canonical subject color (replaces per-file duplicates).
  function getSubjectColor(subj) {
    if (subj === 'IGKO') return '#f59e0b';
    if (subj === 'IMO') return '#0284c7';
    if (subj === 'NSO') return '#16a34a';
    return '#64748b';
  }

  // Shuffle options in place-order, preserving the keyed answer.
  // Returns a new question object; never mutates the bank.
  function shuffleOptions(q, rand) {
    const random = rand || Math.random;
    const order = q.options.map((_, i) => i);
    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      const tmp = order[i];
      order[i] = order[j];
      order[j] = tmp;
    }
    return {
      id: q.id,
      subject: q.subject,
      set: q.set,
      topic: q.topic,
      difficulty: q.difficulty,
      question: q.question,
      options: order.map((i) => q.options[i]),
      answer: order.indexOf(q.answer),
      explanation: q.explanation
    };
  }

  // Canonical topic key for matching ("Air,  Water & weather" -> "air, water & weather").
  function normalizeTopic(topic) {
    return String(topic ?? '').trim().toLowerCase().replace(/\s+/g, ' ');
  }

  // Local (device-timezone) YYYY-MM-DD for streaks — UTC dates misfire across IST bedtimes.
  function localDay(date) {
    const d = date || new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  }

  window.SOFUtils = { escapeHtml, getSubjectColor, shuffleOptions, normalizeTopic, localDay };
})();
