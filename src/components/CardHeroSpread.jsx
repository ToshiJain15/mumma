import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

// The open card spread — left page: photo + quilling art; right page: birthday greeting
const CardHeroSpread = () => {
  const { language } = useLanguage();
  const [opened, setOpened] = useState(false);

  return (
    <div style={{ width: '100%', padding: 'clamp(20px, 4vw, 40px)' }}>
      {/* TOP: Section label */}
      <div style={{ textAlign: 'center', marginBottom: '28px' }}>
        <div className="section-label">
          <span style={{ fontSize: '1rem' }}>💌</span>
          <span className="label-caps" style={{ color: '#570013' }}>
            {language === 'hi' ? 'जन्मदिन मुबारक हो, माँ' : 'Happy Birthday, Maa'}
          </span>
          <span style={{ fontSize: '1rem' }}>💌</span>
        </div>
      </div>

      {/* TWO-PAGE SPREAD */}
      <div className="card-pages" style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 12px 40px rgba(60,30,10,0.18)' }}>
        {/* LEFT PAGE */}
        <div className="card-page-left" style={{ alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
          {/* Washi tape top */}
          <div className="washi washi-stripe-gold" style={{ width: 90, top: -8, left: '40%', transform: 'rotate(-12deg)' }} />

          {/* Main hero photo — Maa */}
          <div
            className="photo-polaroid photo-corners"
            style={{ transform: 'rotate(-2deg)', maxWidth: '260px', width: '100%' }}
          >
            <img src="assets/DSC_5144.JPG" alt="Maa" style={{ aspectRatio: '4/5', objectFit: 'cover' }} />
            <div className="polaroid-caption">
              {language === 'hi' ? 'हमारी प्यारी माँ 🌸' : 'Our dearest Maa 🌸'}
            </div>
          </div>

          {/* Quilling art below */}
          <div
            className="photo-polaroid"
            style={{ transform: 'rotate(1.5deg)', maxWidth: '220px', width: '100%', marginTop: '8px' }}
          >
            <img src="assets/mother_daughter_quilling.jpg" alt="Mother Daughter" style={{ aspectRatio: '1/1', objectFit: 'cover' }} />
            <div className="polaroid-caption">
              {language === 'hi' ? 'माँ और बेटी 💕' : 'Maa & Daughter 💕'}
            </div>
          </div>

          {/* Washi tape bottom-right */}
          <div className="washi washi-stripe-rose" style={{ width: 80, bottom: -8, right: '30%', transform: 'rotate(8deg)' }} />
        </div>

        {/* RIGHT PAGE */}
        <div className="card-page-right" style={{ justifyContent: 'center', gap: '20px' }}>
          {/* Pressed flowers art */}
          <div style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '4px', letterSpacing: '4px', userSelect: 'none' }}>
            🌸 🌼 🌺
          </div>

          {/* Main Birthday Greeting */}
          <h1
            className={`font-display shimmer-text`}
            style={{
              fontSize: 'clamp(2.2rem, 5.5vw, 3.4rem)',
              lineHeight: 1.15,
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: '12px',
            }}
          >
            {language === 'hi' ? 'जन्मदिन मुबारक हो, माँ ❤️' : 'Happy Birthday, Maa ❤️'}
          </h1>

          {/* Hindi Blessing */}
          <p
            className="font-hindi"
            style={{
              fontSize: 'clamp(1.15rem, 3.5vw, 1.5rem)',
              color: '#77574d',
              lineHeight: 1.7,
              textAlign: 'center',
              fontWeight: 600,
              maxWidth: '340px',
              marginBottom: '16px',
            }}
          >
            आप हमारे लिए सिर्फ माँ नहीं हैं,<br />
            आप हमारे घर की सबसे खूबसूरत मुस्कान हैं।
          </p>

          {/* Floral divider */}
          <div className="floral-divider" style={{ maxWidth: '260px' }}>
            <div className="floral-divider-line" />
            <span style={{ fontSize: '0.9rem', color: '#B8860B' }}>✿</span>
            <div className="floral-divider-line" />
          </div>

          {/* English Quote */}
          <p
            className="font-serif"
            style={{
              fontSize: 'clamp(1.1rem, 3.2vw, 1.35rem)',
              fontStyle: 'italic',
              color: '#6B4226',
              textAlign: 'center',
              maxWidth: '300px',
              lineHeight: 1.55,
            }}
          >
            "You make every place feel like home."
          </p>

          {/* Tiny stitched border detail */}
          <div style={{
            marginTop: '16px',
            padding: '10px 20px',
            border: '1.5px dashed rgba(107,66,38,0.4)',
            borderRadius: '6px',
            textAlign: 'center',
          }}>
            <span className="font-hand" style={{ color: '#570013', fontSize: '1rem', fontWeight: 700 }}>
              {language === 'hi' ? '— आपकी बेटी की तरफ से, प्यार के साथ 💕' : '— With all my love, your daughter 💕'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHeroSpread;
