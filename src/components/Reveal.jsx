import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Reveal = ({ onComplete }) => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      onComplete();
    }, 2800); // Wait for the slow cinematic fade
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
          transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            background: '#0A0807', // Very dark warm tone
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
            textAlign: 'center'
          }}
        >
          {/* Ambient center light */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 3 }}
            style={{
              position: 'absolute',
              width: '50vw',
              height: '50vw',
              background: 'radial-gradient(circle, var(--color-accent-gold) 0%, transparent 60%)',
              filter: 'blur(80px)',
              zIndex: 0
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ zIndex: 1 }}
          >
            <h2 
              className={language === 'hi' ? 'hindi-text' : 'english-heading'}
              style={{
                fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                color: 'var(--color-accent-blush)',
                marginBottom: '15px',
                fontWeight: 300,
                letterSpacing: language === 'en' ? '0.1em' : 'normal',
                fontStyle: language === 'en' ? 'italic' : 'normal',
                opacity: 0.8
              }}
            >
              {language === 'hi' 
                ? 'दुनिया की सबसे खास इंसान के लिए...' 
                : 'A little surprise for the most special person...'}
            </h2>
            
            <h1
              className="english-heading"
              style={{
                fontSize: 'clamp(3rem, 8vw, 6rem)',
                color: 'var(--color-bg-base)',
                marginBottom: '60px',
                letterSpacing: '-0.02em',
                lineHeight: 1
              }}
            >
              For Maa <span style={{ color: 'var(--color-accent-wine)' }}>❤️</span>
            </h1>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 2.5 }}
            onClick={handleOpen}
            className="english-body"
            style={{
              padding: '16px 48px',
              fontSize: '0.9rem',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'var(--color-bg-base)',
              borderRadius: '100px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              backdropFilter: 'blur(10px)',
              cursor: 'pointer',
              transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
              zIndex: 1
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
              e.currentTarget.style.border = '1px solid var(--color-accent-gold)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
              e.currentTarget.style.border = '1px solid rgba(255,255,255,0.1)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Open
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Reveal;
