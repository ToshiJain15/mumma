import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

// Beautiful birthday finale — golden particles, final big photo, closing blessing
const Finale = ({ onRestart }) => {
  const { language } = useLanguage();
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate floating finale particles
    setParticles(
      Array.from({ length: 24 }, (_, i) => ({
        id: i,
        type: i % 3 === 0 ? 'petal' : 'gold',
        size: 6 + Math.random() * 8,
        left: Math.random() * 100,
        delay: Math.random() * 3,
        duration: 5 + Math.random() * 6,
      }))
    );
  }, []);

  return (
    <div className="finale-section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Finale ambient particles */}
      {particles.map(p => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            width: p.size, height: p.size,
            left: `${p.left}%`,
            borderRadius: p.type === 'petal' ? '50% 0 50% 0' : '50%',
            background: p.type === 'petal'
              ? 'radial-gradient(circle, #F2C4C4, #D4877A)'
              : 'radial-gradient(circle, #CCA730, transparent)',
            animation: `float-up ${p.duration}s linear ${p.delay}s infinite`,
            opacity: 0.6,
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* Top floral row */}
      <div style={{ fontSize: '1.8rem', letterSpacing: '8px', marginBottom: '28px', userSelect: 'none' }}>
        🌸 🌺 🌼 🌺 🌸
      </div>

      {/* Final big greeting */}
      <h1
        className={`font-display shimmer-text`}
        style={{
          fontSize: 'clamp(2.8rem, 8vw, 5rem)',
          lineHeight: 1.1,
          fontWeight: 800,
          marginBottom: '12px',
          letterSpacing: '-0.01em',
          textAlign: 'center',
        }}
      >
        {language === 'hi' ? 'जन्मदिन मुबारक हो, माँ! ❤️' : 'Happy Birthday, Maa! ❤️'}
      </h1>

      {/* Hindi subtitle */}
      <p
        className="font-hindi"
        style={{
          fontSize: 'clamp(1.2rem, 4vw, 1.8rem)',
          color: '#77574d',
          lineHeight: 1.65,
          marginBottom: '28px',
          textAlign: 'center',
          maxWidth: '520px',
          margin: '0 auto 28px',
          fontWeight: 600,
        }}
      >
        आप हमारी ज़िंदगी की सबसे खूबसूरत इबारत हैं।<br />
        हम आपसे बेहद प्यार करते हैं। 🌸
      </p>

      {/* Final photo — Maa's best portrait */}
      <div
        className="photo-polaroid"
        style={{
          maxWidth: '300px',
          margin: '0 auto 32px',
          transform: 'rotate(-1deg)',
          boxShadow: '0 20px 60px rgba(60,30,10,0.35)',
          animation: 'riseUp 0.8s cubic-bezier(0.34,1.56,0.64,1) both',
        }}
      >
        <img
          src="assets/DSC_5144.JPG"
          alt="Maa"
          style={{ aspectRatio: '4/5', objectFit: 'cover' }}
        />
        <div className="polaroid-caption" style={{ fontSize: '1.1rem' }}>
          {language === 'hi' ? '💕 सबसे प्यारी माँ' : '💕 The most wonderful Maa'}
        </div>
      </div>

      {/* Daughter's final message */}
      <div style={{
        maxWidth: '480px',
        margin: '0 auto 32px',
        padding: '20px 24px',
        background: '#FFFDF7',
        border: '1.5px dashed rgba(184,134,11,0.45)',
        borderRadius: '8px',
        boxShadow: '2px 4px 16px rgba(60,30,10,0.1)',
        textAlign: 'center',
      }}>
        <p className="font-hand" style={{
          color: '#570013',
          fontSize: 'clamp(1.1rem, 3.8vw, 1.4rem)',
          fontWeight: 700,
          lineHeight: 1.65,
        }}>
          {language === 'hi'
            ? '"माँ, आपका साया हमारी ज़िंदगी का सबसे बड़ा आशीर्वाद है। आप हमेशा खुश रहें, स्वस्थ रहें और मुस्कुराती रहें।" 💛'
            : '"Maa, your presence is the greatest blessing of my life. May you always be happy, healthy, and smiling." 💛'}
        </p>
        <div className="floral-divider" style={{ maxWidth: '160px', margin: '16px auto 0' }}>
          <div className="floral-divider-line" />
          <span style={{ color: '#B8860B' }}>✿</span>
          <div className="floral-divider-line" />
        </div>
        <p className="font-hand" style={{ color: '#B8860B', fontWeight: 700, fontSize: '0.95rem', marginTop: '8px' }}>
          {language === 'hi' ? '— आपकी बेटी, ढेर सारे प्यार के साथ 🌸' : '— Your daughter, with all her love 🌸'}
        </p>
      </div>

      {/* Bottom florals */}
      <div style={{ fontSize: '2rem', letterSpacing: '8px', marginBottom: '28px', userSelect: 'none' }}>
        🌺 🌸 ❤️ 🌸 🌺
      </div>

      {/* Restart button */}
      <button
        onClick={onRestart}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '12px 28px',
          background: 'transparent',
          border: '2px dashed #570013',
          borderRadius: '6px',
          color: '#570013',
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 700,
          fontSize: '0.85rem',
          letterSpacing: '0.12em',
          cursor: 'pointer',
          textTransform: 'uppercase',
          transition: 'background 0.3s ease, color 0.3s ease',
        }}
        onMouseOver={e => { e.currentTarget.style.background = '#570013'; e.currentTarget.style.color = '#FAF6EC'; }}
        onMouseOut={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#570013'; }}
      >
        ↩ {language === 'hi' ? 'शुरू से देखें' : 'Start Again'}
      </button>

      <style>{`
        @keyframes riseUp {
          from { opacity: 0; transform: translateY(28px) rotate(-1deg); }
          to   { opacity: 1; transform: translateY(0) rotate(-1deg); }
        }
      `}</style>
    </div>
  );
};

export default Finale;
