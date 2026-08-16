import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Maximize2 } from 'lucide-react';

const memoriesPhotos = [
  { id: 1, src: '/assets/mother_father_me_sister.jpg', captionEn: "Family Togetherness", captionHi: "पूरे परिवार की खुशियाँ", rotate: -1.5, tag: "FAMILY" },
  { id: 2, src: '/assets/mother_and_her_mother.jpg', captionEn: "Mumma & Nani", captionHi: "Mumma और नानी (पीढ़ियों का प्यार)", rotate: 1.5, tag: "GENERATIONS" },
  { id: 3, src: '/assets/mother_and_her_sisters.jpg', captionEn: "Mumma & Her Sisters", captionHi: "Mumma और मासियों का प्यार", rotate: -1.5, tag: "SISTERS" },
  { id: 4, src: '/assets/father_mother_daughter_son_in.jpg', captionEn: "Cherished Celebrations", captionHi: "खुशियों का कारवां", rotate: 1.5, tag: "CELEBRATION" },
  { id: 5, src: '/assets/collage_of_mother_solo_pics.jpg', captionEn: "Mumma's Radiant Elegance", captionHi: "Mumma के खूबसूरत रूप", rotate: -1.5, tag: "MATRIARCH" },
  { id: 6, src: '/assets/collage_of mother_with_me.jpg', captionEn: "Precious Moments with Toshi", captionHi: "Toshi के साथ अनमोल पल", rotate: 1.5, tag: "TOSHI & MUMMA" },
  { id: 7, src: '/assets/IMG-20250511-WA0065.jpg', captionEn: "Mother's Day Joy", captionHi: "मदर डे की खुशियाँ", rotate: -1.5, tag: "MOMENTS" },
  { id: 8, src: '/assets/me_mother6.jpg', captionEn: "Unconditional Warmth & Love", captionHi: "असीम प्यार और दुलार", rotate: 1.5, tag: "TOGETHER" }
];

const BeautifulMemoriesSpread = ({ onSelectPhoto }) => {
  const { language } = useLanguage();
  const [isPulled, setIsPulled] = useState(false);

  const triggerBurst = (e, photo) => {
    if (onSelectPhoto && photo) {
      onSelectPhoto(photo);
    }
  };

  const togglePullTab = (e) => {
    setIsPulled(!isPulled);
    triggerBurst(e, null);
  };

  return (
    <section style={{
      padding: 'clamp(28px, 5vw, 48px) clamp(16px, 4vw, 32px)',
      position: 'relative',
      borderTop: '2px dashed #BD9E78'
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
          {language === 'hi' ? 'खूबसूरत यादें (Beautiful Memories)' : 'Beautiful Memories'}
        </h2>

        <p 
          className={language === 'hi' ? 'font-kalam' : 'font-serif'}
          style={{
            fontSize: 'clamp(1.1rem, 3.6vw, 1.4rem)',
            fontStyle: 'italic',
            color: '#77574d'
          }}
        >
          {language === 'hi' ? 'Mumma, Toshi और Kriti की वे अनमोल यादें... (फोटो पूरा देखने के लिए टैप करें)' : 'Moments we cherish forever. (Tap photo to view full size)'}
        </p>
      </div>

      {/* Symmetrical 2x4 Photo Grid showing 100% UNCROPPED UNIQUE PHOTOS */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '24px',
        maxWidth: '780px',
        margin: '0 auto 40px auto'
      }}>
        {memoriesPhotos.map((photo) => (
          <div
            key={photo.id}
            onClick={(e) => triggerBurst(e, photo)}
            className="photo-frame-scrapbook photo-corners"
            style={{
              transform: `rotate(${photo.rotate}deg)`,
              cursor: 'pointer',
              backgroundColor: '#FFFFFF',
              padding: '12px 12px 18px 12px',
              borderRadius: '8px',
              boxShadow: '0 10px 28px rgba(60, 30, 10, 0.18)',
              border: '2px solid #E2D2BC',
              transition: 'transform 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '100%',
              boxSizing: 'border-box'
            }}
          >
            <div style={{
              width: '100%',
              height: '240px',
              backgroundColor: '#FAF6EC',
              borderRadius: '4px',
              overflow: 'hidden',
              border: '1px solid #E2D2BC',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '4px'
            }}>
              <img 
                src={photo.src} 
                alt={photo.captionEn} 
                style={{
                  maxWidth: '100%',
                  maxHeight: '232px',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                  borderRadius: '2px',
                  display: 'block'
                }}
              />
            </div>
            <div style={{ marginTop: '10px', textAlign: 'center', width: '100%' }}>
              <span className="label-caps" style={{ fontSize: '10px', color: '#77574d', letterSpacing: '0.12em' }}>
                {photo.tag}
              </span>
              <p className={language === 'hi' ? 'font-kalam' : 'font-caveat'} style={{ fontSize: language === 'hi' ? '1.15rem' : '1.45rem', color: '#570013', fontWeight: 700, margin: '2px 0 0 0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                <span>{language === 'hi' ? photo.captionHi : photo.captionEn}</span>
                <Maximize2 size={12} color="#800020" />
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Secret Pull Tab */}
      <div style={{ maxWidth: '480px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        <div style={{
          backgroundColor: '#FFFDF9',
          border: '1.5px solid #CCA730',
          borderRadius: '12px',
          boxShadow: '0 10px 30px rgba(87, 0, 19, 0.1)',
          overflow: 'hidden'
        }}>
          <div style={{ padding: '22px', textAlign: 'center' }}>
            <h3 className={language === 'hi' ? 'font-hindi' : 'font-serif'} style={{ fontSize: '1.45rem', color: '#570013', marginBottom: '4px', fontWeight: 700 }}>
              {language === 'hi' ? 'Toshi और Kriti का प्यारा सीक्रेट 💌' : 'Toshi & Kriti\'s Secret Note 💌'}
            </h3>
            <p className="label-caps" style={{ color: '#77574d', fontSize: '11px', letterSpacing: '0.14em' }}>
              {language === 'hi' ? 'खोलने के लिए नीचे बटन पर क्लिक करें' : 'CLICK BELOW TO UNVEIL SECRET'}
            </p>
          </div>

          {isPulled && (
            <div style={{ borderTop: '1px dashed rgba(204, 167, 48, 0.6)', padding: '20px', backgroundColor: '#FAF6EC' }}>
              <p className={language === 'hi' ? 'font-kalam' : 'font-serif'} style={{
                fontStyle: 'italic',
                color: '#570013',
                fontSize: language === 'hi' ? '1.3rem' : '1.5rem',
                textAlign: 'center',
                fontWeight: 700,
                lineHeight: 1.5,
                margin: 0
              }}>
                {language === 'hi' 
                  ? '"Mumma, आपके चेहरे की यह प्यारी मुस्कान ही Toshi और Kriti की दुनिया का सबसे बड़ा सुकून है! सदा ऐसे ही खिलखिलाती रहिए!"' 
                  : '"Mumma, your bright smile is Toshi & Kriti\'s greatest treasure in the entire world! May you always radiate joy!"'}
              </p>
            </div>
          )}

          <button
            onClick={togglePullTab}
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#570013',
              color: '#FFFFFF',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 700,
              letterSpacing: '0.14em',
              fontSize: '0.85rem',
              border: 'none',
              cursor: 'pointer',
              textTransform: 'uppercase'
            }}
          >
            {isPulled ? (language === 'hi' ? 'सीक्रेट छुपाएं (HIDE)' : 'HIDE SECRET') : (language === 'hi' ? 'सीक्रेट खोलें (REVEAL SECRET)' : 'REVEAL SECRET')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default BeautifulMemoriesSpread;
