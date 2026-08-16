import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitch = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      className="floating-control floating-control-right"
      onClick={toggleLanguage}
      aria-label="Switch language"
      style={{ bottom: '20px', right: '16px' }}
    >
      🌐 {language === 'hi' ? 'EN' : 'हिंदी'}
    </button>
  );
};

export default LanguageSwitch;
