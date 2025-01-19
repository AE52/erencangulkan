'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
  color: #2C3E50;
`;

const Message = styled.p`
  font-size: 1.5rem;
  color: #7F8C8D;
  margin-bottom: 2rem;
`;

const BackButton = styled.a`
  padding: 1rem 2rem;
  background-color: #8B7355;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #6B5835;
  }
`;

export default function NotFound() {
  const { language } = useLanguage();

  return (
    <Container>
      <Header />
      <Content>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Title>404</Title>
          <Message>
            {language === 'tr' 
              ? 'Aradığınız sayfa bulunamadı.'
              : 'The page you are looking for was not found.'}
          </Message>
          <BackButton href="/">
            {language === 'tr' ? 'Ana Sayfaya Dön' : 'Back to Home'}
          </BackButton>
        </motion.div>
      </Content>
      <Footer />
    </Container>
  );
} 