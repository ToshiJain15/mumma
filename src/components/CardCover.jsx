import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Heart } from 'lucide-react';

const CardCover = ({ onOpen }) => {
  const { language } = useLanguage();
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenClick = () => {
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 1800);
  };

  return (
    <AnimatePresence>
      {!isOpening && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.06, 
            filter: 'blur(12px)',
            transition: { duration: 1.6, ease: [0.22, 1, 0.36, 1] } 
          }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            background: 'radial-gradient(circle at 50% 30%, #381219 0%, #1A070A 85%, #0D0305 100%)',
          }}
        >
          {/* Subtle Ambient Floating Golden Dust */}
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: `${Math.random() * 100}vw`, 
                  y: `${Math.random() * 100}vh`, 
                  opacity: 0 
                }}
                animate={{ 
                  y: ['0vh', '-20vh'], 
                  opacity: [0, 0.6, 0] 
                }}
                transition={{ 
                  duration: 6 + Math.random() * 6, 
                  repeat: Infinity, 
                  delay: Math.random() * 4,
                  ease: "easeInOut"
                }}
                style={{
                  position: 'absolute',
                  width: `${Math.random() * 4 + 2}px`,
                  height: `${Math.random() * 4 + 2}px`,
                  borderRadius: '50%',
                  backgroundColor: '#D4AF37',
                  filter: 'blur(1px)',
                  boxShadow: '0 0 8px #D4AF37'
                }}
              />
            ))}
          </div>

          {/* Realistic Royal Card Envelope */}
          <motion.div
            initial={{ y: 30, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              width: '100%',
              maxWidth: '520px',
              backgroundColor: 'var(--bg-card-paper)',
              borderRadius: '16px',
              padding: 'clamp(32px, 7vw, 48px)',
              position: 'relative',
              boxShadow: '0 30px 80px rgba(0,0,0,0.7), 0 0 50px rgba(212, 175, 55, 0.25)',
              border: '2px solid rgba(212, 175, 55, 0.5)',
              textAlign: 'center',
              overflow: 'hidden'
            }}
          >
            {/* Card Filigree Corners */}
            <div style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              width: '28px',
              height: '28px',
              borderTop: '2px solid #D4AF37',
              borderLeft: '2px solid #D4AF37',
              borderTopLeftRadius: '6px'
            }} />
            <div style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              width: '28px',
              height: '28px',
              borderTop: '2px solid #D4AF37',
              borderRight: '2px solid #D4AF37',
              borderTopRightRadius: '6px'
            }} />
            <div style={{
              position: 'absolute',
              bottom: '12px',
              left: '12px',
              width: '28px',
              height: '28px',
              borderBottom: '2px solid #D4AF37',
              borderLeft: '2px solid #D4AF37',
              borderBottomLeftRadius: '6px'
            }} />
            <div style={{
              position: 'absolute',
              bottom: '12px',
              right: '12px',
              width: '28px',
              height: '28px',
              borderBottom: '2px solid #D4AF37',
              borderRight: '2px solid #D4AF37',
              borderBottomRightRadius: '6px'
            }} />

            {/* Subtle Gold Ribbon Header */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 16px',
              borderRadius: '20px',
              background: 'rgba(212, 175, 55, 0.12)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              marginBottom: '24px'
            }}>
              <Sparkles size={13} color="#D4AF37" />
              <span 
                className={language === 'hi' ? 'font-hindi' : 'font-serif'}
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--wine-primary)',
                  letterSpacing: '0.1em',
                  fontWeight: 600
                }}
              >
                {language === 'hi' ? 'एक प्यारा सा सरप्राइज' : 'A Special Surprise'}
              </span>
            </div>

            {/* Subtitle */}
            <p 
              className={language === 'hi' ? 'font-hindi' : 'font-cormorant'}
              style={{
                fontSize: 'clamp(1.1rem, 3.5vw, 1.35rem)',
                color: 'var(--text-muted)',
                marginBottom: '12px',
                fontStyle: language === 'en' ? 'italic' : 'normal'
              }}
            >
              {language === 'hi'
                ? 'दुनिया की सबसे खास और प्यारी इंसान के लिए...'
                : 'For the most special person in the world...'}
            </p>

            {/* Title Calligraphy */}
            <h1 
              className={language === 'hi' ? 'font-hindi' : 'font-serif'}
              style={{
                fontSize: 'clamp(2.6rem, 8vw, 3.8rem)',
                lineHeight: 1.1,
                color: 'var(--wine-deep)',
                marginBottom: '36px',
                fontWeight: 700
              }}
            >
              {language === 'hi' ? (
                <>मेरी प्यारी <span className="gold-foil-text">माँ</span> के लिए ❤️</>
              ) : (
                <>For <span className="gold-foil-text">Maa</span> ❤️</>
              )}
            </h1>

            {/* Wax Seal Interaction */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                onClick={handleOpenClick}
                className="wax-seal-btn"
                aria-label="Open Birthday Card"
              >
                <Heart size={24} color="#FFF3B0" fill="#FFF3B0" style={{ marginBottom: '2px' }} />
                <span style={{ fontSize: '0.75rem', letterSpacing: '0.1em', fontWeight: 600, textTransform: 'uppercase' }}>
                  {language === 'hi' ? 'खोलें' : 'OPEN'}
                </span>
              </motion.button>

              <span 
                className={language === 'hi' ? 'font-hindi' : 'font-serif'}
                style={{
                  fontSize: '0.95rem',
                  color: 'var(--text-muted)',
                  fontStyle: language === 'en' ? 'italic' : 'normal',
                  letterSpacing: '0.04em'
                }}
              >
                {language === 'hi' ? 'बर्थडे कार्ड खोलने के लिए सील पर टैप करें ✨' : 'Tap the wax seal to open your card ✨'}
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CardCover;
