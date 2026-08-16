import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Heart, Sparkles, Utensils, Smile, Home, ChevronDown, Feather, Star } from 'lucide-react';

const reasonsData = [
  {
    id: 1,
    icon: Smile,
    badge: "FROM TOSHI",
    badgeHi: "Toshi की तरफ से",
    titleEn: 'Your Gentle Smile',
    titleHi: 'आपकी प्यारी मुस्कान',
    descEn: 'The way your laughter brightens every corner of our home and makes every cloudy day peaceful.',
    descHi: 'आपकी एक मुस्कान पूरे घर को रोशन कर देती है और हर मुश्किल पल को आसान बना देती है।',
    image: '/assets/me_mother2.jpg',
    color: '#800020'
  },
  {
    id: 2,
    icon: Utensils,
    badge: "MUMMA'S MAGIC",
    badgeHi: "Mumma के हाथ का जादू",
    titleEn: 'Food Made with Love',
    titleHi: 'आपके हाथ का जादुई स्वाद',
    descEn: 'No feast on Earth can ever beat the warmth, aroma, and unconditional love in your cooking.',
    descHi: 'दुनिया का कोई भी व्यंजन आपके प्यार और ममता से बने खाने की बराबरी नहीं कर सकता।',
    image: '/assets/mother_father.jpg',
    color: '#E8871C'
  },
  {
    id: 3,
    icon: Heart,
    badge: "FROM PAPA & FAMILY",
    badgeHi: "पापा और परिवार का प्यार",
    titleEn: 'Endless Care & Blessings',
    titleHi: 'आपकी निस्वार्थ फिक्र',
    descEn: 'Always knowing what our hearts need before we even speak a single word.',
    descHi: 'हमारे बिना कुछ कहे ही दिल की बात जान लेना और हमेशा हमारी खुशियों के लिए दुआ करना।',
    image: '/assets/me_mother3.jpg',
    color: '#C0392B'
  },
  {
    id: 4,
    icon: Home,
    badge: "THE ANCHOR",
    badgeHi: "घर का मुख्य आधार",
    titleEn: 'The Soul of Our Family',
    titleHi: 'घर का सबसे मजबूत सहारा',
    descEn: 'Your presence is the anchor that holds our entire family together with love and grace.',
    descHi: 'आपके होने से ही घर में सुकून और खुशियाँ हैं। आप हमारे पूरे परिवार का सच्चा आशीर्वाद हैं।',
    image: '/assets/mother_father2.jpg',
    color: '#B8860B'
  },
  {
    id: 5,
    icon: Star,
    badge: "TOSHI'S PROMISE",
    badgeHi: "Toshi का वादा",
    titleEn: 'Always Keeping You Happy',
    titleHi: 'सदा आपकी मुस्कान का ख्याल',
    descEn: 'Toshi promises to cherish, respect, and keep you smiling every single day of our lives.',
    descHi: 'Toshi वादा करती है कि आपकी मुस्कान और खुशियों का ख्याल हमेशा अपनी जान से बढ़कर रखेगी।',
    image: '/assets/me_mother7.jpg',
    color: '#7A9E7E'
  }
];

const ScrapbookPocketNotes = () => {
  const { language } = useLanguage();
  const [activeReason, setActiveReason] = useState(null);

  const toggleReason = (id) => {
    setActiveReason(activeReason === id ? null : id);
  };

  return (
    <section style={{ padding: 'clamp(32px, 6vw, 56px) clamp(16px, 5vw, 36px)', borderTop: '2px dashed #BD9E78' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
        <div style={{ marginBottom: '12px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '20px',
            backgroundColor: 'rgba(255, 240, 240, 0.7)',
            border: '1.5px dashed #800020'
          }}>
            <Feather size={15} color="#800020" />
            <span className={language === 'hi' ? 'font-kalam' : 'font-caveat'} style={{ fontSize: '1.25rem', color: '#800020', fontWeight: 700 }}>
              {language === 'hi' ? 'प्यार भरी पर्चियाँ (Love Slips)' : 'POCKET OF LOVE SLIPS FOR MUMMA'}
            </span>
            <Sparkles size={14} color="#800020" />
          </div>
        </div>

        <h2 
          className={language === 'hi' ? 'font-hindi' : 'font-serif'}
          style={{
            fontSize: 'clamp(2.3rem, 6vw, 3.4rem)',
            color: '#570013',
            marginBottom: '6px',
            fontWeight: 800
          }}
        >
          {language === 'hi' ? 'जो बातें आपको सबसे खास बनाती हैं' : 'Things Toshi Adores About You'}
        </h2>

        <p 
          className={language === 'hi' ? 'font-kalam' : 'font-serif'}
          style={{
            fontSize: language === 'hi' ? '1.15rem' : '1.35rem',
            fontStyle: 'italic',
            color: '#77574d'
          }}
        >
          {language === 'hi' ? '(लिफ़ाफ़े से पर्ची बाहर निकालने के लिए टैप करें 💌)' : '(Tap any slip to pull out the secret note & photo 💌)'}
        </p>
      </div>

      {/* Craft Pocket Container */}
      <div style={{
        maxWidth: '780px',
        margin: '0 auto',
        backgroundColor: '#F5EDD8',
        borderRadius: '16px',
        border: '2.5px dashed #A07447',
        padding: '28px 24px',
        boxShadow: '0 16px 40px rgba(60, 40, 20, 0.15)',
        position: 'relative'
      }}>
        {/* Pocket Top Ribbon Accent */}
        <div style={{
          position: 'absolute',
          top: '-12px',
          left: '50%',
          transform: 'translateX(-50%)',
          padding: '4px 16px',
          backgroundColor: '#800020',
          color: '#FFFFFF',
          borderRadius: '4px',
          fontSize: '11px',
          fontWeight: 700,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
        }}>
          {language === 'hi' ? 'विशेष संदेश पर्चियाँ' : 'HANDWRITTEN SLIPS FOR MUMMA'}
        </div>

        {/* Pocket Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px',
          marginTop: '10px'
        }}>
          {reasonsData.map((item) => {
            const IconComp = item.icon;
            const isOpen = activeReason === item.id;

            return (
              <motion.div
                key={item.id}
                onClick={() => toggleReason(item.id)}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  backgroundColor: isOpen ? '#FFFDF9' : '#FAF6EC',
                  border: isOpen ? `2px solid ${item.color}` : '1.5px solid #D6C2A8',
                  borderRadius: '12px',
                  padding: '20px 18px',
                  cursor: 'pointer',
                  boxShadow: isOpen ? '0 12px 30px rgba(60, 40, 20, 0.18)' : '0 6px 16px rgba(0,0,0,0.06)',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}
              >
                {/* Badge Tag */}
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  left: '16px',
                  padding: '2px 10px',
                  backgroundColor: item.color,
                  color: '#FFFFFF',
                  fontSize: '9px',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  borderRadius: '3px'
                }}>
                  {language === 'hi' ? item.badgeHi : item.badge}
                </div>

                {/* Slip Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', marginTop: '4px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      backgroundColor: `${item.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: `1.5px solid ${item.color}`
                    }}>
                      <IconComp size={19} color={item.color} />
                    </div>

                    <h3 
                      className={language === 'hi' ? 'font-kalam' : 'font-caveat'}
                      style={{
                        fontSize: language === 'hi' ? '1.25rem' : '1.75rem',
                        color: '#2C1A0E',
                        fontWeight: 700,
                        margin: 0
                      }}
                    >
                      {language === 'hi' ? item.titleHi : item.titleEn}
                    </h3>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={20} color={item.color} />
                  </motion.div>
                </div>

                {/* Expanded Note & Photo */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: 'auto', opacity: 1, marginTop: 14 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      {item.image && (
                        <div style={{
                          marginBottom: '12px',
                          borderRadius: '6px',
                          overflow: 'hidden',
                          border: `1.5px solid ${item.color}`,
                          backgroundColor: '#FAF6EC',
                          padding: '4px'
                        }}>
                          <img 
                            src={item.image} 
                            alt={item.titleEn}
                            style={{ maxWidth: '100%', maxHeight: '180px', width: 'auto', height: 'auto', objectFit: 'contain', display: 'block', margin: '0 auto', borderRadius: '4px' }}
                          />
                        </div>
                      )}

                      <p 
                        className={language === 'hi' ? 'font-kalam' : 'font-caveat'}
                        style={{
                          fontSize: language === 'hi' ? '1.15rem' : '1.5rem',
                          color: '#570013',
                          lineHeight: 1.6,
                          borderTop: '1px dashed #D6C2A8',
                          paddingTop: '12px',
                          margin: 0,
                          fontWeight: 700
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
      </div>
    </section>
  );
};

export default ScrapbookPocketNotes;
