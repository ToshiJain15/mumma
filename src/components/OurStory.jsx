import React from 'react';
import { useLanguage } from '../context/LanguageContext';

// "Our Story" — stitched thread connecting childhood memory with today
const OurStory = () => {
  const { language } = useLanguage();

  return (
    <div className="paper-section" style={{ background: 'linear-gradient(160deg, #F9F5F0 0%, #F5EDD8 100%)' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <div className="section-label">
          <span>🧵</span>
          <span className="label-caps" style={{ color: '#570013' }}>
            {language === 'hi' ? 'हमारी कहानी — माँ और बेटी' : 'Our Story — Maa & Daughter'}
          </span>
          <span>🧵</span>
        </div>
        <p className="font-hand" style={{ color: '#77574d', fontSize: '1.1rem', fontStyle: 'italic', marginTop: '6px' }}>
          {language === 'hi' ? 'प्यार के धागों से बुनी हुई कहानी...' : 'A story woven with threads of love...'}
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: 'clamp(24px, 4vw, 48px)',
        alignItems: 'start',
        maxWidth: '760px',
        margin: '0 auto',
        position: 'relative',
      }}>
        {/* Stitched connecting thread — desktop only */}
        <div style={{
          position: 'absolute',
          top: '40%',
          left: '25%',
          right: '25%',
          height: '2px',
          borderTop: '2px dashed rgba(107,66,38,0.35)',
          display: 'none',
          pointerEvents: 'none',
        }} className="story-thread" />

        {/* Memory 1: Childhood */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
          <div
            className="photo-polaroid photo-corners stitched-border"
            style={{
              transform: 'rotate(2.5deg)',
              maxWidth: '240px',
              width: '100%',
              borderColor: 'rgba(107,66,38,0.35)',
            }}
          >
            <div className="washi washi-stripe-gold" style={{ width: 70, top: -9, left: '30%', transform: 'translateX(-50%) rotate(-10deg)' }} />
            <img
              src="assets/mother_daughter_braid.jpg"
              alt="Childhood memory"
              style={{ aspectRatio: '1/1', objectFit: 'cover' }}
            />
            <div className="polaroid-caption" style={{ fontSize: '0.8rem' }}>
              {language === 'hi' ? '🎀 माँ की चोटी...' : '🎀 Morning braids...'}
            </div>
          </div>

          <div style={{
            background: '#FFFDF7',
            border: '1.5px solid rgba(184,134,11,0.3)',
            borderRadius: '6px',
            padding: '14px 16px',
            maxWidth: '240px',
            transform: 'rotate(-1deg)',
            boxShadow: '2px 4px 12px rgba(60,30,10,0.1)',
          }}>
            <p className="font-hand" style={{ color: '#570013', fontSize: '1rem', fontWeight: 700, lineHeight: 1.55 }}>
              {language === 'hi'
                ? '"बचपन में हर कदम पर माँ का हाथ थामे रहती थी..."'
                : '"Always holding my hand through every first step..."'}
            </p>
          </div>
        </div>

        {/* Memory 2: Today */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', marginTop: '24px' }}>
          <div
            className="photo-polaroid photo-corners"
            style={{ transform: 'rotate(-2deg)', maxWidth: '240px', width: '100%' }}
          >
            <div className="washi washi-stripe-rose" style={{ width: 70, bottom: -9, right: '25%', transform: 'translateX(50%) rotate(8deg)' }} />
            <img
              src="assets/mother_daughter_chai.jpg"
              alt="Chai together"
              style={{ aspectRatio: '1/1', objectFit: 'cover' }}
            />
            <div className="polaroid-caption" style={{ fontSize: '0.8rem' }}>
              {language === 'hi' ? '☕ शाम की चाय और बातें...' : '☕ Evening chai & stories...'}
            </div>
          </div>

          <div style={{
            background: '#FFFDF7',
            border: '1.5px solid rgba(184,134,11,0.3)',
            borderRadius: '6px',
            padding: '14px 16px',
            maxWidth: '240px',
            transform: 'rotate(1.2deg)',
            boxShadow: '2px 4px 12px rgba(60,30,10,0.1)',
          }}>
            <p className="font-hand" style={{ color: '#570013', fontSize: '1rem', fontWeight: 700, lineHeight: 1.55 }}>
              {language === 'hi'
                ? '"...और आज भी आप हमारी सबसे बड़ी ताक़त हैं।"'
                : '"...and still, today, my greatest strength."'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
