import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Scissors, Heart, Sparkles } from 'lucide-react';

const ScrapbookCover = ({ onOpen }) => {
  const { language } = useLanguage();
  const [isOpened, setIsOpened] = useState(false);

  const handleOpenClick = () => {
    setIsOpened(true);
    setTimeout(() => {
      onOpen();
    }, 1600);
  };

  return (
    <AnimatePresence>
      {!isOpened && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 1.4, delay: 0.2 } 
          }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
            background: 'radial-gradient(circle at 50% 30%, #3D2619 0%, #1A0F08 85%, #0C0603 100%)',
            perspective: '1600px'
          }}
        >
          {/* Ambient Pressed Petals */}
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
            {[...Array(18)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: `${Math.random() * 100}vw`, 
                  y: `${Math.random() * 100}vh`, 
                  opacity: 0,
                  rotate: Math.random() * 360
                }}
                animate={{ 
                  y: ['0vh', '-20vh'], 
                  opacity: [0, 0.75, 0],
                  rotate: Math.random() * 180
                }}
                transition={{ 
                  duration: 6 + Math.random() * 5, 
                  repeat: Infinity, 
                  delay: Math.random() * 3,
                  ease: "easeInOut"
                }}
                style={{
                  position: 'absolute',
                  width: `${Math.random() * 10 + 6}px`,
                  height: `${Math.random() * 10 + 6}px`,
                  borderRadius: i % 2 === 0 ? '50%' : '3px',
                  backgroundColor: i % 3 === 0 ? '#E0CEB5' : (i % 3 === 1 ? '#C85A32' : '#F5C6B5'),
                  opacity: 0.8
                }}
              />
            ))}
          </div>

          {/* 3D Gatefold Scrapbook Cover Container */}
          <div style={{
            width: '100%',
            maxWidth: '560px',
            height: 'clamp(530px, 80vh, 670px)',
            position: 'relative',
            display: 'flex',
            transformStyle: 'preserve-3d'
          }}>
            {/* Left Gatefold Door */}
            <motion.div
              initial={{ rotateY: 0 }}
              animate={isOpened ? { rotateY: -115 } : { rotateY: 0 }}
              transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1] }}
              style={{
                width: '50%',
                height: '100%',
                backgroundColor: 'var(--kraft-base)',
                borderTopLeftRadius: '18px',
                borderBottomLeftRadius: '18px',
                border: '3px solid #BD9E78',
                borderRight: '1.5px dashed #7D6142',
                boxShadow: 'var(--shadow-layered-paper)',
                transformOrigin: 'left center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '24px 16px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Stitched Border */}
              <div style={{
                position: 'absolute',
                inset: '8px',
                border: '2px dashed rgba(125, 97, 66, 0.4)',
                borderRadius: '12px 0 0 12px',
                pointerEvents: 'none'
              }} />

              {/* Handcrafted Header Note */}
              <div style={{ zIndex: 2 }}>
                <span 
                  className={language === 'hi' ? 'font-kalam' : 'font-caveat'}
                  style={{
                    fontSize: '1.2rem',
                    color: 'var(--ink-navy)',
                    fontWeight: 700
                  }}
                >
                  {language === 'hi' ? 'माँ-बेटी का रिश्ता ❤️' : "A Daughter's Scrapbook ❤️"}
                </span>
              </div>

              {/* Half Aperture Ring */}
              <div style={{
                position: 'absolute',
                right: '-55px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '110px',
                height: '110px',
                borderRadius: '50%',
                border: '3px solid #BD9E78',
                backgroundColor: 'rgba(255, 252, 245, 0.45)',
                backdropFilter: 'blur(3px)',
                boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.15)',
                zIndex: 5,
                overflow: 'hidden'
              }}>
                <img 
                  src="assets/mother_daughter_quilling.jpg" 
                  alt="Mother Daughter Quilling"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }}
                />
              </div>

              <div style={{ zIndex: 2 }}>
                <p 
                  className={language === 'hi' ? 'font-kalam' : 'font-indie'}
                  style={{
                    fontSize: '1rem',
                    color: 'var(--ink-terracotta)',
                    lineHeight: 1.3
                  }}
                >
                  {language === 'hi' ? 'हाथ से बना प्यार भरा स्क्रैपबुक...' : 'Handcrafted memory book...'}
                </p>
              </div>
            </motion.div>

            {/* Right Gatefold Door */}
            <motion.div
              initial={{ rotateY: 0 }}
              animate={isOpened ? { rotateY: 115 } : { rotateY: 0 }}
              transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1] }}
              style={{
                width: '50%',
                height: '100%',
                backgroundColor: 'var(--kraft-base)',
                borderTopRightRadius: '18px',
                borderBottomRightRadius: '18px',
                border: '3px solid #BD9E78',
                borderLeft: '1.5px dashed #7D6142',
                boxShadow: 'var(--shadow-layered-paper)',
                transformOrigin: 'right center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                padding: '24px 16px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Stitched Border */}
              <div style={{
                position: 'absolute',
                inset: '8px',
                border: '2px dashed rgba(125, 97, 66, 0.4)',
                borderRadius: '0 12px 12px 0',
                pointerEvents: 'none'
              }} />

              {/* Handcrafted Header Note */}
              <div style={{ zIndex: 2 }}>
                <span 
                  className={language === 'hi' ? 'font-kalam' : 'font-caveat'}
                  style={{
                    fontSize: '1.2rem',
                    color: 'var(--ink-crimson)',
                    fontWeight: 700
                  }}
                >
                  {language === 'hi' ? 'जन्मदिन की बधाई ✨' : 'Happy Birthday Maa ✨'}
                </span>
              </div>

              {/* Half Aperture Ring */}
              <div style={{
                position: 'absolute',
                left: '-55px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '110px',
                height: '110px',
                borderRadius: '50%',
                border: '3px solid #BD9E78',
                backgroundColor: 'rgba(255, 252, 245, 0.45)',
                backdropFilter: 'blur(3px)',
                boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.15)',
                zIndex: 5,
                overflow: 'hidden'
              }}>
                <img 
                  src="assets/mother_daughter_quilling.jpg" 
                  alt="Mother Daughter Quilling"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scaleX(-1)', opacity: 0.85 }}
                />
              </div>

              <div style={{ zIndex: 2 }}>
                <p 
                  className={language === 'hi' ? 'font-kalam' : 'font-indie'}
                  style={{
                    fontSize: '1rem',
                    color: 'var(--ink-terracotta)',
                    lineHeight: 1.3
                  }}
                >
                  {language === 'hi' ? 'सदा साथ, सदा प्यार' : 'Always your daughter, always loving you'}
                </p>
              </div>
            </motion.div>

            {/* Centered Die-Cut Aperture Seal & Untie Button */}
            {!isOpened && (
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 20,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '14px'
              }}>
                {/* Circular Aperture Peek Window with Real Quilling Art */}
                <div style={{
                  width: '130px',
                  height: '130px',
                  borderRadius: '50%',
                  backgroundColor: '#FAF7EE',
                  border: '3.5px solid #9B2226',
                  boxShadow: '0 14px 40px rgba(0,0,0,0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <img 
                    src="assets/mother_daughter_quilling.jpg" 
                    alt="Maa & Beti Quilling"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: '6px',
                    background: 'rgba(255,255,255,0.88)',
                    padding: '2px 8px',
                    borderRadius: '10px',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: 'var(--ink-crimson)'
                  }}>
                    {language === 'hi' ? 'माँ और बेटी ❤️' : 'Maa & Daughter ❤️'}
                  </div>
                </div>

                {/* Untie & Open Button */}
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={handleOpenClick}
                  style={{
                    background: 'linear-gradient(135deg, #9B2226 0%, #681520 100%)',
                    border: '2px solid #E4D0B8',
                    color: '#FFFFFF',
                    boxShadow: '0 10px 25px rgba(155, 34, 38, 0.45)',
                    borderRadius: '30px',
                    padding: '12px 28px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  <Scissors size={18} />
                  <span className={language === 'hi' ? 'font-kalam' : 'font-caveat'}>
                    {language === 'hi' ? 'स्क्रैपबुक कार्ड खोलें ✂️✨' : 'Open Scrapbook Card ✂️✨'}
                  </span>
                </motion.button>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrapbookCover;
