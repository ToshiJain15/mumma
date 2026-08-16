import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Heart, Sparkles, Scissors } from 'lucide-react';

const HandmadeCover = ({ onOpen }) => {
  const { language } = useLanguage();
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenClick = () => {
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 1500);
  };

  return (
    <AnimatePresence>
      {!isOpening && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 0.95,
            rotateX: 15,
            filter: 'blur(8px)',
            transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] } 
          }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
            background: 'radial-gradient(circle at 50% 30%, #3D2619 0%, #1A0F08 85%, #0D0704 100%)',
          }}
        >
          {/* Subtle Ambient Dried Petals & Paper Sparkles */}
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
            {[...Array(16)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: `${Math.random() * 100}vw`, 
                  y: `${Math.random() * 100}vh`, 
                  opacity: 0,
                  rotate: Math.random() * 360
                }}
                animate={{ 
                  y: ['0vh', '-20vh'], 
                  opacity: [0, 0.65, 0],
                  rotate: Math.random() * 180
                }}
                transition={{ 
                  duration: 6 + Math.random() * 5, 
                  repeat: Infinity, 
                  delay: Math.random() * 3,
                  ease: "easeInOut"
                }}
                style={{
                  position: 'absolute',
                  width: `${Math.random() * 10 + 6}px`,
                  height: `${Math.random() * 10 + 6}px`,
                  borderRadius: i % 2 === 0 ? '50%' : '2px',
                  backgroundColor: i % 3 === 0 ? '#EBD8BE' : (i % 3 === 1 ? '#F4A261' : '#E76F51'),
                  opacity: 0.7
                }}
              />
            ))}
          </div>

          {/* Realistic Kraft Paper Closed Card */}
          <motion.div
            initial={{ y: 25, opacity: 0, scale: 0.94 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              width: '100%',
              maxWidth: '520px',
              backgroundColor: 'var(--kraft-base)',
              backgroundImage: 'radial-gradient(#CBB396 1px, transparent 1px)',
              backgroundSize: '20px 20px',
              borderRadius: '16px',
              padding: 'clamp(28px, 6vw, 44px)',
              position: 'relative',
              boxShadow: '0 30px 80px rgba(0,0,0,0.65), 0 0 40px rgba(196, 154, 108, 0.25)',
              border: '3px solid #B89672',
              textAlign: 'center',
              overflow: 'hidden'
            }}
          >
            {/* Real Looking Washi Tape on top */}
            <div style={{
              position: 'absolute',
              top: '-12px',
              left: '50%',
              transform: 'translateX(-50%) rotate(1deg)',
              width: '120px',
              height: '28px',
              background: 'repeating-linear-gradient(45deg, rgba(244, 162, 97, 0.9), rgba(244, 162, 97, 0.9) 8px, rgba(231, 111, 81, 0.9) 8px, rgba(231, 111, 81, 0.9) 16px)',
              boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
              borderLeft: '2px dashed rgba(100,50,20,0.3)',
              borderRight: '2px dashed rgba(100,50,20,0.3)',
              zIndex: 5
            }} />

            {/* Inner Cotton Paper Sheet */}
            <div style={{
              backgroundColor: 'var(--paper-cotton)',
              padding: '24px 20px',
              borderRadius: '10px',
              border: '2px dashed #C9A882',
              boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
              position: 'relative'
            }}>
              {/* Hand-drawn Stamp Badge */}
              <div style={{ marginBottom: '16px' }}>
                <div className="craft-stamp">
                  <Heart size={14} fill="var(--ink-crimson)" />
                  <span className={language === 'hi' ? 'font-kalam' : 'font-handwriting'}>
                    {language === 'hi' ? 'प्यार से अपने हाथों से बनाया' : 'HANDMADE WITH LOVE'}
                  </span>
                  <Heart size={14} fill="var(--ink-crimson)" />
                </div>
              </div>

              {/* Subtitle */}
              <p 
                className={language === 'hi' ? 'font-kalam' : 'font-caveat'}
                style={{
                  fontSize: language === 'hi' ? '1.25rem' : '1.8rem',
                  color: 'var(--ink-blue)',
                  marginBottom: '6px',
                  fontWeight: 700
                }}
              >
                {language === 'hi' ? 'दुनिया की सबसे प्यारी इंसान के लिए...' : 'For the most wonderful mother in the world...'}
              </p>

              {/* Main Handwritten Title */}
              <h1 
                className={language === 'hi' ? 'font-kalam' : 'font-caveat'}
                style={{
                  fontSize: 'clamp(2.5rem, 8vw, 3.8rem)',
                  lineHeight: 1.15,
                  color: 'var(--ink-crimson)',
                  marginBottom: '20px',
                  fontWeight: 700,
                  letterSpacing: '0.02em'
                }}
              >
                {language === 'hi' ? (
                  <>मेरी प्यारी <span style={{ textDecoration: 'underline wavy #F4A261', textUnderlineOffset: '6px' }}>माँ</span> के लिए ❤️</>
                ) : (
                  <>Happy Birthday <br /><span style={{ textDecoration: 'underline wavy #F4A261', textUnderlineOffset: '6px' }}>Dearest Maa</span> ❤️</>
                )}
              </h1>

              {/* Cute Handwritten Note */}
              <p 
                className={language === 'hi' ? 'font-kalam' : 'font-indie'}
                style={{
                  fontSize: language === 'hi' ? '1.05rem' : '1.15rem',
                  color: 'var(--ink-pencil)',
                  lineHeight: 1.5,
                  maxWidth: '340px',
                  margin: '0 auto 24px auto'
                }}
              >
                {language === 'hi' 
                  ? 'यह कार्ड सिर्फ कागज़ का टुकड़ा नहीं, आपके लिए दिल से लिखा हर एक एहसास है।' 
                  : 'A card made with memories, smiles, and all the love in the universe.'}
              </p>

              {/* Jute String & Wooden Button Untie Action */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                <motion.button
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={handleOpenClick}
                  style={{
                    background: 'linear-gradient(135deg, #C49A6C 0%, #A07447 100%)',
                    border: '2px solid #6E4B28',
                    color: '#FFFDF9',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.25), inset 0 2px 4px rgba(255,255,255,0.4)',
                    borderRadius: '50px',
                    padding: '14px 32px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <Scissors size={18} color="#FFFDF9" />
                  <span className={language === 'hi' ? 'font-kalam' : 'font-caveat'}>
                    {language === 'hi' ? 'धागा खोलें और कार्ड पढ़ें ✂️✨' : 'Untie String & Open Card ✂️✨'}
                  </span>
                </motion.button>

                <span 
                  className={language === 'hi' ? 'font-kalam' : 'font-caveat'}
                  style={{
                    fontSize: language === 'hi' ? '0.95rem' : '1.35rem',
                    color: 'var(--ink-pencil)'
                  }}
                >
                  {language === 'hi' ? 'हाथ से बना कार्ड खोलने के लिए बटन दबाएँ' : 'Click to untie the twine & open the handmade card!'}
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HandmadeCover;
