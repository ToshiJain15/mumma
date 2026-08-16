import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const memories = [
  { src: '/assets/IMG-20260104-WA0123.jpg', width: '45%', top: '0', left: '0', speed: 0.1 },
  { src: '/assets/DSC_9568.JPG', width: '60%', top: '15%', left: '40%', speed: -0.15 },
  { src: '/assets/IMG_20230923_224856.jpg', width: '50%', top: '45%', left: '5%', speed: 0.05 },
  { src: '/assets/IMG-20260104-WA0133.jpg', width: '40%', top: '60%', left: '55%', speed: -0.1 },
  { src: '/assets/20230514_090841-COLLAGE.jpg', width: '70%', top: '85%', left: '15%', speed: 0.15 }
];

const ParallaxImage = ({ img, index }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, window.innerHeight * img.speed]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "100px" }}
      transition={{ duration: 1.5, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'absolute',
        width: img.width,
        top: img.top,
        left: img.left,
        y: y,
        zIndex: index
      }}
    >
      <div className="glass-panel" style={{ padding: '10px' }}>
        <img 
          src={img.src} 
          alt="Memory" 
          style={{
            width: '100%',
            display: 'block',
            filter: 'contrast(1.05)',
          }}
          loading="lazy"
        />
      </div>
    </motion.div>
  );
};

const Memories = () => {
  const { language } = useLanguage();

  return (
    <section style={{ padding: '150px 0', position: 'relative' }}>
      <div className="content-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: '120px' }}
        >
          <h2 className="english-heading" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--color-text-primary)', marginBottom: '20px' }}>
            {language === 'hi' ? 'कुछ खूबसूरत यादें' : 'Editorial Memories'}
          </h2>
          <div style={{ width: '40px', height: '1px', background: 'var(--color-accent-gold)', margin: '0 auto 20px' }} />
          <p className={language === 'hi' ? 'hindi-text' : 'english-heading'} style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', fontStyle: language === 'en' ? 'italic' : 'normal' }}>
            {language === 'hi' 
              ? 'ये सिर्फ तस्वीरें नहीं हैं, ये वो पल हैं जो आपने हमारे लिए खास बनाए हैं।' 
              : 'These aren\'t just photographs. They are the moments you made special for us.'}
          </p>
        </motion.div>

        {/* Asymmetrical Lookbook Layout */}
        <div style={{ position: 'relative', height: '1800px', width: '100%' }}>
          {memories.map((img, index) => (
            <ParallaxImage key={index} img={img} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Memories;
