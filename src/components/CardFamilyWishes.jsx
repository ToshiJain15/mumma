import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { HeartHandshake, Feather, Heart } from 'lucide-react';

const wishesData = [
  {
    id: 1,
    authorEn: 'With all our heart',
    authorHi: 'दिल की गहराइयों से',
    msgEn: 'Thank you for every sacrifice, every prayer, and all the silent love you pour into our lives every single day.',
    msgHi: 'हमारे जीवन को इतना खूबसूरत बनाने के लिए और हर दिन अपने प्यार और दुआओं से सींचने के लिए आपका बहुत-बहुत शुक्रिया माँ।'
  },
  {
    id: 2,
    authorEn: 'Forever Grateful',
    authorHi: 'हमेशा आपका आभारी',
    msgEn: 'May God bless you with the best of health, boundless joy, long life, and every happiness this universe has to offer.',
    msgHi: 'ईश्वर आपको हमेशा स्वस्थ, दीर्घायु, प्रसन्न और हर प्रकार की खुशियों से परिपूर्ण रखे।'
  },
  {
    id: 3,
    authorEn: 'From Your Family',
    authorHi: 'आपके परिवार की तरफ से',
    msgEn: 'You are our greatest pride, our eternal guide, and the sweetest mother in the entire world!',
    msgHi: 'आप हमारी सबसे बड़ी ताकत हैं, हमारा अभिमान हैं, और दुनिया की सबसे प्यारी माँ हैं!'
  }
];

const CardFamilyWishes = () => {
  const { language } = useLanguage();

  return (
    <section style={{ padding: 'clamp(28px, 6vw, 48px) clamp(16px, 5vw, 36px)', borderTop: '1px dashed rgba(212, 175, 55, 0.3)' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          color: 'var(--gold-dark)',
          marginBottom: '8px'
        }}>
          <Feather size={16} color="#D4AF37" />
          <span 
            className={language === 'hi' ? 'font-hindi' : 'font-serif'}
            style={{ fontSize: '0.85rem', letterSpacing: '0.12em', fontWeight: 600 }}
          >
            {language === 'hi' ? 'परिवार की शुभकामनाएँ' : 'FAMILY WISHES'}
          </span>
        </div>

        <h2 
          className={language === 'hi' ? 'font-hindi' : 'font-serif'}
          style={{
            fontSize: 'clamp(1.9rem, 5vw, 2.7rem)',
            color: 'var(--wine-deep)',
            marginBottom: '8px',
            fontWeight: 700
          }}
        >
          {language === 'hi' ? 'अपनों के दिल से निकली दुआएँ' : 'Handwritten Wishes for Maa'}
        </h2>

        <p 
          className={language === 'hi' ? 'font-hindi' : 'font-cormorant'}
          style={{
            fontSize: '1.05rem',
            color: 'var(--text-muted)',
            fontStyle: language === 'en' ? 'italic' : 'normal'
          }}
        >
          {language === 'hi' ? 'कार्ड के पन्नों में सहेजे गए कुछ अनमोल शब्द' : 'Small heartfelt notes tucked with love inside your card'}
        </p>
      </div>

      {/* Handwritten Notes Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '20px',
        maxWidth: '740px',
        margin: '0 auto'
      }}>
        {wishesData.map((wish, idx) => (
          <motion.div
            key={wish.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.12 }}
            style={{
              backgroundColor: '#FFFDF9',
              border: '1px solid rgba(212, 175, 55, 0.4)',
              borderRadius: '8px',
              padding: '20px',
              position: 'relative',
              boxShadow: '0 8px 20px rgba(0,0,0,0.04)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            {/* Stamp Pin Effect */}
            <div style={{
              position: 'absolute',
              top: '8px',
              right: '12px',
              color: 'var(--wine-soft)'
            }}>
              <Heart size={14} fill="var(--wine-soft)" />
            </div>

            {/* Message Body */}
            <p 
              className={language === 'hi' ? 'font-hindi' : 'font-cormorant'}
              style={{
                fontSize: language === 'hi' ? '1rem' : '1.15rem',
                color: 'var(--text-dark)',
                lineHeight: 1.7,
                marginBottom: '16px',
                fontStyle: language === 'en' ? 'italic' : 'normal'
              }}
            >
              "{language === 'hi' ? wish.msgHi : wish.msgEn}"
            </p>

            {/* Author Signature */}
            <div style={{
              borderTop: '1px solid rgba(212, 175, 55, 0.25)',
              paddingTop: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              gap: '4px'
            }}>
              <span 
                className={language === 'hi' ? 'font-hindi' : 'font-script'}
                style={{
                  fontSize: language === 'hi' ? '0.95rem' : '1.35rem',
                  color: 'var(--wine-primary)',
                  fontWeight: language === 'hi' ? 600 : 400
                }}
              >
                ~ {language === 'hi' ? wish.authorHi : wish.authorEn}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CardFamilyWishes;
