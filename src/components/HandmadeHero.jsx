import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Heart, Sparkles, Paperclip, Star, Smile } from 'lucide-react';

const HandmadeHero = () => {
  const { language } = useLanguage();

  return (
    <section style={{ padding: 'clamp(28px, 6vw, 48px) clamp(16px, 5vw, 36px)', textAlign: 'center', position: 'relative' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Hand-drawn Stamp Badge */}
        <div style={{ marginBottom: '18px' }}>
          <div className="craft-stamp" style={{ transform: 'rotate(1deg)' }}>
            <Star size={14} fill="var(--ink-crimson)" />
            <span className={language === 'hi' ? 'font-kalam' : 'font-caveat'} style={{ fontSize: '1.15rem' }}>
              {language === 'hi' ? 'दुनिया की सबसे प्यारी माँ' : "WORLD'S SWEETEST MOTHER"}
            </span>
            <Star size={14} fill="var(--ink-crimson)" />
          </div>
        </div>

        {/* Big Handwritten Title */}
        <h1 
          className={language === 'hi' ? 'font-kalam' : 'font-caveat'}
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 4.2rem)',
            color: 'var(--ink-crimson)',
            lineHeight: 1.1,
            marginBottom: '16px',
            fontWeight: 700
          }}
        >
          Happy Birthday, <span style={{ textDecoration: 'underline wavy #F4A261', textUnderlineOffset: '6px' }}>Maa</span> ❤️
        </h1>

        {/* Handwritten Emotional Quote on Note Paper */}
        <div style={{
          maxWidth: '580px',
          margin: '0 auto 34px auto',
          padding: '16px 22px',
          background: 'var(--paper-white)',
          borderRadius: '12px',
          border: '1.5px dashed #C9A882',
          boxShadow: '0 4px 14px rgba(43, 29, 14, 0.08)',
          position: 'relative'
        }}>
          {/* Top Tape */}
          <div style={{
            position: 'absolute',
            top: '-10px',
            left: '50%',
            transform: 'translateX(-50%) rotate(-1deg)',
            width: '80px',
            height: '20px',
            background: 'var(--washi-yellow)',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }} />

          {language === 'hi' ? (
            <p 
              className="font-kalam"
              style={{
                fontSize: 'clamp(1.15rem, 3.8vw, 1.45rem)',
                color: 'var(--ink-blue)',
                lineHeight: 1.8,
                fontWeight: 700
              }}
            >
              "आप हमारे लिए सिर्फ माँ नहीं हैं,<br />
              <span style={{ color: 'var(--ink-crimson)' }}>
                आप हमारे घर की सबसे खूबसूरत वजह और सबसे प्यारी मुस्कान हैं।"
              </span>
            </p>
          ) : (
            <p 
              className="font-caveat"
              style={{
                fontSize: 'clamp(1.35rem, 4.2vw, 1.75rem)',
                color: 'var(--ink-blue)',
                lineHeight: 1.4,
                fontWeight: 700
              }}
            >
              "You make every place feel like home, and every day feel like a warm blessing."
            </p>
          )}
        </div>

        {/* Premier Framed Portrait with Paperclips & Washi Tape */}
        <div style={{
          maxWidth: '440px',
          margin: '0 auto',
          position: 'relative'
        }}>
          {/* Left Paperclip */}
          <div style={{
            position: 'absolute',
            top: '-14px',
            left: '20px',
            zIndex: 10,
            color: '#B8860B',
            transform: 'rotate(-15deg)'
          }}>
            <Paperclip size={32} />
          </div>

          {/* Right Paperclip */}
          <div style={{
            position: 'absolute',
            top: '-14px',
            right: '20px',
            zIndex: 10,
            color: '#B8860B',
            transform: 'rotate(15deg)'
          }}>
            <Paperclip size={32} />
          </div>

          {/* Portrait Container styled as Handmade Photo Card */}
          <div style={{
            background: '#FFFFFF',
            padding: '14px 14px 28px 14px',
            borderRadius: '4px',
            boxShadow: '0 16px 40px rgba(60, 40, 20, 0.2)',
            border: '1px solid #D6C2A8',
            transform: 'rotate(-1.5deg)',
            position: 'relative'
          }}>
            {/* Washi Tape Strip on Corner */}
            <div style={{
              position: 'absolute',
              bottom: '10px',
              left: '-15px',
              width: '70px',
              height: '24px',
              background: 'var(--washi-pink)',
              transform: 'rotate(35deg)',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }} />

            <div style={{
              overflow: 'hidden',
              borderRadius: '2px',
              backgroundColor: '#F7F2EA',
              border: '1px solid #E5D5C0'
            }}>
              <img 
                src="assets/DSC_5144.JPG" 
                alt="Maa" 
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />
            </div>

            {/* Handwritten Bottom Caption */}
            <div style={{
              marginTop: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              color: 'var(--ink-crimson)'
            }}>
              <Heart size={16} fill="var(--ink-crimson)" />
              <span 
                className={language === 'hi' ? 'font-kalam' : 'font-caveat'}
                style={{
                  fontSize: language === 'hi' ? '1.15rem' : '1.7rem',
                  fontWeight: 700
                }}
              >
                {language === 'hi' ? 'सदा मुस्कुराती रहें माँ' : 'Dearest Maa · Always Smiling'}
              </span>
              <Heart size={16} fill="var(--ink-crimson)" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HandmadeHero;
