// Web Audio API ambient piano lullaby generator
// Plays a gentle, warm melody without external mp3 dependencies

class AmbientPianoPlayer {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private timer: number | null = null;
  private gainNode: GainNode | null = null;

  private notes = [
    // Gentle Pentatonic / Warm Lullaby Chords (Frequencies in Hz)
    // C4, E4, G4, A4, B4, C5, D5, E5, G5
    261.63, 329.63, 392.00, 440.00, 493.88, 523.25, 587.33, 659.25, 783.99
  ];

  private melodySequence = [
    { note: 523.25, duration: 1.2 }, // C5
    { note: 440.00, duration: 1.0 }, // A4
    { note: 392.00, duration: 1.5 }, // G4
    { note: 329.63, duration: 1.8 }, // E4
    { note: 392.00, duration: 1.2 }, // G4
    { note: 440.00, duration: 1.2 }, // A4
    { note: 523.25, duration: 2.0 }, // C5
    { note: 659.25, duration: 1.5 }, // E5
    { note: 587.33, duration: 1.2 }, // D5
    { note: 523.25, duration: 2.2 }, // C5
    { note: 392.00, duration: 1.5 }, // G4
    { note: 329.63, duration: 2.4 }, // E4
  ];

  private currentIndex = 0;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.gainNode = this.ctx.createGain();
      this.gainNode.gain.setValueAtTime(0.12, this.ctx.currentTime); // gentle volume
      this.gainNode.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  private playTone(freq: number, duration: number) {
    if (!this.ctx || !this.gainNode) return;

    const now = this.ctx.currentTime;
    
    // Primary warm sine wave (piano bell tone)
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const noteGain = this.ctx.createGain();

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(freq, now);

    // Subtle rich harmonic overtone
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(freq * 2, now);

    // Envelope: quick attack, warm mellow decay
    noteGain.gain.setValueAtTime(0, now);
    noteGain.gain.linearRampToValueAtTime(0.22, now + 0.04);
    noteGain.gain.exponentialRampToValueAtTime(0.001, now + duration + 0.8);

    osc1.connect(noteGain);
    osc2.connect(noteGain);
    noteGain.connect(this.gainNode);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + duration + 1);
    osc2.stop(now + duration + 1);
  }

  public play() {
    this.initContext();
    this.isPlaying = true;
    this.step();
  }

  private step = () => {
    if (!this.isPlaying) return;

    const current = this.melodySequence[this.currentIndex];
    this.playTone(current.note, current.duration);

    this.currentIndex = (this.currentIndex + 1) % this.melodySequence.length;

    const nextDelay = current.duration * 950;
    this.timer = window.setTimeout(this.step, nextDelay);
  };

  public pause() {
    this.isPlaying = false;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }
}

export const pianoPlayer = new AmbientPianoPlayer();
