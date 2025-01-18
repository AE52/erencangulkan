'use client';

import { use } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '../../../context/LanguageContext';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { articles } from '../../../data/articles';

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #f8f9fa;
`;

const HeroSection = styled.div`
  position: relative;
  height: 500px;
  width: 100%;
  background: #1a1a1a;
  overflow: hidden;
`;

const HeroImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.4;
  }
`;

const HeroContent = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: 4rem 2rem;
  color: white;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ArticleTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ArticleMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  margin-top: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  backdrop-filter: blur(5px);

  i {
    font-size: 1.2rem;
  }
`;

const MainContent = styled.div`
  max-width: 900px;
  margin: -100px auto 6rem;
  padding: 3.5rem;
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
  position: relative;
  z-index: 2;

  h2 {
    font-size: 2.2rem;
    font-weight: 700;
    color: #1a1a1a;
    margin: 2.5rem 0 1.5rem;
    line-height: 1.3;
  }

  h3 {
    font-size: 1.8rem;
    font-weight: 600;
    color: #333;
    margin: 2rem 0 1rem;
    line-height: 1.4;
  }

  p {
    font-size: 1.15rem;
    line-height: 1.8;
    color: #444;
    margin-bottom: 1.5rem;
  }

  ul {
    margin: 1.5rem 0;
    padding-left: 1.2rem;

    li {
      font-size: 1.15rem;
      line-height: 1.7;
      color: #444;
      margin-bottom: 1rem;
      position: relative;
      padding-left: 1.5rem;

      &::before {
        content: "•";
        color: #8B7355;
        font-weight: bold;
        position: absolute;
        left: 0;
        top: -2px;
        font-size: 1.5rem;
      }
    }
  }

  a {
    color: #8B7355;
    text-decoration: none;
    border-bottom: 2px solid transparent;
    transition: all 0.3s ease;

    &:hover {
      border-bottom-color: #8B7355;
    }
  }

  blockquote {
    margin: 2rem 0;
    padding: 1.5rem 2rem;
    border-left: 5px solid #8B7355;
    background: #f8f9fa;
    font-style: italic;
    color: #555;
  }
`;

const ShareSection = styled.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #eee;
  text-align: center;
`;

const ShareTitle = styled.h3`
  font-size: 1.4rem;
  color: #2C3E50;
  margin-bottom: 1rem;
`;

const ShareButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const ShareButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f8f9fa;
  color: #2C3E50;
  transition: all 0.3s ease;

  &:hover {
    background: #8B7355;
    color: white;
    transform: translateY(-2px);
  }

  i {
    font-size: 1.2rem;
  }
`;

const LoadingContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  font-size: 1.2rem;
  color: #2C3E50;
`;

const ErrorContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  font-size: 1.2rem;
  color: #e74c3c;
`;

const LanguageSwitch = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  z-index: 10;
`;

const LanguageButton = styled.button<{ $isActive: boolean }>`
  background: ${props => props.$isActive ? '#8B7355' : 'rgba(255, 255, 255, 0.2)'};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: ${props => props.$isActive ? '20px' : '20px'};
  backdrop-filter: blur(5px);
  margin-left: 0.5rem;

  &:hover {
    background: #8B7355;
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

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  content: string;
}

// Type tanımlaması
type Language = 'tr' | 'en';

const slugMap: { [key: string]: { tr: string; en: string } } = {
  'bosanma-davalarinda-nafaka': {
    tr: 'bosanma-davalarinda-nafaka',
    en: 'alimony-in-divorce-cases'
  },
  'alimony-in-divorce-cases': {
    tr: 'bosanma-davalarinda-nafaka',
    en: 'alimony-in-divorce-cases'
  },
  'is-kazasi-tazminati': {
    tr: 'is-kazasi-tazminati',
    en: 'work-accident-compensation'
  },
  'work-accident-compensation': {
    tr: 'is-kazasi-tazminati',
    en: 'work-accident-compensation'
  },
  'ceza-hukukunda-uzlasma': {
    tr: 'ceza-hukukunda-uzlasma',
    en: 'mediation-in-criminal-law'
  },
  'mediation-in-criminal-law': {
    tr: 'ceza-hukukunda-uzlasma',
    en: 'mediation-in-criminal-law'
  }
};

interface PageParams {
  params: Promise<{
    slug: string;
  }>;
}

export default function ArticlePage({ params }: PageParams) {
  const { language } = useLanguage();
  const { slug } = use(params);
  
  const article = articles.find(a => 
    (language === 'tr' && a.slug_tr === slug) || 
    (language === 'en' && a.slug_en === slug)
  );

  if (!article) {
    return (
      <PageContainer>
        <Header />
        <MainContent>
          <div>{language === 'tr' ? 'Makale bulunamadı' : 'Article not found'}</div>
        </MainContent>
        <Footer />
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Header />
      <HeroSection>
        <HeroImage>
          <Image
            src={article.image}
            alt={language === 'tr' ? article.title_tr : article.title_en}
            fill
            style={{ objectFit: 'cover' }}
          />
        </HeroImage>
        <HeroContent>
          <ArticleTitle>
            {language === 'tr' ? article.title_tr : article.title_en}
          </ArticleTitle>
          <ArticleMeta>
            <MetaItem>
              <i className="far fa-calendar" />
              {new Date(article.date).toLocaleDateString(
                language === 'tr' ? 'tr-TR' : 'en-US',
                { year: 'numeric', month: 'long', day: 'numeric' }
              )}
            </MetaItem>
          </ArticleMeta>
        </HeroContent>
      </HeroSection>
      <MainContent>
        <div dangerouslySetInnerHTML={{ 
          __html: language === 'tr' ? article.content_tr : article.content_en 
        }} />
      </MainContent>
      <Footer />
    </PageContainer>
  );
} 