import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Play, Pause, X, Heart, Sparkles, Film } from 'lucide-react';

const ScrapbookVideoEnvelope = () => {
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
    <section style={{ padding: 'clamp(32px, 6vw, 56px) clamp(16px, 5vw, 36px)', borderTop: '2px dashed #BD9E78', textAlign: 'center' }}>
      {/* Kraft Envelope Button */}
      <motion.div
        whileHover={{ scale: 1.03, y: -4 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(true)}
        style={{
          background: 'linear-gradient(135deg, #F5EDD8 0%, #EDE3C8 100%)',
          border: '2.5px dashed #A07447',
          borderRadius: '16px',
          padding: '32px 24px',
          maxWidth: '620px',
          margin: '0 auto',
          cursor: 'pointer',
          boxShadow: '0 16px 40px rgba(60, 40, 20, 0.15)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          position: 'relative'
        }}
      >
        {/* Top Washi Tape */}
        <div style={{
          position: 'absolute',
          top: '-12px',
          left: '50%',
          transform: 'translateX(-50%) rotate(-1deg)',
          width: '130px',
          height: '24px',
          background: 'repeating-linear-gradient(45deg, rgba(204,167,48,0.85), rgba(204,167,48,0.85) 6px, rgba(230,200,80,0.85) 6px, rgba(230,200,80,0.85) 12px)',
          boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
          opacity: 0.9,
          borderRadius: '2px'
        }} />

        {/* Film / Envelope Icon */}
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #800020 0%, #570013 100%)',
          border: '2px solid #CCA730',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(87, 0, 19, 0.35)'
        }}>
          <Film size={32} color="#FFFFFF" />
        </div>

        <h3 
          className={language === 'hi' ? 'font-hindi' : 'font-serif'}
          style={{
            fontSize: 'clamp(1.9rem, 5vw, 2.7rem)',
            color: '#570013',
            fontWeight: 800,
            margin: 0
          }}
        >
          {language === 'hi' ? 'एक खास पुरानी याद... वीडियो रीफ 📽️' : 'Childhood Memory Video Envelope 📽️'}
        </h3>

        <p 
          className={language === 'hi' ? 'font-kalam' : 'font-caveat'}
          style={{
            fontSize: language === 'hi' ? '1.15rem' : '1.5rem',
            color: '#77574d',
            margin: 0
          }}
        >
          {language === 'hi' ? 'हाथ से बने खास वीडियो सरप्राइज को देखने के लिए खोलें ✨' : 'Click to open the handwritten memory video reel ✨'}
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
              zIndex: 2500,
              backgroundColor: 'rgba(25, 14, 8, 0.92)',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px'
            }}
          >
            <motion.div
              initial={{ scale: 0.84, rotateX: 18 }}
              animate={{ scale: 1, rotateX: 0 }}
              exit={{ scale: 0.84, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 280, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '680px',
                width: '100%',
                backgroundColor: '#FAF6EC',
                padding: '24px',
                borderRadius: '16px',
                boxShadow: '0 30px 80px rgba(0,0,0,0.85)',
                border: '3px solid #CCA730',
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
                  backgroundColor: '#570013',
                  color: '#FFFFFF',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1.5px solid #CCA730',
                  zIndex: 10,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                  cursor: 'pointer'
                }}
                aria-label="Close"
              >
                <X size={18} />
              </button>

              {/* Header */}
              <div style={{ marginBottom: '16px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <Heart size={14} fill="#800020" color="#800020" />
                  <span className="label-caps" style={{ color: '#800020', letterSpacing: '0.14em' }}>
                    {language === 'hi' ? 'यादों का कारवां' : 'HANDMADE MEMORY POP-UP'}
                  </span>
                  <Sparkles size={14} color="#800020" />
                </div>

                <h3 
                  className={language === 'hi' ? 'font-hindi' : 'font-serif'}
                  style={{
                    fontSize: language === 'hi' ? '1.8rem' : '2.4rem',
                    color: '#570013',
                    fontWeight: 800,
                    margin: 0
                  }}
                >
                  {language === 'hi' ? 'आपके लिए दिल से बनाया वीडियो ❤️' : 'Created With Love For You'}
                </h3>
              </div>

              {/* Video Player Container */}
              <div style={{
                position: 'relative',
                borderRadius: '10px',
                overflow: 'hidden',
                backgroundColor: '#000000',
                boxShadow: '0 16px 40px rgba(0,0,0,0.5)',
                aspectRatio: '16/9',
                maxHeight: '55vh',
                border: '2px solid #CCA730'
              }}>
                <video
                  ref={videoRef}
                  src="/assets/WhatsApp Video 2026-08-14 at 16.51.20.mp4"
                  playsInline
                  controls={isPlaying}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    display: 'block'
                  }}
                  onEnded={() => setIsPlaying(false)}
                />

                {/* Big Play Overlay Button when paused */}
                {!isPlaying && (
                  <button
                    onClick={toggleVideo}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '72px',
                      height: '72px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(87, 0, 19, 0.92)',
                      border: '2.5px solid #CCA730',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
                      cursor: 'pointer',
                      transition: 'transform 0.2s ease'
                    }}
                    aria-label="Play Video"
                  >
                    <Play size={32} style={{ marginLeft: '4px' }} fill="#FFFFFF" />
                  </button>
                )}
              </div>

              {/* Caption */}
              <p 
                className={language === 'hi' ? 'font-kalam' : 'font-caveat'}
                style={{
                  fontSize: language === 'hi' ? '1.25rem' : '1.8rem',
                  color: '#2C1A0E',
                  marginTop: '16px',
                  fontWeight: 700,
                  margin: '16px 0 0 0'
                }}
              >
                {language === 'hi' 
                  ? 'तब भी वही सच्चा प्यार था, आज भी वही प्यार है, और सदा रहेगा! ❤️' 
                  : 'Carrying the exact same eternal love today and forever! ❤️'}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ScrapbookVideoEnvelope;
