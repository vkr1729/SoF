// Audio Manager: Web Audio API Synthesizer & Speech Synthesis Read-Aloud
// Zero external files, 100% offline, works across Chrome, Safari, Edge, Firefox

class AudioManager {
  constructor() {
    this.audioCtx = null;
    this.soundEnabled = true;
    this.speechEnabled = true;
    this.synth = window.speechSynthesis || null;
    // Set on the first real user gesture (see AppController.init). Mobile
    // browsers block audio/speech before interaction; auto read-aloud waits.
    this.hasInteracted = false;
  }

  // Call from the first pointerdown/keydown: unlocks Web Audio and marks
  // speech as gesture-approved.
  unlock() {
    this.hasInteracted = true;
    this.initContext();
    this.warmupVoices();
  }

  // iOS Safari loads voices asynchronously — getVoices() is empty until
  // voiceschanged fires, and calling it inside a gesture helps. Cache a
  // kid-friendly English voice (Indian English first, then US English).
  warmupVoices() {
    if (!this.synth) return;
    try {
      const pick = () => {
        const voices = this.synth.getVoices() || [];
        this.voice = voices.find(v => /^en[-_]IN/i.test(v.lang))
          || voices.find(v => /^en[-_]US/i.test(v.lang))
          || voices.find(v => /^en/i.test(v.lang))
          || null;
      };
      pick();
      if (!this.voice && typeof this.synth.addEventListener === 'function') {
        this.synth.addEventListener('voiceschanged', pick, { once: true });
      }
    } catch (e) {
      console.warn("Speech voice warmup error:", e);
    }
  }

  // Split long text into short chunks: iOS Safari silently pauses
  // utterances longer than ~15 seconds, cutting explanations mid-sentence.
  static chunkText(text, maxLen) {
    const clean = String(text || '');
    if (clean.length <= maxLen) return [clean];
    // No lookbehind (unsupported on older Safari): split keeping punctuation.
    const bits = clean.split(/([.!?])\s+/);
    const parts = [];
    for (let i = 0; i < bits.length; i += 2) {
      parts.push((bits[i] + (bits[i + 1] || '')).trim());
    }
    const chunks = [];
    let cur = '';
    for (const p of parts) {
      if (!p) continue;
      if ((cur + ' ' + p).trim().length > maxLen && cur) {
        chunks.push(cur.trim());
        cur = p;
      } else {
        cur = (cur + ' ' + p).trim();
      }
    }
    if (cur.trim()) chunks.push(cur.trim());
    return chunks.length ? chunks : [clean];
  }

  initContext() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  // Play a synthesized musical tone
  playTone(freq, type = 'sine', duration = 0.2, volume = 0.2) {
    if (!this.soundEnabled) return;
    try {
      this.initContext();
      if (!this.audioCtx) return;

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

      gain.gain.setValueAtTime(volume, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start();
      osc.stop(this.audioCtx.currentTime + duration);
    } catch (e) {
      console.warn("Audio playback error:", e);
    }
  }

  // Correct answer cheerful chime (C5 -> E5 -> G5)
  playCorrect() {
    this.playTone(523.25, 'triangle', 0.12, 0.25);
    setTimeout(() => this.playTone(659.25, 'triangle', 0.12, 0.25), 90);
    setTimeout(() => this.playTone(783.99, 'triangle', 0.25, 0.3), 180);
  }

  // Minecraft level-up "Ding!"
  playMinecraftDing() {
    this.playTone(784, 'triangle', 0.15, 0.3);
    setTimeout(() => this.playTone(1046.5, 'triangle', 0.3, 0.35), 100);
  }

  // Gentle soft buzzer for wrong answer
  playIncorrect() {
    this.playTone(220, 'sawtooth', 0.2, 0.15);
    setTimeout(() => this.playTone(196, 'sawtooth', 0.3, 0.15), 120);
  }

  // Celebratory fanfare when completing a set
  playFanfare() {
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      setTimeout(() => this.playTone(freq, 'triangle', 0.25, 0.3), idx * 120);
    });
  }

  // Click / navigation tap
  playClick() {
    this.playTone(400, 'sine', 0.05, 0.1);
  }

  // Speech Synthesis "Read Aloud" — chunked for the iOS long-utterance bug.
  speak(text) {
    if (!this.speechEnabled || !this.synth) return;
    try {
      this.stopSpeaking();
      const cleanText = String(text).replace(/<[^>]*>?/gm, ''); // strip HTML tags
      const chunks = AudioManager.chunkText(cleanText, 140);
      this._queue = chunks;
      this._speakNext();
    } catch (e) {
      console.warn("Speech synthesis error:", e);
    }
  }

  _speakNext() {
    if (!this._queue || this._queue.length === 0) return;
    const part = this._queue.shift();
    const utterance = new SpeechSynthesisUtterance(part);
    utterance.rate = 0.88; // Gentle, clear speed for 7-year-olds
    utterance.pitch = 1.1; // Slightly friendly upbeat pitch
    if (this.voice) utterance.voice = this.voice;
    utterance.onend = () => this._speakNext();
    utterance.onerror = () => { this._queue = []; };
    this.synth.speak(utterance);
  }

  stopSpeaking() {
    this._queue = [];
    if (this.synth) {
      try {
        this.synth.cancel();
      } catch (e) {
        console.warn("Speech cancel error:", e);
      }
    }
  }

  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    return this.soundEnabled;
  }

  toggleSpeech() {
    this.speechEnabled = !this.speechEnabled;
    if (!this.speechEnabled) this.stopSpeaking();
    return this.speechEnabled;
  }
}

window.audioManager = new AudioManager();
