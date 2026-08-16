import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Heart, Sparkles, Utensils, Smile, Home, ChevronDown, Feather } from 'lucide-react';

const reasonsData = [
  {
    id: 1,
    icon: Smile,
    titleEn: 'Your Gentle Smile',
    titleHi: 'आपकी प्यारी मुस्कान',
    descEn: 'The way your laughter brightens every corner of our home and makes every cloudy day peaceful.',
    descHi: 'आपकी एक मुस्कान पूरे घर को रोशन कर देती है और हर मुश्किल पल को आसान बना देती है।'
  },
  {
    id: 2,
    icon: Utensils,
    titleEn: 'Food Made with Love',
    titleHi: 'आपके हाथ का जादुई स्वाद',
    descEn: 'No feast on Earth can ever beat the warmth and unconditional love in your cooking.',
    descHi: 'दुनिया का कोई भी व्यंजन आपके प्यार और ममता से बने खाने की बराबरी नहीं कर सकता।'
  },
  {
    id: 3,
    icon: Heart,
    titleEn: 'Endless Care & Blessings',
    titleHi: 'आपकी निस्वार्थ फिक्र',
    descEn: 'Always knowing what our hearts need before we even speak a single word.',
    descHi: 'हमारे बिना कुछ कहे ही दिल की बात जान लेना और हमेशा हमारी खुशियों के लिए दुआ करना।'
  },
  {
    id: 4,
    icon: Home,
    titleEn: 'The Soul of Our Family',
    titleHi: 'घर का सबसे मजबूत सहारा',
    descEn: 'Your presence is the anchor that holds our entire family together with love and grace.',
    descHi: 'आपके होने से ही घर में सुकून और खुशियाँ हैं। आप हमारे पूरे परिवार का सच्चा आशीर्वाद हैं।'
  }
];

const ShakerLoveNotes = () => {
  const { language } = useLanguage();
  const [activeReason, setActiveReason] = useState(null);

  const toggleReason = (id) => {
    setActiveReason(activeReason === id ? null : id);
  };

  return (
    <section style={{ padding: 'clamp(28px, 6vw, 48px) clamp(16px, 5vw, 36px)', borderTop: '2px dashed #C4A785' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <div style={{ marginBottom: '10px' }}>
          <div className="craft-stamp" style={{ transform: 'rotate(1deg)' }}>
            <Sparkles size={14} color="var(--ink-crimson)" />
            <span className={language === 'hi' ? 'font-kalam' : 'font-caveat'} style={{ fontSize: '1.2rem' }}>
              {language === 'hi' ? 'वेलम शेकर पॉकेट' : 'VELLUM SHAKER POCKET'}
            </span>
            <Sparkles size={14} color="var(--ink-crimson)" />
          </div>
        </div>

        <h2 
          className={language === 'hi' ? 'font-kalam' : 'font-caveat'}
          style={{
            fontSize: 'clamp(2.3rem, 6vw, 3.4rem)',
            color: 'var(--ink-navy)',
            marginBottom: '6px',
            fontWeight: 700
          }}
        >
          {language === 'hi' ? 'जो बातें आपको सबसे खास बनाती हैं' : 'Things We Adore About You'}
        </h2>

        <p 
          className={language === 'hi' ? 'font-kalam' : 'font-indie'}
          style={{
            fontSize: language === 'hi' ? '1.1rem' : '1.25rem',
            color: 'var(--ink-terracotta)'
          }}
        >
          {language === 'hi' ? '(कार्ड खोलने के लिए टैप करें ✨)' : '(Tap any shaker card to unfold its message ✨)'}
        </p>
      </div>

      {/* Shaker Pocket Card Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '20px',
        maxWidth: '720px',
        margin: '0 auto'
      }}>
        {reasonsData.map((item) => {
          const IconComp = item.icon;
          const isOpen = activeReason === item.id;

          return (
            <motion.div
              key={item.id}
              onClick={() => toggleReason(item.id)}
              whileHover={{ y: -4, scale: 1.02 }}
              style={{
                backgroundColor: isOpen ? '#FFFFFF' : 'var(--vellum-frosted)',
                backdropFilter: 'blur(10px)',
                border: isOpen ? '2px solid var(--ink-crimson)' : '1.5px dashed #C4A785',
                borderRadius: '12px',
                padding: '18px 20px',
                cursor: 'pointer',
                boxShadow: isOpen ? '0 14px 30px rgba(60, 40, 20, 0.16)' : '0 4px 12px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease',
                position: 'relative'
              }}
            >
              {/* Card Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    backgroundColor: isOpen ? 'rgba(231, 111, 81, 0.2)' : 'rgba(214, 194, 168, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid #D6C2A8'
                  }}>
                    <IconComp size={19} color="var(--ink-crimson)" />
                  </div>

                  <h3 
                    className={language === 'hi' ? 'font-kalam' : 'font-caveat'}
                    style={{
                      fontSize: language === 'hi' ? '1.25rem' : '1.85rem',
                      color: 'var(--ink-navy)',
                      fontWeight: 700
                    }}
                  >
                    {language === 'hi' ? item.titleHi : item.titleEn}
                  </h3>
                </div>

                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={20} color="var(--ink-crimson)" />
                </motion.div>
              </div>

              {/* Unfolded Note */}
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
                      className={language === 'hi' ? 'font-kalam' : 'font-indie'}
                      style={{
                        fontSize: language === 'hi' ? '1.05rem' : '1.15rem',
                        color: 'var(--ink-charcoal)',
                        lineHeight: 1.6,
                        borderTop: '1px dashed #D6C2A8',
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

export default ShakerLoveNotes;
