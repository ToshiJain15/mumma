import React from 'react';
import { useLanguage } from '../context/LanguageContext';

// Archies-style inside verse on a parchment slip
const InsideVerse = () => {
  const { language } = useLanguage();

  return (
    <div className="paper-section" style={{ background: 'linear-gradient(160deg, #F5EDD8 0%, #EDE3C8 100%)' }}>
      {/* Decorative top floral row */}
      <div style={{ textAlign: 'center', fontSize: '1.6rem', letterSpacing: '6px', marginBottom: '20px', userSelect: 'none' }}>
        🌺 🌸 🌼 🌸 🌺
      </div>

      {/* Parchment insert */}
      <div style={{
        maxWidth: '620px',
        margin: '0 auto',
        backgroundColor: '#FFFDF7',
        borderRadius: '10px',
        padding: 'clamp(24px, 5vw, 40px)',
        boxShadow: '0 12px 36px rgba(60,30,10,0.14), inset 0 1px 0 rgba(255,255,255,0.9)',
        border: '1.5px solid rgba(184,134,11,0.45)',
        position: 'relative',
        textAlign: 'center',
      }}>
        {/* Gold corner filigrees */}
        {[['top','left'],['top','right'],['bottom','left'],['bottom','right']].map(([v,h]) => (
          <div key={`${v}${h}`} style={{
            position: 'absolute',
            [v]: '10px', [h]: '10px',
            width: '20px', height: '20px',
            borderTop: v === 'top' ? '2px solid #B8860B' : 'none',
            borderBottom: v === 'bottom' ? '2px solid #B8860B' : 'none',
            borderLeft: h === 'left' ? '2px solid #B8860B' : 'none',
            borderRight: h === 'right' ? '2px solid #B8860B' : 'none',
          }} />
        ))}

        {/* Heading */}
        <div className="label-caps" style={{ color: '#B8860B', marginBottom: '14px', letterSpacing: '0.18em' }}>
          ✦ {language === 'hi' ? 'दिल से लिखी कविता' : 'A verse from the heart'} ✦
        </div>

        <h2
          className={language === 'hi' ? 'font-hindi' : 'font-display'}
          style={{
            fontSize: 'clamp(1.9rem, 5vw, 2.6rem)',
            color: '#570013',
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: '20px',
          }}
        >
          {language === 'hi' ? 'मेरी प्यारी माँ के नाम 🌸' : 'For My Wonderful Mom 🌸'}
        </h2>

        {/* Poetry */}
        {language === 'hi' ? (
          <div className="font-hand" style={{ fontSize: 'clamp(1.2rem, 4vw, 1.55rem)', color: '#570013', lineHeight: 1.85, fontWeight: 700 }}>
            <p style={{ marginBottom: '14px' }}>
              "आप ममता की मूरत हैं, दया और प्यार का सागर हैं...<br />
              आपने हमेशा हमारी बात सुनी, राह दिखाई और हर दर्द को संभाला।"
            </p>
            <p style={{ color: '#77574d', marginBottom: '18px', fontStyle: 'italic' }}>
              "ज़िंदगी के हर तूफ़ान में, आपका प्यार ही हमारा सबसे मज़बूत सहारा रहा।"
            </p>
            <p style={{ color: '#570013', textDecoration: 'underline wavy #CCA730', textUnderlineOffset: '5px', fontSize: '1.1em' }}>
              दुनिया की सबसे प्यारी माँ को जन्मदिन की ढेरों शुभकामनाएँ! 🎂✨
            </p>
          </div>
        ) : (
          <div className="font-serif" style={{ fontSize: 'clamp(1.2rem, 4vw, 1.55rem)', color: '#570013', lineHeight: 1.7, fontStyle: 'italic', fontWeight: 600 }}>
            <p style={{ marginBottom: '14px' }}>
              "You are loving and kind, caring and warm...<br />
              You always find the time to listen, to guide, and to heal."
            </p>
            <p style={{ color: '#77574d', marginBottom: '18px' }}>
              "Through every storm, your love has been my safest anchor."
            </p>
            <p style={{ textDecoration: 'underline wavy #CCA730', textUnderlineOffset: '5px' }}>
              Wishing the most wonderful Mother a beautiful Birthday! 🎂✨
            </p>
          </div>
        )}

        {/* Signature */}
        <div className="floral-divider" style={{ maxWidth: '200px', margin: '20px auto 0' }}>
          <div className="floral-divider-line" />
          <span style={{ color: '#B8860B', fontSize: '0.85rem' }}>✿</span>
          <div className="floral-divider-line" />
        </div>
        <p className="font-hand" style={{ color: '#6B4226', fontSize: '1.05rem', marginTop: '10px', fontWeight: 700 }}>
          {language === 'hi' ? '— आपकी बेटी की तरफ से 💕' : '— Your daughter, with love 💕'}
        </p>
      </div>

      {/* Bottom florals */}
      <div style={{ textAlign: 'center', fontSize: '1.6rem', letterSpacing: '6px', marginTop: '20px', userSelect: 'none' }}>
        🌼 🌸 🌺 🌸 🌼
      </div>
    </div>
  );
};

export default InsideVerse;
