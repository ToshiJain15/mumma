import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Camera, X, Heart, Sparkles, SlidersHorizontal, Eye } from 'lucide-react';

const memoriesData = [
  {
    id: 1,
    src: 'assets/mother_daughter_braid.jpg',
    captionEn: 'Braiding Hair, Weaving Memories',
    captionHi: 'बचपन में बालों की चोटी और प्यार भरी बातें',
    secretEn: 'Remember how you used to braid my hair every morning with so much patience and sweet scoldings?',
    secretHi: 'याद है माँ, बचपन में आप कितनी फुर्सत से मेरी चोटी बनाती थीं और दुनिया भर की बातें सिखाती थीं!',
    rotate: -2.5,
    isArt: true
  },
  {
    id: 2,
    src: 'assets/DSC_9568.JPG',
    captionEn: 'Your Gentle & Radiant Glow',
    captionHi: 'आपकी प्यारी सी खिली हुई मुस्कान',
    secretEn: 'Your elegance and peace illuminate our entire world.',
    secretHi: 'आपकी सादगी और मुस्कान हमारा सबसे बड़ा सुकून है।',
    rotate: 2.2,
    isArt: false
  },
  {
    id: 3,
    src: 'assets/mother_daughter_chai.jpg',
    captionEn: 'Our Special Evening Chai Talks',
    captionHi: 'शाम की चाय और आपकी मीठी बातें',
    secretEn: 'My favorite part of the day is sitting with you, sharing a warm cup of chai and all my heart.',
    secretHi: 'आपके साथ बैठकर चाय पीना और दिल की सारी बातें करना, मेरा दिन का सबसे पसंदीदा पल है।',
    rotate: -1.8,
    isArt: true
  },
  {
    id: 4,
    src: 'assets/IMG-20260104-WA0123.jpg',
    captionEn: 'Family Moments Full of Joy',
    captionHi: 'परिवार के साथ हँसते-खिलखिलाते पल',
    secretEn: 'Every smile in this photo is because of your love and warmth!',
    secretHi: 'इस तस्वीर की हर मुस्कान आपकी ममता की वजह से है!',
    rotate: 2.4,
    isArt: false
  },
  {
    id: 5,
    src: 'assets/IMG-20260104-WA0133.jpg',
    captionEn: 'Laughter, Fun & Boundless Love',
    captionHi: 'ढेर सारा प्यार और खुशियाँ',
    secretEn: 'These laughing moments with you are our biggest treasures.',
    secretHi: 'आपके साथ बिताए ये हँसी के पल हमारी सबसे बड़ी दौलत हैं।',
    rotate: -2.2,
    isArt: false
  },
  {
    id: 6,
    src: 'assets/20230514_090841-COLLAGE.jpg',
    captionEn: 'A Scrapbook of Lifelong Love',
    captionHi: 'यादों का एक प्यारा सा गुलदस्ता',
    secretEn: 'A lifetime of memories, and countless more yet to come!',
    secretHi: 'यादों का यह गुलदस्ता हमेशा ऐसे ही महकता रहे!',
    rotate: 1.8,
    isArt: false
  }
];

const SliderScrapbook = () => {
  const { language } = useLanguage();
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [pulledTabs, setPulledTabs] = useState({});

  const toggleTab = (e, id) => {
    e.stopPropagation();
    setPulledTabs(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section style={{ padding: 'clamp(28px, 6vw, 48px) clamp(16px, 5vw, 36px)', borderTop: '2px dashed #C4A785' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '34px' }}>
        <div style={{ marginBottom: '10px' }}>
          <div className="craft-stamp" style={{ transform: 'rotate(-1deg)' }}>
            <SlidersHorizontal size={14} color="var(--ink-crimson)" />
            <span className={language === 'hi' ? 'font-kalam' : 'font-caveat'} style={{ fontSize: '1.2rem' }}>
              {language === 'hi' ? 'माँ-बेटी का स्क्रैपबुक' : 'MOTHER-DAUGHTER SCRAPBOOK'}
            </span>
          </div>
        </div>

        <h2 
          className={language === 'hi' ? 'font-kalam' : 'font-caveat'}
          style={{
            fontSize: 'clamp(2.4rem, 6.5vw, 3.5rem)',
            color: 'var(--ink-navy)',
            marginBottom: '6px',
            fontWeight: 700
          }}
        >
          {language === 'hi' ? 'हमारी यादों की प्यारी सी डायरी' : 'Our Story, Chapter by Chapter'}
        </h2>

        <p 
          className={language === 'hi' ? 'font-kalam' : 'font-indie'}
          style={{
            fontSize: language === 'hi' ? '1.1rem' : '1.25rem',
            color: 'var(--ink-terracotta)'
          }}
        >
          {language === 'hi' ? '(छुपी हुई यादों के लिए लाल टैब खींचें 🏷️✨)' : '(Pull the red tab on any memory to unfold the secret story 🏷️✨)'}
        </p>
      </div>

      {/* Scrapbook Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: 'clamp(24px, 4vw, 34px)',
        alignItems: 'start'
      }}>
        {memoriesData.map((item, idx) => {
          const isPulled = pulledTabs[item.id];

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => setSelectedPhoto(item)}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '8px',
                padding: '12px 12px 28px 12px',
                boxShadow: '0 12px 30px rgba(60, 40, 20, 0.16)',
                border: '1.5px solid #D6C2A8',
                transform: `rotate(${item.rotate}deg)`,
                cursor: 'pointer',
                position: 'relative',
                overflow: 'visible',
                transition: 'transform 0.35s ease, box-shadow 0.35s ease'
              }}
            >
              {/* Washi Tape Strip */}
              <div className="craft-washi-tape" style={{
                top: '-12px',
                left: '50%',
                transform: 'translateX(-50%) rotate(-1deg)',
                width: '85px'
              }} />

              {/* Photo */}
              <div style={{
                overflow: 'hidden',
                borderRadius: '4px',
                backgroundColor: '#F5EFE6',
                aspectRatio: '4/3',
                marginBottom: '10px',
                border: '1px solid #E2D2BC'
              }}>
                <img 
                  src={item.src} 
                  alt={language === 'hi' ? item.captionHi : item.captionEn}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </div>

              {/* Caption */}
              <p 
                className={language === 'hi' ? 'font-kalam' : 'font-caveat'}
                style={{
                  fontSize: language === 'hi' ? '1.1rem' : '1.6rem',
                  color: 'var(--ink-navy)',
                  textAlign: 'center',
                  lineHeight: 1.25,
                  fontWeight: 700
                }}
              >
                {language === 'hi' ? item.captionHi : item.captionEn}
              </p>

              {/* Pull-Tab Slider Button */}
              <div style={{ marginTop: '8px', display: 'flex', justifyContent: 'center' }}>
                <button
                  onClick={(e) => toggleTab(e, item.id)}
                  style={{
                    background: isPulled ? 'var(--ink-navy)' : 'var(--ink-crimson)',
                    color: '#FFFFFF',
                    padding: '4px 14px',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <span className={language === 'hi' ? 'font-kalam' : 'font-sans'}>
                    {isPulled ? (language === 'hi' ? 'छुपाएं ✕' : 'Hide Story ✕') : (language === 'hi' ? 'कहानी खींचें 🏷️' : 'Pull Story 🏷️')}
                  </span>
                </button>
              </div>

              {/* Secret Pull-Out Note */}
              <AnimatePresence>
                {isPulled && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div style={{
                      marginTop: '10px',
                      padding: '10px',
                      backgroundColor: 'var(--kraft-light)',
                      border: '1.5px dashed #A07447',
                      borderRadius: '6px'
                    }}>
                      <p 
                        className={language === 'hi' ? 'font-kalam' : 'font-indie'}
                        style={{
                          fontSize: language === 'hi' ? '1rem' : '1.15rem',
                          color: 'var(--ink-charcoal)',
                          lineHeight: 1.4,
                          textAlign: 'center',
                          fontWeight: 600
                        }}
                      >
                        {language === 'hi' ? item.secretHi : item.secretEn}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 2000,
              backgroundColor: 'rgba(25, 14, 8, 0.92)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px'
            }}
          >
            <motion.div
              initial={{ scale: 0.88, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.88, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '650px',
                width: '100%',
                backgroundColor: '#FFFDF9',
                padding: '18px 18px 24px 18px',
                borderRadius: '12px',
                boxShadow: '0 30px 80px rgba(0,0,0,0.7)',
                border: '3px solid #C4A785',
                position: 'relative'
              }}
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'var(--ink-crimson)',
                  color: '#fff',
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 10
                }}
                aria-label="Close"
              >
                <X size={18} />
              </button>

              <img 
                src={selectedPhoto.src} 
                alt="Enlarged memory"
                style={{
                  width: '100%',
                  maxHeight: '75vh',
                  objectFit: 'contain',
                  borderRadius: '6px',
                  marginBottom: '14px',
                  border: '1px solid #E2D2BC'
                }}
              />

              <div style={{ textAlign: 'center' }}>
                <p 
                  className={language === 'hi' ? 'font-kalam' : 'font-caveat'}
                  style={{
                    fontSize: language === 'hi' ? '1.25rem' : '1.9rem',
                    color: 'var(--ink-navy)',
                    fontWeight: 700
                  }}
                >
                  {language === 'hi' ? selectedPhoto.captionHi : selectedPhoto.captionEn}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SliderScrapbook;
