import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Gift, Play, Pause, X, Sparkles } from 'lucide-react';

const CardSurpriseModal = () => {
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
    <section style={{ padding: 'clamp(28px, 6vw, 48px) clamp(16px, 5vw, 36px)', borderTop: '1px dashed rgba(212, 175, 55, 0.3)', textAlign: 'center' }}>
      {/* Surprise Banner Button */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(true)}
        style={{
          background: 'linear-gradient(135deg, #FAF4E8 0%, #FFFDF8 100%)',
          border: '2px dashed #D4AF37',
          borderRadius: '12px',
          padding: '24px 20px',
          maxWidth: '560px',
          margin: '0 auto',
          cursor: 'pointer',
          boxShadow: '0 12px 30px rgba(212, 175, 55, 0.15)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px'
        }}
      >
        <div style={{
          width: '54px',
          height: '54px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #D4AF37 0%, #A88421 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 6px 16px rgba(168, 132, 33, 0.35)'
        }}>
          <Gift size={26} color="#FFFFFF" />
        </div>

        <h3 
          className={language === 'hi' ? 'font-hindi' : 'font-serif'}
          style={{
            fontSize: 'clamp(1.25rem, 4vw, 1.6rem)',
            color: 'var(--wine-deep)',
            fontWeight: 700
          }}
        >
          {language === 'hi' ? 'ठहरिए... एक खास सरप्राइज बाकी है 🎁' : "Wait... there's one more surprise 🎁"}
        </h3>

        <p 
          className={language === 'hi' ? 'font-hindi' : 'font-cormorant'}
          style={{
            fontSize: '1rem',
            color: 'var(--text-muted)',
            fontStyle: language === 'en' ? 'italic' : 'normal'
          }}
        >
          {language === 'hi' ? 'एक पुरानी सुनहरी याद देखने के लिए यहाँ क्लिक करें ✨' : 'Click here to unlock a nostalgic handmade treasure ✨'}
        </p>
      </motion.div>

      {/* Surprise Video Modal */}
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
              backgroundColor: 'rgba(20, 6, 9, 0.92)',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px'
            }}
          >
            <motion.div
              initial={{ scale: 0.92, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 30 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '620px',
                width: '100%',
                backgroundColor: 'var(--bg-card-paper)',
                padding: '24px',
                borderRadius: '14px',
                boxShadow: '0 30px 80px rgba(0,0,0,0.8), 0 0 40px rgba(212, 175, 55, 0.3)',
                border: '2px solid #D4AF37',
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
                  background: 'rgba(74, 18, 26, 0.15)',
                  color: 'var(--wine-deep)',
                  width: '32px',
                  height: '32px',
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

              {/* Modal Header */}
              <div style={{ marginBottom: '16px' }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--gold-dark)',
                  marginBottom: '4px'
                }}>
                  <Sparkles size={14} color="#D4AF37" />
                  <span 
                    className={language === 'hi' ? 'font-hindi' : 'font-serif'}
                    style={{ fontSize: '0.8rem', letterSpacing: '0.1em', fontWeight: 600 }}
                  >
                    {language === 'hi' ? 'हाथ से बना पुराना कार्ड' : 'HANDMADE MEMORY'}
                  </span>
                </div>

                <h3 
                  className={language === 'hi' ? 'font-hindi' : 'font-serif'}
                  style={{
                    fontSize: '1.4rem',
                    color: 'var(--wine-deep)',
                    fontWeight: 700
                  }}
                >
                  {language === 'hi' ? 'सालों पहले आपके लिए बनाया था...' : 'A Card Made for You Years Ago...'}
                </h3>
              </div>

              {/* Video Player Frame */}
              <div style={{
                position: 'relative',
                borderRadius: '8px',
                overflow: 'hidden',
                backgroundColor: '#000000',
                boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
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
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: isPlaying ? 'rgba(0,0,0,0.4)' : 'rgba(212, 175, 55, 0.9)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.4)',
                    transition: 'all 0.3s ease',
                    opacity: isPlaying ? 0.3 : 1
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.opacity = isPlaying ? '0.3' : '1'; }}
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause size={24} /> : <Play size={24} style={{ marginLeft: '3px' }} />}
                </button>
              </div>

              {/* Video Caption */}
              <p 
                className={language === 'hi' ? 'font-hindi' : 'font-cormorant'}
                style={{
                  fontSize: '1rem',
                  color: 'var(--text-muted)',
                  marginTop: '16px',
                  fontStyle: language === 'en' ? 'italic' : 'normal'
                }}
              >
                {language === 'hi' 
                  ? 'तब भी वही प्यार था, आज भी वही प्यार है, और हमेशा रहेगा ❤️' 
                  : 'Created with small hands back then, filled with the exact same eternal love today ❤️'}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CardSurpriseModal;
