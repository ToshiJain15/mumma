import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Maximize2 } from 'lucide-react';
import { getAssetPath } from '../utils/assetHelper';

const storyPhotos = [
  {
    id: 1,
    src: getAssetPath('assets/childhood_photo_me_mother_father.jpg'),
    captionEn: 'Childhood Memories 🌸',
    captionHi: 'बचपन की अनमोल यादें 🌸',
    tag: 'CHILDHOOD',
    rotate: -1.5
  },
  {
    id: 2,
    src: getAssetPath('assets/skectch_of-mother_me_and mysister.jpg'),
    captionEn: 'Mumma, Toshi & Kriti 🎨',
    captionHi: 'Mumma, Toshi और Kriti का स्केच 🎨',
    tag: 'FAMILY SKETCH',
    rotate: 1.5
  },
  {
    id: 3,
    src: getAssetPath('assets/sketch_of_mother_collage.jpg'),
    captionEn: 'Sketch Collection ✨',
    captionHi: 'सुंदर स्केच संग्रह ✨',
    tag: 'ARTISTIC COLLAGE',
    rotate: -1.5
  },
  {
    id: 4,
    src: getAssetPath('assets/latest_photo_me_and_mother.jpg'),
    captionEn: 'Together Today & Always ❤️',
    captionHi: 'आज का अनमोल साथ ❤️',
    tag: 'TOGETHER TODAY',
    rotate: 1.5
  }
];

const OurStorySpread = ({ onSelectPhoto }) => {
  const { language } = useLanguage();

  const handlePhotoClick = (src, captionEn, captionHi, tag) => {
    if (onSelectPhoto) {
      onSelectPhoto({ src, captionEn, captionHi, tag });
    }
  };

  return (
    <section style={{
      padding: 'clamp(28px, 5vw, 48px) clamp(16px, 4vw, 32px)',
      position: 'relative',
      borderTop: '2px dashed #BD9E78',
      perspective: '1200px'
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h2 
          className={language === 'hi' ? 'font-hindi' : 'font-serif'}
          style={{
            fontSize: 'clamp(2.3rem, 6vw, 3.4rem)',
            color: '#570013',
            marginBottom: '6px',
            fontWeight: 800
          }}
        >
          {language === 'hi' ? 'हमारी कहानी (Our Story)' : 'Our Story'}
        </h2>

        <p 
          className={language === 'hi' ? 'font-kalam' : 'font-serif'}
          style={{
            fontSize: 'clamp(1.1rem, 3.6vw, 1.4rem)',
            fontStyle: 'italic',
            color: '#77574d'
          }}
        >
          {language === 'hi' ? 'Mumma, Toshi और Kriti के प्यार के पिरोए अनमोल धागे... (फोटो पूरा देखने के लिए टैप करें)' : 'Threads of timeless love between Mumma, Toshi & Kriti. (Tap photo to view full size)'}
        </p>
      </div>

      {/* Symmetrical 2x2 3D Pop-Up Photo Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '24px',
        maxWidth: '780px',
        margin: '0 auto'
      }}>
        {storyPhotos.map((photo) => (
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
            {/* Raised Botanical Overlay */}
            {photo.id === 1 && (
              <img 
                src={getAssetPath('assets/botanical_cutout_8.png')} 
                alt="Raised Botanical 8"
                style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '-18px',
                  width: '64px',
                  height: 'auto',
                  opacity: 0.95,
                  pointerEvents: 'none',
                  transform: 'rotate(15deg) translateZ(25px)',
                  filter: 'drop-shadow(0 8px 16px rgba(60,30,10,0.3))',
                  zIndex: 20
                }}
              />
            )}
            {photo.id === 4 && (
              <img 
                src={getAssetPath('assets/botanical_cutout_9.png')} 
                alt="Raised Botanical 9"
                style={{
                  position: 'absolute',
                  bottom: '-20px',
                  left: '-18px',
                  width: '64px',
                  height: 'auto',
                  opacity: 0.95,
                  pointerEvents: 'none',
                  transform: 'rotate(-15deg) translateZ(25px)',
                  filter: 'drop-shadow(0 8px 16px rgba(60,30,10,0.3))',
                  zIndex: 20
                }}
              />
            )}

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

            {/* Fixed Equal Height Photo Frame showing 100% FULL UNCROPPED PHOTO */}
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
                  fontSize: language === 'hi' ? '1.2rem' : '1.45rem',
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
    </section>
  );
};

export default OurStorySpread;
