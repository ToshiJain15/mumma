import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Heart, Sparkles, Flame, Cake, Star } from 'lucide-react';

const ScrapbookCakeFinale = () => {
  const { language } = useLanguage();
  const [isCandleBlown, setIsCandleBlown] = useState(false);

  const toggleCandle = () => {
    setIsCandleBlown(!isCandleBlown);
  };

  return (
    <section style={{ padding: 'clamp(32px, 7vw, 56px) clamp(16px, 5vw, 36px)', borderTop: '2px dashed #BD9E78', textAlign: 'center', position: 'relative' }}>
      {/* Paper Confetti & Pressed Petals Shower */}
      <AnimatePresence>
        {isCandleBlown && (
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 10 }}>
            {[...Array(38)].map((_, i) => {
              const colors = ['#E76F51', '#F4A261', '#E9C46A', '#2A9D8F', '#264653', '#E0CEB5', '#9B2226'];
              const color = colors[i % colors.length];
              return (
                <motion.div
                  key={i}
                  initial={{ 
                    x: `${Math.random() * 100}%`, 
                    y: '110%', 
                    opacity: 0,
                    scale: 0.5 
                  }}
                  animate={{ 
                    y: '-10%', 
                    opacity: [0, 1, 1, 0],
                    scale: [0.5, 1.25, 0.85],
                    rotate: Math.random() * 540
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ 
                    duration: 4 + Math.random() * 3, 
                    repeat: Infinity, 
                    delay: Math.random() * 1.5,
                    ease: "easeOut"
                  }}
                  style={{
                    position: 'absolute',
                    width: `${Math.random() * 12 + 6}px`,
                    height: `${Math.random() * 8 + 6}px`,
                    borderRadius: i % 2 === 0 ? '2px' : '50%',
                    backgroundColor: color,
                    boxShadow: `0 2px 6px ${color}`
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
        {/* Hand-Drawn Birthday Cake */}
        <div style={{ marginBottom: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ marginBottom: '10px' }}>
            <div className="craft-stamp">
              <Cake size={16} color="var(--ink-crimson)" />
              <span className={language === 'hi' ? 'font-kalam' : 'font-caveat'} style={{ fontSize: '1.25rem' }}>
                {language === 'hi' ? 'बर्थडे विश माँगिए' : "MAKE A BIRTHDAY WISH"}
              </span>
              <Sparkles size={14} color="var(--ink-crimson)" />
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleCandle}
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              backgroundColor: isCandleBlown ? 'var(--paper-deckled)' : '#FFFFFF',
              border: isCandleBlown ? '3px dashed #2A9D8F' : '3px dashed var(--ink-crimson)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: isCandleBlown ? '0 0 25px rgba(42, 157, 143, 0.4)' : '0 8px 24px rgba(60, 40, 20, 0.15)',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
              marginTop: '10px'
            }}
          >
            {isCandleBlown ? (
              <Sparkles size={38} color="#2A9D8F" style={{ filter: 'drop-shadow(0 0 8px #2A9D8F)' }} />
            ) : (
              <Flame size={38} color="#E76F51" fill="#F4A261" style={{ filter: 'drop-shadow(0 0 8px #F4A261)', animation: 'pulse 1s infinite' }} />
            )}
          </motion.div>

          <span 
            className={language === 'hi' ? 'font-kalam' : 'font-caveat'}
            style={{
              fontSize: language === 'hi' ? '1.15rem' : '1.8rem',
              color: isCandleBlown ? '#2A9D8F' : 'var(--ink-crimson)',
              marginTop: '12px',
              fontWeight: 700
            }}
          >
            {isCandleBlown 
              ? (language === 'hi' ? '🎉 मोमबत्ती बुझ गई! आपकी हर दुआ पूरी हो! 🎂' : '🎉 Candle Blown! May all your prayers come true! 🎂') 
              : (language === 'hi' ? 'मोमबत्ती बुझाने और कन्फेटी उड़ाने के लिए टैप करें 🕯️' : 'Tap to blow out the candle & celebrate! 🕯️')}
          </span>
        </div>

        {/* Handwritten Final Blessing Note */}
        <div style={{
          maxWidth: '620px',
          margin: '0 auto 34px auto',
          padding: '24px 20px',
          background: 'var(--paper-deckled)',
          borderRadius: '12px',
          border: '2px dashed #BD9E78',
          boxShadow: '0 8px 24px rgba(45, 30, 15, 0.08)'
        }}>
          <p 
            className={language === 'hi' ? 'font-kalam' : 'font-caveat'}
            style={{
              fontSize: language === 'hi' ? '1.35rem' : '2rem',
              color: 'var(--ink-navy)',
              lineHeight: 1.6,
              fontWeight: 700,
              marginBottom: '12px'
            }}
          >
            {language === 'hi' ? (
              <>
                "हमेशा खुश रहो। हमेशा मुस्कुराती रहो。<br />
                और हमेशा ऐसे ही ढेर सारे प्यार के साथ हमारे साथ रहो।"
              </>
            ) : (
              <>
                "May your life always be surrounded by laughter, peace, perfect health, and the purest love!"
              </>
            )}
          </p>

          <p 
            className={language === 'hi' ? 'font-kalam' : 'font-indie'}
            style={{
              fontSize: language === 'hi' ? '1.05rem' : '1.25rem',
              color: 'var(--ink-terracotta)',
              fontWeight: 600
            }}
          >
            {language === 'hi' 
              ? 'जन्मदिन की ढेर सारी शुभकामनाएँ माँ ❤️' 
              : 'Wishing you the happiest birthday in the whole wide world ❤️'}
          </p>
        </div>

        {/* Family Collage in Scrapbook Frame */}
        <div style={{
          maxWidth: '440px',
          margin: '0 auto 32px auto',
          padding: '12px',
          backgroundColor: '#FFFFFF',
          borderRadius: '6px',
          boxShadow: '0 16px 40px rgba(60, 40, 20, 0.16)',
          border: '2px solid #D6C2A8'
        }}>
          <img 
            src="assets/20230514_090841-COLLAGE.jpg" 
            alt="Family Celebration"
            style={{
              width: '100%',
              borderRadius: '4px',
              display: 'block'
            }}
          />
        </div>

        {/* Big Handwritten Sign-Off */}
        <div style={{ marginBottom: '36px' }}>
          <h2 
            className={language === 'hi' ? 'font-kalam' : 'font-caveat'}
            style={{
              fontSize: 'clamp(2.6rem, 8vw, 4.2rem)',
              color: 'var(--ink-crimson)',
              lineHeight: 1.1,
              fontWeight: 700,
              marginBottom: '6px'
            }}
          >
            Happy Birthday, <span style={{ textDecoration: 'underline wavy #C85A32', textUnderlineOffset: '6px' }}>Maa</span> ❤️
          </h2>

          <p 
            className={language === 'hi' ? 'font-kalam' : 'font-caveat'}
            style={{
              fontSize: language === 'hi' ? '1.35rem' : '2.2rem',
              color: 'var(--ink-navy)',
              fontWeight: 700
            }}
          >
            {language === 'hi' ? '— आपकी हमेशा प्यारी बेटी / बच्चा ❤️' : '— Forever Your Loving Child ❤️'}
          </p>
        </div>

        {/* Artisanal Scrapbook Stamp */}
        <div style={{
          display: 'inline-block',
          padding: '10px 22px',
          border: '2px dashed #9B2226',
          borderRadius: '8px',
          background: 'rgba(155, 34, 38, 0.06)',
          transform: 'rotate(-2deg)'
        }}>
          <span 
            className={language === 'hi' ? 'font-kalam' : 'font-caveat'}
            style={{
              fontSize: language === 'hi' ? '1.05rem' : '1.5rem',
              color: 'var(--ink-crimson)',
              fontWeight: 700,
              letterSpacing: '0.04em'
            }}
          >
            ✂️ HANDCRAFTED MOTHER-DAUGHTER SCRAPBOOK · 100% HEARTFELT ✂️
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default ScrapbookCakeFinale;
