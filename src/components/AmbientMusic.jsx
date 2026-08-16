import React, { useState, useRef } from 'react';

// Plays a simple acoustic Happy Birthday using Web Audio API
function playHappyBirthday(ctx) {
  const notes = [
    [261.63,0.4],[261.63,0.2],[293.66,0.6],[261.63,0.6],[349.23,0.6],[329.63,1.2],
    [261.63,0.4],[261.63,0.2],[293.66,0.6],[261.63,0.6],[392.00,0.6],[349.23,1.2],
    [261.63,0.4],[261.63,0.2],[523.25,0.6],[440.00,0.6],[349.23,0.6],[329.63,0.6],[293.66,1.0],
    [466.16,0.4],[466.16,0.2],[440.00,0.6],[349.23,0.6],[392.00,0.6],[349.23,1.4],
  ];

  let t = ctx.currentTime;
  notes.forEach(([freq, dur]) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, t);
    gain.gain.setValueAtTime(0.18, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + dur * 0.95);
    osc.start(t);
    osc.stop(t + dur);
    t += dur * 0.62;
  });
}

const AmbientMusic = () => {
  const [playing, setPlaying] = useState(false);
  const ctxRef = useRef(null);

  const toggle = () => {
    if (!playing) {
      ctxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      playHappyBirthday(ctxRef.current);
      setPlaying(true);
      setTimeout(() => setPlaying(false), 14000);
    } else {
      ctxRef.current?.close();
      setPlaying(false);
    }
  };

  return (
    <button
      className="floating-control floating-control-left"
      onClick={toggle}
      aria-label="Toggle music"
      style={{ bottom: '20px', left: '16px' }}
    >
      {playing ? '🎵 Playing...' : '🎶 Play Music'}
    </button>
  );
};

export default AmbientMusic;
