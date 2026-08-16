import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Gift, Play, Pause, X, Heart, Mail } from 'lucide-react';

const HandmadeVideoEnvelope = () => {
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
    <section style={{ padding: 'clamp(28px, 6vw, 48px) clamp(16px, 5vw, 36px)', borderTop: '2px dashed #C9A882', textAlign: 'center' }}>
      {/* Kraft Envelope Button */}
      <motion.div
        whileHover={{ scale: 1.03, y: -4 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(true)}
        style={{
          background: 'var(--kraft-light)',
          border: '2.5px dashed #A07447',
          borderRadius: '16px',
          padding: '26px 20px',
          maxWidth: '560px',
          margin: '0 auto',
          cursor: 'pointer',
          boxShadow: '0 14px 30px rgba(60, 40, 20, 0.14)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px',
          position: 'relative'
        }}
      >
        {/* Envelope Icon */}
        <div style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #C49A6C 0%, #A07447 100%)',
          border: '2px solid #6E4B28',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 6px 16px rgba(0,0,0,0.2)'
        }}>
          <Mail size={28} color="#FFFFFF" />
        </div>

        <h3 
          className={language === 'hi' ? 'font-kalam' : 'font-caveat'}
          style={{
            fontSize: 'clamp(1.8rem, 5vw, 2.4rem)',
            color: 'var(--ink-crimson)',
            fontWeight: 700
          }}
        >
          {language === 'hi' ? 'एक खास लिफ़ाफ़ा... आपके लिए 💌' : "A Special Envelope for You 💌"}
        </h3>

        <p 
          className={language === 'hi' ? 'font-kalam' : 'font-indie'}
          style={{
            fontSize: language === 'hi' ? '1rem' : '1.15rem',
            color: 'var(--ink-pencil)'
          }}
        >
          {language === 'hi' ? 'बचपन का पुराना हाथ से बना कार्ड देखने के लिए खोलें ✨' : 'Click to unwrap the handmade card video from childhood ✨'}
        </p>
      </motion.div>

      {/* Video Modal */}
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
              backgroundColor: 'rgba(25, 14, 8, 0.92)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px'
            }}
          >
            <motion.div
              initial={{ scale: 0.86, y: 25 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.86, y: 25 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '640px',
                width: '100%',
                backgroundColor: 'var(--paper-cotton)',
                padding: '24px',
                borderRadius: '16px',
                boxShadow: '0 30px 80px rgba(0,0,0,0.8)',
                border: '3px solid #C49A6C',
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
                  background: 'var(--ink-crimson)',
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

              {/* Header */}
              <div style={{ marginBottom: '14px' }}>
                <div style={{ marginBottom: '6px' }}>
                  <div className="craft-stamp">
                    <Heart size={13} fill="var(--ink-crimson)" />
                    <span className={language === 'hi' ? 'font-kalam' : 'font-caveat'} style={{ fontSize: '1.05rem' }}>
                      {language === 'hi' ? 'हाथ से बना पुराना कार्ड' : 'HANDMADE MEMORY'}
                    </span>
                  </div>
                </div>

                <h3 
                  className={language === 'hi' ? 'font-kalam' : 'font-caveat'}
                  style={{
                    fontSize: language === 'hi' ? '1.5rem' : '2.1rem',
                    color: 'var(--ink-blue)',
                    fontWeight: 700
                  }}
                >
                  {language === 'hi' ? 'सालों पहले आपके लिए बनाया था...' : 'Made for You Years Ago with Small Hands'}
                </h3>
              </div>

              {/* Video Player */}
              <div style={{
                position: 'relative',
                borderRadius: '8px',
                overflow: 'hidden',
                backgroundColor: '#000000',
                boxShadow: '0 12px 30px rgba(0,0,0,0.35)',
                aspectRatio: '16/9',
                maxHeight: '55vh',
                border: '2px solid #D6C2A8'
              }}>
                <video
                  ref={videoRef}
                  src="/assets/WhatsApp Video 2026-08-14 at 16.51.20.mp4"
                  playsInline
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    display: 'block'
                  }}
                  onEnded={() => setIsPlaying(false)}
                />

                {/* Play/Pause Overlay */}
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
                    backgroundColor: isPlaying ? 'rgba(0,0,0,0.4)' : 'rgba(196, 154, 108, 0.95)',
                    border: '2px solid #FFFFFF',
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

              {/* Caption */}
              <p 
                className={language === 'hi' ? 'font-kalam' : 'font-caveat'}
                style={{
                  fontSize: language === 'hi' ? '1.15rem' : '1.75rem',
                  color: 'var(--ink-pencil)',
                  marginTop: '14px',
                  fontWeight: 700
                }}
              >
                {language === 'hi' 
                  ? 'तब भी वही सच्चा प्यार था, आज भी वही प्यार है, और हमेशा रहेगा ❤️' 
                  : 'Created with small hands back then, carrying the exact same eternal love today ❤️'}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HandmadeVideoEnvelope;
