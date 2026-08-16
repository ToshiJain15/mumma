import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const OldCardVideo = () => {
  const { language } = useLanguage();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section style={{ padding: '150px 20px', position: 'relative' }}>
      <div className="content-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <h2 className="english-heading" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--color-text-primary)', marginBottom: '15px' }}>
            {language === 'hi' ? 'एक पुरानी याद' : 'A Memory From The Past'}
          </h2>
          <div style={{ width: '40px', height: '1px', background: 'var(--color-accent-gold)', margin: '0 auto 20px' }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'relative',
            maxWidth: '700px',
            margin: '0 auto',
            zIndex: 2
          }}
        >
          <div className="glass-panel" style={{ padding: '10px' }}>
            <div style={{ position: 'relative', background: '#000', overflow: 'hidden' }}>
              <video
                ref={videoRef}
                src="assets/WhatsApp Video 2026-08-14 at 16.51.20.mp4"
                style={{
                  width: '100%',
                  display: 'block',
                  opacity: isPlaying ? 1 : 0.7,
                  transition: 'opacity 1s ease'
                }}
                onEnded={() => setIsPlaying(false)}
              />
              
              <button
                onClick={togglePlay}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                  opacity: isPlaying ? 0 : 1,
                  border: '1px solid rgba(255,255,255,0.3)',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                  e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.05)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)';
                }}
              >
                <div style={{
                  width: 0,
                  height: 0,
                  borderTop: '10px solid transparent',
                  borderBottom: '10px solid transparent',
                  borderLeft: '16px solid #fff',
                  marginLeft: '4px'
                }} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OldCardVideo;
