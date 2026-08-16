import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PaperButterfly = ({ style }) => {
  const [isFlying, setIsFlying] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    setIsFlying(true);
    setTimeout(() => setIsFlying(false), 2400);
  };

  return (
    <motion.div
      onClick={handleClick}
      animate={
        isFlying
          ? {
              x: [0, -60, 80, -40, 0],
              y: [0, -120, -80, -40, 0],
              scale: [1, 1.3, 1.1, 1.2, 1],
              rotate: [0, -25, 30, -15, 0]
            }
          : {
              y: [0, -4, 0],
              rotate: [0, 2, 0]
            }
      }
      transition={
        isFlying
          ? { duration: 2.4, ease: 'easeInOut' }
          : { duration: 3, repeat: Infinity, ease: 'easeInOut' }
      }
      style={{
        position: 'absolute',
        cursor: 'pointer',
        zIndex: 50,
        filter: 'drop-shadow(2px 6px 8px rgba(0,0,0,0.3))',
        ...style
      }}
      title="Click to flutter!"
    >
      <svg width="46" height="42" viewBox="0 0 100 90">
        <defs>
          <linearGradient id="butterflyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFB3B5" />
            <stop offset="50%" stopColor="#C0392B" />
            <stop offset="100%" stopColor="#570013" />
          </linearGradient>
        </defs>

        {/* Left Wing */}
        <motion.path
          d="M 50 45 C 20 10, 0 20, 5 55 C 10 75, 40 70, 50 45 Z"
          fill="url(#butterflyGrad)"
          stroke="#FAF6EC"
          strokeWidth="2"
          animate={{ rotateY: [0, 45, 0] }}
          transition={{ duration: 0.4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '50px 45px' }}
        />

        {/* Right Wing */}
        <motion.path
          d="M 50 45 C 80 10, 100 20, 95 55 C 90 75, 60 70, 50 45 Z"
          fill="url(#butterflyGrad)"
          stroke="#FAF6EC"
          strokeWidth="2"
          animate={{ rotateY: [0, -45, 0] }}
          transition={{ duration: 0.4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '50px 45px' }}
        />

        {/* Body & Antennae */}
        <ellipse cx="50" cy="45" rx="3" ry="18" fill="#CCA730" />
        <path d="M 50 30 Q 42 18, 38 12 M 50 30 Q 58 18, 62 12" stroke="#CCA730" strokeWidth="2" fill="none" />
      </svg>
    </motion.div>
  );
};

export default PaperButterfly;
