'use client';

import React, { Suspense } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const HeroSection = styled.div`
  position: relative;
  height: 60vh;
  width: 100%;
  background: linear-gradient(120deg, #8B7355, #D4AF37);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;

  @media (max-width: 768px) {
    height: 50vh;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: white;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const MainContent = styled.div`
  max-width: 1000px;
  margin: -100px auto 4rem;
  padding: 3rem;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    margin: -50px 1rem 2rem;
    padding: 2rem;
  }
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const AboutContent = styled.div`
  color: #2C3E50;
  
  h2 {
    font-size: 2rem;
    color: #8B7355;
    margin-bottom: 1.5rem;
    
    @media (max-width: 768px) {
      font-size: 1.75rem;
    }
  }

  p {
    font-size: 1.2rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    color: #4A5568;

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }
`;

const LanguageSkills = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #E2E8F0;
`;

const SkillTitle = styled.h3`
  font-size: 1.5rem;
  color: #8B7355;
  margin-bottom: 1rem;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SkillItem = styled.li`
  font-size: 1.1rem;
  color: #4A5568;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;

  &:before {
    content: "•";
    color: #8B7355;
    font-weight: bold;
    margin-right: 0.5rem;
  }
`;

const WhatsAppButton = styled.a`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  background-color: #25D366;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  z-index: 9999;

  &:hover {
    transform: scale(1.1);
    background-color: #20ba57;
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 24px;
    bottom: 20px;
    right: 20px;
  }
`;

function AboutPageContent() {
  const { language } = useLanguage();

  return (
    <PageContainer>
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection>
          <HeroTitle>
            {language === 'tr' ? 'Hakkınızı Birlikte Kazanalım' : 'Let\'s Win Your Rights Together'}
          </HeroTitle>
        </HeroSection>
        <MainContent>
          <AboutGrid>
            <ImageContainer>
              <Image
                src="/images/vesika.jpg"
                alt="Av. Eren Can Gülkan"
                fill
                style={{ objectFit: 'cover' }}
              />
            </ImageContainer>
            <AboutContent>
              <h2>{language === 'tr' ? 'Av. Eren Can Gülkan' : 'Attorney Eren Can Gülkan'}</h2>
              {language === 'tr' ? (
                <>
                  <p>
                    Avukat Eren Can Gülkan 1998 yılında İstanbul'da doğmuştur. İlköğretim, ortaöğretim ve lise eğitimini İstanbul'da tamamlamıştır.
                  </p>
                  <p>
                    2016 yılında Kocaeli Üniversitesi Hukuk Fakültesini kazanmış ve buradan başarıyla mezun olmuştur.
                  </p>
                  <p>
                    2022 yılında İstanbul Barosunda avukatlık stajına başlayıp ardından avukatlık ruhsatnamesine hak kazanarak serbest avukatlık faaliyetlerine başlamıştır.
                  </p>
                  <LanguageSkills>
                    <SkillTitle>Yabancı Dil Bilgisi</SkillTitle>
                    <SkillList>
                      <SkillItem>İngilizce - İleri Seviye</SkillItem>
                      <SkillItem>Almanca - Orta Seviye</SkillItem>
                    </SkillList>
                  </LanguageSkills>
                </>
              ) : (
                <>
                  <p>
                    Attorney Eren Can Gülkan was born in Istanbul in 1998. He completed his primary, secondary, and high school education in Istanbul.
                  </p>
                  <p>
                    In 2016, he was admitted to Kocaeli University Faculty of Law and graduated successfully.
                  </p>
                  <p>
                    In 2022, he started his legal internship at the Istanbul Bar Association and after obtaining his attorney license, he began his independent legal practice.
                  </p>
                  <LanguageSkills>
                    <SkillTitle>Language Skills</SkillTitle>
                    <SkillList>
                      <SkillItem>English - Advanced Level</SkillItem>
                      <SkillItem>German - Intermediate Level</SkillItem>
                    </SkillList>
                  </LanguageSkills>
                </>
              )}
            </AboutContent>
          </AboutGrid>
        </MainContent>
      </motion.div>

      <WhatsAppButton
        href="https://wa.me/905397440887"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile iletişime geçin"
      >
        <i className="fab fa-whatsapp"></i>
      </WhatsAppButton>

      <Footer />
    </PageContainer>
  );
}

export default function AboutPageClient() {
  return (
    <Suspense fallback={<div>Yükleniyor...</div>}>
      <AboutPageContent />
    </Suspense>
  );
} 