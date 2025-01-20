'use client';

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { services } from './hizmetlerimiz/data';
import { articles } from './makalelerimiz/data';

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const HeroSection = styled.section`
  position: relative;
  height: 80vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  overflow: hidden;
`;

const LoadingSpinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #8B7355;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  z-index: 1;

  @keyframes spin {
    0% { transform: translate(-50%, -50%) rotate(0deg); }
    100% { transform: translate(-50%, -50%) rotate(360deg); }
  }
`;

const SlideBackground = styled.div<{ $imageUrl: string; $isLoading: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)),
    url(${props => props.$imageUrl});
  background-size: cover;
  background-position: center;
  opacity: ${props => (props.$isLoading ? '0' : '1')};
  transition: opacity 0.8s ease;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.8rem;
  opacity: 0.9;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const HeroButton = styled(Link)`
  display: inline-block;
  padding: 1.2rem 2.5rem;
  background-color: #8B7355;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 500;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    background-color: transparent;
    border-color: #8B7355;
    transform: translateY(-2px);
  }
`;

const ServicesSection = styled.section`
  padding: 6rem 2rem;
  background: white;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #2C3E50;
  text-align: center;
  margin-bottom: 3rem;
`;

const ServicesGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
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

const AboutSection = styled.section`
  padding: 6rem 2rem;
  background: #f8f9fa;
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutContent = styled.div`
  h2 {
    font-size: 2.5rem;
    color: #2C3E50;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.1rem;
    color: #4A5568;
    line-height: 1.8;
    margin-bottom: 2rem;
  }
`;

const AboutImageContainer = styled.div`
  position: relative;
  height: 500px;
  border-radius: 10px;
  overflow: hidden;
`;

const LatestArticlesSection = styled.section`
  padding: 6rem 2rem;
  background: white;
`;

const ArticlesGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
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
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
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

const ArticleTitle = styled.h3`
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
  margin-bottom: 1rem;
`;

const slides = [
  {
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80",
    title_tr: "Hukuki Haklarınızı Koruyoruz",
    title_en: "We Protect Your Legal Rights",
    subtitle_tr: "Profesyonel ve güvenilir hukuki danışmanlık hizmetleri",
    subtitle_en: "Professional and reliable legal consultancy services"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1453945619913-79ec89a82c51?q=80",
    title_tr: "Uzman Hukuki Destek",
    title_en: "Expert Legal Support",
    subtitle_tr: "Her türlü hukuki sorununuzda yanınızdayız",
    subtitle_en: "We are with you in all your legal matters"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80",
    title_tr: "Güçlü Hukuki Temsil",
    title_en: "Strong Legal Representation",
    subtitle_tr: "Haklarınızı en iyi şekilde savunuyoruz",
    subtitle_en: "We defend your rights in the best way possible"
  }
];

function HomePageContent() {
  const { language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadImage = () => {
      setIsLoading(true);
      const imageUrl = slides[currentSlide].imageUrl;
      
      if (typeof window !== 'undefined') {
        const img = new window.Image();
        img.src = imageUrl;
        
        img.onload = () => {
          if (isMounted) {
            setIsLoading(false);
          }
        };
        
        img.onerror = () => {
          if (isMounted) {
            setIsLoading(false);
          }
        };
      }
    };

    loadImage();

    return () => {
      isMounted = false;
    };
  }, [currentSlide]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const latestArticles = [...articles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <PageContainer>
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection>
          {isLoading && <LoadingSpinner />}
          <SlideBackground
            $imageUrl={slides[currentSlide].imageUrl}
            $isLoading={isLoading}
          />
          <HeroContent>
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <HeroTitle>
                {language === 'tr' ? slides[currentSlide].title_tr : slides[currentSlide].title_en}
              </HeroTitle>
              <HeroSubtitle>
                {language === 'tr' ? slides[currentSlide].subtitle_tr : slides[currentSlide].subtitle_en}
              </HeroSubtitle>
              <HeroButton href="/iletisim">
                {language === 'tr' ? 'İletişime Geçin' : 'Contact Us'}
              </HeroButton>
            </motion.div>
          </HeroContent>
        </HeroSection>

        <ServicesSection>
          <SectionTitle>
            {language === 'tr' ? 'Hizmetlerimiz' : 'Our Services'}
          </SectionTitle>
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
        </ServicesSection>

        <AboutSection>
          <AboutContainer>
            <AboutContent>
              <h2>{language === 'tr' ? 'Hakkımızda' : 'About Us'}</h2>
              <p>
                {language === 'tr'
                  ? 'Avukat Eren Can Gülkan 1998 yılında İstanbul\'da doğmuştur. İlköğretim, ortaöğretim ve lise eğitimini İstanbul\'da tamamlamıştır. 2016 yılında Kocaeli Üniversitesi Hukuk Fakültesini kazanmış ve buradan başarıyla mezun olmuştur. 2022 yılında İstanbul Barosunda avukatlık stajına başlayıp ardından avukatlık ruhsatnamesine hak kazanarak serbest avukatlık faaliyetlerine başlamıştır.'
                  : 'Attorney Eren Can Gülkan was born in Istanbul in 1998. He completed his primary, secondary, and high school education in Istanbul. In 2016, he was admitted to Kocaeli University Faculty of Law and graduated successfully. In 2022, he started his legal internship at the Istanbul Bar Association and after obtaining his attorney license, he began his independent legal practice.'}
              </p>
              <HeroButton href="/hakkimizda">
                {language === 'tr' ? 'Devamını Oku' : 'Read More'}
              </HeroButton>
            </AboutContent>
            <AboutImageContainer>
              <Image
                src="/images/vesika.jpg"
                alt="Av. Eren Can Gülkan"
                fill
                style={{ objectFit: 'cover' }}
              />
            </AboutImageContainer>
          </AboutContainer>
        </AboutSection>

        <LatestArticlesSection>
          <SectionTitle>
            {language === 'tr' ? 'Son Makaleler' : 'Latest Articles'}
          </SectionTitle>
          <ArticlesGrid>
            {latestArticles.map((article) => (
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
        </LatestArticlesSection>
      </motion.div>
      <Footer />
    </PageContainer>
  );
}

export default function HomePageClient() {
  return (
    <HomePageContent />
  );
} 