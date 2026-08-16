import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles } from 'lucide-react';

const ScratchFoilCard = () => {
  const { language } = useLanguage();
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div style={{
      maxWidth: '520px',
      margin: '0 auto',
      backgroundColor: '#FFFDF9',
      borderRadius: '12px',
      border: '2px dashed #CCA730',
      padding: '20px',
      boxShadow: '0 10px 25px rgba(87, 0, 19, 0.1)',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
        <Sparkles size={14} color="#CCA730" />
        <span className="label-caps" style={{ color: '#570013', letterSpacing: '0.14em', fontSize: '11px' }}>
          {language === 'hi' ? 'Toshi का गुप्त संदेश - स्क्रैच करें' : 'TOSHI\'S SECRET MESSAGE FOR MUMMA'}
        </span>
        <Sparkles size={14} color="#CCA730" />
      </div>

      <div 
        onClick={() => setIsRevealed(true)}
        style={{
          position: 'relative',
          minHeight: '90px',
          borderRadius: '8px',
          overflow: 'hidden',
          cursor: 'pointer',
          marginTop: '8px'
        }}
      >
        {/* Underneath Secret Message */}
        <div style={{
          backgroundColor: '#FAF6EC',
          padding: '16px 20px',
          borderRadius: '8px',
          border: '1.5px solid rgba(204, 167, 48, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <p className={language === 'hi' ? 'font-kalam' : 'font-caveat'} style={{
            fontSize: language === 'hi' ? '1.3rem' : '1.7rem',
            color: '#570013',
            fontWeight: 700,
            lineHeight: 1.45,
            margin: 0
          }}>
            {language === 'hi' 
              ? '"Mumma, आप हमारे घर का वो दीया हैं जिसकी रोशनी Toshi की दुनिया को सदा रोशन रखती है! जन्मदिन मुबारक!" ❤️' 
              : '"Mumma, you are the guiding light of our lives that shines brighter with each passing year! Happy Birthday from Toshi!" ❤️'}
          </p>
        </div>

        {/* Scratch Foil Layer */}
        {!isRevealed && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, #D4AF37 0%, #F3E5AB 30%, #AA7C11 60%, #E6CA65 100%)',
              boxShadow: 'inset 0 0 15px rgba(0,0,0,0.2)',
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#40000B',
              fontWeight: 700,
              zIndex: 10
            }}
          >
            <Sparkles size={20} color="#570013" style={{ marginBottom: '4px' }} />
            <span className="label-caps" style={{ letterSpacing: '0.16em', fontSize: '11px', color: '#570013' }}>
              {language === 'hi' ? 'यहाँ क्लिक करके स्क्रैच करें ✨' : 'TAP HERE TO SCRATCH FOIL ✨'}
            </span>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ScratchFoilCard;
