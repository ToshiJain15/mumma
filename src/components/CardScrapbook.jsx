import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Camera, X, Heart } from 'lucide-react';

const memoriesData = [
  {
    id: 1,
    src: '/assets/IMG-20260104-WA0123.jpg',
    captionEn: 'Cherished Family Moments',
    captionHi: 'परिवार के साथ अनमोल पल',
    rotate: -2.5
  },
  {
    id: 2,
    src: '/assets/DSC_9568.JPG',
    captionEn: 'Your Grace & Radiant Smile',
    captionHi: 'आपकी प्यारी सी मुस्कान',
    rotate: 2
  },
  {
    id: 3,
    src: '/assets/IMG-20260104-WA0133.jpg',
    captionEn: 'Laughter & Warmth Together',
    captionHi: 'साथ में ढेर सारी खुशियाँ',
    rotate: -1.8
  },
  {
    id: 4,
    src: '/assets/IMG_20230923_224856.jpg',
    captionEn: 'Every Memory with You is Gold',
    captionHi: 'हर लम्हा खास है आपके साथ',
    rotate: 2.2
  },
  {
    id: 5,
    src: '/assets/IMG-20250511-WA0065.jpg',
    captionEn: 'Endless Love & Blessings',
    captionHi: 'आपका प्यार और आशीर्वाद',
    rotate: -1.5
  },
  {
    id: 6,
    src: '/assets/20230514_090841-COLLAGE.jpg',
    captionEn: 'A Lifetime of Beautiful Memories',
    captionHi: 'यादों का प्यारा सा गुलदस्ता',
    rotate: 1.8
  }
];

const CardScrapbook = () => {
  const { language } = useLanguage();
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section style={{ padding: 'clamp(28px, 6vw, 48px) clamp(16px, 5vw, 36px)', borderTop: '1px dashed rgba(212, 175, 55, 0.3)' }}>
      {/* Section Title */}
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          color: 'var(--gold-dark)',
          marginBottom: '8px'
        }}>
          <Camera size={16} color="#D4AF37" />
          <span 
            className={language === 'hi' ? 'font-hindi' : 'font-serif'}
            style={{ fontSize: '0.85rem', letterSpacing: '0.12em', fontWeight: 600 }}
          >
            {language === 'hi' ? 'यादों का एल्बम' : 'KEEPSAKE ALBUM'}
          </span>
        </div>

        <h2 
          className={language === 'hi' ? 'font-hindi' : 'font-serif'}
          style={{
            fontSize: 'clamp(2rem, 5.5vw, 2.8rem)',
            color: 'var(--wine-deep)',
            marginBottom: '10px',
            fontWeight: 700
          }}
        >
          {language === 'hi' ? 'अनमोल यादें' : 'Beautiful Memories'}
        </h2>

        <p 
          className={language === 'hi' ? 'font-hindi' : 'font-cormorant'}
          style={{
            fontSize: '1.1rem',
            color: 'var(--text-muted)',
            fontStyle: language === 'en' ? 'italic' : 'normal'
          }}
        >
          {language === 'hi' 
            ? 'हर तस्वीर में आपकी ममता और हमारी खुशियों की कहानी है' 
            : 'Every photograph carries your love and our happiest moments'}
        </p>
      </div>

      {/* Scrapbook Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: 'clamp(24px, 4vw, 32px)',
        alignItems: 'start'
      }}>
        {memoriesData.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            onClick={() => setSelectedPhoto(item)}
            className="polaroid-frame"
            style={{
              transform: `rotate(${item.rotate}deg)`,
              cursor: 'pointer'
            }}
          >
            {/* Washi Tape */}
            <div className="washi-tape" />

            {/* Photo Container */}
            <div style={{
              overflow: 'hidden',
              borderRadius: '2px',
              backgroundColor: '#F5F0E6',
              aspectRatio: '4/3',
              marginBottom: '12px'
            }}>
              <img 
                src={item.src} 
                alt={language === 'hi' ? item.captionHi : item.captionEn}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>

            {/* Caption */}
            <p 
              className={language === 'hi' ? 'font-hindi' : 'font-script'}
              style={{
                fontSize: language === 'hi' ? '0.95rem' : '1.35rem',
                color: 'var(--wine-deep)',
                textAlign: 'center',
                lineHeight: 1.3,
                fontWeight: language === 'hi' ? 600 : 400
              }}
            >
              {language === 'hi' ? item.captionHi : item.captionEn}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Lightbox / Zoom Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 2000,
              backgroundColor: 'rgba(20, 5, 8, 0.88)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px'
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '650px',
                width: '100%',
                backgroundColor: '#FFFFFF',
                padding: '16px 16px 24px 16px',
                borderRadius: '8px',
                boxShadow: '0 30px 70px rgba(0,0,0,0.6)',
                position: 'relative'
              }}
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'rgba(0,0,0,0.6)',
                  color: '#fff',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 10
                }}
                aria-label="Close"
              >
                <X size={18} />
              </button>

              <img 
                src={selectedPhoto.src} 
                alt="Enlarged memory"
                style={{
                  width: '100%',
                  maxHeight: '75vh',
                  objectFit: 'contain',
                  borderRadius: '4px',
                  marginBottom: '16px'
                }}
              />

              <div style={{ textAlign: 'center' }}>
                <p 
                  className={language === 'hi' ? 'font-hindi' : 'font-serif'}
                  style={{
                    fontSize: '1.2rem',
                    color: 'var(--wine-deep)',
                    fontWeight: 600
                  }}
                >
                  {language === 'hi' ? selectedPhoto.captionHi : selectedPhoto.captionEn}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CardScrapbook;
