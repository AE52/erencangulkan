'use client';

import Image from 'next/image';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import SearchParamsWrapper from './search-params-wrapper';

const Content = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ImageContainer = styled.div`
  position: relative;
  width: 300px;
  height: 375px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    width: 400px;
    height: 500px;
  }

  .profile-image {
    object-fit: cover;
  }
`;

const TextContent = styled.div`
  max-width: 800px;
  text-align: center;

  h1 {
    color: #2C3E50;
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  h2 {
    color: #8B7355;
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }

  p {
    color: #34495E;
    line-height: 1.8;
    margin-bottom: 2rem;
    font-size: 1.1rem;
  }
`;

const ProfileCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 10px;
  margin: 2rem 0;

  .profile-image-small {
    border-radius: 50%;
  }

  .profile-info {
    h3 {
      color: #2C3E50;
      margin: 0;
    }

    p {
      color: #8B7355;
      margin: 0;
    }
  }
`;

const ContactButton = styled.button`
  padding: 1rem 2rem;
  background-color: #8B7355;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #6B5835;
  }
`;

const WhatsAppButton = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background-color: #25D366;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  z-index: 1000;

  &:hover {
    transform: scale(1.1);
  }
`;

export default function ClientAboutPage() {
  const { language } = useLanguage();

  return (
    <SearchParamsWrapper>
      <Content>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AboutSection>
            <ImageContainer>
              <Image
                src="/images/vesika.jpg"
                alt="Av. Erencan Gülkan"
                width={400}
                height={500}
                className="profile-image"
                priority
                quality={90}
                loading="eager"
                sizes="(max-width: 768px) 300px, 400px"
              />
            </ImageContainer>
            <TextContent>
              <h1>{language === 'tr' ? 'Hakkımızda' : 'About Us'}</h1>
              <h2>{language === 'tr' ? 'Hakkınızı Birlikte Kazanalım' : 'Let\'s Win Your Rights Together'}</h2>
              <p>
                {language === 'tr' 
                  ? 'Avukat Erencan Gülkan 1998 yılında İstanbulda doğmuştur. İlköğretim, ortaöğretim ve lise eğitimini İstanbulda tamamlamıştır. 2016 yılında Kocaeli Üniversitesi Hukuk Fakültesini kazanmış ve buradan başarıyla mezun olmuştur. 2022 yılında İstanbul Barosunda avukatlık stajına başlayıp ardından avukatlık ruhsatnamesine hak kazanarak serbest avukatlık faaliyetlerine başlamıştır. İleri seviye İngilizce ve orta seviye Almanca bilmektedir.'
                  : 'Attorney Erencan Gülkan was born in Istanbul in 1998. He completed his primary, secondary and high school education in Istanbul. He won Kocaeli University Faculty of Law in 2016 and graduated successfully. In 2022, he started his legal internship at the Istanbul Bar Association and then earned his attorney\'s license and started his independent legal practice. He has advanced English and intermediate German language skills.'}
              </p>
              <ProfileCard>
                <Image
                  src="/images/vesika.jpg"
                  alt="Av. Erencan Gülkan"
                  width={60}
                  height={60}
                  className="profile-image-small"
                />
                <div className="profile-info">
                  <h3>Av. Erencan Gülkan</h3>
                  <p>{language === 'tr' ? 'Kurucu Avukat' : 'Founding Attorney'}</p>
                </div>
              </ProfileCard>
              <ContactButton onClick={() => window.location.href = '/iletisim'}>
                {language === 'tr' ? 'İletişime Geçin' : 'Contact Us'}
              </ContactButton>
            </TextContent>
          </AboutSection>
          <WhatsAppButton 
            href="https://wa.me/905397440887" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label={language === 'tr' ? 'WhatsApp ile iletişime geçin' : 'Contact via WhatsApp'}
          >
            <i className="fab fa-whatsapp"></i>
          </WhatsAppButton>
        </motion.div>
      </Content>
    </SearchParamsWrapper>
  );
} 