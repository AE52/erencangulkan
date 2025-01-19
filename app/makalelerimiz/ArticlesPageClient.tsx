'use client';

import React, { Suspense, useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Article, articles } from './data';

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const HeroSection = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80');
  background-size: cover;
  background-position: center;
  padding: 100px 0;
  text-align: center;
  color: white;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const SearchSection = styled.div`
  padding: 2rem;
  background: #f8f8f8;
  text-align: center;
`;

const SearchInput = styled.input`
  padding: 1rem 2rem;
  width: 100%;
  max-width: 600px;
  border: 1px solid #ddd;
  border-radius: 30px;
  font-size: 1.1rem;
  color: #000;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #8B7355;
    box-shadow: 0 0 0 2px rgba(139, 115, 85, 0.1);
  }
`;

const ArticlesSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ArticleCard = styled(motion.article)`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ArticleImage = styled.div`
  position: relative;
  height: 200px;
  width: 100%;
`;

const ArticleContent = styled.div`
  padding: 1.5rem;
`;

const ArticleTitle = styled.h2`
  font-size: 1.4rem;
  color: #2C3E50;
  margin-bottom: 1rem;
`;

const ArticleExcerpt = styled.p`
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const ArticleDate = styled.span`
  color: #8B7355;
  font-size: 0.9rem;
`;

function ArticlesPageContent() {
  const { language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredArticles, setFilteredArticles] = useState<Article[]>(articles);

  useEffect(() => {
    const filtered = articles.filter(article => {
      const searchLower = searchTerm.toLowerCase();
      const title = language === 'tr' ? article.title_tr : article.title_en;
      const excerpt = language === 'tr' ? article.excerpt_tr : article.excerpt_en;
      return title.toLowerCase().includes(searchLower) || 
             excerpt.toLowerCase().includes(searchLower);
    });
    setFilteredArticles(filtered);
  }, [searchTerm, language]);

  return (
    <PageContainer>
      <Header />
      <HeroSection>
        <HeroTitle>
          {language === 'tr' ? 'Makalelerimiz' : 'Our Articles'}
        </HeroTitle>
        <HeroSubtitle>
          {language === 'tr' 
            ? 'Hukuki konularda güncel makaleler ve bilgilendirici içerikler'
            : 'Current articles and informative content on legal matters'}
        </HeroSubtitle>
      </HeroSection>

      <SearchSection>
        <SearchInput
          type="text"
          placeholder={language === 'tr' ? 'Makale ara...' : 'Search articles...'}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchSection>

      <ArticlesSection>
        <ArticlesGrid>
          {filteredArticles.map((article) => (
            <ArticleCard
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href={`/makalelerimiz/${article.slug}`}>
                <ArticleImage>
                  <Image
                    src={article.image}
                    alt={language === 'tr' ? article.title_tr : article.title_en}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </ArticleImage>
                <ArticleContent>
                  <ArticleTitle>
                    {language === 'tr' ? article.title_tr : article.title_en}
                  </ArticleTitle>
                  <ArticleExcerpt>
                    {language === 'tr' ? article.excerpt_tr : article.excerpt_en}
                  </ArticleExcerpt>
                  <ArticleDate>
                    {new Date(article.date).toLocaleDateString(
                      language === 'tr' ? 'tr-TR' : 'en-US',
                      { year: 'numeric', month: 'long', day: 'numeric' }
                    )}
                  </ArticleDate>
                </ArticleContent>
              </Link>
            </ArticleCard>
          ))}
        </ArticlesGrid>
      </ArticlesSection>
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