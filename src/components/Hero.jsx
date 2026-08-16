import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { language } = useLanguage();
  const { scrollY } = useScroll();
  const yImage = useTransform(scrollY, [0, 1000], [0, 150]);
  const opacityText = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section 
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 20px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        style={{
          width: '100%',
          textAlign: 'center',
          position: 'relative',
          zIndex: 2,
          opacity: opacityText
        }}
      >
        <h1 
          className="english-heading"
          style={{
            fontSize: 'clamp(3rem, 10vw, 6rem)',
            color: 'var(--color-text-primary)',
            marginBottom: '20px',
            lineHeight: 1
          }}
        >
          Happy <span className="wine-accent" style={{ fontStyle: 'italic' }}>Birthday</span>
          <br/>
          <span style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--color-text-secondary)', letterSpacing: '0.1em' }}>MAA</span>
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.8 }}
          style={{ marginBottom: '80px' }}
        >
          {language === 'hi' ? (
            <p className="hindi-text" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto', lineHeight: '1.8' }}>
              आप हमारे लिए सिर्फ माँ नहीं हैं,<br/>
              आप हमारे घर की सबसे खूबसूरत वजह हैं।
            </p>
          ) : (
            <p className="english-heading" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', color: 'var(--color-text-secondary)', fontStyle: 'italic', maxWidth: '600px', margin: '0 auto' }}>
              "Home feels like home because of you."
            </p>
          )}
        </motion.div>
      </motion.div>

      <motion.div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '550px',
          margin: '0 auto',
          y: yImage,
          zIndex: 1
        }}
      >
        {/* High-End Editorial Frame */}
        <div className="glass-panel" style={{
          padding: '20px',
          borderRadius: '2px',
          position: 'relative'
        }}>
          {/* Delicate inner border */}
          <div style={{
            border: '1px solid var(--color-border-gold)',
            padding: '5px'
          }}>
            <div style={{ overflow: 'hidden' }}>
              <motion.img 
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 3, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
                src="/assets/DSC_5144.JPG" 
                alt="Maa" 
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  filter: 'contrast(1.05) saturate(1.1)',
                  transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              />
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Cinematic ambient background glow */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '20%',
        width: '50vw',
        height: '50vw',
        background: 'radial-gradient(circle, var(--color-accent-blush) 0%, transparent 70%)',
        opacity: 0.3,
        zIndex: 0,
        filter: 'blur(80px)'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '0%',
        right: '10%',
        width: '40vw',
        height: '40vw',
        background: 'radial-gradient(circle, var(--color-accent-gold) 0%, transparent 70%)',
        opacity: 0.15,
        zIndex: 0,
        filter: 'blur(100px)'
      }} />
    </section>
  );
};

export default Hero;
