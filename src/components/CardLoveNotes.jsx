import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Heart, Sparkles, Utensils, Smile, Home, ChevronDown } from 'lucide-react';

const notesData = [
  {
    id: 1,
    icon: Smile,
    titleEn: 'Your Radiant Smile',
    titleHi: 'आपकी प्यारी मुस्कान',
    descEn: 'The way your smile brightens our entire home and makes every worry vanish.',
    descHi: 'आपकी एक मुस्कान पूरे घर को रोशन कर देती है और सारी परेशानियाँ मिटा देती है।'
  },
  {
    id: 2,
    icon: Utensils,
    titleEn: 'Your Loving Food',
    titleHi: 'आपके हाथ का स्वाद',
    descEn: 'Every meal you make is infused with pure love, warmth, and comfort.',
    descHi: 'दुनिया का कोई भी खाना आपके हाथ के बने खाने के स्वाद और ममता की बराबरी नहीं कर सकता।'
  },
  {
    id: 3,
    icon: Heart,
    titleEn: 'Your Endless Care',
    titleHi: 'आपकी निस्वार्थ फिक्र',
    descEn: 'Always understanding our unsaid words and putting our happiness first.',
    descHi: 'हमारे बिना कुछ कहे ही सब समझ जाना और हमेशा हमारी खुशियों को सबसे आगे रखना।'
  },
  {
    id: 4,
    icon: Home,
    titleEn: 'The Heart of Our Home',
    titleHi: 'घर की सच्ची रौनक',
    descEn: 'Your presence is the peace, joy, and anchor that keeps our family bound together.',
    descHi: 'आपके होने से ही घर में सुकून और खुशियाँ हैं। आप हमारे परिवार की सबसे मजबूत नींव हैं।'
  }
];

const CardLoveNotes = () => {
  const { language } = useLanguage();
  const [activeNote, setActiveNote] = useState(null);

  const toggleNote = (id) => {
    setActiveNote(activeNote === id ? null : id);
  };

  return (
    <section style={{ padding: 'clamp(28px, 6vw, 48px) clamp(16px, 5vw, 36px)', borderTop: '1px dashed rgba(212, 175, 55, 0.3)' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          color: 'var(--gold-dark)',
          marginBottom: '8px'
        }}>
          <Sparkles size={16} color="#D4AF37" />
          <span 
            className={language === 'hi' ? 'font-hindi' : 'font-serif'}
            style={{ fontSize: '0.85rem', letterSpacing: '0.12em', fontWeight: 600 }}
          >
            {language === 'hi' ? 'हमारा प्यार' : 'LITTLE TREASURES'}
          </span>
        </div>

        <h2 
          className={language === 'hi' ? 'font-hindi' : 'font-serif'}
          style={{
            fontSize: 'clamp(1.9rem, 5vw, 2.7rem)',
            color: 'var(--wine-deep)',
            marginBottom: '8px',
            fontWeight: 700
          }}
        >
          {language === 'hi' ? 'जो बातें आपको सबसे खास बनाती हैं' : 'Things We Love About You'}
        </h2>

        <p 
          className={language === 'hi' ? 'font-hindi' : 'font-cormorant'}
          style={{
            fontSize: '1.05rem',
            color: 'var(--text-muted)',
            fontStyle: language === 'en' ? 'italic' : 'normal'
          }}
        >
          {language === 'hi' ? '(पढ़ने के लिए कार्ड पर टैप करें ✨)' : '(Tap any card to reveal message ✨)'}
        </p>
      </div>

      {/* Love Note Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '18px',
        maxWidth: '700px',
        margin: '0 auto'
      }}>
        {notesData.map((item) => {
          const IconComp = item.icon;
          const isOpen = activeNote === item.id;

          return (
            <motion.div
              key={item.id}
              onClick={() => toggleNote(item.id)}
              whileHover={{ y: -3 }}
              style={{
                backgroundColor: isOpen ? '#FFFFFF' : 'var(--bg-card-parchment)',
                border: isOpen ? '1.5px solid #D4AF37' : '1px solid rgba(212, 175, 55, 0.35)',
                borderRadius: '10px',
                padding: '18px 20px',
                cursor: 'pointer',
                boxShadow: isOpen ? '0 12px 28px rgba(212, 175, 55, 0.18)' : '0 4px 12px rgba(0,0,0,0.04)',
                transition: 'all 0.3s ease',
                position: 'relative'
              }}
            >
              {/* Header row */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: isOpen ? 'var(--rose-blush)' : 'rgba(212, 175, 55, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <IconComp size={18} color="var(--wine-primary)" />
                  </div>

                  <h3 
                    className={language === 'hi' ? 'font-hindi' : 'font-serif'}
                    style={{
                      fontSize: '1.1rem',
                      color: 'var(--wine-deep)',
                      fontWeight: 600
                    }}
                  >
                    {language === 'hi' ? item.titleHi : item.titleEn}
                  </h3>
                </div>

                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={18} color="var(--gold-dark)" />
                </motion.div>
              </div>

              {/* Expandable Message */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                    animate={{ height: 'auto', opacity: 1, marginTop: 14 }}
                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p 
                      className={language === 'hi' ? 'font-hindi' : 'font-sans'}
                      style={{
                        fontSize: '0.95rem',
                        color: 'var(--text-muted)',
                        lineHeight: 1.65,
                        borderTop: '1px solid rgba(212, 175, 55, 0.2)',
                        paddingTop: '12px'
                      }}
                    >
                      {language === 'hi' ? item.descHi : item.descEn}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default CardLoveNotes;
