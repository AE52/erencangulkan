'use client';

import React, { Suspense } from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  overflow: hidden;
`;

const SlideBackground = styled(motion.div)<{ $imageUrl: string }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${props => props.$imageUrl});
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

const AboutSection = styled.section`
  padding: 4rem 2rem;
  background: #f8f8f8;
`;

const ServicesSection = styled.section`
  padding: 4rem 2rem;
  background: white;
`;

const LatestArticlesSection = styled.section`
  padding: 6rem 1rem;
  background: white;
`;

const ContactSection = styled.section`
  padding: 4rem 1rem;
  background: white;
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
}

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

function HomeContent() {
  const { language } = useLanguage();
  const [latestArticles, setLatestArticles] = useState<Article[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(`/api/articles?lang=${language}`);
        const data = await response.json();
        setLatestArticles(data.slice(0, 3));
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, [language]);

  return (
    <PageContainer>
      <Header />
      <HeroSection>
        <AnimatePresence mode="wait">
          <SlideBackground
            key={currentSlide}
            $imageUrl={slides[currentSlide].imageUrl}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
      </HeroSection>

      <AboutSection>
        {/* About section içeriği */}
      </AboutSection>

      <ServicesSection>
        {/* Services section içeriği */}
      </ServicesSection>

      <LatestArticlesSection>
        {/* Latest articles section içeriği */}
      </LatestArticlesSection>

      <ContactSection>
        {/* Contact section içeriği */}
      </ContactSection>

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

export default function HomePageClient() {
  return (
    <Suspense fallback={<div>Yükleniyor...</div>}>
      <HomeContent />
    </Suspense>
  );
} 