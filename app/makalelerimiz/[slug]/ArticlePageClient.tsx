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
  background-color: white;
  color: #2C3E50;
`;

const ArticleContainer = styled.article`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  flex-grow: 1;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const HeroImage = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;
  margin-bottom: 2rem;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    height: 40vh;
  }
`;

const ArticleTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #2C3E50;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const ArticleMeta = styled.div`
  color: #8B7355;
  margin-bottom: 2rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

const ArticleContent = styled.div`
  color: #2C3E50;
  line-height: 1.8;
  font-size: 1.2rem;

  p {
    margin-bottom: 1.5rem;
    color: #4A5568;

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }

  h2 {
    font-size: 2rem;
    color: #2C3E50;
    margin: 2.5rem 0 1.5rem;
    font-weight: bold;

    @media (max-width: 768px) {
      font-size: 1.75rem;
    }
  }

  h3 {
    font-size: 1.6rem;
    color: #2C3E50;
    margin: 2rem 0 1rem;
    font-weight: bold;

    @media (max-width: 768px) {
      font-size: 1.4rem;
    }
  }

  ul, ol {
    margin-bottom: 1.5rem;
    padding-left: 2rem;
    color: #4A5568;
  }

  li {
    margin-bottom: 0.8rem;

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }

  blockquote {
    border-left: 4px solid #8B7355;
    padding-left: 1rem;
    margin: 1.5rem 0;
    font-style: italic;
    color: #666;
  }

  a {
    color: #8B7355;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #6B5835;
    }
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
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
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
          <span>
            {new Date(article.date).toLocaleDateString(
              language === 'tr' ? 'tr-TR' : 'en-US',
              { year: 'numeric', month: 'long', day: 'numeric' }
            )}
          </span>
          <span>{article.author}</span>
        </ArticleMeta>
        <ArticleContent 
          dangerouslySetInnerHTML={{ 
            __html: language === 'tr' ? article.content_tr : article.content_en 
          }} 
        />
      </ArticleContainer>

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

export default function ArticlePageClient({ article }: ArticlePageClientProps) {
  return (
    <Suspense fallback={<div>Yükleniyor...</div>}>
      <ArticlePageContent article={article} />
    </Suspense>
  );
} 