'use client';

import React, { Suspense } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Article } from '../data';

interface ArticlePageClientProps {
  article: Article;
}

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ArticleContainer = styled.article`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  flex-grow: 1;
`;

const HeroImage = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  margin-bottom: 2rem;
`;

const ArticleTitle = styled.h1`
  font-size: 2.5rem;
  color: #2C3E50;
  margin-bottom: 1rem;
`;

const ArticleMeta = styled.div`
  color: #8B7355;
  margin-bottom: 2rem;
  font-size: 0.9rem;
`;

const ArticleContent = styled.div`
  color: #333;
  line-height: 1.8;
  font-size: 1.1rem;

  p {
    margin-bottom: 1.5rem;
  }

  h2 {
    font-size: 1.8rem;
    color: #2C3E50;
    margin: 2rem 0 1rem;
  }

  h3 {
    font-size: 1.5rem;
    color: #2C3E50;
    margin: 1.5rem 0 1rem;
  }

  ul, ol {
    margin-bottom: 1.5rem;
    padding-left: 2rem;
  }

  li {
    margin-bottom: 0.5rem;
  }

  blockquote {
    border-left: 4px solid #8B7355;
    padding-left: 1rem;
    margin: 1.5rem 0;
    font-style: italic;
    color: #666;
  }
`;

function ArticlePageContent({ article }: ArticlePageClientProps) {
  const { language } = useLanguage();

  return (
    <PageContainer>
      <Header />
      <ArticleContainer
        as={motion.article}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <HeroImage>
          <Image
            src={article.image}
            alt={language === 'tr' ? article.title_tr : article.title_en}
            fill
            style={{ objectFit: 'cover' }}
          />
        </HeroImage>
        <ArticleTitle>
          {language === 'tr' ? article.title_tr : article.title_en}
        </ArticleTitle>
        <ArticleMeta>
          {new Date(article.date).toLocaleDateString(
            language === 'tr' ? 'tr-TR' : 'en-US',
            { year: 'numeric', month: 'long', day: 'numeric' }
          )} | {article.author}
        </ArticleMeta>
        <ArticleContent 
          dangerouslySetInnerHTML={{ 
            __html: language === 'tr' ? article.content_tr : article.content_en 
          }} 
        />
      </ArticleContainer>
      <Footer />
    </PageContainer>
  );
}

export default function ArticlePageClient({ article }: ArticlePageClientProps) {
  return (
    <Suspense fallback={<div>Yükleniyor...</div>}>
      <ArticlePageContent article={article} />
    </Suspense>
  );
} 