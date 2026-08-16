import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Maximize2 } from 'lucide-react';
import { getAssetPath } from '../utils/assetHelper';

const keepsakePhotos = [
  {
    id: 1,
    src: getAssetPath('assets/mother_solo_pic.jpg'),
    captionEn: 'Dearest Mumma ❤️',
    captionHi: 'हमारी प्यारी Mumma ❤️',
    tag: 'MATRIARCH',
    rotate: -1.5
  },
  {
    id: 2,
    src: getAssetPath('assets/me_mother.jpg'),
    captionEn: 'Mumma & Toshi ✨',
    captionHi: 'Mumma और Toshi ✨',
    tag: 'TOSHI & MUMMA',
    rotate: 1.5
  },
  {
    id: 3,
    src: getAssetPath('assets/me_mother_and_sister.JPG'),
    captionEn: 'Mumma, Toshi & Kriti 🌸',
    captionHi: 'Mumma, Toshi और Kriti 🌸',
    tag: 'SISTERS & MUMMA',
    rotate: -1.5
  },
  {
    id: 4,
    src: getAssetPath('assets/me_mother4.jpg'),
    captionEn: 'Warm Hugs & Smiles ❤️',
    captionHi: 'प्यार भरा साथ ❤️',
    tag: 'CHERISHED',
    rotate: 1.5
  }
];

const MotherDaughterKeepsake = ({ onSelectPhoto }) => {
  const { language } = useLanguage();

  const handlePhotoClick = (src, captionEn, captionHi, tag) => {
    if (onSelectPhoto) {
      onSelectPhoto({ src, captionEn, captionHi, tag });
    }
  };

  return (
    <section style={{ padding: 'clamp(28px, 5vw, 48px) clamp(16px, 4vw, 32px)', textAlign: 'center', position: 'relative', perspective: '1200px' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Stamp Badge */}
        <div style={{ marginBottom: '16px' }}>
          <div className="craft-stamp" style={{ transform: 'rotate(-1deg)', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '20px', border: '1.5px dashed #800020', backgroundColor: 'rgba(255, 240, 240, 0.7)' }}>
            <Sparkles size={14} color="#800020" />
            <span className={language === 'hi' ? 'font-kalam' : 'font-caveat'} style={{ fontSize: '1.25rem', color: '#800020', fontWeight: 700 }}>
              {language === 'hi' ? 'Mumma का असीम स्नेह एवं आशीर्वाद' : "MUMMA'S ETERNAL LOVE & BLESSINGS"}
            </span>
            <Sparkles size={14} color="#800020" />
          </div>
        </div>

        {/* Big Handwritten Title */}
        <h1 
          className={language === 'hi' ? 'font-hindi' : 'font-serif'}
          style={{
            fontSize: 'clamp(2.3rem, 7vw, 3.8rem)',
            color: 'var(--primary)',
            lineHeight: 1.15,
            marginBottom: '16px',
            fontWeight: 800
          }}
        >
          {language === 'hi' ? (
            <>जन्मदिन मुबारक, <span style={{ color: '#800020', textDecoration: 'underline wavy #CCA730', textUnderlineOffset: '8px' }}>मेरी प्यारी Mumma</span> ❤️</>
          ) : (
            <>Happy Birthday, <span style={{ color: '#800020', textDecoration: 'underline wavy #CCA730', textUnderlineOffset: '8px' }}>Dearest Mumma</span> ❤️</>
          )}
        </h1>

        {/* Emotional Mother Poem on 3D Pop-Up Parchment Stand */}
        <motion.div 
          whileHover={{ scale: 1.02, rotateX: -3, z: 20 }}
          style={{
            maxWidth: '680px',
            margin: '0 auto 36px auto',
            padding: '24px 28px',
            backgroundColor: '#FFFDF9',
            backgroundImage: `linear-gradient(rgba(255, 253, 249, 0.88), rgba(255, 253, 249, 0.88)), url("${getAssetPath('assets/pressed_flowers_botanical.jpg')}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '14px',
            border: '2.5px dashed #BD9E78',
            boxShadow: '0 20px 50px rgba(60, 30, 10, 0.25), 0 6px 16px rgba(0,0,0,0.1)',
            position: 'relative',
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Raised 3D Transparent Botanical Cutout 6 */}
          <img 
            src={getAssetPath('assets/botanical_cutout_6.png')} 
            alt="Raised Botanical Cutout 6"
            style={{
              position: 'absolute',
              top: '-24px',
              right: '-20px',
              width: '82px',
              height: 'auto',
              opacity: 0.95,
              pointerEvents: 'none',
              transform: 'rotate(15deg) translateZ(30px)',
              filter: 'drop-shadow(0 10px 18px rgba(60,30,10,0.35))'
            }}
          />
          {/* Raised 3D Transparent Botanical Cutout 7 */}
          <img 
            src={getAssetPath('assets/botanical_cutout_7.png')} 
            alt="Raised Botanical Cutout 7"
            style={{
              position: 'absolute',
              bottom: '-24px',
              left: '-20px',
              width: '82px',
              height: 'auto',
              opacity: 0.95,
              pointerEvents: 'none',
              transform: 'rotate(-15deg) translateZ(30px)',
              filter: 'drop-shadow(0 10px 18px rgba(60,30,10,0.35))'
            }}
          />
          
          {/* Top Washi Tape */}
          <div style={{
            position: 'absolute',
            top: '-14px',
            left: '50%',
            transform: 'translateX(-50%) rotate(1deg)',
            width: '120px',
            height: '24px',
            background: 'repeating-linear-gradient(45deg, rgba(204,167,48,0.85), rgba(204,167,48,0.85) 6px, rgba(230,200,80,0.85) 6px, rgba(230,200,80,0.85) 12px)',
            boxShadow: '0 3px 8px rgba(0,0,0,0.2)',
            opacity: 0.95,
            borderRadius: '2px'
          }} />

          {language === 'hi' ? (
            <p 
              className="font-kalam"
              style={{
                fontSize: 'clamp(1.25rem, 3.8vw, 1.6rem)',
                color: '#2C1A0E',
                lineHeight: 1.8,
                fontWeight: 700
              }}
            >
              "Mumma, आपकी छाँव में ही सुकून की हर भोर उगती है,<br />
              <span style={{ color: '#800020' }}>
                आपके आंचल की खुशबू से हमारी पूरी दुनिया महकती है।"
              </span>
            </p>
          ) : (
            <p 
              className="font-serif"
              style={{
                fontSize: 'clamp(1.35rem, 4vw, 1.75rem)',
                fontStyle: 'italic',
                color: '#2C1A0E',
                lineHeight: 1.5,
                fontWeight: 600
              }}
            >
              "Your smile is the light that guides our home, and your love is the anchor that holds our hearts together, Mumma."
            </p>
          )}
        </motion.div>

        {/* 2x2 3D Pop-Up Photo Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '24px',
          maxWidth: '780px',
          margin: '0 auto'
        }}>
          {keepsakePhotos.map((photo) => (
            <motion.div
              key={photo.id}
              initial={{ scale: 0.95, y: 15 }}
              whileInView={{ scale: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                rotateX: 5,
                rotateY: photo.rotate > 0 ? -4 : 4,
                boxShadow: '0 25px 50px rgba(60, 30, 10, 0.35), 0 8px 18px rgba(0,0,0,0.2)'
              }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => handlePhotoClick(photo.src, photo.captionEn, photo.captionHi, photo.tag)}
              style={{
                backgroundColor: '#FFFFFF',
                padding: '12px 12px 18px 12px',
                borderRadius: '8px',
                boxShadow: '0 14px 35px rgba(60, 30, 10, 0.2), 0 4px 10px rgba(0,0,0,0.1)',
                border: '2px solid #D6C2A8',
                transform: `rotate(${photo.rotate}deg)`,
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: '100%',
                boxSizing: 'border-box',
                position: 'relative'
              }}
            >
              {/* Folded Paper Pop-Up Stand Shadow Accent */}
              <div style={{
                position: 'absolute',
                bottom: '-6px',
                left: '20px',
                right: '20px',
                height: '12px',
                background: 'rgba(60, 30, 10, 0.15)',
                borderRadius: '50%',
                filter: 'blur(4px)',
                pointerEvents: 'none'
              }} />

              {/* Photo Frame showing 100% FULL UNCROPPED PHOTO */}
              <div style={{
                width: '100%',
                height: '260px',
                backgroundColor: '#FAF6EC',
                borderRadius: '4px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid #E5D5C0',
                padding: '4px'
              }}>
                <img 
                  src={photo.src} 
                  alt={photo.captionEn}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '252px',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    borderRadius: '2px',
                    display: 'block'
                  }}
                />
              </div>

              {/* Caption */}
              <div style={{ marginTop: '10px', textAlign: 'center', width: '100%' }}>
                <p 
                  className={language === 'hi' ? 'font-kalam' : 'font-caveat'} 
                  style={{
                    fontSize: language === 'hi' ? '1.25rem' : '1.5rem',
                    color: '#570013',
                    fontWeight: 700,
                    margin: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px'
                  }}
                >
                  <span>{language === 'hi' ? photo.captionHi : photo.captionEn}</span>
                  <Maximize2 size={13} color="#800020" />
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default MotherDaughterKeepsake;
