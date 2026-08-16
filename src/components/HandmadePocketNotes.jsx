import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Heart, Sparkles, Utensils, Smile, Home, ChevronDown, Feather } from 'lucide-react';

const pocketSlips = [
  {
    id: 1,
    icon: Smile,
    titleEn: 'Your Gentle Smile',
    titleHi: 'आपकी प्यारी सी मुस्कान',
    descEn: 'Your smile lights up every corner of our home and makes every heavy day feel light and joyful.',
    descHi: 'आपकी एक मुस्कान पूरे घर को रोशन कर देती है। जब आप मुस्कुराती हैं, तो सारी परेशानियाँ दूर हो जाती हैं।'
  },
  {
    id: 2,
    icon: Utensils,
    titleEn: 'Food Made with Love',
    titleHi: 'आपके हाथ का जादुई स्वाद',
    descEn: 'No dish in the world can ever match the pure love and comfort cooked into your food.',
    descHi: 'दुनिया का कोई भी खाना आपके हाथ के बने खाने की ममता और स्वाद की बराबरी कभी नहीं कर सकता।'
  },
  {
    id: 3,
    icon: Heart,
    titleEn: 'Endless Care & Blessings',
    titleHi: 'आपकी निस्वार्थ फिक्र',
    descEn: 'Always understanding our silent thoughts, caring for us before yourself every single moment.',
    descHi: 'हमारे बिना कहे ही दिल की बात जान लेना और हमेशा हमारी खुशियों को अपनी खुशियों से आगे रखना।'
  },
  {
    id: 4,
    icon: Home,
    titleEn: 'The Anchor of Our Home',
    titleHi: 'घर की जान और सुकून',
    descEn: 'Your warmth, patience, and presence keep our entire family united and blessed.',
    descHi: 'आपके होने से ही यह घर, घर लगता है। आप हमारे पूरे परिवार का सबसे अनमोल और सच्चा सहारा हैं।'
  }
];

const HandmadePocketNotes = () => {
  const { language } = useLanguage();
  const [activeSlip, setActiveSlip] = useState(null);

  const toggleSlip = (id) => {
    setActiveSlip(activeSlip === id ? null : id);
  };

  return (
    <section style={{ padding: 'clamp(28px, 6vw, 48px) clamp(16px, 5vw, 36px)', borderTop: '2px dashed #C9A882' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <div style={{ marginBottom: '10px' }}>
          <div className="craft-stamp" style={{ transform: 'rotate(1deg)' }}>
            <Feather size={15} color="var(--ink-crimson)" />
            <span className={language === 'hi' ? 'font-kalam' : 'font-caveat'} style={{ fontSize: '1.15rem' }}>
              {language === 'hi' ? 'प्यार भरी पर्चियाँ' : 'POCKET OF LOVE SLIPS'}
            </span>
          </div>
        </div>

        <h2 
          className={language === 'hi' ? 'font-kalam' : 'font-caveat'}
          style={{
            fontSize: 'clamp(2.3rem, 6vw, 3.4rem)',
            color: 'var(--ink-blue)',
            marginBottom: '6px',
            fontWeight: 700
          }}
        >
          {language === 'hi' ? 'वो बातें जो हमें बेहद पसंद हैं' : 'Things We Love About You'}
        </h2>

        <p 
          className={language === 'hi' ? 'font-kalam' : 'font-indie'}
          style={{
            fontSize: language === 'hi' ? '1.1rem' : '1.25rem',
            color: 'var(--ink-pencil)'
          }}
        >
          {language === 'hi' ? '(पर्ची बाहर निकालने के लिए टैप करें 💌)' : '(Tap any paper slip to pull it out 💌)'}
        </p>
      </div>

      {/* Pocket Paper Slips */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '18px',
        maxWidth: '720px',
        margin: '0 auto'
      }}>
        {pocketSlips.map((item) => {
          const IconComp = item.icon;
          const isOpen = activeSlip === item.id;

          return (
            <motion.div
              key={item.id}
              onClick={() => toggleSlip(item.id)}
              whileHover={{ y: -4 }}
              style={{
                backgroundColor: isOpen ? '#FFFFFF' : 'var(--paper-white)',
                border: isOpen ? '2px solid var(--ink-crimson)' : '1.5px dashed #CBB396',
                borderRadius: '8px',
                padding: '18px 20px',
                cursor: 'pointer',
                boxShadow: isOpen ? '0 12px 28px rgba(60, 40, 20, 0.16)' : '0 4px 12px rgba(0,0,0,0.04)',
                transition: 'all 0.3s ease',
                position: 'relative'
              }}
            >
              {/* Slip Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: isOpen ? 'rgba(244, 162, 97, 0.25)' : 'rgba(200, 180, 150, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <IconComp size={18} color="var(--ink-crimson)" />
                  </div>

                  <h3 
                    className={language === 'hi' ? 'font-kalam' : 'font-caveat'}
                    style={{
                      fontSize: language === 'hi' ? '1.25rem' : '1.85rem',
                      color: 'var(--ink-blue)',
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

              {/* Unfolded Message */}
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

export default HandmadePocketNotes;
