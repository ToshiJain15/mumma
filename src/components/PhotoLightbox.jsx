import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const PhotoLightbox = ({ photo, onClose }) => {
  const { language } = useLanguage();

  if (!photo) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 3500,
          backgroundColor: 'rgba(15, 8, 4, 0.94)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px'
        }}
      >
        <motion.div
          initial={{ scale: 0.85, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.85, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            maxWidth: '720px',
            width: '100%',
            backgroundColor: '#FAF6EC',
            padding: '16px 16px 24px 16px',
            borderRadius: '14px',
            boxShadow: '0 30px 90px rgba(0,0,0,0.85), 0 0 50px rgba(184, 134, 11, 0.4)',
            border: '2.5px solid #CCA730',
            position: 'relative',
            textAlign: 'center'
          }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '-16px',
              right: '-16px',
              backgroundColor: '#570013',
              color: '#FFFFFF',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid #CCA730',
              boxShadow: '0 6px 18px rgba(0,0,0,0.5)',
              cursor: 'pointer',
              zIndex: 20
            }}
            aria-label="Close photo preview"
          >
            <X size={20} />
          </button>

          {/* Washi Tape Accent */}
          <div style={{
            position: 'absolute',
            top: '-14px',
            left: '50%',
            transform: 'translateX(-50%) rotate(-1deg)',
            width: '130px',
            height: '26px',
            background: 'repeating-linear-gradient(45deg, rgba(204,167,48,0.9), rgba(204,167,48,0.9) 7px, rgba(230,200,80,0.9) 7px, rgba(230,200,80,0.9) 14px)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            opacity: 0.95,
            borderRadius: '2px',
            zIndex: 10
          }} />

          {/* High Res Full Photo Frame */}
          <div style={{
            borderRadius: '8px',
            overflow: 'hidden',
            backgroundColor: '#1E120B',
            border: '1.5px solid rgba(184, 134, 11, 0.4)',
            maxHeight: '75vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '8px',
            padding: '8px'
          }}>
            <img
              src={photo.src}
              alt={photo.captionEn || photo.captionHi || 'Memory'}
              style={{
                maxWidth: '100%',
                maxHeight: '70vh',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
                display: 'block',
                borderRadius: '4px',
                imageRendering: 'high-quality'
              }}
            />
          </div>

          {/* Polaroid Caption & Metadata */}
          <div style={{ marginTop: '16px', padding: '0 12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '4px' }}>
              <Sparkles size={14} color="#CCA730" />
              <span className="label-caps" style={{ color: '#77574d', letterSpacing: '0.16em', fontSize: '11px' }}>
                {photo.tag || (language === 'hi' ? 'अनमोल स्मृति' : 'FULL UNCROPPED MEMORY')}
              </span>
              <Sparkles size={14} color="#CCA730" />
            </div>

            <p className={language === 'hi' ? 'font-kalam' : 'font-caveat'} style={{
              fontSize: language === 'hi' ? '1.5rem' : '2.1rem',
              color: '#570013',
              fontWeight: 700,
              margin: '4px 0 0 0',
              lineHeight: 1.3
            }}>
              {language === 'hi' ? (photo.captionHi || photo.captionEn) : (photo.captionEn || photo.captionHi)}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PhotoLightbox;
