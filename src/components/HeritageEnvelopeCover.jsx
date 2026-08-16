import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Heart, ArrowRight } from 'lucide-react';
import { getAssetPath } from '../utils/assetHelper';

const HeritageEnvelopeCover = ({ onOpen }) => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isProceeding, setIsProceeding] = useState(false);

  const handleSealClick = () => {
    setIsOpen(true);
  };

  const handleBeginJourney = () => {
    setIsProceeding(true);
    setTimeout(() => {
      onOpen();
    }, 800);
  };

  return (
    <AnimatePresence>
      {!isProceeding && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            background: 'radial-gradient(circle at 50% 30%, #3D2619 0%, #20130B 85%, #110905 100%)',
            perspective: '1500px'
          }}
        >
          {/* Ambient Particles */}
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: `${Math.random() * 100}vw`, 
                  y: `${Math.random() * 100}vh`, 
                  opacity: 0,
                  rotate: Math.random() * 360
                }}
                animate={{ 
                  y: ['0vh', '-30vh'], 
                  opacity: [0, 0.75, 0],
                  rotate: Math.random() * 180
                }}
                transition={{ 
                  duration: 5 + Math.random() * 4, 
                  repeat: Infinity, 
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
                style={{
                  position: 'absolute',
                  width: `${Math.random() * 8 + 6}px`,
                  height: `${Math.random() * 8 + 6}px`,
                  borderRadius: i % 2 === 0 ? '50%' : '2px',
                  backgroundColor: i % 3 === 0 ? '#CCA730' : (i % 3 === 1 ? '#FFB3B5' : '#800020'),
                  boxShadow: i % 3 === 0 ? '0 0 10px #CCA730' : 'none'
                }}
              />
            ))}
          </div>

          {/* 3D Envelope Wrapper */}
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '500px',
            aspectRatio: '4/3',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {/* Envelope Back Body */}
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: '#EDE3C8',
              boxShadow: '0 30px 80px rgba(0, 0, 0, 0.6), 0 0 30px rgba(184, 134, 11, 0.2)',
              borderRadius: '12px',
              border: '2px solid rgba(184, 134, 11, 0.5)',
              zIndex: 1
            }}>
              <div style={{
                position: 'absolute',
                inset: '8px',
                backgroundColor: '#FAF6EC',
                borderRadius: '8px',
                opacity: 0.5
              }} />
            </div>

            {/* The Card Inside */}
            <motion.div
              initial={{ y: '12%', scale: 0.96 }}
              animate={isOpen ? { y: '-46%', scale: 1.02 } : { y: '12%', scale: 0.96 }}
              transition={{ duration: 1, ease: [0.34, 1.4, 0.64, 1], delay: 0.15 }}
              style={{
                position: 'absolute',
                width: '90%',
                backgroundColor: '#FAF6EC',
                backgroundImage: `linear-gradient(rgba(250, 246, 236, 0.88), rgba(250, 246, 236, 0.88)), url("${getAssetPath('assets/pressed_flowers_botanical.jpg')}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: '0 20px 60px rgba(60, 30, 10, 0.45), 0 0 30px rgba(204, 167, 48, 0.3)',
                borderRadius: '12px',
                border: '2.5px solid #CCA730',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '18px 16px',
                textAlign: 'center',
                zIndex: isOpen ? 35 : 2
              }}
            >
              {/* Individual Transparent Botanical Cutout 1 */}
              <img 
                src={getAssetPath('assets/botanical_cutout_1.png')} 
                alt="Pressed Botanical Flower Cutout"
                style={{
                  position: 'absolute',
                  top: '-20px',
                  left: '-20px',
                  width: '76px',
                  height: 'auto',
                  opacity: 0.95,
                  pointerEvents: 'none',
                  transform: 'rotate(-15deg)',
                  filter: 'drop-shadow(0 6px 12px rgba(60,30,10,0.22))',
                  zIndex: 40
                }}
              />
              
              {/* Individual Transparent Botanical Cutout 2 */}
              <img 
                src={getAssetPath('assets/botanical_cutout_2.png')} 
                alt="Pressed Botanical Leaf Cutout"
                style={{
                  position: 'absolute',
                  bottom: '-20px',
                  right: '-20px',
                  width: '76px',
                  height: 'auto',
                  opacity: 0.95,
                  pointerEvents: 'none',
                  transform: 'rotate(20deg)',
                  filter: 'drop-shadow(0 6px 12px rgba(60,30,10,0.22))',
                  zIndex: 40
                }}
              />

              {/* Quilling / Lotus Badge */}
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: 'rgba(204, 167, 48, 0.15)',
                border: '2px dashed #CCA730',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '8px',
                padding: '2px'
              }}>
                <img 
                  src={getAssetPath('assets/mother_daughter_quilling.jpg')} 
                  alt="Lotus Quilling" 
                  style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
                />
              </div>

              <h1 
                className={language === 'hi' ? 'font-hindi' : 'font-serif'}
                style={{
                  fontSize: 'clamp(1.5rem, 4.2vw, 2.1rem)',
                  color: '#570013',
                  marginBottom: '4px',
                  lineHeight: 1.25,
                  fontWeight: 800
                }}
              >
                {language === 'hi' ? 'मेरी प्यारी Mumma के लिए ❤️' : 'For Dearest Mumma ❤️'}
              </h1>

              <p 
                className={language === 'hi' ? 'font-kalam' : 'font-serif'}
                style={{
                  fontSize: 'clamp(1rem, 3.2vw, 1.2rem)',
                  fontStyle: 'italic',
                  color: '#77574d',
                  marginBottom: '14px',
                  maxWidth: '340px',
                  lineHeight: 1.35
                }}
              >
                {language === 'hi' 
                  ? 'Mumma के लिए Toshi का एक सुंदर हस्तनिर्मित उपहार...' 
                  : 'A handcrafted gift of love for Mumma, made by Toshi...'}
              </p>

              {/* Clear Golden Highlighted Begin Journey Button */}
              {isOpen && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.85, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  whileHover={{ scale: 1.06, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleBeginJourney}
                  style={{
                    backgroundColor: '#800020',
                    color: '#FAF6EC',
                    padding: '10px 24px',
                    borderRadius: '8px',
                    boxShadow: '0 8px 24px rgba(128, 0, 32, 0.45), 0 0 16px rgba(204, 167, 48, 0.4)',
                    border: '2px solid #CCA730',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                    zIndex: 50
                  }}
                >
                  <span className="label-caps" style={{ color: '#FFFFFF', fontSize: '0.85rem', letterSpacing: '0.12em', fontWeight: 800 }}>
                    {language === 'hi' ? 'कार्ड खोलें (OPEN CARD) ✨' : 'OPEN THE CARD ✨'}
                  </span>
                  <ArrowRight size={18} color="#CCA730" />
                </motion.button>
              )}
            </motion.div>

            {/* Envelope Flaps */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '55%',
              backgroundColor: '#EDE3C8',
              clipPath: 'polygon(0 100%, 50% 0, 100% 100%)',
              zIndex: 20,
              borderTop: '1px solid rgba(184, 134, 11, 0.3)',
              borderRadius: '0 0 12px 12px'
            }} />
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              width: '55%',
              backgroundColor: '#E8DBC0',
              clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
              zIndex: 20,
              borderRadius: '12px 0 0 12px'
            }} />
            <div style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              width: '55%',
              backgroundColor: '#DDD0AA',
              clipPath: 'polygon(100% 0, 0 50%, 100% 100%)',
              zIndex: 20,
              borderRadius: '0 12px 12px 0'
            }} />

            {/* Envelope Top Flap */}
            <motion.div
              initial={{ rotateX: 0 }}
              animate={isOpen ? { rotateX: 180, zIndex: 1 } : { rotateX: 0, zIndex: 30 }}
              transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '62%',
                backgroundColor: '#EDE3C8',
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                transformOrigin: 'top center',
                borderRadius: '12px 12px 0 0',
                borderBottom: '1.5px solid rgba(184, 134, 11, 0.4)',
                boxShadow: '0 6px 18px rgba(0, 0, 0, 0.2)'
              }}
            />

            {/* Red Wax Seal Button */}
            {!isOpen && (
              <motion.button
                whileHover={{ scale: 1.15, rotate: 6 }}
                whileTap={{ scale: 0.92 }}
                onClick={handleSealClick}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle at 35% 35%, #800020 0%, #570013 100%)',
                  border: '2.5px solid #CCA730',
                  boxShadow: '0 8px 25px rgba(87, 0, 19, 0.6), inset 0 2px 4px rgba(255,255,255,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 40
                }}
                aria-label="Click Wax Seal to Open Envelope"
              >
                <Heart size={30} fill="#CCA730" color="#CCA730" />
              </motion.button>
            )}
          </div>

          {/* Hint text at bottom */}
          {!isOpen && (
            <p style={{
              position: 'absolute',
              bottom: '36px',
              color: 'rgba(250, 246, 236, 0.75)',
              fontSize: '0.82rem',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase'
            }}>
              {language === 'hi' ? '❤️ लिफ़ाफ़ा खोलने के लिए सील पर क्लिक करें' : '❤️ CLICK WAX SEAL TO OPEN MUMMA\'S ENVELOPE'}
            </p>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HeritageEnvelopeCover;
