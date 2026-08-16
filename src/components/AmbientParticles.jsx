import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

// Floating petals & gold dust
const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  type: i % 3 === 0 ? 'petal' : 'gold',
  size: Math.random() * 7 + 4,
  left: Math.random() * 100,
  duration: 10 + Math.random() * 8,
  delay: Math.random() * 8,
  opacity: 0.4 + Math.random() * 0.35,
}));

const AmbientParticles = () => (
  <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9990, overflow: 'hidden' }}>
    {PARTICLES.map(p => (
      <div
        key={p.id}
        className={p.type === 'petal' ? 'rose-petal' : 'golden-particle'}
        style={{
          width: p.size,
          height: p.type === 'petal' ? p.size * 1.4 : p.size,
          left: `${p.left}%`,
          animationDuration: `${p.duration}s`,
          animationDelay: `${p.delay}s`,
          opacity: p.opacity,
          background: p.type === 'petal'
            ? `radial-gradient(circle, #F2C4C4 0%, #D4877A 100%)`
            : `radial-gradient(circle, #CCA730 0%, transparent 70%)`,
        }}
      />
    ))}
  </div>
);

export default AmbientParticles;
