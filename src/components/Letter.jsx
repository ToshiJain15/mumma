import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Letter = () => {
  const { language } = useLanguage();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section style={{ padding: '200px 20px', position: 'relative' }}>
      {/* Ambient background light for the letter */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60vw',
        height: '60vw',
        background: 'radial-gradient(circle, var(--color-bg-surface) 0%, transparent 70%)',
        opacity: 0.8,
        zIndex: 0,
        filter: 'blur(100px)'
      }} />

      <div className="content-container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          style={{ y }}
        >
          <div className="glass-panel" style={{
            padding: 'clamp(40px, 8vw, 100px)',
            borderRadius: '2px',
            position: 'relative',
            border: '1px solid rgba(255,255,255,0.8)'
          }}>

            <h2 className="english-heading" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--color-text-primary)', marginBottom: '40px', textAlign: 'center' }}>
              {language === 'hi' ? 'माँ के लिए एक खत' : 'A Letter to Maa'}
            </h2>
            <div style={{ width: '40px', height: '1px', background: 'var(--color-accent-gold)', margin: '0 auto 60px' }} />

            <div 
              className={language === 'hi' ? 'hindi-text' : 'english-body'}
              style={{ 
                fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', 
                color: 'var(--color-text-secondary)',
                lineHeight: '2.2',
                whiteSpace: 'pre-line',
                maxWidth: '700px',
                margin: '0 auto',
                letterSpacing: language === 'en' ? '0.02em' : 'normal'
              }}
            >
              {language === 'hi' ? (
                <>
                  प्यारी माँ,<br/><br/>
                  
                  आज आपका जन्मदिन है, लेकिन सच कहूँ तो हर वो दिन खास है जिसमें आप हमारे साथ हैं। आपने अपनी पूरी जिंदगी हमारी खुशियों के लिए बिता दी। 
                  हमारी छोटी सी छोटी बात का ख्याल रखा, हमारी हर जिद पूरी की और हमें बिना किसी शर्त के प्यार किया।<br/><br/>

                  हम शायद रोज आपको यह नहीं बता पाते, लेकिन आप हमारे घर की जान हैं। आपके बिना यह घर, घर नहीं लगता। 
                  हम बस यही चाहते हैं कि आप हमेशा खुश रहें, आपकी वो प्यारी सी मुस्कान कभी कम ना हो।<br/><br/>

                  जन्मदिन की बहुत-बहुत शुभकामनाएँ, माँ। हम आपसे बहुत प्यार करते हैं।<br/><br/>
                  
                  <span className="english-heading" style={{ color: 'var(--color-text-primary)', fontSize: '2rem', display: 'block', marginTop: '40px', textAlign: 'right' }}>
                    आपका परिवार ❤️
                  </span>
                </>
              ) : (
                <>
                  Dearest Maa,<br/><br/>

                  Today is your birthday, but honestly, every day is special because we have you. You have spent your entire life prioritizing our happiness. 
                  You took care of the smallest things, fulfilled our wishes, and loved us unconditionally.<br/><br/>

                  We might not say this every day, but you are the soul of our home. Without you, this house doesn't feel like home. 
                  All we want is for you to always be happy, and for that beautiful smile of yours to never fade.<br/><br/>

                  Wishing you the happiest birthday, Maa. We love you so much.<br/><br/>

                  <span className="english-heading" style={{ color: 'var(--color-text-primary)', fontSize: '2rem', display: 'block', marginTop: '40px', textAlign: 'right', fontStyle: 'italic' }}>
                    Your Family ❤️
                  </span>
                </>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Letter;
