'use client';

import React, { Suspense } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { articles } from './data';

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  color: #2C3E50;
  margin-bottom: 3rem;
  text-align: center;
`;

const ArticlesGrid = styled.div`
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

const ArticleCard = styled(Link)`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }
`;

const ArticleImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
`;

const ArticleInfo = styled.div`
  padding: 1.5rem;
`;

const ArticleTitle = styled.h2`
  font-size: 1.5rem;
  color: #2C3E50;
  margin-bottom: 1rem;
  line-height: 1.4;
`;

const ArticleMeta = styled.div`
  font-size: 0.9rem;
  color: #8B7355;
  margin-bottom: 1rem;
`;

const ArticleExcerpt = styled.p`
  font-size: 1rem;
  color: #4A5568;
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
  z-index: 99999;

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

function ArticlesPageContent() {
  const { language } = useLanguage();

  return (
    <PageContainer>
      <Header />
      <MainContent>
        <PageTitle>
          {language === 'tr' ? 'Makalelerimiz' : 'Our Articles'}
        </PageTitle>
        <ArticlesGrid>
          {articles.map((article) => (
            <ArticleCard
              key={article.slug}
              href={`/makalelerimiz/${article.slug}`}
              as={motion.a}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ArticleImageContainer>
                <Image
                  src={article.image}
                  alt={language === 'tr' ? article.title_tr : article.title_en}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </ArticleImageContainer>
              <ArticleInfo>
                <ArticleTitle>
                  {language === 'tr' ? article.title_tr : article.title_en}
                </ArticleTitle>
                <ArticleMeta>
                  {new Date(article.date).toLocaleDateString(
                    language === 'tr' ? 'tr-TR' : 'en-US',
                    { year: 'numeric', month: 'long', day: 'numeric' }
                  )}
                </ArticleMeta>
                <ArticleExcerpt>
                  {language === 'tr' ? article.excerpt_tr : article.excerpt_en}
                </ArticleExcerpt>
              </ArticleInfo>
            </ArticleCard>
          ))}
        </ArticlesGrid>
      </MainContent>

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

export default function ArticlesPageClient() {
  return (
    <Suspense fallback={<div>Yükleniyor...</div>}>
      <ArticlesPageContent />
    </Suspense>
  );
} 