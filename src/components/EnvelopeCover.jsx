import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

// Handmade paper envelope with wax seal
// Clicking the wax seal opens the flap; card rises up; "Begin" button appears
const EnvelopeCover = ({ onOpen }) => {
  const { language } = useLanguage();
  const [state, setState] = useState('sealed'); // sealed | open | exiting

  const handleSeal = () => {
    if (state !== 'sealed') return;
    setState('open');
  };

  const handleBegin = () => {
    setState('exiting');
    setTimeout(() => onOpen(), 700);
  };

  if (state === 'exiting') {
    return (
      <div style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'radial-gradient(ellipse at 50% 35%, #3D2010 0%, #1E0D04 70%)',
        opacity: 0, animation: 'none',
        transition: 'opacity 0.7s ease',
      }} />
    );
  }

  return (
    <div className="envelope-scene" style={{ opacity: state === 'exiting' ? 0 : 1, transition: 'opacity 0.7s ease' }}>
      {/* Ambient bokeh lights */}
      {[...Array(6)].map((_, i) => (
        <div key={i} style={{
          position: 'absolute',
          width: `${50 + i * 30}px`, height: `${50 + i * 30}px`,
          borderRadius: '50%',
          background: `radial-gradient(circle, rgba(200,160,50,0.12) 0%, transparent 70%)`,
          left: `${10 + i * 15}%`, top: `${20 + (i % 3) * 25}%`,
          pointerEvents: 'none',
          animation: `float-up ${8 + i * 2}s ease-in-out infinite`,
          animationDelay: `${i * 1.2}s`,
        }} />
      ))}

      {/* Envelope */}
      <div className="envelope-wrapper">
        {/* Back body */}
        <div className="envelope-back" />

        {/* Inner card (rises up on open) */}
        <div className={`envelope-inner-card ${state === 'open' ? 'is-open' : ''}`}>
          {/* Gold flower motif */}
          <div style={{ fontSize: '2.2rem', marginBottom: '10px', userSelect: 'none' }}>🌸</div>

          <h1
            className={language === 'hi' ? 'font-hindi' : 'font-display'}
            style={{
              fontSize: 'clamp(1.8rem, 6vw, 2.4rem)',
              color: '#570013',
              fontWeight: 700,
              marginBottom: '8px',
              lineHeight: 1.2,
            }}
          >
            {language === 'hi' ? 'माँ के लिए ❤️' : 'For Maa ❤️'}
          </h1>

          <p
            className={language === 'hi' ? 'font-hand' : 'font-serif'}
            style={{
              fontSize: 'clamp(1rem, 3.5vw, 1.2rem)',
              color: '#6B4226',
              fontStyle: 'italic',
              marginBottom: '20px',
              lineHeight: 1.5,
              maxWidth: '280px',
            }}
          >
            {language === 'hi'
              ? 'आपके लिए एक छोटा सा प्यार भरा सरप्राइज़...'
              : 'A little surprise, made with love...'}
          </p>

          {state === 'open' && (
            <button
              onClick={handleBegin}
              style={{
                background: 'linear-gradient(135deg, #570013, #800020)',
                color: '#FAF6EC',
                border: '1.5px solid #B8860B',
                borderRadius: '6px',
                padding: '12px 28px',
                fontSize: '0.9rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                fontFamily: 'Montserrat, sans-serif',
                cursor: 'pointer',
                boxShadow: '0 6px 20px rgba(87,0,19,0.45)',
                display: 'flex', alignItems: 'center', gap: '8px',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                animation: 'fadeInUp 0.5s ease both',
              }}
              onMouseOver={e => e.currentTarget.style.transform = 'scale(1.04)'}
              onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              {language === 'hi' ? 'कार्ड खोलें ✨' : 'Open the Card ✨'}
            </button>
          )}
        </div>

        {/* Side flaps */}
        <div className="flap-left" />
        <div className="flap-right" />
        <div className="flap-bottom" />

        {/* Top flap */}
        <div className={`flap-top ${state === 'open' ? 'is-open' : ''}`} />

        {/* Wax seal */}
        {state === 'sealed' && (
          <button
            className="wax-seal"
            onClick={handleSeal}
            aria-label="Open envelope"
          >
            <span style={{ fontSize: '1.5rem' }}>❤</span>
          </button>
        )}
      </div>

      {/* Instruction hint */}
      {state === 'sealed' && (
        <p style={{
          position: 'absolute',
          bottom: '30px',
          color: 'rgba(240,225,180,0.55)',
          fontSize: '0.78rem',
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 600,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          textAlign: 'center',
        }}>
          {language === 'hi' ? '❤ सील पर क्लिक करें' : '❤ Click the seal to open'}
        </p>
      )}

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default EnvelopeCover;
