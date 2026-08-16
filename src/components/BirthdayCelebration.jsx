import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Particles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Elegant, slow-moving cinematic particles
    const newParticles = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: 120 + Math.random() * 20, // Start from bottom
      size: Math.random() * 4 + 2,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      {particles.map(p => (
        <motion.div
          key={p.id}
          initial={{ x: `${p.x}vw`, y: `${p.y}vh`, opacity: 0 }}
          animate={{ 
            y: '-20vh', 
            opacity: [0, 0.4, 0],
            x: `calc(${p.x}vw + ${Math.random() * 10 - 5}vw)`
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            position: 'absolute',
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: Math.random() > 0.5 ? 'var(--color-accent-gold)' : '#fff',
            borderRadius: '50%',
            filter: 'blur(1px)'
          }}
        />
      ))}
    </div>
  );
};

const BirthdayCelebration = () => {
  const { language } = useLanguage();
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.8, 1], [0.95, 1]);

  return (
    <section style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      position: 'relative',
      padding: '20px',
      overflow: 'hidden'
    }}>
      <Particles />
      
      {/* Deep dark cinematic backdrop just for the finale */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to bottom, transparent, #1A1614)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        style={{ textAlign: 'center', zIndex: 1, maxWidth: '800px', scale }}
      >
        <h3 className="english-body" style={{ 
          fontSize: '1rem', 
          color: 'var(--color-accent-gold)', 
          marginBottom: '30px', 
          letterSpacing: '0.3em', 
          textTransform: 'uppercase',
          opacity: 0.8
        }}>
          {language === 'hi' ? 'और अगर हम आपको आज कुछ दे सकते...' : 'And if we could give you one thing today...'}
        </h3>
        
        <p className={language === 'hi' ? 'hindi-text' : 'english-heading'} style={{ 
          fontSize: 'clamp(1.5rem, 4vw, 2rem)', 
          color: '#EBE1D1', 
          marginBottom: '80px',
          fontStyle: language === 'en' ? 'italic' : 'normal' 
        }}>
          {language === 'hi' 
            ? 'तो वो वही खुशी होती जो आपने इतने सालों में हम सबको दी है।' 
            : 'It would be the same happiness you\'ve given us all these years.'}
        </p>

        <motion.h1 
          className="english-heading"
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ 
            fontSize: 'clamp(3.5rem, 10vw, 7rem)', 
            color: '#fff',
            marginBottom: '40px',
            lineHeight: '1.1',
            letterSpacing: '-0.02em',
            textShadow: '0 10px 40px rgba(0,0,0,0.5)'
          }}
        >
          Happy <span className="wine-accent" style={{ fontStyle: 'italic', color: 'var(--color-accent-wine)' }}>Birthday</span>,<br/>Maa
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 2 }}
        >
          <p className={language === 'hi' ? 'hindi-text' : 'english-body'} style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.05em' }}>
            {language === 'hi' ? 'हमेशा खुश रहो। हमेशा मुस्कुराती रहो। और हमेशा ऐसे ही हमारे साथ रहो।' : 'Always be happy. Always keep smiling. And always stay with us like this.'}
          </p>
          <p className="english-heading" style={{ fontSize: '1.5rem', marginTop: '50px', color: 'var(--color-accent-gold)', fontStyle: 'italic' }}>
            With all our love.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BirthdayCelebration;
