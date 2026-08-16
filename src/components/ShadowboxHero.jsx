import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Heart, Sparkles, Star, Feather } from 'lucide-react';

const ShadowboxHero = () => {
  const { language } = useLanguage();

  return (
    <section style={{ padding: 'clamp(28px, 6vw, 48px) clamp(16px, 5vw, 36px)', textAlign: 'center', position: 'relative' }}>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Stamp Badge */}
        <div style={{ marginBottom: '18px' }}>
          <div className="craft-stamp" style={{ transform: 'rotate(-1deg)' }}>
            <Sparkles size={14} color="var(--ink-crimson)" />
            <span className={language === 'hi' ? 'font-kalam' : 'font-caveat'} style={{ fontSize: '1.25rem' }}>
              {language === 'hi' ? 'माँ और बेटी का अनमोल रिश्ता' : "A DAUGHTER'S LOVE & BLESSING"}
            </span>
            <Sparkles size={14} color="var(--ink-crimson)" />
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
          Happy Birthday, <span style={{ textDecoration: 'underline wavy #C85A32', textUnderlineOffset: '6px' }}>Maa</span> ❤️
        </h1>

        {/* Emotional Mother-Daughter Poem on Deckled Paper */}
        <div style={{
          maxWidth: '620px',
          margin: '0 auto 36px auto',
          padding: '20px 24px',
          background: 'var(--paper-cotton)',
          borderRadius: '12px',
          border: '2px dashed #C4A785',
          boxShadow: '0 6px 18px rgba(60, 40, 20, 0.08)',
          position: 'relative'
        }}>
          {/* Top Tape */}
          <div className="craft-washi-tape" style={{
            top: '-12px',
            left: '50%',
            transform: 'translateX(-50%) rotate(1deg)',
            width: '90px'
          }} />

          {language === 'hi' ? (
            <p 
              className="font-kalam"
              style={{
                fontSize: 'clamp(1.2rem, 3.8vw, 1.5rem)',
                color: 'var(--ink-navy)',
                lineHeight: 1.8,
                fontWeight: 700
              }}
            >
              "माँ, बचपन में आपकी उँगली पकड़कर चलना सीखा था,<br />
              <span style={{ color: 'var(--ink-crimson)' }}>
                आज मैं जो कुछ भी हूँ, सब आपकी ममता और प्यार की बदौलत हूँ।"
              </span>
            </p>
          ) : (
            <p 
              className="font-caveat"
              style={{
                fontSize: 'clamp(1.4rem, 4.2vw, 1.85rem)',
                color: 'var(--ink-navy)',
                lineHeight: 1.45,
                fontWeight: 700
              }}
            >
              "From the days you combed my hair to holding my hand through life, everything beautiful in me is a reflection of you, Maa."
            </p>
          )}
        </div>

        {/* Dual Shadowbox: Real Portrait + Quilling Mother-Daughter Artwork */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '24px',
          maxWidth: '660px',
          margin: '0 auto',
          alignItems: 'center'
        }}>
          {/* Box 1: Real Photograph in Shadowbox */}
          <div style={{
            backgroundColor: '#D6C2A8',
            padding: '10px',
            borderRadius: '14px',
            boxShadow: '0 18px 40px rgba(45, 30, 15, 0.25)',
            border: '2px solid #B89C76'
          }}>
            <div style={{
              backgroundColor: '#FFFDF9',
              padding: '10px',
              borderRadius: '10px',
              border: '1.5px dashed rgba(155, 34, 38, 0.35)'
            }}>
              <div style={{
                overflow: 'hidden',
                borderRadius: '6px',
                backgroundColor: '#F5EFE6',
                aspectRatio: '1/1'
              }}>
                <img 
                  src="/assets/DSC_5144.JPG" 
                  alt="Maa" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </div>

              <div style={{
                marginTop: '10px',
                color: 'var(--ink-crimson)',
                fontSize: '1.25rem',
                fontWeight: 700
              }}>
                <span className={language === 'hi' ? 'font-kalam' : 'font-caveat'}>
                  {language === 'hi' ? 'हमारी प्यारी माँ ❤️' : 'Dearest Maa ❤️'}
                </span>
              </div>
            </div>
          </div>

          {/* Box 2: 3D Paper Quilling Mother-Daughter Artwork */}
          <div style={{
            backgroundColor: '#D6C2A8',
            padding: '10px',
            borderRadius: '14px',
            boxShadow: '0 18px 40px rgba(45, 30, 15, 0.25)',
            border: '2px solid #B89C76'
          }}>
            <div style={{
              backgroundColor: '#FFFDF9',
              padding: '10px',
              borderRadius: '10px',
              border: '1.5px dashed rgba(155, 34, 38, 0.35)'
            }}>
              <div style={{
                overflow: 'hidden',
                borderRadius: '6px',
                backgroundColor: '#F5EFE6',
                aspectRatio: '1/1'
              }}>
                <img 
                  src="/assets/mother_daughter_quilling.jpg" 
                  alt="Mother Daughter Quilling Art" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </div>

              <div style={{
                marginTop: '10px',
                color: 'var(--ink-navy)',
                fontSize: '1.25rem',
                fontWeight: 700
              }}>
                <span className={language === 'hi' ? 'font-kalam' : 'font-caveat'}>
                  {language === 'hi' ? 'सदा आपका प्यार ✨' : 'Forever Your Daughter ✨'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ShadowboxHero;
