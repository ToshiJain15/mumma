import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const GhibliStory = () => {
  const { language } = useLanguage();
  const { scrollYProgress } = useScroll();
  const yImage1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yImage2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section style={{ padding: '200px 20px', position: 'relative', overflow: 'hidden' }}>
      <div className="content-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: '100px' }}
        >
          <h2 className="english-heading" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--color-accent-wine)', marginBottom: '15px' }}>
            {language === 'hi' ? 'एक खूबसूरत एहसास' : 'A Beautiful Feeling'}
          </h2>
          <div style={{ width: '40px', height: '1px', background: 'var(--color-accent-gold)', margin: '0 auto 20px' }} />
          <p className={language === 'hi' ? 'hindi-text' : 'english-heading'} style={{ fontSize: '1.2rem', color: 'var(--color-text-secondary)', fontStyle: language === 'en' ? 'italic' : 'normal' }}>
            {language === 'hi' 
              ? 'आपके साथ बिताया हर पल किसी खूबसूरत कहानी जैसा लगता है।' 
              : 'Every moment with you feels like a beautiful story.'}
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '150px' }}>
          {/* Story 1 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '50px', flexWrap: 'wrap' }}>
            <motion.div 
              style={{ flex: '1 1 400px', y: yImage1 }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="glass-panel" style={{ padding: '15px', borderRadius: '4px' }}>
                <img 
                  src="/assets/ghibli_mother_child.jpg" 
                  alt="Mother and Child" 
                  style={{ width: '100%', borderRadius: '2px' }}
                />
              </div>
            </motion.div>
            <motion.div 
              style={{ flex: '1 1 300px' }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className={language === 'hi' ? 'hindi-text' : 'english-body'} style={{ fontSize: '1.2rem', color: 'var(--color-text-secondary)', lineHeight: '2' }}>
                {language === 'hi' 
                  ? 'बचपन में उंगली पकड़कर चलना सिखाने से लेकर, आज तक हर कदम पर साथ निभाने के लिए...' 
                  : 'From holding our hands when we were little, to walking with us through every step of life...'}
              </p>
            </motion.div>
          </div>

          {/* Story 2 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '50px', flexWrap: 'wrap-reverse' }}>
            <motion.div 
              style={{ flex: '1 1 300px', textAlign: 'right' }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className={language === 'hi' ? 'hindi-text' : 'english-body'} style={{ fontSize: '1.2rem', color: 'var(--color-text-secondary)', lineHeight: '2' }}>
                {language === 'hi' 
                  ? 'आपके होने से ही हमारे घर में सुकून और गर्माहट है। आप हमारी सबसे बड़ी ताकत हैं।' 
                  : 'Your presence brings warmth and peace to our home. You are our greatest strength.'}
              </p>
            </motion.div>
            <motion.div 
              style={{ flex: '1 1 400px', y: yImage2 }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="glass-panel" style={{ padding: '15px', borderRadius: '4px' }}>
                <img 
                  src="/assets/ghibli_mother_tea.jpg" 
                  alt="Mother drinking tea" 
                  style={{ width: '100%', borderRadius: '2px' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GhibliStory;
