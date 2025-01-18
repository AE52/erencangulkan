'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const NotFoundContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
              url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80');
  background-size: cover;
  background-position: center;
`;

const Content = styled.div`
  text-align: center;
  color: white;
  max-width: 600px;
  padding: 3rem;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 15px;
  backdrop-filter: blur(10px);
`;

const Title = styled.h1`
  font-size: 8rem;
  font-weight: bold;
  margin: 0;
  color: #8B7355;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  margin: 1rem 0;
  color: white;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin: 1.5rem 0;
  color: rgba(255, 255, 255, 0.9);
`;

const BackButton = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  background: #8B7355;
  color: white;
  text-decoration: none;
  border-radius: 30px;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover {
    background: #6B5744;
    transform: translateY(-2px);
  }
`;

export default function NotFound() {
  const { language } = useLanguage();

  return (
    <PageContainer>
      <Header />
      
      <NotFoundContainer>
        <Content
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Title>404</Title>
          <Subtitle>
            {language === 'tr' 
              ? 'Sayfa Bulunamadı'
              : 'Page Not Found'}
          </Subtitle>
          <Description>
            {language === 'tr'
              ? 'Aradığınız sayfa mevcut değil veya taşınmış olabilir.'
              : 'The page you are looking for does not exist or may have been moved.'}
          </Description>
          <BackButton href="/">
            {language === 'tr' ? 'Anasayfaya Dön' : 'Back to Home'}
          </BackButton>
        </Content>
      </NotFoundContainer>

      <Footer />
    </PageContainer>
  );
} 