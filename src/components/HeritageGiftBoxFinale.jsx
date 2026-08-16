import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Heart, Sparkles, ArrowUp, Flame } from 'lucide-react';

const HeritageGiftBoxFinale = () => {
  const { language } = useLanguage();
  const [litCandles, setLitCandles] = useState([false, false, false]);
  const [isCelebrated, setIsCelebrated] = useState(false);

  const toggleCandle = (index) => {
    const nextState = [...litCandles];
    nextState[index] = !nextState[index];
    setLitCandles(nextState);

    // If all candles are lit
    if (nextState.every(Boolean)) {
      setIsCelebrated(true);
      triggerConfetti();
    }
  };

  const lightAllCandles = () => {
    setLitCandles([true, true, true]);
    setIsCelebrated(true);
    triggerConfetti();
  };

  const triggerConfetti = () => {
    const burstCount = 45;
    for (let i = 0; i < burstCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('golden-particle');
      particle.style.position = 'fixed';
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.top = '100vh';
      particle.style.width = `${Math.random() * 10 + 6}px`;
      particle.style.height = `${Math.random() * 10 + 6}px`;
      particle.style.backgroundColor = i % 2 === 0 ? '#CCA730' : (i % 3 === 0 ? '#800020' : '#FF828A');
      particle.style.borderRadius = i % 2 === 0 ? '50%' : '2px';
      particle.style.zIndex = '9999';
      particle.style.transition = 'all 2.5s cubic-bezier(0.1, 0.8, 0.3, 1)';
      document.body.appendChild(particle);

      void particle.offsetWidth;
      particle.style.transform = `translateY(-${Math.random() * 85 + 20}vh) rotate(${Math.random() * 720}deg)`;
      particle.style.opacity = '1';

      setTimeout(() => {
        particle.style.opacity = '0';
        setTimeout(() => particle.remove(), 1000);
      }, 2000);
    }
  };

  const handleReturnToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section style={{
      padding: 'clamp(40px, 8vw, 72px) clamp(16px, 5vw, 36px)',
      borderTop: '2px dashed #BD9E78',
      textAlign: 'center',
      position: 'relative'
    }}>
      {/* Floating Golden Dust Particles */}
      <AnimatePresence>
        {isCelebrated && (
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 10 }}>
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: `${Math.random() * 100}%`, 
                  y: '80%', 
                  opacity: 0,
                  scale: 0.4 
                }}
                animate={{ 
                  y: '-20%', 
                  opacity: [0, 1, 1, 0],
                  scale: [0.4, 1.3, 0.6],
                  rotate: Math.random() * 360
                }}
                transition={{ 
                  duration: 3 + Math.random() * 2, 
                  repeat: Infinity, 
                  delay: Math.random() * 1.5,
                  ease: "easeOut"
                }}
                style={{
                  position: 'absolute',
                  width: i % 2 === 0 ? '10px' : '6px',
                  height: i % 2 === 0 ? '10px' : '6px',
                  borderRadius: '50%',
                  backgroundColor: i % 2 === 0 ? '#CCA730' : '#800020',
                  boxShadow: '0 0 10px #CCA730'
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Subtitle / Instructions */}
        <div style={{ marginBottom: '24px' }}>
          <span className="label-caps" style={{ color: '#800020', letterSpacing: '0.16em', fontSize: '11px' }}>
            {language === 'hi' ? 'Mumma के लिए मोमबत्तियाँ जलाएं 🎂' : 'LIGHT THE CANDLES FOR MUMMA 🎂'}
          </span>
          <p className={language === 'hi' ? 'font-kalam' : 'font-caveat'} style={{ fontSize: '1.45rem', color: '#77574d', margin: '4px 0 0 0' }}>
            {language === 'hi' ? '(मोमबत्ती पर टैप करें या बटन दबाएं ✨)' : '(Tap candles to light them up ✨)'}
          </p>
        </div>

        {/* 3D Pop-Up Cake Container */}
        <div style={{
          position: 'relative',
          maxWidth: '420px',
          margin: '0 auto 48px auto',
          backgroundColor: '#FFFDF9',
          borderRadius: '16px',
          padding: '36px 24px 28px 24px',
          border: '2.5px solid #CCA730',
          boxShadow: '0 20px 60px rgba(87, 0, 19, 0.18)'
        }}>
          {/* Candles Row */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '36px', marginBottom: '20px' }}>
            {[0, 1, 2].map((idx) => {
              const isLit = litCandles[idx];
              return (
                <div
                  key={idx}
                  onClick={() => toggleCandle(idx)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    cursor: 'pointer',
                    position: 'relative'
                  }}
                >
                  {/* Flame */}
                  <motion.div
                    animate={isLit ? { scale: [1, 1.25, 1], rotate: [-4, 4, -4] } : { scale: 0.6, opacity: 0.3 }}
                    transition={{ duration: 0.6, repeat: isLit ? Infinity : 0 }}
                    style={{ marginBottom: '-4px' }}
                  >
                    <Flame size={28} color={isLit ? '#E8871C' : '#999'} fill={isLit ? '#E8871C' : 'transparent'} />
                  </motion.div>

                  {/* Candle Body */}
                  <div style={{
                    width: '14px',
                    height: '54px',
                    borderRadius: '4px 4px 0 0',
                    background: idx === 1 ? 'linear-gradient(to bottom, #800020, #570013)' : 'linear-gradient(to bottom, #CCA730, #B8860B)',
                    boxShadow: isLit ? '0 0 16px rgba(232, 135, 28, 0.8)' : '0 2px 6px rgba(0,0,0,0.1)'
                  }} />
                </div>
              );
            })}
          </div>

          {/* 3D Paper Cake Layers */}
          <div style={{
            background: 'linear-gradient(135deg, #F5EDD8 0%, #FAF6EC 100%)',
            borderRadius: '12px',
            border: '2px solid #BD9E78',
            padding: '20px',
            boxShadow: '0 8px 24px rgba(60, 30, 10, 0.1)'
          }}>
            <h3 className={language === 'hi' ? 'font-hindi' : 'font-serif'} style={{ fontSize: '2rem', color: '#570013', margin: '0 0 6px 0', fontWeight: 800 }}>
              {language === 'hi' ? 'हैप्पी बर्थडे Mumma! 🎂' : 'Happy Birthday Mumma! 🎂'}
            </h3>

            <p className={language === 'hi' ? 'font-kalam' : 'font-caveat'} style={{ fontSize: '1.4rem', color: '#77574d', margin: 0 }}>
              {language === 'hi' ? 'आपका हर पल मिठास से भरा रहे ❤️' : 'Wishing you a life overflowing with sweet moments ❤️'}
            </p>
          </div>

          {/* Light All Candles Button */}
          {!isCelebrated && (
            <button
              onClick={lightAllCandles}
              style={{
                marginTop: '20px',
                backgroundColor: '#570013',
                color: '#FFFFFF',
                padding: '10px 22px',
                borderRadius: '6px',
                border: '1.5px solid #CCA730',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 700,
                fontSize: '0.85rem',
                letterSpacing: '0.12em',
                cursor: 'pointer'
              }}
            >
              {language === 'hi' ? 'सारी मोमबत्तियाँ जलाएं ✨' : 'LIGHT ALL CANDLES ✨'}
            </button>
          )}
        </div>

        {/* The Rising Photograph after celebration */}
        <AnimatePresence>
          {isCelebrated && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.9, type: 'spring' }}
              style={{
                maxWidth: '620px',
                margin: '0 auto 40px auto',
                backgroundColor: '#FFFFFF',
                padding: '14px 14px 24px 14px',
                borderRadius: '12px',
                boxShadow: '0 25px 60px rgba(87, 0, 19, 0.3)',
                border: '2px solid #CCA730'
              }}
            >
              <div style={{
                borderRadius: '6px',
                overflow: 'hidden',
                backgroundColor: '#FAF6EC',
                border: '1.5px solid #D6C2A8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '6px',
                minHeight: '260px'
              }}>
                <img 
                  src="assets/the_whole_family.JPG" 
                  alt="Whole Family Memory"
                  style={{ maxWidth: '100%', maxHeight: '420px', width: 'auto', height: 'auto', objectFit: 'contain', display: 'block', borderRadius: '4px' }}
                />
              </div>
              <div style={{ marginTop: '14px', textAlign: 'center' }}>
                <p className={language === 'hi' ? 'font-kalam' : 'font-serif'} style={{ fontStyle: 'italic', color: '#570013', fontSize: '1.6rem', fontWeight: 700, margin: 0 }}>
                  {language === 'hi' ? 'Toshi और पूरे परिवार की तरफ से ढेर सारा प्यार! ❤️' : 'With eternal love from Toshi & the whole family! ❤️'}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Heartfelt Final Message */}
        <div style={{ maxWidth: '680px', margin: '0 auto 36px auto', padding: '0 16px' }}>
          <h3 
            className={language === 'hi' ? 'font-hindi' : 'font-serif'}
            style={{
              fontSize: 'clamp(1.9rem, 5.5vw, 2.8rem)',
              color: '#570013',
              lineHeight: 1.25,
              fontWeight: 800,
              marginBottom: '12px'
            }}
          >
            {language === 'hi' 
              ? 'आप ही हमारे पूरे परिवार की धड़कन हैं... Toshi आपसे बहुत प्यार करती है, Mumma! ❤️' 
              : 'You are the beating heart of our entire family... Toshi loves you endlessly, Mumma! ❤️'}
          </h3>

          <p 
            className={language === 'hi' ? 'font-kalam' : 'font-serif'}
            style={{
              fontSize: 'clamp(1.25rem, 3.8vw, 1.6rem)',
              fontStyle: 'italic',
              color: '#77574d',
              lineHeight: 1.5
            }}
          >
            {language === 'hi'
              ? 'भगवान से यही प्रार्थना है कि आपका हर दिन खुशियों, उत्तम स्वास्थ्य और असीम सुकून से भरा रहे।'
              : 'May every sunrise bring you boundless peace, good health, and infinite reasons to smile.'}
          </p>
        </div>

        {/* Return to Top Button */}
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.96 }}
          onClick={handleReturnToTop}
          style={{
            backgroundColor: '#FAF6EC',
            padding: '12px 28px',
            borderRadius: '6px',
            border: '1.5px solid #CCA730',
            boxShadow: '0 6px 18px rgba(87, 0, 19, 0.15)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#570013',
            cursor: 'pointer'
          }}
        >
          <span className="label-caps" style={{ color: '#570013', fontSize: '0.85rem', letterSpacing: '0.12em' }}>
            {language === 'hi' ? 'शुरुआत पर लौटें (RETURN TO START)' : 'RETURN TO START'}
          </span>
          <ArrowUp size={16} color="#570013" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeritageGiftBoxFinale;
