import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Heart, Mail, X } from 'lucide-react';

const ArchiesInsideVerse = () => {
  const { language } = useLanguage();
  const [isLetterOpen, setIsLetterOpen] = useState(false);

  return (
    <section style={{
      padding: 'clamp(32px, 6vw, 56px) clamp(16px, 5vw, 36px)',
      position: 'relative',
      borderTop: '2px dashed #BD9E78'
    }}>
      {/* Archies Signature Vellum Paper Insert */}
      <div style={{
        maxWidth: '720px',
        margin: '0 auto',
        backgroundColor: '#FFFDF9',
        backgroundImage: 'linear-gradient(rgba(255, 253, 249, 0.9), rgba(250, 246, 236, 0.9)), url("/assets/pressed_flowers_botanical.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '16px',
        padding: 'clamp(28px, 6vw, 48px)',
        boxShadow: '0 20px 50px rgba(87, 0, 19, 0.14), inset 0 0 40px rgba(254, 252, 207, 0.5)',
        border: '2.5px solid rgba(204, 167, 48, 0.7)',
        position: 'relative',
        textAlign: 'center'
      }}>
        {/* Metallic Gold Corner Filigrees */}
        <div style={{
          position: 'absolute', top: '10px', left: '10px', width: '28px', height: '28px',
          borderTop: '3px solid #CCA730', borderLeft: '3px solid #CCA730', borderRadius: '4px 0 0 0'
        }} />
        <div style={{
          position: 'absolute', top: '10px', right: '10px', width: '28px', height: '28px',
          borderTop: '3px solid #CCA730', borderRight: '3px solid #CCA730', borderRadius: '0 4px 0 0'
        }} />
        <div style={{
          position: 'absolute', bottom: '10px', left: '10px', width: '28px', height: '28px',
          borderBottom: '3px solid #CCA730', borderLeft: '3px solid #CCA730', borderRadius: '0 0 0 4px'
        }} />
        <div style={{
          position: 'absolute', bottom: '10px', right: '10px', width: '28px', height: '28px',
          borderBottom: '3px solid #CCA730', borderRight: '3px solid #CCA730', borderRadius: '0 0 4px 0'
        }} />

        {/* Archies Signature Stamp */}
        <div style={{ marginBottom: '18px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            border: '1.5px solid #CCA730',
            borderRadius: '20px',
            backgroundColor: 'rgba(204, 167, 48, 0.1)'
          }}>
            <Sparkles size={14} color="#CCA730" />
            <span className="label-caps" style={{ color: '#570013', letterSpacing: '0.16em', fontSize: '11px' }}>
              {language === 'hi' ? 'Toshi की तरफ से आर्चीज़ काव्य' : 'THE ARCHIES VERSE FOR MUMMA'}
            </span>
            <Sparkles size={14} color="#CCA730" />
          </div>
        </div>

        {/* Main Title */}
        <h2 
          className={language === 'hi' ? 'font-hindi' : 'font-serif'}
          style={{
            fontSize: 'clamp(2.1rem, 6vw, 3.1rem)',
            color: '#570013',
            lineHeight: 1.2,
            marginBottom: '20px',
            fontWeight: 800
          }}
        >
          {language === 'hi' ? 'मेरी प्यारी Mumma के नाम ❤️' : 'For My Dearest Mumma ❤️'}
        </h2>

        {/* Gold Accent Divider */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginBottom: '24px' }}>
          <div style={{ height: '1.5px', width: '60px', background: 'linear-gradient(to right, transparent, #CCA730, transparent)' }} />
          <Heart size={20} fill="#570013" color="#570013" />
          <div style={{ height: '1.5px', width: '60px', background: 'linear-gradient(to right, transparent, #CCA730, transparent)' }} />
        </div>

        {/* Archies Poem */}
        {language === 'hi' ? (
          <div className="font-kalam" style={{
            fontSize: 'clamp(1.3rem, 4.2vw, 1.7rem)',
            color: '#570013',
            lineHeight: 1.85,
            fontWeight: 700
          }}>
            <p style={{ marginBottom: '14px' }}>
              "Mumma, आप ममता की मूरत हैं, दया और प्यार का सागर हैं...<br />
              आपने हमेशा हमारी बात सुनी, राह दिखाई और हर दर्द को संभाला है।"
            </p>
            <p style={{ color: '#77574d', marginBottom: '18px' }}>
              "ज़िंदगी के हर तूफ़ान में, आपका प्यार ही Toshi का सबसे मजबूत सहारा रहा है।"
            </p>
            <p style={{ color: '#570013', fontSize: 'clamp(1.4rem, 4.5vw, 1.85rem)', textDecoration: 'underline wavy #CCA730', textUnderlineOffset: '6px' }}>
              दुनिया की सबसे प्यारी Mumma को जन्मदिन की ढेर सारी शुभकामनाएँ! 🎂✨
            </p>
          </div>
        ) : (
          <div className="font-serif" style={{
            fontSize: 'clamp(1.35rem, 4.4vw, 1.8rem)',
            fontStyle: 'italic',
            color: '#570013',
            lineHeight: 1.6,
            fontWeight: 600
          }}>
            <p style={{ marginBottom: '14px' }}>
              "Mumma, you are loving and kind, caring and warm...<br />
              You always find the time to listen, to guide, and to heal."
            </p>
            <p style={{ color: '#77574d', marginBottom: '18px' }}>
              "Through every storm of life, your unconditional love has been my safest shore."
            </p>
            <p style={{ color: '#570013', fontSize: 'clamp(1.45rem, 4.6vw, 1.95rem)', textDecoration: 'underline wavy #CCA730', textUnderlineOffset: '6px' }}>
              Wishing the world's most wonderful Mumma a blissful Birthday! 🎂✨
            </p>
          </div>
        )}

        {/* Interactive Unfold Letter Button */}
        <div style={{ marginTop: '32px' }}>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setIsLetterOpen(true)}
            style={{
              backgroundColor: '#570013',
              color: '#FAF6EC',
              padding: '12px 26px',
              borderRadius: '6px',
              border: '1.5px solid #CCA730',
              boxShadow: '0 8px 20px rgba(87, 0, 19, 0.3)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer'
            }}
          >
            <Mail size={18} color="#CCA730" />
            <span className="label-caps" style={{ color: '#FFFFFF', fontSize: '0.85rem', letterSpacing: '0.12em' }}>
              {language === 'hi' ? 'Toshi का विशेष पत्र खोलें (READ TOSHI\'S LETTER)' : 'READ TOSHI\'S LETTER'}
            </span>
          </motion.button>
        </div>
      </div>

      {/* Unfolding Parchment Letter Modal */}
      <AnimatePresence>
        {isLetterOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLetterOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 2500,
              backgroundColor: 'rgba(25, 14, 8, 0.88)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px'
            }}
          >
            <motion.div
              initial={{ scale: 0.8, y: 40, rotateX: 15 }}
              animate={{ scale: 1, y: 0, rotateX: 0 }}
              exit={{ scale: 0.8, y: 40, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '620px',
                width: '100%',
                backgroundColor: '#FAF5EC',
                backgroundImage: 'radial-gradient(#EDE3C8 1px, transparent 1px)',
                backgroundSize: '20px 20px',
                padding: 'clamp(24px, 5vw, 40px)',
                borderRadius: '14px',
                boxShadow: '0 25px 80px rgba(0,0,0,0.6)',
                border: '3px solid #CCA730',
                position: 'relative',
                maxHeight: '85vh',
                overflowY: 'auto'
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsLetterOpen(false)}
                style={{
                  position: 'absolute',
                  top: '14px',
                  right: '14px',
                  backgroundColor: '#570013',
                  color: '#FFFFFF',
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1.5px solid #CCA730',
                  cursor: 'pointer'
                }}
              >
                <X size={18} />
              </button>

              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <span className="label-caps" style={{ color: '#800020', letterSpacing: '0.18em' }}>
                  {language === 'hi' ? 'Toshi के दिल से लिखा खत' : 'FROM TOSHI\'S HEART TO YOURS'}
                </span>
                <h3 className={language === 'hi' ? 'font-hindi' : 'font-serif'} style={{ fontSize: '2rem', color: '#570013', margin: '6px 0 0 0' }}>
                  {language === 'hi' ? 'मेरी प्यारी Mumma को...' : 'Dearest Mumma...'}
                </h3>
              </div>

              {language === 'hi' ? (
                <div className="font-kalam" style={{ fontSize: '1.25rem', color: '#2C1A0E', lineHeight: 1.85, textAlign: 'left' }}>
                  <p style={{ marginBottom: '14px' }}>
                    मेरी सबसे प्यारी Mumma,
                  </p>
                  <p style={{ marginBottom: '14px' }}>
                    आज आपके जन्मदिन पर मैं शब्दों में यह बयां नहीं कर सकती कि मेरे लिए आपका क्या मोल है। बचपन की हर छोटी-बड़ी ज़िद्द को पूरा करना, मेरे आँसू पोंछना और हमेशा मुझे सही राह दिखाना—यह सब सिर्फ आप ही कर सकती हैं।
                  </p>
                  <p style={{ marginBottom: '14px' }}>
                    आपके हाथों के खाने में जो स्वाद और प्यार है, वह दुनिया के किसी बड़े से बड़े होटल में भी नहीं मिल सकता। आपकी एक मुस्कान ही मेरे पूरे दिन की थकान मिटा देती है।
                  </p>
                  <p style={{ marginBottom: '20px', color: '#570013', fontWeight: 700 }}>
                    भगवान से बस यही प्रार्थना है कि आप हमेशा स्वस्थ रहें, मुस्कुराती रहें और आपका प्यार भरा साया हमेशा Toshi के सिर पर बना रहे।
                  </p>
                  <p style={{ textAlign: 'right', fontWeight: 700, color: '#800020' }}>
                    आपकी अपनी Toshi ❤️<br />
                    (Forever Your Loving Toshi)
                  </p>
                </div>
              ) : (
                <div className="font-caveat" style={{ fontSize: '1.6rem', color: '#2C1A0E', lineHeight: 1.5, textAlign: 'left' }}>
                  <p style={{ marginBottom: '14px' }}>
                    Dearest Mumma,
                  </p>
                  <p style={{ marginBottom: '14px' }}>
                    On your special day, words feel too small to express how much you mean to me. From holding my tiny hands to standing by me as my greatest pillar of strength, you have given me everything without ever asking for anything in return.
                  </p>
                  <p style={{ marginBottom: '14px' }}>
                    Your laughter fills our home with warmth, and your endless care gives me confidence every single day.
                  </p>
                  <p style={{ marginBottom: '20px', color: '#570013', fontWeight: 700 }}>
                    May God bless you with abundant happiness, good health, and peace. Happy Birthday, Mumma!
                  </p>
                  <p style={{ textAlign: 'right', fontWeight: 700, color: '#800020' }}>
                    With eternal love & gratitude, <br />
                    Your daughter Toshi ❤️
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ArchiesInsideVerse;
