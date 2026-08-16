import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const things = [
  {
    titleEn: "Your Smile",
    titleHi: "आपकी मुस्कान",
    descEn: "It instantly lights up our entire home and makes everything feel right.",
    descHi: "जो पूरे घर को रोशन कर देती है।"
  },
  {
    titleEn: "Your Food",
    titleHi: "आपके हाथ का खाना",
    descEn: "No restaurant in the world can match the taste of what you make with love.",
    descHi: "दुनिया में सबसे स्वादिष्ट।"
  },
  {
    titleEn: "Your Patience",
    titleHi: "आपका धैर्य",
    descEn: "How you handle all of our chaos with so much calm.",
    descHi: "जिससे आप हम सबको संभालती हैं।"
  },
  {
    titleEn: "Your Endless Care",
    titleHi: "आपकी फिक्र",
    descEn: "Even before we know we need something, you already have it ready.",
    descHi: "हमारे बिना कहे ही सब समझ जाना।"
  }
];

const LittleThings = () => {
  const { language } = useLanguage();
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section style={{ padding: '150px 20px', position: 'relative' }}>
      <div className="content-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <h2 className="english-heading" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--color-text-primary)', marginBottom: '15px' }}>
            {language === 'hi' ? 'छोटी-छोटी बातें जो हमें बहुत पसंद हैं' : 'Little Things We Love About You'}
          </h2>
          <div style={{ width: '40px', height: '1px', background: 'var(--color-accent-gold)', margin: '0 auto 20px' }} />
          <p className="english-heading" style={{ color: 'var(--color-text-light)', fontStyle: 'italic', letterSpacing: '0.05em' }}>
            {language === 'hi' ? '(खोलने के लिए क्लिक करें)' : '(Tap to reveal)'}
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', maxWidth: '700px', margin: '0 auto' }}>
          {things.map((thing, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setActiveCard(activeCard === index ? null : index)}
              className="glass-panel"
              style={{
                padding: '30px',
                cursor: 'pointer',
                borderLeft: '2px solid var(--color-accent-gold)',
                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.6)' }}
            >
              <h3 
                className={language === 'hi' ? 'hindi-text' : 'english-heading'}
                style={{ fontSize: '1.6rem', color: 'var(--color-text-primary)' }}
              >
                {language === 'hi' ? thing.titleHi : thing.titleEn}
              </h3>
              
              <AnimatePresence>
                {activeCard === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p 
                      className={language === 'hi' ? 'hindi-text' : 'english-body'}
                      style={{ 
                        color: 'var(--color-text-secondary)', 
                        fontSize: '1.1rem', 
                        marginTop: '20px',
                        paddingTop: '20px',
                        borderTop: '1px solid var(--color-border-glass)'
                      }}
                    >
                      {language === 'hi' ? thing.descHi : thing.descEn}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LittleThings;
