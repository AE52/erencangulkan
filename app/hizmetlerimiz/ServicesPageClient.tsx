'use client';

import React, { Suspense } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { services } from './data';

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const HeroSection = styled.div`
  position: relative;
  height: 400px;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
              url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80');
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

const ServicesSection = styled.section`
  padding: 4rem 2rem;
  background: white;
`;

const ServicesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled(Link)`
  background: white;
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 2rem;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  color: #8B7355;
  margin-bottom: 1rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  color: #2C3E50;
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
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

function ServicesPageContent() {
  const { language } = useLanguage();

  return (
    <PageContainer>
      <Header />
      
      <HeroSection>
        <HeroContent>
          <HeroTitle>
            {language === 'tr' ? 'Çalışma Alanlarımız' : 'Our Practice Areas'}
          </HeroTitle>
          <HeroSubtitle>
            {language === 'tr' 
              ? 'Uzman hukuki danışmanlık ve temsil hizmetleri'
              : 'Expert legal consultancy and representation services'}
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>

      <ServicesSection>
        <ServicesContainer>
          <ServicesGrid>
            {services.map((service) => (
              <ServiceCard 
                key={service.slug} 
                href={`/hizmetlerimiz/${service.slug}`}
                as={motion.a}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ServiceIcon>
                  <i className={`fas fa-${service.icon}`}></i>
                </ServiceIcon>
                <ServiceTitle>
                  {language === 'tr' ? service.title_tr : service.title_en}
                </ServiceTitle>
                <ServiceDescription>
                  {language === 'tr' ? service.description_tr : service.description_en}
                </ServiceDescription>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </ServicesContainer>
      </ServicesSection>

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

export default function ServicesPageClient() {
  return (
    <Suspense fallback={<div>Yükleniyor...</div>}>
      <ServicesPageContent />
    </Suspense>
  );
} 