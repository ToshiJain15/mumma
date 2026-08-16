import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Camera, X, Heart, Sparkles, Pin } from 'lucide-react';

const memoriesData = [
  {
    id: 1,
    src: 'assets/IMG-20260104-WA0123.jpg',
    captionEn: 'Precious Moments with Family',
    captionHi: 'परिवार के साथ हँसते-खिलखिलाते पल',
    rotate: -2.8,
    tapeClass: 'washi-strip-pink'
  },
  {
    id: 2,
    src: 'assets/DSC_9568.JPG',
    captionEn: 'Your Gentle & Radiant Smile',
    captionHi: 'आपकी प्यारी सी खिली हुई मुस्कान',
    rotate: 2.2,
    tapeClass: 'washi-strip-green'
  },
  {
    id: 3,
    src: 'assets/IMG-20260104-WA0133.jpg',
    captionEn: 'Laughter, Fun & Boundless Love',
    captionHi: 'ढेर सारा प्यार और खुशियाँ',
    rotate: -1.8,
    tapeClass: 'washi-strip-yellow'
  },
  {
    id: 4,
    src: 'assets/IMG_20230923_224856.jpg',
    captionEn: 'Memories That Warm Our Hearts',
    captionHi: 'हर लम्हा खास है आपके साथ',
    rotate: 2.5,
    tapeClass: 'washi-strip-pink'
  },
  {
    id: 5,
    src: 'assets/IMG-20250511-WA0065.jpg',
    captionEn: 'Surrounded by Love & Blessings',
    captionHi: 'आपका असीम प्यार और ममता',
    rotate: -2.4,
    tapeClass: 'washi-strip-green'
  },
  {
    id: 6,
    src: 'assets/20230514_090841-COLLAGE.jpg',
    captionEn: 'A Scrapbook of Lifelong Love',
    captionHi: 'यादों का एक प्यारा सा गुलदस्ता',
    rotate: 1.8,
    tapeClass: 'washi-strip-yellow'
  }
];

const HandmadeScrapbook = () => {
  const { language } = useLanguage();
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section style={{ padding: 'clamp(28px, 6vw, 48px) clamp(16px, 5vw, 36px)', borderTop: '2px dashed #C9A882' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '34px' }}>
        <div style={{ marginBottom: '10px' }}>
          <div className="craft-stamp" style={{ transform: 'rotate(-1deg)' }}>
            <Camera size={15} color="var(--ink-crimson)" />
            <span className={language === 'hi' ? 'font-kalam' : 'font-caveat'} style={{ fontSize: '1.15rem' }}>
              {language === 'hi' ? 'यादों की डायरी' : 'HANDMADE MEMORY SCRAPBOOK'}
            </span>
          </div>
        </div>

        <h2 
          className={language === 'hi' ? 'font-kalam' : 'font-caveat'}
          style={{
            fontSize: 'clamp(2.4rem, 6.5vw, 3.4rem)',
            color: 'var(--ink-blue)',
            marginBottom: '6px',
            fontWeight: 700
          }}
        >
          {language === 'hi' ? 'हमारी कुछ अनमोल यादें' : 'Little Moments, Big Love'}
        </h2>

        <p 
          className={language === 'hi' ? 'font-kalam' : 'font-indie'}
          style={{
            fontSize: language === 'hi' ? '1.1rem' : '1.25rem',
            color: 'var(--ink-pencil)'
          }}
        >
          {language === 'hi' 
            ? 'हर तस्वीर में आपकी ममता और हमारी खुशियों की कहानी है' 
            : 'Every photograph is taped with love and fond memories'}
        </p>
      </div>

      {/* Scrapbook Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
        gap: 'clamp(24px, 4vw, 32px)',
        alignItems: 'start'
      }}>
        {memoriesData.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            onClick={() => setSelectedPhoto(item)}
            className="craft-polaroid"
            style={{
              transform: `rotate(${item.rotate}deg)`
            }}
          >
            {/* Washi Tape Strip */}
            <div 
              className={item.tapeClass} 
              style={{
                top: '-12px',
                left: '50%',
                transform: 'translateX(-50%) rotate(-1deg)',
                width: '90px'
              }} 
            />

            {/* Photo */}
            <div style={{
              overflow: 'hidden',
              backgroundColor: '#F5F0E6',
              aspectRatio: '4/3',
              marginBottom: '10px',
              border: '1px solid #E2D2BC'
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

            {/* Handwritten Caption */}
            <p 
              className={language === 'hi' ? 'font-kalam' : 'font-caveat'}
              style={{
                fontSize: language === 'hi' ? '1.05rem' : '1.55rem',
                color: 'var(--ink-blue)',
                textAlign: 'center',
                lineHeight: 1.25,
                fontWeight: 700
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
              backgroundColor: 'rgba(25, 14, 8, 0.9)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px'
            }}
          >
            <motion.div
              initial={{ scale: 0.88, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.88, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '650px',
                width: '100%',
                backgroundColor: '#FFFDF9',
                padding: '16px 16px 24px 16px',
                borderRadius: '8px',
                boxShadow: '0 30px 80px rgba(0,0,0,0.7)',
                border: '3px solid #C4A785',
                position: 'relative'
              }}
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'var(--ink-crimson)',
                  color: '#fff',
                  width: '34px',
                  height: '34px',
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
                  marginBottom: '14px',
                  border: '1px solid #E2D2BC'
                }}
              />

              <div style={{ textAlign: 'center' }}>
                <p 
                  className={language === 'hi' ? 'font-kalam' : 'font-caveat'}
                  style={{
                    fontSize: language === 'hi' ? '1.25rem' : '1.9rem',
                    color: 'var(--ink-blue)',
                    fontWeight: 700
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

export default HandmadeScrapbook;
