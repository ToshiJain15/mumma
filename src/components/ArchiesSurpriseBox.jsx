import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Gift, Play, Pause, X, Sparkles, Heart } from 'lucide-react';

const ArchiesSurpriseBox = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsPlaying(false);
    setIsOpen(false);
  };

  return (
    <section style={{ padding: 'clamp(28px, 6vw, 48px) clamp(16px, 5vw, 36px)', borderTop: '2px dashed rgba(217, 37, 70, 0.25)', textAlign: 'center' }}>
      {/* 3D Interactive Archies Gift Box Banner */}
      <motion.div
        whileHover={{ scale: 1.03, y: -4 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(true)}
        style={{
          background: 'linear-gradient(135deg, #FFF0F3 0%, #FFFDF9 100%)',
          border: '2.5px dashed var(--archies-red)',
          borderRadius: '16px',
          padding: '28px 24px',
          maxWidth: '580px',
          margin: '0 auto',
          cursor: 'pointer',
          boxShadow: '0 15px 35px rgba(217, 37, 70, 0.15)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          position: 'relative'
        }}
      >
        {/* Animated Pop-Up Gift Icon */}
        <motion.div 
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #D92546 0%, #B81935 100%)',
            border: '2px solid #FFDF79',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 20px rgba(217, 37, 70, 0.35)'
          }}
        >
          <Gift size={30} color="#FFFFFF" />
        </motion.div>

        <h3 
          className={language === 'hi' ? 'font-hindi' : 'font-serif'}
          style={{
            fontSize: 'clamp(1.3rem, 4.2vw, 1.75rem)',
            color: 'var(--archies-red-deep)',
            fontWeight: 800
          }}
        >
          {language === 'hi' ? 'ठहरिए... आपके लिए एक खास सरप्राइज 🎁' : "Wait... There's a Special Pop-Up Surprise! 🎁"}
        </h3>

        <p 
          className={language === 'hi' ? 'font-hindi' : 'font-handwriting'}
          style={{
            fontSize: language === 'hi' ? '1rem' : '1.5rem',
            color: 'var(--text-muted)',
            fontWeight: language === 'hi' ? 600 : 500
          }}
        >
          {language === 'hi' ? 'बचपन में हाथ से बनाया कार्ड देखने के लिए यहाँ टैप करें ✨' : 'Tap to unwrap a nostalgic handmade treasure from the past ✨'}
        </p>
      </motion.div>

      {/* Pop-Up Video Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 2000,
              backgroundColor: 'rgba(25, 6, 10, 0.92)',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px'
            }}
          >
            <motion.div
              initial={{ scale: 0.85, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.85, y: 30 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '640px',
                width: '100%',
                backgroundColor: '#FFFDF9',
                padding: '24px',
                borderRadius: '18px',
                boxShadow: '0 30px 80px rgba(0,0,0,0.8), 0 0 50px rgba(217, 37, 70, 0.35)',
                border: '3px solid var(--archies-gold)',
                position: 'relative',
                textAlign: 'center'
              }}
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'var(--archies-red)',
                  color: '#FFFFFF',
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 10,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                }}
                aria-label="Close"
              >
                <X size={18} />
              </button>

              {/* Modal Header */}
              <div style={{ marginBottom: '16px' }}>
                <div style={{ marginBottom: '6px' }}>
                  <div className="archies-badge">
                    <Heart size={13} fill="#FFFDF9" />
                    <span>{language === 'hi' ? 'पुरानी सुनहरी याद' : 'VINTAGE MEMORY'}</span>
                    <Sparkles size={13} color="#FFDF79" />
                  </div>
                </div>

                <h3 
                  className={language === 'hi' ? 'font-hindi' : 'font-serif'}
                  style={{
                    fontSize: '1.5rem',
                    color: 'var(--archies-red-deep)',
                    fontWeight: 800
                  }}
                >
                  {language === 'hi' ? 'सालों पहले आपके लिए बनाया था...' : 'The Card Made With Love Years Ago'}
                </h3>
              </div>

              {/* Video Player */}
              <div style={{
                position: 'relative',
                borderRadius: '10px',
                overflow: 'hidden',
                backgroundColor: '#000000',
                boxShadow: '0 12px 30px rgba(0,0,0,0.35)',
                aspectRatio: '16/9',
                maxHeight: '55vh'
              }}>
                <video
                  ref={videoRef}
                  src="assets/WhatsApp Video 2026-08-14 at 16.51.20.mp4"
                  playsInline
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    display: 'block'
                  }}
                  onEnded={() => setIsPlaying(false)}
                />

                {/* Play/Pause Button Overlay */}
                <button
                  onClick={toggleVideo}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: isPlaying ? 'rgba(0,0,0,0.4)' : 'rgba(217, 37, 70, 0.92)',
                    border: '2px solid #FFDF79',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.4)',
                    transition: 'all 0.3s ease',
                    opacity: isPlaying ? 0.35 : 1
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.opacity = isPlaying ? '0.35' : '1'; }}
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause size={26} /> : <Play size={26} style={{ marginLeft: '4px' }} />}
                </button>
              </div>

              {/* Sweet Archies Caption */}
              <p 
                className={language === 'hi' ? 'font-hindi' : 'font-handwriting'}
                style={{
                  fontSize: language === 'hi' ? '1.05rem' : '1.55rem',
                  color: 'var(--text-muted)',
                  marginTop: '16px',
                  lineHeight: 1.4,
                  fontWeight: language === 'hi' ? 600 : 500
                }}
              >
                {language === 'hi' 
                  ? 'तब भी वही प्यार था, आज भी वही प्यार है, और हमेशा रहेगा ❤️' 
                  : 'Created with small hands back then, carrying the exact same eternal love today ❤️'}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ArchiesSurpriseBox;
