import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Heart, Sparkles } from 'lucide-react';

const Heritage3DCardOpening = ({ onCardOpened }) => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenCard = () => {
    if (isOpen) return;
    setIsOpen(true);
    if (onCardOpened) {
      setTimeout(() => {
        onCardOpened();
      }, 1000);
    }
  };

  return (
    <section style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '36px' }}>
      <AnimatePresence mode="wait">
        {!isOpen ? (
          /* Closed Card View with 3D Aperture Window & Tap to Open */
          <motion.div
            key="closed-card"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0, transition: { duration: 0.4 } }}
            onClick={handleOpenCard}
            style={{
              width: '100%',
              maxWidth: '460px',
              aspectRatio: '3/4',
              backgroundColor: 'var(--surface)',
              borderRadius: '12px',
              border: '3px solid #BD9E78',
              boxShadow: '0 25px 50px -12px rgba(87, 0, 19, 0.4)',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Corner Washi Tapes */}
            <div className="washi-tape washi-top-left" style={{ width: '80px' }} />
            <div className="washi-tape washi-bottom-right" style={{ width: '80px' }} />

            <h2 
              className="font-serif"
              style={{
                fontSize: 'clamp(2rem, 5.5vw, 2.7rem)',
                color: 'var(--primary)',
                marginBottom: '18px',
                fontWeight: 700,
                letterSpacing: '0.04em'
              }}
            >
              Maa's Keepsake
            </h2>

            {/* Aperture Window */}
            <div 
              className="photo-corners"
              style={{
                position: 'relative',
                width: 'clamp(180px, 48vw, 220px)',
                height: 'clamp(230px, 58vw, 270px)',
                borderRadius: '4px',
                border: '6px solid var(--surface-container-highest)',
                boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.15)',
                overflow: 'hidden',
                marginBottom: '18px',
                backgroundColor: 'var(--surface-variant)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img 
                src="/assets/DSC_5144.JPG" 
                alt="Peek Inside"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: 0.92
                }}
              />

              {/* Wax Seal in Corner */}
              <div style={{
                position: 'absolute',
                bottom: '-10px',
                right: '-10px',
                width: '54px',
                height: '54px',
                borderRadius: '50%',
                backgroundColor: 'var(--primary)',
                border: '2.5px solid var(--tertiary-container)',
                boxShadow: '0 4px 14px rgba(87, 0, 19, 0.45)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 20
              }}>
                <Heart size={20} fill="var(--tertiary-container)" color="var(--tertiary-container)" />
              </div>
            </div>

            <p 
              className="label-caps"
              style={{
                color: 'var(--secondary)',
                letterSpacing: '0.15em',
                animation: 'pulse 1.8s infinite',
                fontWeight: 700
              }}
            >
              {language === 'hi' ? 'कार्ड खोलने के लिए टैप करें (TAP TO OPEN)' : 'TAP TO OPEN CARD ✨'}
            </p>
          </motion.div>
        ) : (
          /* Opened 2-Page Greeting Card Spread (Zero Overlapping) */
          <motion.div
            key="opened-card-spread"
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              width: '100%',
              maxWidth: '860px',
              backgroundColor: 'var(--surface)',
              borderRadius: '16px',
              border: '3px solid #BD9E78',
              boxShadow: '0 25px 60px rgba(87, 0, 19, 0.35)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
              padding: 'clamp(20px, 4vw, 36px)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Center Crease Divider */}
            <div style={{
              position: 'absolute',
              top: '16px',
              bottom: '16px',
              left: '50%',
              width: '1px',
              borderLeft: '2px dashed rgba(189, 158, 120, 0.4)',
              transform: 'translateX(-50%)',
              display: 'none',
              pointerEvents: 'none'
            }} />

            {/* Left Page: Mother-Daughter Quilling Artwork */}
            <div style={{
              backgroundColor: '#FAF7EE',
              borderRadius: '10px',
              border: '1.5px dashed #BD9E78',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}>
              <div 
                className="photo-frame-scrapbook photo-corners"
                style={{
                  transform: 'rotate(-2deg)',
                  maxWidth: '300px',
                  width: '100%'
                }}
              >
                <div className="washi-tape washi-top-left" style={{ width: '70px' }} />
                <img 
                  src="/assets/mother_daughter_quilling.jpg" 
                  alt="Mother Daughter Quilling"
                  style={{
                    width: '100%',
                    aspectRatio: '1/1',
                    objectFit: 'cover',
                    borderRadius: '2px',
                    display: 'block'
                  }}
                />
                <div style={{ marginTop: '10px', textAlign: 'center' }}>
                  <span className="font-serif" style={{ fontStyle: 'italic', color: 'var(--secondary)', fontSize: '1.15rem', fontWeight: 600 }}>
                    {language === 'hi' ? 'हमारे परिवार का दिल ❤️' : 'The heart of our family ❤️'}
                  </span>
                </div>
                <div className="washi-tape washi-bottom-right" style={{ width: '70px' }} />
              </div>
            </div>

            {/* Right Page: Shimmer Greeting & Heartfelt Blessings */}
            <div style={{
              backgroundColor: '#FAF7EE',
              borderRadius: '10px',
              border: '1.5px dashed #BD9E78',
              padding: 'clamp(20px, 4vw, 32px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              position: 'relative'
            }}>
              <div className="vellum-layer" />

              <div style={{ position: 'relative', zIndex: 10 }}>
                <h1 
                  className="font-serif shimmer-text"
                  style={{
                    fontSize: 'clamp(1.9rem, 4.8vw, 2.6rem)',
                    marginBottom: '16px',
                    fontWeight: 700,
                    lineHeight: 1.15
                  }}
                >
                  Happy Birthday, Maa ❤️
                </h1>

                <p 
                  className="font-hindi"
                  style={{
                    fontSize: 'clamp(1.1rem, 3.2vw, 1.4rem)',
                    color: 'var(--secondary)',
                    lineHeight: 1.65,
                    marginBottom: '18px',
                    fontWeight: 700
                  }}
                >
                  आप हमारे लिए सिर्फ माँ नहीं हैं, आप हमारे घर की सबसे खूबसूरत मुस्कान हैं।
                </p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '18px' }}>
                  <div style={{ height: '1px', width: '45px', background: 'linear-gradient(to right, transparent, var(--tertiary-container), transparent)' }} />
                  <Heart size={16} fill="var(--tertiary-container)" color="var(--tertiary-container)" />
                  <div style={{ height: '1px', width: '45px', background: 'linear-gradient(to right, transparent, var(--tertiary-container), transparent)' }} />
                </div>

                <p 
                  className="font-serif"
                  style={{
                    fontSize: 'clamp(1.1rem, 3.2vw, 1.35rem)',
                    fontStyle: 'italic',
                    color: 'var(--on-surface-variant)',
                    lineHeight: 1.45
                  }}
                >
                  "You make every place feel like home."
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Heritage3DCardOpening;
