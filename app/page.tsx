'use client';

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

// Hero Section
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

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const HeroButton = styled(Link)`
  display: inline-block;
  padding: 1.25rem 2.5rem;
  background: #8B7355;
  color: white;
  border-radius: 30px;
  text-decoration: none;
  font-size: 1.2rem;
  transition: background 0.3s ease;

  &:hover {
    background: #6B5744;
  }
`;

// About Section
const AboutSection = styled.section`
  padding: 4rem 2rem;
  background: #f8f8f8;
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

const AboutImage = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  border-radius: 10px;
  overflow: hidden;

  @media (max-width: 992px) {
    height: 400px;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const AboutContent = styled.div`
  h2 {
    font-size: 2.5rem;
    color: #2C3E50;
    margin-bottom: 1.5rem;
  }

  h3 {
    font-size: 1.5rem;
    color: #8B7355;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.1rem;
    color: #666;
    line-height: 1.8;
    margin-bottom: 2rem;
  }
`;

const AboutButton = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  background: #8B7355;
  color: white;
  border-radius: 30px;
  text-decoration: none;
  font-size: 1.1rem;
  transition: background 0.3s ease;

  &:hover {
    background: #6B5744;
  }
`;

// Services Section
const ServicesSection = styled.section`
  padding: 4rem 2rem;
  background: white;
`;

const ServicesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ServicesTitle = styled.h2`
  font-size: 2.5rem;
  color: #2C3E50;
  text-align: center;
  margin-bottom: 3rem;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled(Link)`
  background: white;
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  color: #8B7355;
  margin-bottom: 1rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.2rem;
  color: #2C3E50;
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  line-height: 1.6;
`;

// Latest Articles Section
const LatestArticles = styled.section`
  padding: 6rem 1rem;
  background: white;
`;

const ArticlesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ArticlesHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const ArticlesTitle = styled.h2`
  font-size: 2.5rem;
  color: #2C3E50;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ArticlesDescription = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  margin: 0 auto;
  max-width: 1200px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 500px;
  }
`;

const ArticleCard = styled(motion.article)`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
`;

const ArticleImage = styled.div`
  position: relative;
  height: 240px;
  width: 100%;
`;

const ArticleContent = styled.div`
  padding: 2rem;
`;

const ArticleTitle = styled.h3`
  font-size: 1.4rem;
  color: #2C3E50;
  margin-bottom: 1rem;
  line-height: 1.4;
`;

const ArticleExcerpt = styled.p`
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ArticleDate = styled.span`
  color: #8B7355;
  font-size: 0.9rem;
  font-weight: 500;
`;

const ViewAllButton = styled(Link)`
  display: block;
  width: fit-content;
  margin: 4rem auto 0;
  padding: 1rem 2.5rem;
  background: #8B7355;
  color: white;
  border-radius: 30px;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(139, 115, 85, 0.2);

  &:hover {
    background: #6B5744;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(139, 115, 85, 0.3);
  }
`;

const ContactSection = styled.section`
  padding: 4rem 1rem;
  background: white;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const ContactContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
`;

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  color: #2C3E50;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContactDescription = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

interface Service {
  slug: string;
  title_tr: string;
  title_en: string;
  icon: string;
  description_tr: string;
  description_en: string;
}

const services: Service[] = [
  { 
    slug: 'aile-hukuku',
    title_tr: 'Aile Hukuku',
    title_en: 'Family Law',
    icon: 'users',
    description_tr: 'Boşanma, nafaka, velayet ve diğer aile hukuku davalarında uzman destek.',
    description_en: 'Expert support in divorce, alimony, custody and other family law cases.'
  },
  { 
    slug: 'ceza-hukuku',
    title_tr: 'Ceza Hukuku',
    title_en: 'Criminal Law',
    icon: 'gavel',
    description_tr: 'Ceza davalarında savunma ve hukuki danışmanlık hizmetleri.',
    description_en: 'Defense and legal consultancy services in criminal cases.'
  },
  { 
    slug: 'icra-iflas-hukuku',
    title_tr: 'İcra ve İflas Hukuku',
    title_en: 'Enforcement & Bankruptcy Law',
    icon: 'balance-scale',
    description_tr: 'İcra takibi ve iflas davalarında profesyonel hukuki destek.',
    description_en: 'Professional legal support in enforcement proceedings and bankruptcy cases.'
  },
  { 
    slug: 'tazminat-hukuku',
    title_tr: 'Tazminat Hukuku',
    title_en: 'Compensation Law',
    icon: 'hand-holding-usd',
    description_tr: 'Her türlü tazminat davasında hak arama sürecinizde yanınızdayız.',
    description_en: 'We are with you in the process of seeking rights in all kinds of compensation cases.'
  },
  { 
    slug: 'miras-hukuku',
    title_tr: 'Miras Hukuku',
    title_en: 'Inheritance Law',
    icon: 'scroll',
    description_tr: 'Miras paylaşımı ve miras davalarında uzman hukuki danışmanlık.',
    description_en: 'Expert legal consultancy in inheritance distribution and inheritance cases.'
  },
  { 
    slug: 'tuketici-hukuku',
    title_tr: 'Tüketici Hukuku',
    title_en: 'Consumer Law',
    icon: 'shopping-cart',
    description_tr: 'Tüketici haklarının korunması ve tüketici davalarında destek.',
    description_en: 'Support in consumer rights protection and consumer cases.'
  },
  { 
    slug: 'gayrimenkul-hukuku',
    title_tr: 'Gayrimenkul Hukuku',
    title_en: 'Real Estate Law',
    icon: 'home',
    description_tr: 'Gayrimenkul alım-satım ve kira davalarında hukuki danışmanlık.',
    description_en: 'Legal consultancy in real estate purchase-sale and rental cases.'
  },
  { 
    slug: 'is-hukuku',
    title_tr: 'İş Hukuku',
    title_en: 'Labor Law',
    icon: 'briefcase',
    description_tr: 'İşçi-işveren uyuşmazlıklarında ve iş davalarında uzman destek.',
    description_en: 'Expert support in employee-employer disputes and labor cases.'
  },
  { 
    slug: 'vergi-hukuku',
    title_tr: 'Vergi Hukuku',
    title_en: 'Tax Law',
    icon: 'file-invoice-dollar',
    description_tr: 'Vergi uyuşmazlıkları ve vergi davalarında profesyonel destek.',
    description_en: 'Professional support in tax disputes and tax cases.'
  },
  { 
    slug: 'idare-hukuku',
    title_tr: 'İdare Hukuku',
    title_en: 'Administrative Law',
    icon: 'landmark',
    description_tr: 'İdari davalarda ve uyuşmazlıklarda hukuki danışmanlık.',
    description_en: 'Legal consultancy in administrative cases and disputes.'
  },
  { 
    slug: 'bilisim-hukuku',
    title_tr: 'Bilişim Hukuku',
    title_en: 'IT Law',
    icon: 'laptop-code',
    description_tr: 'Dijital hukuk ve bilişim davalarında uzman destek.',
    description_en: 'Expert support in digital law and IT cases.'
  },
  { 
    slug: 'yabancilar-hukuku',
    title_tr: 'Yabancılar Hukuku',
    title_en: 'Immigration Law',
    icon: 'globe',
    description_tr: 'Oturma izni, vatandaşlık ve yabancılar hukuku danışmanlığı.',
    description_en: 'Residence permit, citizenship and foreigners law consultancy.'
  }
];

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

const slides = [
  {
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80", // Adalet heykeli
    title_tr: "Hukuki Haklarınızı Koruyoruz",
    title_en: "We Protect Your Legal Rights",
    subtitle_tr: "Profesyonel ve güvenilir hukuki danışmanlık hizmetleri",
    subtitle_en: "Professional and reliable legal consultancy services"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1453945619913-79ec89a82c51?q=80", // Mahkeme salonu
    title_tr: "Uzman Hukuki Destek",
    title_en: "Expert Legal Support",
    subtitle_tr: "Her türlü hukuki sorununuzda yanınızdayız",
    subtitle_en: "We are with you in all your legal matters"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80", // Hukuk kitapları
    title_tr: "Güçlü Hukuki Temsil",
    title_en: "Strong Legal Representation",
    subtitle_tr: "Haklarınızı en iyi şekilde savunuyoruz",
    subtitle_en: "We defend your rights in the best way possible"
  }
];

export default function Home() {
  const { language } = useLanguage();
  const [latestArticles, setLatestArticles] = useState<Article[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Her 5 saniyede bir değiş

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(`/api/articles?lang=${language}`);
        const data = await response.json();
        setLatestArticles(data.slice(0, 3)); // Get only the latest 3 articles
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
        <HeroContent>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HeroTitle>
              {language === 'tr' 
                ? slides[currentSlide].title_tr 
                : slides[currentSlide].title_en}
            </HeroTitle>
            <HeroSubtitle>
              {language === 'tr'
                ? slides[currentSlide].subtitle_tr
                : slides[currentSlide].subtitle_en}
            </HeroSubtitle>
            <HeroButton href="/iletisim">
              {language === 'tr' ? 'Ücretsiz Danışın' : 'Free Consultation'}
            </HeroButton>
          </motion.div>
        </HeroContent>
      </HeroSection>

      <AboutSection>
        <AboutContainer>
          <AboutImage>
            <Image
              src="/images/vesika.jpg"
              alt="Av. Erencan Gülkan"
              fill
              style={{ objectFit: 'cover' }}
            />
          </AboutImage>
          <AboutContent>
            <h2>{language === 'tr' ? 'Hakkımızda' : 'About Us'}</h2>
            <h3>Av. Erencan Gülkan</h3>
            <p>
              {language === 'tr'
                ? 'Hukuki süreçlerinizde profesyonel ve güvenilir danışmanlık hizmeti sunuyoruz. Müvekkillerimizin haklarını korumak ve en iyi sonucu elde etmek için titizlikle çalışıyoruz.'
                : 'We provide professional and reliable consultancy services in your legal processes. We work diligently to protect our clients\' rights and achieve the best results.'}
            </p>
            <AboutButton href="/hakkimizda">
              {language === 'tr' ? 'Devamını Oku' : 'Read More'}
            </AboutButton>
          </AboutContent>
        </AboutContainer>
      </AboutSection>

      <ServicesSection>
        <ServicesContainer>
          <ServicesTitle>
            {language === 'tr' ? 'Çalışma Alanlarımız' : 'Our Practice Areas'}
          </ServicesTitle>
          <ServicesGrid>
            {services.map((service) => (
              <ServiceCard key={service.slug} href={`/hizmetlerimiz/${service.slug}`}>
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
        </ServicesContainer>
      </ServicesSection>

      <LatestArticles>
        <ArticlesContainer>
          <ArticlesHeader>
            <ArticlesTitle>
              {language === 'tr' ? 'Son Makaleler' : 'Latest Articles'}
            </ArticlesTitle>
            <ArticlesDescription>
              {language === 'tr'
                ? 'Hukuki konularda güncel makaleler ve bilgilendirici içerikler'
                : 'Latest articles and informative content on legal matters'}
            </ArticlesDescription>
          </ArticlesHeader>
          <ArticlesGrid>
            {latestArticles.slice(0, 3).map((article) => (
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
                    <ArticleTitle>{article.title}</ArticleTitle>
                    <ArticleExcerpt>{article.excerpt}</ArticleExcerpt>
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
          <ViewAllButton href="/makalelerimiz">
            {language === 'tr' ? 'Tüm Makaleleri Gör' : 'View All Articles'}
          </ViewAllButton>
        </ArticlesContainer>
      </LatestArticles>

      <ContactSection>
        <ContactContainer>
          <ContactTitle>
            {language === 'tr' ? 'Bizimle İletişime Geçin' : 'Contact Us'}
          </ContactTitle>
          <ContactDescription>
            {language === 'tr' 
              ? 'Hukuki danışmanlık için formu doldurun, size en kısa sürede dönüş yapalım.'
              : 'Fill out the form for legal consultation, we will get back to you as soon as possible.'}
          </ContactDescription>
          <ContactForm />
        </ContactContainer>
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