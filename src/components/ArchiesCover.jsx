import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Heart, Sparkles, Gift } from 'lucide-react';

const ArchiesCover = ({ onOpen }) => {
  const { language } = useLanguage();
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenClick = () => {
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 1600);
  };

  return (
    <AnimatePresence>
      {!isOpening && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            rotateY: -95,
            scale: 0.95,
            transition: { duration: 1.5, ease: [0.25, 1, 0.5, 1] } 
          }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
            background: 'radial-gradient(circle at 50% 30%, #3B121A 0%, #170508 85%, #0A0204 100%)',
            perspective: '1800px'
          }}
        >
          {/* Ambient Floating Gold & Pink Heart Particles */}
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
            {[...Array(18)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: `${Math.random() * 100}vw`, 
                  y: `${Math.random() * 100}vh`, 
                  opacity: 0,
                  scale: Math.random() * 0.6 + 0.4
                }}
                animate={{ 
                  y: ['0vh', '-25vh'], 
                  opacity: [0, 0.7, 0],
                  rotate: Math.random() * 180
                }}
                transition={{ 
                  duration: 5 + Math.random() * 5, 
                  repeat: Infinity, 
                  delay: Math.random() * 3,
                  ease: "easeInOut"
                }}
                style={{
                  position: 'absolute',
                  width: `${Math.random() * 8 + 6}px`,
                  height: `${Math.random() * 8 + 6}px`,
                  borderRadius: i % 2 === 0 ? '50%' : '3px',
                  backgroundColor: i % 3 === 0 ? '#FFDF79' : (i % 3 === 1 ? '#FF4D6D' : '#FFF0BA'),
                  boxShadow: '0 0 10px rgba(255, 223, 121, 0.6)'
                }}
              />
            ))}
          </div>

          {/* 3D Realistic Archies Card Front Cover */}
          <motion.div
            initial={{ y: 30, opacity: 0, scale: 0.92 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              width: '100%',
              maxWidth: '520px',
              backgroundColor: '#FFFDF9',
              borderRadius: '20px',
              padding: 'clamp(28px, 6vw, 44px)',
              position: 'relative',
              boxShadow: '0 30px 80px rgba(0,0,0,0.7), 0 0 60px rgba(217, 37, 70, 0.3)',
              border: '3px solid rgba(212, 175, 55, 0.6)',
              textAlign: 'center',
              overflow: 'hidden'
            }}
          >
            {/* Satin Ribbon Band across top */}
            <div style={{
              position: 'absolute',
              top: '0',
              left: '0',
              right: '0',
              height: '10px',
              background: 'linear-gradient(90deg, #D92546 0%, #FF6584 50%, #D92546 100%)',
              boxShadow: '0 2px 8px rgba(217, 37, 70, 0.4)'
            }} />

            {/* Archies Official Style Header Badge */}
            <div style={{ marginBottom: '20px' }}>
              <div className="archies-badge">
                <Sparkles size={14} color="#FFFDF9" />
                <span>{language === 'hi' ? 'आर्चीज स्पेशल एडिशन' : "ARCHIES SPECIAL · TO MAA"}</span>
              </div>
            </div>

            {/* Card Cover Caption */}
            <p 
              className={language === 'hi' ? 'font-hindi' : 'font-handwriting'}
              style={{
                fontSize: language === 'hi' ? '1.15rem' : '1.8rem',
                color: 'var(--archies-red-deep)',
                marginBottom: '8px',
                fontWeight: 600
              }}
            >
              {language === 'hi' ? 'दुनिया की सबसे प्यारी और अनमोल...' : "To the world's most wonderful..."}
            </p>

            {/* Big Metallic Title */}
            <h1 
              className={language === 'hi' ? 'font-hindi' : 'font-serif'}
              style={{
                fontSize: 'clamp(2.6rem, 8vw, 3.8rem)',
                lineHeight: 1.15,
                marginBottom: '20px',
                fontWeight: 800
              }}
            >
              {language === 'hi' ? (
                <>मेरी प्यारी <span className="archies-red-text">माँ</span> ❤️</>
              ) : (
                <>Happy Birthday <br /><span className="archies-gold-text">Maa</span> ❤️</>
              )}
            </h1>

            {/* Cute Archies Decorative Card Ribbon Motif */}
            <div style={{
              margin: '0 auto 28px auto',
              maxWidth: '300px',
              padding: '12px 18px',
              background: 'var(--archies-pink-soft)',
              borderRadius: '12px',
              border: '1.5px dashed rgba(217, 37, 70, 0.35)'
            }}>
              <p 
                className={language === 'hi' ? 'font-hindi' : 'font-cormorant'}
                style={{
                  fontSize: '1.1rem',
                  color: 'var(--text-muted)',
                  fontStyle: language === 'en' ? 'italic' : 'normal',
                  lineHeight: 1.5
                }}
              >
                {language === 'hi' 
                  ? 'यह कार्ड सिर्फ एक बधाई नहीं, आपके लिए हमारा असीम प्यार है।' 
                  : 'A special greeting filled with sweet memories, hugs, and eternal love.'}
              </p>
            </div>

            {/* Interactive Ribbon Bow Button */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
              <motion.button
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.94 }}
                onClick={handleOpenClick}
                style={{
                  background: 'linear-gradient(135deg, #D92546 0%, #B81935 100%)',
                  border: '2px solid #FFDF79',
                  color: '#FFFFFF',
                  boxShadow: '0 12px 30px rgba(217, 37, 70, 0.45), inset 0 2px 4px rgba(255,255,255,0.4)',
                  borderRadius: '50px',
                  padding: '15px 36px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                <Heart size={20} fill="#FFF3B0" color="#FFF3B0" />
                <span className={language === 'hi' ? 'font-hindi' : 'font-sans'}>
                  {language === 'hi' ? 'कार्ड खोलें ✨' : 'Open Your Card ✨'}
                </span>
                <Sparkles size={18} color="#FFF3B0" />
              </motion.button>

              <span 
                className={language === 'hi' ? 'font-hindi' : 'font-handwriting'}
                style={{
                  fontSize: language === 'hi' ? '0.95rem' : '1.35rem',
                  color: 'var(--text-light)',
                  letterSpacing: '0.02em'
                }}
              >
                {language === 'hi' ? 'जादुई पन्ने खोलने के लिए बटन दबाएँ' : 'Click to untie ribbon & open the card!'}
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ArchiesCover;
