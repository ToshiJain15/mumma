import React from 'react';
import { motion } from 'framer-motion';

const QuillingArt = () => {
  return (
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
      whileHover={{ scale: 1.08, rotate: 3, boxShadow: '0 20px 45px rgba(87, 0, 19, 0.35)' }}
      style={{
        position: 'relative',
        width: '130px',
        height: '130px',
        margin: '0 auto',
        borderRadius: '50%',
        padding: '6px',
        backgroundColor: '#FAF6EC',
        background: 'linear-gradient(135deg, #FFFDF9 0%, #FAF3E0 100%)',
        border: '3px solid #CCA730',
        boxShadow: '0 14px 35px rgba(60, 30, 10, 0.25), inset 0 2px 5px rgba(255,255,255,0.8)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Dashed Golden Craft Ring */}
      <div style={{
        position: 'absolute',
        inset: '2px',
        borderRadius: '50%',
        border: '1.5px dashed #800020',
        pointerEvents: 'none',
        zIndex: 5
      }} />

      {/* Real High-Res Paper Quilling Artwork */}
      <img 
        src="/assets/mother_daughter_quilling.jpg" 
        alt="Real Handmade Paper Quilling Artwork"
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          objectFit: 'cover',
          display: 'block',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
        }}
      />
    </motion.div>
  );
};

export default QuillingArt;
