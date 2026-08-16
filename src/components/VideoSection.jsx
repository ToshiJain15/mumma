import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const VideoSection = () => {
  const { language } = useLanguage();
  const [envelopeOpen, setEnvelopeOpen] = useState(false);

  return (
    <div className="paper-section" style={{ background: 'linear-gradient(160deg, #F5EDD8 0%, #EDE3C8 100%)' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <div className="section-label">
          <span>🎬</span>
          <span className="label-caps" style={{ color: '#570013' }}>
            {language === 'hi' ? 'एक खास सरप्राइज़ 🎁' : 'A Special Surprise 🎁'}
          </span>
          <span>🎬</span>
        </div>
        <p className="font-hand" style={{ color: '#77574d', fontSize: '1.05rem', fontStyle: 'italic', marginTop: '6px' }}>
          {language === 'hi' ? '...इस लिफ़ाफे में एक प्यारा सा तोहफा है!' : '...there\'s a little surprise inside this envelope!'}
        </p>
      </div>

      {/* Vintage Craft Envelope */}
      <div style={{ maxWidth: '520px', margin: '0 auto' }}>
        {!envelopeOpen ? (
          /* Closed envelope */
          <div
            onClick={() => setEnvelopeOpen(true)}
            style={{
              position: 'relative',
              aspectRatio: '4/3',
              backgroundColor: '#EDE3C8',
              borderRadius: '8px',
              border: '2px solid rgba(184,134,11,0.4)',
              boxShadow: '0 12px 32px rgba(60,30,10,0.22)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: '12px',
              cursor: 'pointer',
              overflow: 'hidden',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.boxShadow = '0 18px 44px rgba(60,30,10,0.3)'; }}
            onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(60,30,10,0.22)'; }}
          >
            {/* Envelope flap triangles */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, height: '55%',
              background: '#DDD0AA',
              clipPath: 'polygon(0 100%, 50% 0, 100% 100%)',
            }} />
            <div style={{
              position: 'absolute', top: 0, left: 0, bottom: 0, width: '55%',
              background: '#D8CCA0',
              clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
            }} />
            <div style={{
              position: 'absolute', top: 0, right: 0, bottom: 0, width: '55%',
              background: '#D8CCA0',
              clipPath: 'polygon(100% 0, 0 50%, 100% 100%)',
            }} />
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '60%',
              background: '#E4D8B0',
              clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
            }} />

            {/* Wax seal */}
            <div style={{
              position: 'relative', zIndex: 10,
              width: '60px', height: '60px',
              borderRadius: '50%',
              background: 'radial-gradient(circle at 40% 35%, #8B0020, #570013)',
              border: '2.5px solid #B8860B',
              boxShadow: '0 6px 18px rgba(87,0,19,0.5)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.5rem',
            }}>
              🎬
            </div>

            <p className="label-caps" style={{ position: 'relative', zIndex: 10, color: '#570013', marginTop: '4px' }}>
              {language === 'hi' ? 'क्लिक करके खोलें' : 'Click to open'}
            </p>
          </div>
        ) : (
          /* Opened — show video */
          <div className="video-envelope" style={{ animation: 'fadeInUp 0.5s ease both' }}>
            <div style={{
              background: '#570013',
              padding: '10px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              <span style={{ fontSize: '1rem' }}>🎬</span>
              <span className="label-caps" style={{ color: '#FAF6EC', fontSize: '10px' }}>
                {language === 'hi' ? 'आपकी बेटी का सरप्राइज़ वीडियो' : 'A surprise from your daughter'}
              </span>
            </div>
            <video
              controls
              preload="metadata"
              style={{ width: '100%', display: 'block', maxHeight: '360px', objectFit: 'contain', background: '#000' }}
              poster="/assets/mother_daughter_quilling.jpg"
            >
              <source src="/assets/WhatsApp Video 2026-08-14 at 16.51.20.mp4" type="video/mp4" />
            </video>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default VideoSection;
