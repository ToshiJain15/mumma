import React from 'react';
import { useLanguage } from '../context/LanguageContext';

// Photos displayed like a real scrapbook page with rotated polaroids, washi tape, and handwritten captions
const photos = [
  { src: '/assets/DSC_9568.JPG',            captionHi: 'रोशन मुस्कान 🌸',         captionEn: 'Radiant Smile 🌸',      rotate: 2,    tag: 'दिवाली' },
  { src: '/assets/IMG-20260104-WA0123.jpg', captionHi: 'परिवार की खुशियाँ 💕',    captionEn: 'Family Joy 💕',          rotate: -1.5, tag: 'जश्न' },
  { src: '/assets/IMG-20260104-WA0133.jpg', captionHi: 'हँसी और प्यार 🥰',       captionEn: 'Laughter & Love 🥰',     rotate: 2.8,  tag: 'साथ' },
  { src: '/assets/IMG_20230923_224856.jpg', captionHi: 'अनमोल पल ✨',            captionEn: 'Precious Moments ✨',    rotate: -2.2, tag: 'यादें' },
  { src: '/assets/IMG-20250511-WA0065.jpg', captionHi: 'प्यार और सुकून 💛',      captionEn: 'Warmth & Love 💛',       rotate: 1.8,  tag: 'हमेशा' },
  { src: '/assets/Snapchat-1583182582.jpg', captionHi: 'हमारी माँ — हमारी दुनिया 🌍', captionEn: 'Our world 🌍',   rotate: -1,   tag: 'माँ' },
];

const washiTypes = ['washi-stripe-gold', 'washi-stripe-rose', 'washi-stripe-gold'];

const PhotoAlbum = () => {
  const { language } = useLanguage();

  const triggerBurst = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    for (let i = 0; i < 16; i++) {
      const el = document.createElement('div');
      el.style.cssText = `position:fixed;left:${cx}px;top:${cy}px;width:7px;height:7px;border-radius:50%;background:radial-gradient(#CCA730,transparent);pointer-events:none;z-index:9999;transition:all 0.75s cubic-bezier(.1,.8,.3,1)`;
      document.body.appendChild(el);
      void el.offsetWidth;
      const angle = (Math.PI * 2 * i) / 16;
      const dist = 50 + Math.random() * 70;
      el.style.transform = `translate(${Math.cos(angle)*dist}px,${Math.sin(angle)*dist}px) scale(0)`;
      el.style.opacity = '0';
      setTimeout(() => el.remove(), 800);
    }
  };

  return (
    <div className="paper-section">
      {/* Section header */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <div className="section-label" style={{ marginBottom: '8px' }}>
          <span>📸</span>
          <span className="label-caps" style={{ color: '#570013' }}>
            {language === 'hi' ? 'हमारी खूबसूरत यादें' : 'Our Beautiful Memories'}
          </span>
          <span>📸</span>
        </div>
        <p className="font-hand" style={{ color: '#77574d', fontSize: '1.1rem', fontStyle: 'italic' }}>
          {language === 'hi' ? 'वे पल जो हमेशा दिल में रहेंगे...' : 'Moments that will live forever in our hearts...'}
        </p>
      </div>

      {/* Polaroid grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
        gap: '24px',
        maxWidth: '780px',
        margin: '0 auto 36px',
      }}>
        {photos.map((p, i) => (
          <div
            key={i}
            onClick={triggerBurst}
            className="photo-polaroid photo-corners"
            style={{
              transform: `rotate(${p.rotate}deg)`,
              cursor: 'pointer',
              position: 'relative',
            }}
          >
            {/* Washi tape */}
            <div
              className={`washi ${washiTypes[i % washiTypes.length]}`}
              style={{
                width: '60px',
                top: i % 2 === 0 ? '-9px' : undefined,
                bottom: i % 2 === 1 ? '-9px' : undefined,
                left: '50%',
                transform: `translateX(-50%) rotate(${i % 2 === 0 ? -8 : 6}deg)`,
              }}
            />
            <img src={p.src} alt={p.captionEn} style={{ aspectRatio: '1/1', objectFit: 'cover' }} />
            {/* Tag stamp */}
            <div style={{
              position: 'absolute',
              top: '8px', right: '8px',
              background: '#570013',
              color: '#FAF6EC',
              fontSize: '8px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              fontFamily: 'Montserrat, sans-serif',
              padding: '2px 6px',
              borderRadius: '3px',
              textTransform: 'uppercase',
            }}>
              {p.tag}
            </div>
            <div className="polaroid-caption">
              {language === 'hi' ? p.captionHi : p.captionEn}
            </div>
          </div>
        ))}
      </div>

      {/* Pull-tab secret message */}
      <PullTab language={language} />
    </div>
  );
};

const PullTab = ({ language }) => {
  const [revealed, setRevealed] = React.useState(false);

  return (
    <div className="pull-tab-wrap" style={{ maxWidth: '480px', margin: '0 auto' }}>
      <button className="pull-tab-btn" onClick={() => setRevealed(!revealed)}>
        {revealed
          ? (language === 'hi' ? '✦ छुपाएं ✦' : '✦ Hide ✦')
          : (language === 'hi' ? '💌 एक प्यारा राज़ खोलें (Pull)' : '💌 Pull to reveal a secret')}
      </button>
      <div className={`pull-tab-content ${revealed ? 'revealed' : ''}`}>
        <p className="font-hand" style={{
          textAlign: 'center',
          color: '#570013',
          fontSize: 'clamp(1.1rem, 3.5vw, 1.45rem)',
          fontWeight: 700,
          lineHeight: 1.6,
        }}>
          {language === 'hi'
            ? '"माँ, आपके चेहरे की यह मुस्कान ही हमारी दुनिया की सबसे बड़ी दौलत है! सदा खुश रहिए, सदा मुस्कुराती रहिए।" 💛'
            : '"Maa, your smile is the greatest treasure in our whole world. May you always shine bright!" 💛'}
        </p>
      </div>
    </div>
  );
};

export default PhotoAlbum;
