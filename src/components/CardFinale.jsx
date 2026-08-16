import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Heart, Sparkles, Flame } from 'lucide-react';

const CardFinale = () => {
  const { language } = useLanguage();
  const [isCandleLit, setIsCandleLit] = useState(false);

  const toggleCandle = () => {
    setIsCandleLit(!isCandleLit);
  };

  return (
    <section style={{ padding: 'clamp(32px, 7vw, 56px) clamp(16px, 5vw, 36px)', borderTop: '1px dashed rgba(212, 175, 55, 0.3)', textAlign: 'center', position: 'relative' }}>
      {/* Floating Sparkles & Petals when candle is lit */}
      <AnimatePresence>
        {isCandleLit && (
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 5 }}>
            {[...Array(24)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: `${Math.random() * 100}%`, 
                  y: '100%', 
                  opacity: 0,
                  scale: 0.5 
                }}
                animate={{ 
                  y: '-10%', 
                  opacity: [0, 0.85, 0],
                  scale: [0.5, 1.2, 0.8],
                  rotate: Math.random() * 360
                }}
                exit={{ opacity: 0 }}
                transition={{ 
                  duration: 4 + Math.random() * 4, 
                  repeat: Infinity, 
                  delay: Math.random() * 2,
                  ease: "easeOut"
                }}
                style={{
                  position: 'absolute',
                  width: `${Math.random() * 8 + 6}px`,
                  height: `${Math.random() * 8 + 6}px`,
                  borderRadius: i % 2 === 0 ? '50%' : '2px',
                  backgroundColor: i % 3 === 0 ? '#D4AF37' : (i % 3 === 1 ? '#D98894' : '#FFF3B0'),
                  boxShadow: '0 0 10px rgba(212, 175, 55, 0.6)'
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Interactive Candle / Blessing Button */}
        <div style={{ marginBottom: '28px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleCandle}
            style={{
              width: '74px',
              height: '74px',
              borderRadius: '50%',
              backgroundColor: isCandleLit ? '#FFF8E7' : 'var(--bg-card-parchment)',
              border: isCandleLit ? '2px solid #D4AF37' : '1.5px solid rgba(212, 175, 55, 0.4)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: isCandleLit ? '0 0 30px rgba(212, 175, 55, 0.5), inset 0 0 15px rgba(255, 243, 176, 0.8)' : '0 6px 16px rgba(0,0,0,0.06)',
              cursor: 'pointer',
              transition: 'all 0.4s ease'
            }}
            aria-label="Light the birthday candle"
          >
            <Flame 
              size={28} 
              color={isCandleLit ? '#E86C00' : 'var(--wine-soft)'} 
              fill={isCandleLit ? '#FFA500' : 'transparent'} 
              style={{
                filter: isCandleLit ? 'drop-shadow(0 0 8px #FFD700)' : 'none',
                transition: 'all 0.3s ease'
              }}
            />
          </motion.button>
          
          <span 
            className={language === 'hi' ? 'font-hindi' : 'font-serif'}
            style={{
              fontSize: '0.85rem',
              color: isCandleLit ? 'var(--gold-dark)' : 'var(--text-light)',
              marginTop: '8px',
              fontWeight: 600,
              letterSpacing: '0.05em'
            }}
          >
            {isCandleLit 
              ? (language === 'hi' ? 'दीया जगमगा रहा है ✨' : 'Birthday Candle is Glowing ✨') 
              : (language === 'hi' ? 'दुआ माँगने और दीया जलाने के लिए टैप करें 🕯️' : 'Tap to light the birthday candle 🕯️')}
          </span>
        </div>

        {/* Final Blessing Message */}
        <div style={{ maxWidth: '640px', margin: '0 auto 36px auto' }}>
          <p 
            className={language === 'hi' ? 'font-hindi' : 'font-cormorant'}
            style={{
              fontSize: 'clamp(1.2rem, 3.8vw, 1.55rem)',
              color: 'var(--wine-deep)',
              lineHeight: 1.85,
              fontWeight: language === 'hi' ? 600 : 400,
              fontStyle: language === 'en' ? 'italic' : 'normal',
              marginBottom: '16px'
            }}
          >
            {language === 'hi' ? (
              <>
                "हमेशा खुश रहो। हमेशा मुस्कुराती रहो。<br />
                और हमेशा ऐसे ही प्यार से हमारे साथ रहो।"
              </>
            ) : (
              <>
                "May your life be as radiant, peaceful, and filled with love as the joy you bring to all of us every day."
              </>
            )}
          </p>

          <p 
            className={language === 'hi' ? 'font-hindi' : 'font-sans'}
            style={{
              fontSize: '0.95rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.04em'
            }}
          >
            {language === 'hi' 
              ? 'जन्मदिन की ढेरों शुभकामनाएँ और असीम प्यार।' 
              : 'Wishing you the happiest birthday with endless love.'}
          </p>
        </div>

        {/* Family Collage Centerpiece */}
        <div style={{
          maxWidth: '420px',
          margin: '0 auto 32px auto',
          padding: '10px',
          backgroundColor: '#FFFFFF',
          borderRadius: '8px',
          boxShadow: '0 15px 40px rgba(0,0,0,0.12)',
          border: '1px solid rgba(212, 175, 55, 0.4)'
        }}>
          <img 
            src="/assets/20230514_090841-COLLAGE.jpg" 
            alt="Family Celebration"
            style={{
              width: '100%',
              borderRadius: '4px',
              display: 'block'
            }}
          />
        </div>

        {/* Closing Calligraphy Signature */}
        <div>
          <h2 
            className={language === 'hi' ? 'font-hindi' : 'font-serif'}
            style={{
              fontSize: 'clamp(2.2rem, 6.5vw, 3.4rem)',
              color: 'var(--wine-deep)',
              lineHeight: 1.1,
              fontWeight: 700,
              marginBottom: '8px'
            }}
          >
            Happy Birthday, <span className="gold-foil-text">Maa</span> ❤️
          </h2>

          <p 
            className={language === 'hi' ? 'font-hindi' : 'font-script'}
            style={{
              fontSize: language === 'hi' ? '1.1rem' : '1.8rem',
              color: 'var(--wine-primary)',
              fontWeight: language === 'hi' ? 600 : 400
            }}
          >
            {language === 'hi' ? '— आपके हमेशा प्यारे बच्चे ❤️' : 'With all our love, always ❤️'}
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default CardFinale;
