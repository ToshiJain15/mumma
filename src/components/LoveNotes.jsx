import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const notes = [
  {
    emoji: '😊',
    titleHi: 'आपकी प्यारी मुस्कान',
    titleEn: 'Your Gentle Smile',
    bodyHi: 'जब आप मुस्कुराती हैं, तो पूरा घर रोशन हो जाता है। वह मुस्कान हमारे दिल की सबसे बड़ी दौलत है।',
    bodyEn: 'When you smile, the whole house lights up. That smile is the greatest treasure of our hearts.',
    rotate: '-1.5deg',
    bg: '#FFFBF0',
  },
  {
    emoji: '🍲',
    titleHi: 'आपके हाथ का जादू',
    titleEn: 'Your Magical Cooking',
    bodyHi: 'आपके हाथ से बना खाना दुनिया की सबसे मीठी चीज़ है — हर कौर में प्यार और देखभाल होती है।',
    bodyEn: 'Food from your hands is the sweetest thing in the world — every bite holds your love and care.',
    rotate: '1deg',
    bg: '#FFF8F0',
  },
  {
    emoji: '🤗',
    titleHi: 'आपकी निस्वार्थ फ़िक्र',
    titleEn: 'Your Selfless Care',
    bodyHi: 'आप हमेशा हमारे बारे में पहले सोचती हैं — खुद से पहले। इस ममता का कोई मोल नहीं।',
    bodyEn: 'You always think of us first — before yourself. This love is beyond all measure.',
    rotate: '-2deg',
    bg: '#FFF5F5',
  },
  {
    emoji: '🏡',
    titleHi: 'घर का मज़बूत सहारा',
    titleEn: 'The Heart of Our Home',
    bodyHi: 'आप नहीं होतीं तो यह घर बस दीवारें होतीं। आपसे ही यह घर — घर बनता है।',
    bodyEn: 'Without you, this would just be walls. You are what makes this house a home.',
    rotate: '1.8deg',
    bg: '#F5F0FF',
  },
];

const LoveNotes = () => {
  const { language } = useLanguage();
  const [open, setOpen] = useState(null);

  return (
    <div className="paper-section">
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '28px' }}>
        <div className="section-label">
          <span>💌</span>
          <span className="label-caps" style={{ color: '#570013' }}>
            {language === 'hi' ? 'माँ के बारे में छोटी-छोटी बातें' : 'Little Things About Maa'}
          </span>
          <span>💌</span>
        </div>
      </div>

      {/* Note cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '20px',
        maxWidth: '780px',
        margin: '0 auto',
      }}>
        {notes.map((note, i) => (
          <div
            key={i}
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              background: note.bg,
              borderRadius: '8px',
              border: '1.5px dashed rgba(107,66,38,0.35)',
              padding: '20px',
              position: 'relative',
              transform: `rotate(${note.rotate})`,
              boxShadow: open === i
                ? '0 16px 40px rgba(60,30,10,0.2)'
                : '2px 4px 14px rgba(60,30,10,0.12)',
              cursor: 'pointer',
              transition: 'transform 0.35s ease, box-shadow 0.35s ease',
              transformOrigin: 'center center',
            }}
          >
            {/* Tag label */}
            <div style={{
              position: 'absolute', top: '-10px', left: '14px',
              background: '#570013', color: '#FAF6EC',
              fontSize: '9px', fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              fontFamily: 'Montserrat, sans-serif',
              padding: '2px 10px', borderRadius: '3px',
            }}>
              {language === 'hi' ? 'कारण' : 'reason'} {i + 1}
            </div>

            {/* Emoji */}
            <div style={{ fontSize: '2rem', marginBottom: '8px', textAlign: 'center' }}>{note.emoji}</div>

            {/* Title */}
            <h3
              className={language === 'hi' ? 'font-hindi' : 'font-display'}
              style={{
                color: '#570013',
                fontSize: 'clamp(1.1rem, 3.5vw, 1.35rem)',
                fontWeight: 700,
                textAlign: 'center',
                marginBottom: open === i ? '12px' : '0',
                lineHeight: 1.3,
              }}
            >
              {language === 'hi' ? note.titleHi : note.titleEn}
            </h3>

            {/* Expanded body */}
            <div style={{
              maxHeight: open === i ? '200px' : '0',
              overflow: 'hidden',
              transition: 'max-height 0.45s ease',
            }}>
              <p className="font-hand" style={{
                color: '#6B4226',
                fontSize: '1rem',
                lineHeight: 1.65,
                textAlign: 'center',
                fontWeight: 600,
                paddingTop: '4px',
              }}>
                {language === 'hi' ? note.bodyHi : note.bodyEn}
              </p>
            </div>

            {/* Expand hint */}
            <p style={{
              textAlign: 'center',
              fontSize: '0.7rem',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 600,
              color: '#B8860B',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginTop: '10px',
              opacity: open === i ? 0 : 1,
              transition: 'opacity 0.3s',
            }}>
              {language === 'hi' ? '✦ टैप करें' : '✦ tap to open'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoveNotes;
