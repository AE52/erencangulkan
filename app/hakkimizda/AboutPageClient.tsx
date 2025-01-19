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
  position: relative;
`;

const HeroSection = styled.section`
  position: relative;
  height: 400px;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
              url('/images/about-hero.jpg');
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

const MainContent = styled.div`
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 2rem;
`;

const AboutSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 4rem;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutImage = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  border-radius: 15px;
  overflow: hidden;

  @media (max-width: 992px) {
    height: 400px;
  }
`;

const AboutContentWrapper = styled.div`
  h2 {
    font-size: 2.5rem;
    color: #2C3E50;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.1rem;
    color: #666;
    line-height: 1.8;
    margin-bottom: 1.5rem;
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
  z-index: 1000;

  &:hover {
    transform: scale(1.1);
    background-color: #20ba57;
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
          <HeroContent>
            <HeroTitle>
              {language === 'tr' ? 'Hakkımızda' : 'About Us'}
            </HeroTitle>
          </HeroContent>
        </HeroSection>

        <MainContent>
          <AboutSection>
            <AboutImage>
              <Image
                src="/images/vesika.jpg"
                alt="Av. Erencan Gülkan"
                fill
                style={{ objectFit: 'cover' }}
              />
            </AboutImage>
            <AboutContentWrapper>
              <h2>Av. Erencan Gülkan</h2>
              <p>
                {language === 'tr'
                  ? 'Merhaba, ben Avukat Erencan Gülkan. İstanbul Barosu\'na kayıtlı olarak hukuki danışmanlık ve avukatlık hizmetleri vermekteyim.'
                  : 'Hello, I am Attorney Erencan Gülkan. I provide legal consultancy and attorney services registered to the Istanbul Bar Association.'}
              </p>
              <p>
                {language === 'tr'
                  ? 'Müvekkillerimin haklarını korumak ve en iyi sonucu elde etmek için titizlikle çalışıyorum. Her davanın kendine özgü olduğuna inanıyor ve her müvekkilime özel çözümler sunuyorum.'
                  : 'I work diligently to protect my clients\' rights and achieve the best results. I believe that each case is unique and I offer special solutions to each of my clients.'}
              </p>
              <p>
                {language === 'tr'
                  ? 'Hukuki süreçlerde şeffaflık ve güven ilkelerini esas alıyor, müvekkillerimi sürecin her aşamasında bilgilendiriyorum.'
                  : 'I base transparency and trust principles in legal processes and inform my clients at every stage of the process.'}
              </p>
            </AboutContentWrapper>
          </AboutSection>
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