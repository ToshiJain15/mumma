import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Heart, Sparkles, Flame, Cake, Star, Award } from 'lucide-react';

const ArchiesCakeFinale = () => {
  const { language } = useLanguage();
  const [isCandleBlown, setIsCandleBlown] = useState(false);

  const toggleCandle = () => {
    setIsCandleBlown(!isCandleBlown);
  };

  return (
    <section style={{ padding: 'clamp(32px, 7vw, 56px) clamp(16px, 5vw, 36px)', borderTop: '2px dashed rgba(217, 37, 70, 0.25)', textAlign: 'center', position: 'relative' }}>
      {/* Colorful Confetti Shower when candle is blown */}
      <AnimatePresence>
        {isCandleBlown && (
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 10 }}>
            {[...Array(40)].map((_, i) => {
              const colors = ['#D92546', '#FFB703', '#FB8500', '#FF6584', '#06D6A0', '#118AB2', '#D4AF37', '#9B5DE5'];
              const color = colors[i % colors.length];
              return (
                <motion.div
                  key={i}
                  initial={{ 
                    x: `${Math.random() * 100}%`, 
                    y: '110%', 
                    opacity: 0,
                    scale: 0.4 
                  }}
                  animate={{ 
                    y: '-10%', 
                    opacity: [0, 1, 1, 0],
                    scale: [0.4, 1.3, 0.9],
                    rotate: Math.random() * 720
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ 
                    duration: 3.5 + Math.random() * 3.5, 
                    repeat: Infinity, 
                    delay: Math.random() * 1.5,
                    ease: "easeOut"
                  }}
                  style={{
                    position: 'absolute',
                    width: `${Math.random() * 10 + 6}px`,
                    height: `${Math.random() * 10 + 6}px`,
                    borderRadius: i % 2 === 0 ? '50%' : (i % 3 === 0 ? '0%' : '30%'),
                    backgroundColor: color,
                    boxShadow: `0 0 10px ${color}`
                  }}
                />
              );
            })}
          </div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Interactive Birthday Cake */}
        <div style={{ marginBottom: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ marginBottom: '10px' }}>
            <div className="archies-badge">
              <Cake size={15} color="#FFFDF9" />
              <span>{language === 'hi' ? 'बर्थडे विश माँगिए' : "MAKE A BIRTHDAY WISH"}</span>
              <Sparkles size={14} color="#FFDF79" />
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={toggleCandle}
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              backgroundColor: isCandleBlown ? 'var(--archies-peach-soft)' : '#FFFFFF',
              border: isCandleBlown ? '3px solid var(--archies-gold)' : '3px solid var(--archies-red)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: isCandleBlown ? '0 0 35px rgba(212, 175, 55, 0.6)' : '0 10px 25px rgba(217, 37, 70, 0.25)',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
              marginTop: '10px'
            }}
          >
            {isCandleBlown ? (
              <Sparkles size={36} color="var(--archies-gold)" style={{ filter: 'drop-shadow(0 0 8px #FFD700)' }} />
            ) : (
              <Flame size={36} color="#FF4D6D" fill="#FFB703" style={{ filter: 'drop-shadow(0 0 10px #FF9F1C)', animation: 'pulse 1s infinite' }} />
            )}
          </motion.div>

          <span 
            className={language === 'hi' ? 'font-hindi' : 'font-handwriting'}
            style={{
              fontSize: language === 'hi' ? '1rem' : '1.6rem',
              color: isCandleBlown ? 'var(--archies-red)' : 'var(--text-muted)',
              marginTop: '12px',
              fontWeight: 700
            }}
          >
            {isCandleBlown 
              ? (language === 'hi' ? '🎉 मोमबत्ती बुझ गई! आपकी हर दुआ पूरी हो! 🎂' : '🎉 Candle Blown! May All Your Dreams Come True! 🎂') 
              : (language === 'hi' ? 'मोमबत्ती बुझाने और कन्फेटी उड़ाने के लिए टैप करें 🕯️' : 'Tap the candle to blow it out & celebrate! 🕯️')}
          </span>
        </div>

        {/* Final Archies Blessing Poem */}
        <div style={{
          maxWidth: '640px',
          margin: '0 auto 36px auto',
          padding: '24px 20px',
          background: 'var(--archies-peach-soft)',
          borderRadius: '16px',
          border: '1.5px dashed rgba(217, 37, 70, 0.35)',
          boxShadow: '0 8px 24px rgba(217, 37, 70, 0.06)'
        }}>
          <p 
            className={language === 'hi' ? 'font-hindi' : 'font-cormorant'}
            style={{
              fontSize: 'clamp(1.25rem, 4vw, 1.6rem)',
              color: 'var(--archies-red-deep)',
              lineHeight: 1.8,
              fontWeight: 700,
              fontStyle: language === 'en' ? 'italic' : 'normal',
              marginBottom: '14px'
            }}
          >
            {language === 'hi' ? (
              <>
                "हमेशा खुश रहो। हमेशा मुस्कुराती रहो。<br />
                और हमेशा ऐसे ही ढेर सारे प्यार के साथ हमारे साथ रहो।"
              </>
            ) : (
              <>
                "May your life be as radiant, joyful, and deeply loved as the happiness you bring to our family every single day!"
              </>
            )}
          </p>

          <p 
            className={language === 'hi' ? 'font-hindi' : 'font-handwriting'}
            style={{
              fontSize: language === 'hi' ? '1rem' : '1.5rem',
              color: 'var(--text-muted)',
              fontWeight: language === 'hi' ? 600 : 500
            }}
          >
            {language === 'hi' 
              ? 'जन्मदिन की ढेरों शुभकामनाएँ और असीम प्यार।' 
              : 'Wishing you the happiest birthday with endless love, hugs, and kisses!'}
          </p>
        </div>

        {/* Family Collage Centerpiece */}
        <div style={{
          maxWidth: '440px',
          margin: '0 auto 32px auto',
          padding: '12px',
          backgroundColor: '#FFFFFF',
          borderRadius: '14px',
          boxShadow: '0 16px 40px rgba(43, 24, 28, 0.12)',
          border: '2px solid var(--archies-gold)'
        }}>
          <img 
            src="assets/20230514_090841-COLLAGE.jpg" 
            alt="Family Celebration"
            style={{
              width: '100%',
              borderRadius: '8px',
              display: 'block'
            }}
          />
        </div>

        {/* Big Archies Sign-Off */}
        <div style={{ marginBottom: '40px' }}>
          <h2 
            className={language === 'hi' ? 'font-hindi' : 'font-serif'}
            style={{
              fontSize: 'clamp(2.4rem, 7vw, 3.8rem)',
              color: 'var(--archies-red-deep)',
              lineHeight: 1.1,
              fontWeight: 800,
              marginBottom: '8px'
            }}
          >
            Happy Birthday, <span className="archies-red-text">Maa</span> ❤️
          </h2>

          <p 
            className={language === 'hi' ? 'font-hindi' : 'font-handwriting'}
            style={{
              fontSize: language === 'hi' ? '1.2rem' : '2rem',
              color: 'var(--archies-red)',
              fontWeight: 700
            }}
          >
            {language === 'hi' ? '— आपका प्यारा परिवार ❤️' : '— With All Our Love, Always & Forever ❤️'}
          </p>
        </div>

        {/* Iconic Archies Back-Cover Seal & Barcode */}
        <div style={{
          maxWidth: '300px',
          margin: '0 auto',
          padding: '16px',
          borderTop: '1px solid rgba(217, 37, 70, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px'
        }}>
          <div className="archies-logo-seal">
            <span style={{ fontSize: '0.95rem' }}>★ ARCHIES ★</span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.08em', marginTop: '2px' }}>THE CELEBRATION OF LOVE</span>
          </div>

          <div style={{
            fontSize: '0.75rem',
            color: 'var(--text-light)',
            letterSpacing: '0.15em',
            fontWeight: 600
          }}>
            COLLECTOR'S EDITION: PRICELESS ❤️
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ArchiesCakeFinale;
