import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import LanguageSwitch from './components/LanguageSwitch';
import AmbientMusic from './components/AmbientMusic';
import AmbientParticles from './components/AmbientParticles';
import HeritageEnvelopeCover from './components/HeritageEnvelopeCover';
import InteractiveGreetingCardBook from './components/InteractiveGreetingCardBook';
import PhotoLightbox from './components/PhotoLightbox';
import { Heart } from 'lucide-react';

function AppContent() {
  const [isJourneyBegun, setIsJourneyBegun] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Ambient Floating Gold Dust & Rose Petals */}
      <AmbientParticles />

      {/* Top Floating Controls */}
      <LanguageSwitch />
      <AmbientMusic />

      {/* Photo Lightbox Modal */}
      <PhotoLightbox 
        photo={selectedPhoto} 
        onClose={() => setSelectedPhoto(null)} 
      />

      {/* Section 1: The Interactive Envelope Opening Experience */}
      {!isJourneyBegun ? (
        <HeritageEnvelopeCover onOpen={() => setIsJourneyBegun(true)} />
      ) : (
        <>
          {/* Top Header Bar */}
          <header style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 50,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '12px 24px',
            backgroundColor: 'rgba(250, 246, 236, 0.92)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1.5px solid rgba(204, 167, 48, 0.4)',
            boxShadow: '0 4px 16px rgba(87, 0, 19, 0.1)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Heart size={20} fill="#570013" color="#570013" />
              <span className="font-serif" style={{
                fontSize: '1.45rem',
                fontStyle: 'italic',
                color: '#570013',
                fontWeight: 700
              }}>
                For Dearest Mumma
              </span>
            </div>
            <span className="label-caps" style={{ color: '#77574d', letterSpacing: '0.14em', fontSize: '11px' }}>
              HANDMADE KEEPSAKE CARD FOR MUMMA · WITH LOVE FROM TOSHI
            </span>
          </header>

          {/* Main Scrapbook Desk Canvas */}
          <main style={{
            padding: 'clamp(80px, 10vw, 110px) 14px 48px 14px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            {/* The 3D Interactive Birthday Greeting Card Book */}
            <InteractiveGreetingCardBook onSelectPhoto={setSelectedPhoto} />

            {/* Handcrafted Footer Stamp */}
            <div style={{
              textAlign: 'center',
              marginTop: '32px',
              color: '#FAF7EE',
              fontSize: '1.05rem',
              letterSpacing: '0.04em',
              fontWeight: 700
            }}>
              ✂️ Crafted for Dearest Mumma by Toshi with Eternal Love ❤️ ✂️
            </div>
          </main>
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
