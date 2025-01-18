'use client';

import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

export default function BlogPage() {
  const { language } = useLanguage();
  const [articles, setArticles] = useState<Article[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(`/api/articles?lang=${language}`);
        const data = await response.json();
        setArticles(data);
        setFilteredArticles(data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, [language]);

  useEffect(() => {
    const filtered = articles.filter(article => {
      const searchLower = searchTerm.toLowerCase();
      return article.title.toLowerCase().includes(searchLower) || 
             article.excerpt.toLowerCase().includes(searchLower);
    });
    setFilteredArticles(filtered);
  }, [searchTerm, articles]);

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
              <Link href={`/makalelerimiz/${article.slug}?lang=${language}`}>
                <ArticleImage>
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </ArticleImage>
                <ArticleContent>
                  <ArticleTitle>
                    {article.title}
                  </ArticleTitle>
                  <ArticleExcerpt>
                    {article.excerpt}
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