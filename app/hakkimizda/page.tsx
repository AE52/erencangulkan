'use client';

import styled from 'styled-components';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const AboutContainer = styled.div`
  padding-top: 80px;
`;

const AboutSection = styled.section`
  padding: 5rem 0;
  background: white;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;

  .profile-image {
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const TextContent = styled.div`
  h1 {
    font-size: 1rem;
    color: #8B7355;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  h2 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 2rem;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    color: #666;
    line-height: 1.8;
    margin-bottom: 2rem;
  }
`;

const ProfileCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;

  .profile-image-small {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  .profile-info {
    h3 {
      font-size: 1.25rem;
      color: #333;
      margin-bottom: 0.25rem;
    }

    p {
      color: #8B7355;
      margin: 0;
    }
  }
`;

const ContactButton = styled.button`
  background: #8B7355;
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: #6B573D;
  }
`;

const WhatsAppButton = styled.a`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: #25D366;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  z-index: 50;

  &:hover {
    transform: scale(1.1);
    background: #128C7E;
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
    bottom: 1.5rem;
    right: 1.5rem;
  }
`;

export default function AboutPage() {
  return (
    <>
      <Header />
      <AboutContainer>
        <AboutSection>
          <AboutContent>
            <ImageContainer>
              <Image
                src="/images/vesika.jpg"
                alt="Av. Erencan Gülkan"
                width={400}
                height={500}
                className="profile-image"
                priority
              />
            </ImageContainer>
            <TextContent>
              <h1>Hakkımızda</h1>
              <h2>Hakkınızı Birlikte Kazanalım</h2>
              <p>
                Avukat Erencan Gülkan 1998 yılında İstanbulda doğmuştur. İlköğretim, ortaöğretim ve lise eğitimini İstanbulda tamamlamıştır. 2016 yılında Kocaeli Üniversitesi Hukuk Fakültesini kazanmış ve buradan başarıyla mezun olmuştur. 2022 yılında İstanbul Barosunda avukatlık stajına başlayıp ardından avukatlık ruhsatnamesine hak kazanarak serbest avukatlık faaliyetlerine başlamıştır. İleri seviye İngilizce ve orta seviye Almanca bilmektedir.
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
                  <p>Kurucu Avukat</p>
                </div>
              </ProfileCard>
              <ContactButton className="mt-8" onClick={() => window.location.href = '/iletisim'}>
                İletişime Geçin
              </ContactButton>
            </TextContent>
          </AboutContent>
        </AboutSection>

        <WhatsAppButton 
          href="https://wa.me/905397440887" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="WhatsApp ile iletişime geçin"
        >
          <i className="fab fa-whatsapp"></i>
        </WhatsAppButton>
      </AboutContainer>
      <Footer />
    </>
  );
} 