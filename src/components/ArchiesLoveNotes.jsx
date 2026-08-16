import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Heart, Sparkles, Utensils, Smile, Home, ChevronDown, Award, Gift } from 'lucide-react';

const couponsData = [
  {
    id: 1,
    icon: Smile,
    badgeEn: 'COUPON #01: UNLIMITED SMILES',
    badgeHi: 'कूपन #01: असीम मुस्कान',
    titleEn: 'The World’s Sweetest Smile',
    titleHi: 'आपकी सबसे प्यारी मुस्कान',
    descEn: 'Redeemable anytime for endless smiles! Your laughter brightens our entire home and makes every cloudy day sunny.',
    descHi: 'आपकी एक मुस्कान पूरे घर को रोशन कर देती है। जब आप मुस्कुराती हैं, तो घर का हर कोना खुशियों से भर जाता है।'
  },
  {
    id: 2,
    icon: Utensils,
    badgeEn: 'COUPON #02: CHEF OF THE YEAR',
    badgeHi: 'कूपन #02: सर्वश्रेष्ठ स्वाद',
    titleEn: '100% Love-Infused Food',
    titleHi: 'आपके हाथ का जादुई स्वाद',
    descEn: 'Valid for lifetime access to the tastiest food on Earth! No 5-star restaurant can ever beat Maa ke haath ka khana.',
    descHi: 'दुनिया का कोई भी शेफ आपके प्यार और ममता से बने खाने की बराबरी नहीं कर सकता। आपका हर निवाला अमृत है।'
  },
  {
    id: 3,
    icon: Heart,
    badgeEn: 'COUPON #03: UNCONDITIONAL CARE',
    badgeHi: 'कूपन #03: निस्वार्थ ममता',
    titleEn: 'Endless Care & Silent Prayers',
    titleHi: 'आपकी फिक्र और सच्ची दुआएँ',
    descEn: 'Understanding every unsaid emotion, always putting our dreams before your own with endless grace.',
    descHi: 'हमारे बिना कहे ही सब समझ जाना और हमेशा हमारी खुशियों और सेहत के लिए रब से दुआएँ माँगना।'
  },
  {
    id: 4,
    icon: Home,
    badgeEn: 'COUPON #04: THE QUEEN CROWN',
    badgeHi: 'कूपन #04: घर की रानी',
    titleEn: 'The Heart & Soul of Our Home',
    titleHi: 'हमारे परिवार की मजबूत नींव',
    descEn: 'The anchor that keeps us united, strong, and blessed. Without you, this house would never be home!',
    descHi: 'आपके होने से ही घर में सुकून और खुशियाँ हैं। आप हमारे पूरे परिवार का गौरव और सबसे अनमोल आशीर्वाद हैं।'
  }
];

const ArchiesLoveNotes = () => {
  const { language } = useLanguage();
  const [activeCoupon, setActiveCoupon] = useState(null);

  const toggleCoupon = (id) => {
    setActiveCoupon(activeCoupon === id ? null : id);
  };

  return (
    <section style={{ padding: 'clamp(28px, 6vw, 48px) clamp(16px, 5vw, 36px)', borderTop: '2px dashed rgba(217, 37, 70, 0.25)' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <div style={{ marginBottom: '10px' }}>
          <div className="archies-badge">
            <Gift size={14} color="#FFFDF9" />
            <span>{language === 'hi' ? 'प्यार के कूपन्स' : "LIFETIME LOVE COUPONS"}</span>
            <Heart size={14} fill="#FFDF79" color="#FFDF79" />
          </div>
        </div>

        <h2 
          className={language === 'hi' ? 'font-hindi' : 'font-serif'}
          style={{
            fontSize: 'clamp(1.9rem, 5vw, 2.8rem)',
            color: 'var(--archies-red-deep)',
            marginBottom: '8px',
            fontWeight: 800
          }}
        >
          {language === 'hi' ? 'माँ के लिए खास लव कूपन्स' : 'Things We Adore About You'}
        </h2>

        <p 
          className={language === 'hi' ? 'font-hindi' : 'font-cormorant'}
          style={{
            fontSize: '1.1rem',
            color: 'var(--text-muted)',
            fontStyle: language === 'en' ? 'italic' : 'normal'
          }}
        >
          {language === 'hi' ? '(खोलने के लिए कूपन पर टैप करें ✨)' : '(Tap any coupon to unfold the secret message ✨)'}
        </p>
      </div>

      {/* Love Coupons Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '20px',
        maxWidth: '720px',
        margin: '0 auto'
      }}>
        {couponsData.map((item) => {
          const IconComp = item.icon;
          const isOpen = activeCoupon === item.id;

          return (
            <motion.div
              key={item.id}
              onClick={() => toggleCoupon(item.id)}
              whileHover={{ y: -4, scale: 1.02 }}
              style={{
                backgroundColor: isOpen ? '#FFFFFF' : 'var(--archies-peach-soft)',
                border: isOpen ? '2px solid var(--archies-red)' : '1.5px dashed rgba(217, 37, 70, 0.4)',
                borderRadius: '14px',
                padding: '20px',
                cursor: 'pointer',
                boxShadow: isOpen ? '0 14px 30px rgba(217, 37, 70, 0.18)' : '0 6px 16px rgba(0,0,0,0.04)',
                transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Badge Tag */}
              <div style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                color: 'var(--archies-red)',
                letterSpacing: '0.08em',
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                <Sparkles size={11} color="var(--archies-gold)" />
                <span>{language === 'hi' ? item.badgeHi : item.badgeEn}</span>
              </div>

              {/* Title row */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    backgroundColor: isOpen ? 'var(--archies-pink-soft)' : '#FFFFFF',
                    border: '1px solid rgba(217, 37, 70, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.05)'
                  }}>
                    <IconComp size={19} color="var(--archies-red)" />
                  </div>

                  <h3 
                    className={language === 'hi' ? 'font-hindi' : 'font-serif'}
                    style={{
                      fontSize: '1.15rem',
                      color: 'var(--archies-red-deep)',
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
                  <ChevronDown size={20} color="var(--archies-red)" />
                </motion.div>
              </div>

              {/* Expanded Description */}
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
                        borderTop: '1px dashed rgba(217, 37, 70, 0.25)',
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

export default ArchiesLoveNotes;
