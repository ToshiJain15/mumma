import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Camera, X, Heart, Sparkles, Smile, Star } from 'lucide-react';

const memoriesData = [
  {
    id: 1,
    src: '/assets/IMG-20260104-WA0123.jpg',
    captionEn: 'Precious Moments with Family',
    captionHi: 'परिवार के साथ हँसते-खिलखिलाते पल',
    tag: 'Sweetest Memories',
    tagHi: 'अनमोल लम्हें',
    rotate: -2.5
  },
  {
    id: 2,
    src: '/assets/DSC_9568.JPG',
    captionEn: 'Your Beautiful Radiant Glow',
    captionHi: 'आपकी प्यारी सी खिली हुई मुस्कान',
    tag: 'Pure Elegance',
    tagHi: 'सदा प्यारी',
    rotate: 2.2
  },
  {
    id: 3,
    src: '/assets/IMG-20260104-WA0133.jpg',
    captionEn: 'Laughter, Fun & Boundless Love',
    captionHi: 'ढेर सारा प्यार और खुशियाँ',
    tag: 'Joy Unbounded',
    tagHi: 'खुशियों का खजाना',
    rotate: -1.8
  },
  {
    id: 4,
    src: '/assets/IMG_20230923_224856.jpg',
    captionEn: 'Special Celebrations Together',
    captionHi: 'साथ में हर दिन त्योहार जैसा',
    tag: 'Golden Times',
    tagHi: 'सुनहरे दिन',
    rotate: 2.5
  },
  {
    id: 5,
    src: '/assets/IMG-20250511-WA0065.jpg',
    captionEn: 'Always Surrounded by Our Love',
    captionHi: 'आपका असीम प्यार और आशीर्वाद',
    tag: 'Endless Warmth',
    tagHi: 'ममता की छाँव',
    rotate: -2.2
  },
  {
    id: 6,
    src: '/assets/20230514_090841-COLLAGE.jpg',
    captionEn: 'A Scrapbook of Lifelong Love',
    captionHi: 'यादों का एक प्यारा सा गुलदस्ता',
    tag: 'Family Forever',
    tagHi: 'सदा साथ',
    rotate: 1.8
  }
];

const ArchiesPhotoAlbum = () => {
  const { language } = useLanguage();
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section style={{ padding: 'clamp(28px, 6vw, 48px) clamp(16px, 5vw, 36px)', borderTop: '2px dashed rgba(217, 37, 70, 0.25)' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
        <div style={{ marginBottom: '10px' }}>
          <div className="archies-badge">
            <Camera size={14} color="#FFFDF9" />
            <span>{language === 'hi' ? 'यादों का एल्बम' : "ARCHIES PHOTO SCRAPBOOK"}</span>
            <Sparkles size={14} color="#FFDF79" />
          </div>
        </div>

        <h2 
          className={language === 'hi' ? 'font-hindi' : 'font-serif'}
          style={{
            fontSize: 'clamp(2rem, 5.5vw, 2.9rem)',
            color: 'var(--archies-red-deep)',
            marginBottom: '8px',
            fontWeight: 800
          }}
        >
          {language === 'hi' ? 'यादों की सुनहरी डायरी' : 'Treasured Photo Album'}
        </h2>

        <p 
          className={language === 'hi' ? 'font-hindi' : 'font-cormorant'}
          style={{
            fontSize: '1.15rem',
            color: 'var(--text-muted)',
            fontStyle: language === 'en' ? 'italic' : 'normal'
          }}
        >
          {language === 'hi' 
            ? 'हर तस्वीर में आपकी ममता और हमारी मुस्कान सजी है' 
            : 'Every picture is a little piece of love and endless happiness'}
        </p>
      </div>

      {/* Scrapbook Polaroids Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: 'clamp(24px, 4vw, 32px)',
        alignItems: 'start'
      }}>
        {memoriesData.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
            onClick={() => setSelectedPhoto(item)}
            className="archies-polaroid"
            style={{
              transform: `rotate(${item.rotate}deg)`
            }}
          >
            {/* Washi Tape */}
            <div className="archies-tape" />

            {/* Corner Badge */}
            <div style={{
              position: 'absolute',
              bottom: '10px',
              right: '12px',
              fontSize: '0.7rem',
              fontWeight: 700,
              color: 'var(--archies-red)',
              display: 'flex',
              alignItems: 'center',
              gap: '3px'
            }}>
              <Star size={10} fill="var(--archies-gold)" color="var(--archies-gold)" />
              <span>{language === 'hi' ? item.tagHi : item.tag}</span>
            </div>

            {/* Photo Container */}
            <div style={{
              overflow: 'hidden',
              borderRadius: '4px',
              backgroundColor: 'var(--archies-peach-soft)',
              aspectRatio: '4/3',
              marginBottom: '12px',
              border: '1px solid rgba(217, 37, 70, 0.15)'
            }}>
              <img 
                src={item.src} 
                alt={language === 'hi' ? item.captionHi : item.captionEn}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>

            {/* Handwritten Caption */}
            <p 
              className={language === 'hi' ? 'font-hindi' : 'font-handwriting'}
              style={{
                fontSize: language === 'hi' ? '0.95rem' : '1.45rem',
                color: 'var(--archies-red-deep)',
                textAlign: 'center',
                lineHeight: 1.25,
                fontWeight: language === 'hi' ? 700 : 600,
                paddingBottom: '4px'
              }}
            >
              {language === 'hi' ? item.captionHi : item.captionEn}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Lightbox / Zoom Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 2000,
              backgroundColor: 'rgba(25, 6, 10, 0.9)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px'
            }}
          >
            <motion.div
              initial={{ scale: 0.88, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.88, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '650px',
                width: '100%',
                backgroundColor: '#FFFFFF',
                padding: '16px 16px 24px 16px',
                borderRadius: '16px',
                boxShadow: '0 30px 80px rgba(0,0,0,0.7)',
                border: '3px solid var(--archies-gold)',
                position: 'relative'
              }}
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'var(--archies-red)',
                  color: '#fff',
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

              <img 
                src={selectedPhoto.src} 
                alt="Enlarged memory"
                style={{
                  width: '100%',
                  maxHeight: '75vh',
                  objectFit: 'contain',
                  borderRadius: '8px',
                  marginBottom: '16px'
                }}
              />

              <div style={{ textAlign: 'center' }}>
                <p 
                  className={language === 'hi' ? 'font-hindi' : 'font-handwriting'}
                  style={{
                    fontSize: language === 'hi' ? '1.15rem' : '1.8rem',
                    color: 'var(--archies-red-deep)',
                    fontWeight: 700
                  }}
                >
                  {language === 'hi' ? selectedPhoto.captionHi : selectedPhoto.captionEn}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ArchiesPhotoAlbum;
