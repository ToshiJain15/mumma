import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Heart } from 'lucide-react';

const CardHero = () => {
  const { language } = useLanguage();

  return (
    <section style={{ padding: 'clamp(28px, 6vw, 48px) clamp(16px, 5vw, 36px)', textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Top Gold Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '5px 18px',
          borderRadius: '30px',
          background: 'rgba(212, 175, 55, 0.1)',
          border: '1px solid rgba(212, 175, 55, 0.35)',
          marginBottom: '20px'
        }}>
          <Sparkles size={14} color="#D4AF37" />
          <span 
            className={language === 'hi' ? 'font-hindi' : 'font-serif'}
            style={{
              fontSize: '0.85rem',
              color: 'var(--wine-primary)',
              letterSpacing: '0.12em',
              fontWeight: 600
            }}
          >
            {language === 'hi' ? 'जन्मदिन की हार्दिक शुभकामनाएँ' : 'WISHING YOU A BLESSED BIRTHDAY'}
          </span>
        </div>

        {/* Main Heading */}
        <h1 
          className={language === 'hi' ? 'font-hindi' : 'font-serif'}
          style={{
            fontSize: 'clamp(2.4rem, 7vw, 3.8rem)',
            color: 'var(--wine-deep)',
            lineHeight: 1.15,
            marginBottom: '18px',
            fontWeight: 700
          }}
        >
          Happy Birthday, <span className="gold-foil-text">Maa</span> ❤️
        </h1>

        {/* Emotional Quote */}
        <div style={{ maxWidth: '620px', margin: '0 auto 36px auto' }}>
          {language === 'hi' ? (
            <p 
              className="font-hindi"
              style={{
                fontSize: 'clamp(1.15rem, 3.5vw, 1.45rem)',
                color: 'var(--text-muted)',
                lineHeight: 1.85,
                fontWeight: 500
              }}
            >
              आप हमारे लिए सिर्फ माँ नहीं हैं,<br />
              <span style={{ color: 'var(--wine-primary)', fontWeight: 600 }}>
                आप हमारे घर की सबसे खूबसूरत मुस्कान और रौनक हैं।
              </span>
            </p>
          ) : (
            <p 
              className="font-cormorant"
              style={{
                fontSize: 'clamp(1.25rem, 4vw, 1.6rem)',
                color: 'var(--text-muted)',
                fontStyle: 'italic',
                lineHeight: 1.6
              }}
            >
              "You make every place feel like home, and every moment feel like a blessing."
            </p>
          )}
        </div>

        {/* Premier Framed Portrait */}
        <div style={{
          maxWidth: '460px',
          margin: '0 auto',
          position: 'relative'
        }}>
          {/* Card Matting & Gold Bevel */}
          <div style={{
            background: '#FFFFFF',
            padding: '16px',
            borderRadius: '10px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.15), 0 0 30px rgba(212, 175, 55, 0.2)',
            border: '2px solid rgba(212, 175, 55, 0.65)',
            position: 'relative'
          }}>
            {/* Fine Inset Gold Line */}
            <div style={{
              border: '1px solid rgba(212, 175, 55, 0.4)',
              padding: '6px',
              borderRadius: '6px',
              backgroundColor: '#FAF7F0'
            }}>
              <div style={{ overflow: 'hidden', borderRadius: '4px' }}>
                <img 
                  src="assets/DSC_5144.JPG" 
                  alt="Maa" 
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    borderRadius: '4px',
                    filter: 'contrast(1.03) brightness(1.02)'
                  }}
                />
              </div>
            </div>

            {/* Bottom Inscribed Plate */}
            <div style={{
              marginTop: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              color: 'var(--wine-primary)'
            }}>
              <Heart size={14} fill="var(--wine-primary)" color="var(--wine-primary)" />
              <span 
                className={language === 'hi' ? 'font-hindi' : 'font-cormorant'}
                style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  fontStyle: language === 'en' ? 'italic' : 'normal',
                  letterSpacing: '0.05em'
                }}
              >
                {language === 'hi' ? 'हमारी प्यारी माँ' : 'Our World, Our Mother'}
              </span>
              <Heart size={14} fill="var(--wine-primary)" color="var(--wine-primary)" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CardHero;
