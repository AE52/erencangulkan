'use client';

import React, { Suspense } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Service } from '../data';

// Styled components ve interfaces buraya gelecek...
const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
`;

interface HeroSectionProps {
  $imageUrl: string;
}

const HeroSection = styled.div<HeroSectionProps>`
  position: relative;
  height: 400px;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
              url(${props => props.$imageUrl});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const MainContent = styled.div`
  max-width: 800px;
  margin: -100px auto 4rem;
  padding: 3rem;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
`;

const ServiceContent = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const ServiceTitle = styled.h1`
  font-size: 2.5rem;
  color: #2C3E50;
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;
  margin-bottom: 2rem;
`;

const ServiceDetails = styled.div`
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
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
  z-index: 1000;

  &:hover {
    transform: scale(1.1);
    background-color: #20ba57;
  }
`;

interface ServicePageClientProps {
  service: Service;
}

function ServicePageContent({ service }: ServicePageClientProps) {
  const { language } = useLanguage();

  return (
    <PageContainer>
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection $imageUrl={service.image}>
          <HeroContent>
            <HeroTitle>
              {language === 'tr' ? service.title_tr : service.title_en}
            </HeroTitle>
            <HeroSubtitle>
              {language === 'tr' ? service.description_tr : service.description_en}
            </HeroSubtitle>
          </HeroContent>
        </HeroSection>
        <MainContent>
          <ServiceContent>
            <ServiceTitle>
              {language === 'tr' ? service.title_tr : service.title_en}
            </ServiceTitle>
            <ServiceDescription>
              {language === 'tr' ? service.description_tr : service.description_en}
            </ServiceDescription>
            <ServiceDetails>
              {language === 'tr' ? service.content_tr : service.content_en}
            </ServiceDetails>
          </ServiceContent>
        </MainContent>
      </motion.div>
      <WhatsAppButton
        href="https://wa.me/905301231234"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-whatsapp"></i>
      </WhatsAppButton>
      <Footer />
    </PageContainer>
  );
}

export default function ServicePageClient({ service }: ServicePageClientProps) {
  return (
    <Suspense fallback={<div>Yükleniyor...</div>}>
      <ServicePageContent service={service} />
    </Suspense>
  );
} 