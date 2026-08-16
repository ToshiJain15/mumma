import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Heart, Sparkles, Star, Award, Smile } from 'lucide-react';

const ArchiesHero = () => {
  const { language } = useLanguage();

  return (
    <section style={{ padding: 'clamp(28px, 6vw, 48px) clamp(16px, 5vw, 36px)', textAlign: 'center', position: 'relative' }}>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Top Archies Award Badge */}
        <div style={{ marginBottom: '20px' }}>
          <div className="archies-badge">
            <Award size={16} color="#FFFDF9" />
            <span>{language === 'hi' ? 'दुनिया की नंबर 1 माँ' : "WORLD'S #1 BEST MOM AWARD"}</span>
            <Star size={14} fill="#FFDF79" color="#FFDF79" />
          </div>
        </div>

        {/* Main Title */}
        <h1 
          className={language === 'hi' ? 'font-hindi' : 'font-serif'}
          style={{
            fontSize: 'clamp(2.4rem, 7vw, 3.8rem)',
            color: 'var(--archies-red-deep)',
            lineHeight: 1.15,
            marginBottom: '18px',
            fontWeight: 800
          }}
        >
          Happy Birthday, <span className="archies-gold-text">Maa</span> ❤️
        </h1>

        {/* Archies Sentimental Greeting Poem */}
        <div style={{
          maxWidth: '620px',
          margin: '0 auto 36px auto',
          padding: '16px 20px',
          background: 'var(--archies-peach-soft)',
          borderRadius: '14px',
          border: '1px dashed rgba(217, 37, 70, 0.35)',
          boxShadow: '0 4px 15px rgba(217, 37, 70, 0.08)'
        }}>
          {language === 'hi' ? (
            <p 
              className="font-hindi"
              style={{
                fontSize: 'clamp(1.15rem, 3.5vw, 1.45rem)',
                color: 'var(--text-muted)',
                lineHeight: 1.85,
                fontWeight: 600
              }}
            >
              "आप हमारे लिए सिर्फ माँ नहीं हैं,<br />
              <span style={{ color: 'var(--archies-red)', fontWeight: 700 }}>
                आप हमारे घर की सबसे प्यारी मुस्कान और खुशियों की वजह हैं।"
              </span>
            </p>
          ) : (
            <p 
              className="font-cormorant"
              style={{
                fontSize: 'clamp(1.25rem, 4vw, 1.6rem)',
                color: 'var(--text-muted)',
                fontStyle: 'italic',
                lineHeight: 1.55,
                fontWeight: 600
              }}
            >
              "For all the sweet love you give, the warmest hugs you share, and the million little ways you show how deeply you care!"
            </p>
          )}
        </div>

        {/* Premier Framed Portrait with Archies Cute Badges */}
        <div style={{
          maxWidth: '460px',
          margin: '0 auto',
          position: 'relative'
        }}>
          {/* Top Left Cute Heart Pin */}
          <div style={{
            position: 'absolute',
            top: '-12px',
            left: '-10px',
            zIndex: 10,
            background: 'linear-gradient(135deg, #FF6584 0%, #D92546 100%)',
            color: '#FFFFFF',
            padding: '6px 12px',
            borderRadius: '20px',
            boxShadow: '0 6px 14px rgba(217, 37, 70, 0.35)',
            border: '1.5px solid #FFFFFF',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            fontSize: '0.75rem',
            fontWeight: 700,
            transform: 'rotate(-8deg)'
          }}>
            <Heart size={13} fill="#FFFFFF" />
            <span>{language === 'hi' ? 'सदा मुस्कुराती' : 'Always Smiling'}</span>
          </div>

          {/* Bottom Right Cute Badge */}
          <div style={{
            position: 'absolute',
            bottom: '-12px',
            right: '-10px',
            zIndex: 10,
            background: 'linear-gradient(135deg, #FFB703 0%, #FB8500 100%)',
            color: '#FFFFFF',
            padding: '6px 14px',
            borderRadius: '20px',
            boxShadow: '0 6px 14px rgba(251, 133, 0, 0.35)',
            border: '1.5px solid #FFFFFF',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            fontSize: '0.75rem',
            fontWeight: 700,
            transform: 'rotate(6deg)'
          }}>
            <Sparkles size={13} color="#FFFFFF" />
            <span>{language === 'hi' ? 'घर की रानी' : 'Purest Love'}</span>
          </div>

          {/* Photo Frame */}
          <div style={{
            background: '#FFFFFF',
            padding: '16px',
            borderRadius: '16px',
            boxShadow: '0 20px 50px rgba(43, 24, 28, 0.15), 0 0 30px rgba(212, 175, 55, 0.25)',
            border: '2.5px solid #D4AF37',
            position: 'relative'
          }}>
            <div style={{
              border: '1.5px dashed rgba(217, 37, 70, 0.3)',
              padding: '6px',
              borderRadius: '10px',
              backgroundColor: 'var(--archies-pink-soft)'
            }}>
              <div style={{ overflow: 'hidden', borderRadius: '8px' }}>
                <img 
                  src="/assets/DSC_5144.JPG" 
                  alt="Maa" 
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    borderRadius: '6px'
                  }}
                />
              </div>
            </div>

            {/* Inscribed Bottom Note */}
            <div style={{
              marginTop: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              color: 'var(--archies-red-deep)'
            }}>
              <Heart size={15} fill="var(--archies-red)" color="var(--archies-red)" />
              <span 
                className={language === 'hi' ? 'font-hindi' : 'font-handwriting'}
                style={{
                  fontSize: language === 'hi' ? '1rem' : '1.5rem',
                  fontWeight: language === 'hi' ? 700 : 600,
                  letterSpacing: '0.03em'
                }}
              >
                {language === 'hi' ? 'हमारी सबसे प्यारी माँ' : 'Dearest Maa, Forever Our Queen'}
              </span>
              <Heart size={15} fill="var(--archies-red)" color="var(--archies-red)" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ArchiesHero;
