// Audio Manager: Web Audio API Synthesizer & Speech Synthesis Read-Aloud
// Zero external files, 100% offline, works across Chrome, Safari, Edge, Firefox

class AudioManager {
  constructor() {
    this.audioCtx = null;
    this.soundEnabled = true;
    this.speechEnabled = true;
    this.synth = window.speechSynthesis || null;
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

  // Speech Synthesis "Read Aloud"
  speak(text) {
    if (!this.speechEnabled || !this.synth) return;
    try {
      this.synth.cancel(); // Stop any currently playing audio
      const cleanText = text.replace(/<[^>]*>?/gm, ''); // strip HTML tags
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.rate = 0.88; // Gentle, clear speed for 7-year-olds
      utterance.pitch = 1.1; // Slightly friendly upbeat pitch
      this.synth.speak(utterance);
    } catch (e) {
      console.warn("Speech synthesis error:", e);
    }
  }

  stopSpeaking() {
    if (this.synth) {
      this.synth.cancel();
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
