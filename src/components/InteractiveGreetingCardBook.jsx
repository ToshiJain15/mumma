import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import MotherDaughterKeepsake from './MotherDaughterKeepsake';
import ArchiesInsideVerse from './ArchiesInsideVerse';
import OurStorySpread from './OurStorySpread';
import BeautifulMemoriesSpread from './BeautifulMemoriesSpread';
import ScrapbookPocketNotes from './ScrapbookPocketNotes';
import ScrapbookVideoEnvelope from './ScrapbookVideoEnvelope';
import HeritageGiftBoxFinale from './HeritageGiftBoxFinale';
import QuillingArt from './QuillingArt';
import PaperButterfly from './PaperButterfly';
import ScratchFoilCard from './ScratchFoilCard';
import { ChevronLeft, ChevronRight, BookOpen, Heart } from 'lucide-react';

const pageNames = [
  'Cover Page',
  'Mother & Daughter Keepsake',
  'Archies Inside Verse',
  'Our Story Spread',
  'Beautiful Memories',
  'Pocket Notes of Love',
  'Special Memories Video',
  'Birthday Pop-up Cake Finale'
];

const InteractiveGreetingCardBook = ({ onSelectPhoto }) => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const handleOpenCard = () => {
    setIsOpen(true);
  };

  const handleNextPage = () => {
    if (currentPage < pageNames.length - 1) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: '980px', margin: '0 auto', position: 'relative' }}>
      {/* CLOSED CARD COVER STATE */}
      {!isOpen ? (
        <motion.div
          whileHover={{ scale: 1.02 }}
          onClick={handleOpenCard}
          style={{
            maxWidth: '520px',
            margin: '20px auto',
            backgroundColor: '#FAF6EC',
            backgroundImage: 'url("/assets/stitch_seamless_watercolor_paper.png")',
            backgroundRepeat: 'repeat',
            borderRadius: '16px',
            border: '3px solid #CCA730',
            boxShadow: '0 35px 90px rgba(0, 0, 0, 0.65), 0 0 40px rgba(184, 134, 11, 0.3)',
            padding: '40px 28px',
            textAlign: 'center',
            cursor: 'pointer',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Transparent Botanical Cutout 3 */}
          <img 
            src="/assets/botanical_cutout_3.png" 
            alt="Botanical Cutout 3"
            style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              width: '72px',
              height: 'auto',
              opacity: 0.92,
              pointerEvents: 'none',
              transform: 'rotate(-10deg)',
              filter: 'drop-shadow(0 4px 10px rgba(60,30,10,0.22))'
            }}
          />

          {/* Fluttering 3D Paper Butterfly */}
          <PaperButterfly style={{ top: '24px', right: '32px' }} />
          <PaperButterfly style={{ bottom: '30px', left: '24px' }} />

          {/* Brass Binder Rings / Spine Ribbon Accent */}
          <div style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: '14px',
            width: '8px',
            borderRight: '2px dashed #B8860B',
            opacity: 0.6
          }} />

          {/* Top Washi Tape */}
          <div style={{
            position: 'absolute',
            top: '-12px',
            left: '50%',
            transform: 'translateX(-50%) rotate(1deg)',
            width: '140px',
            height: '26px',
            background: 'repeating-linear-gradient(45deg, rgba(204,167,48,0.85), rgba(204,167,48,0.85) 7px, rgba(230,200,80,0.85) 7px, rgba(230,200,80,0.85) 14px)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            borderRadius: '2px'
          }} />

          {/* 3D Paper Quilling Centerpiece */}
          <div style={{ margin: '10px 0 16px 0' }}>
            <QuillingArt />
          </div>

          <span className="label-caps" style={{ color: '#800020', letterSpacing: '0.18em', fontSize: '11px' }}>
            {language === 'hi' ? 'हस्तनिर्मित ग्रीटिंग कार्ड' : 'HANDMADE BIRTHDAY KEEPSAKE'}
          </span>

          <h1 
            className={language === 'hi' ? 'font-hindi' : 'font-serif'}
            style={{
              fontSize: 'clamp(2.4rem, 7vw, 3.6rem)',
              color: '#570013',
              lineHeight: 1.15,
              margin: '10px 0',
              fontWeight: 800
            }}
          >
            Happy Birthday, <span style={{ color: '#800020', textDecoration: 'underline wavy #CCA730', textUnderlineOffset: '8px' }}>Mumma</span> ❤️
          </h1>

          <p 
            className={language === 'hi' ? 'font-kalam' : 'font-caveat'}
            style={{
              fontSize: 'clamp(1.25rem, 4vw, 1.65rem)',
              color: '#77574d',
              marginBottom: '28px',
              maxWidth: '380px',
              margin: '0 auto 28px auto'
            }}
          >
            {language === 'hi' 
              ? 'ममता, दुआओं और अनमोल यादों से सजी एक किताब...' 
              : 'A handmade diary of love, blessings & timeless memories...'}
          </p>

          {/* Red Wax Seal Button */}
          <motion.div
            whileHover={{ scale: 1.12, rotate: 4 }}
            whileTap={{ scale: 0.94 }}
            style={{
              width: '72px',
              height: '72px',
              borderRadius: '50%',
              background: 'radial-gradient(circle at 35% 35%, #800020 0%, #570013 100%)',
              border: '2.5px solid #CCA730',
              boxShadow: '0 10px 30px rgba(87, 0, 19, 0.5), inset 0 2px 4px rgba(255,255,255,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 12px auto'
            }}
          >
            <Heart size={32} fill="#CCA730" color="#CCA730" />
          </motion.div>

          <p className="label-caps" style={{ color: '#570013', fontSize: '11px', letterSpacing: '0.14em' }}>
            {language === 'hi' ? 'कार्ड खोलने के लिए सील पर क्लिक करें (OPEN CARD)' : 'CLICK SEAL TO OPEN GREETING CARD ✨'}
          </p>
        </motion.div>
      ) : (
        /* OPEN CARD STATE: Opening Greeting Card Diary */
        <motion.div
          initial={{ opacity: 0, scale: 0.96, rotateY: -15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            backgroundColor: '#FAF6EC',
            backgroundImage: 'url("/assets/stitch_seamless_watercolor_paper.png")',
            backgroundRepeat: 'repeat',
            borderRadius: '20px',
            border: '3.5px solid #CCA730',
            boxShadow: '0 30px 90px rgba(60, 30, 10, 0.6), 0 0 40px rgba(184, 134, 11, 0.25)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Fluttering 3D Paper Butterfly */}
          <PaperButterfly style={{ top: '18px', right: '24px' }} />

          {/* Individual Transparent Botanical Cutout 4 */}
          <img 
            src="/assets/botanical_cutout_4.png" 
            alt="Botanical Cutout 4"
            style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              width: '72px',
              height: 'auto',
              opacity: 0.92,
              pointerEvents: 'none',
              zIndex: 35,
              filter: 'drop-shadow(0 4px 10px rgba(60,30,10,0.2))'
            }}
          />

          {/* Individual Transparent Botanical Cutout 5 */}
          <img 
            src="/assets/botanical_cutout_5.png" 
            alt="Botanical Cutout 5"
            style={{
              position: 'absolute',
              bottom: '50px',
              right: '12px',
              width: '72px',
              height: 'auto',
              opacity: 0.92,
              pointerEvents: 'none',
              zIndex: 35,
              filter: 'drop-shadow(0 4px 10px rgba(60,30,10,0.2))'
            }}
          />

          {/* Top Page Navigation Bar */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '10px',
            padding: '12px 16px',
            backgroundColor: '#FAF3E0',
            borderBottom: '1.5px solid rgba(204, 167, 48, 0.4)',
            zIndex: 40,
            position: 'relative'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <BookOpen size={18} color="#570013" />
              <span className="label-caps" style={{ color: '#570013', fontSize: '11px', letterSpacing: '0.14em' }}>
                {pageNames[currentPage]}
              </span>
            </div>

            {/* Page Selector Tabs */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 0}
                style={{
                  padding: '6px 14px',
                  borderRadius: '4px',
                  backgroundColor: currentPage === 0 ? '#EAE5D8' : '#570013',
                  color: currentPage === 0 ? '#999' : '#FAF6EC',
                  border: '1px solid #CCA730',
                  cursor: currentPage === 0 ? 'not-allowed' : 'pointer',
                  display: 'flex', alignItems: 'center', gap: '4px',
                  fontSize: '0.8rem', fontWeight: 700
                }}
              >
                <ChevronLeft size={16} />
                {language === 'hi' ? 'पीछे' : 'PREV'}
              </button>

              <span className="label-caps" style={{ color: '#77574d', fontSize: '11px', margin: '0 4px' }}>
                {currentPage + 1} / {pageNames.length}
              </span>

              <button
                onClick={handleNextPage}
                disabled={currentPage === pageNames.length - 1}
                style={{
                  padding: '6px 14px',
                  borderRadius: '4px',
                  backgroundColor: currentPage === pageNames.length - 1 ? '#EAE5D8' : '#570013',
                  color: currentPage === pageNames.length - 1 ? '#999' : '#FAF6EC',
                  border: '1px solid #CCA730',
                  cursor: currentPage === pageNames.length - 1 ? 'not-allowed' : 'pointer',
                  display: 'flex', alignItems: 'center', gap: '4px',
                  fontSize: '0.8rem', fontWeight: 700
                }}
              >
                {language === 'hi' ? 'आगे' : 'NEXT'}
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Dynamic Page Content Render */}
          <div style={{ minHeight: '520px', position: 'relative' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                {currentPage === 0 && (
                  <div style={{ padding: '40px 24px', textAlign: 'center' }}>
                    <div style={{ marginBottom: '24px' }}>
                      <QuillingArt />
                    </div>
                    <h2 className={language === 'hi' ? 'font-hindi' : 'font-serif'} style={{ fontSize: '2.5rem', color: '#570013', margin: '0 0 10px 0' }}>
                      Happy Birthday Mumma ❤️
                    </h2>
                    <p className={language === 'hi' ? 'font-kalam' : 'font-caveat'} style={{ fontSize: '1.6rem', color: '#77574d', maxWidth: '480px', margin: '0 auto 28px auto' }}>
                      {language === 'hi' ? 'तोशी की तरफ से प्यार, प्रार्थनाओं और यादों का यह सुंदर तोहफा...' : 'A journey through endless love, cherished memories, and warm wishes...'}
                    </p>

                    {/* Interactive Gold Foil Scratch Card */}
                    <div style={{ marginTop: '30px' }}>
                      <ScratchFoilCard />
                    </div>
                  </div>
                )}

                {currentPage === 1 && <MotherDaughterKeepsake onSelectPhoto={onSelectPhoto} />}
                {currentPage === 2 && <ArchiesInsideVerse />}
                {currentPage === 3 && <OurStorySpread onSelectPhoto={onSelectPhoto} />}
                {currentPage === 4 && <BeautifulMemoriesSpread onSelectPhoto={onSelectPhoto} />}
                {currentPage === 5 && <ScrapbookPocketNotes />}
                {currentPage === 6 && <ScrapbookVideoEnvelope />}
                {currentPage === 7 && <HeritageGiftBoxFinale />}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Card Footer Page Turner */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '10px',
            padding: '14px 18px',
            backgroundColor: '#FAF3E0',
            borderTop: '1.5px solid rgba(204, 167, 48, 0.4)'
          }}>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                color: '#800020',
                fontSize: '0.85rem',
                fontWeight: 700,
                border: 'none',
                background: 'none',
                cursor: 'pointer'
              }}
            >
              {language === 'hi' ? '← बंद कार्ड कवर (CLOSE CARD)' : '← COVER PAGE'}
            </button>

            <span className="font-serif" style={{ fontStyle: 'italic', color: '#77574d', fontSize: '0.95rem', fontWeight: 600 }}>
              {language === 'hi' ? 'Mumma के लिए Toshi द्वारा बना कार्ड ❤️' : 'Handmade Card for Mumma by Toshi ❤️'}
            </span>

            <div style={{ display: 'flex', gap: '8px' }}>
              {currentPage < pageNames.length - 1 && (
                <button
                  onClick={handleNextPage}
                  style={{
                    backgroundColor: '#570013',
                    color: '#FFFFFF',
                    padding: '8px 18px',
                    borderRadius: '4px',
                    border: '1px solid #CCA730',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <span>{language === 'hi' ? 'अगला पन्ना' : 'NEXT PAGE'}</span>
                  <ChevronRight size={15} />
                </button>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default InteractiveGreetingCardBook;
