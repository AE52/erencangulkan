'use client';

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const HeroSection = styled.div`
  position: relative;
  height: 400px;
  width: 100%;
  background: #2C3E50;
  overflow: hidden;
`;

const HeroImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.4;
`;

const HeroContent = styled.div`
  position: relative;
  max-width: 800px;
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
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ArticleMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  i {
    font-size: 1.2rem;
  }
`;

const MainContent = styled.div`
  max-width: 800px;
  margin: -100px auto 4rem;
  padding: 3rem;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
`;

const ArticleContent = styled.div`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #2C3E50;

  h2 {
    font-size: 2rem;
    color: #2C3E50;
    margin: 2.5rem 0 1.5rem;
    font-weight: bold;
  }

  h3 {
    font-size: 1.6rem;
    color: #2C3E50;
    margin: 2rem 0 1rem;
    font-weight: bold;
  }

  p {
    margin-bottom: 1.5rem;
  }

  ul, ol {
    margin: 1.5rem 0;
    padding-left: 2rem;

    li {
      margin-bottom: 0.8rem;
      position: relative;

      &::before {
        content: "•";
        color: #8B7355;
        font-weight: bold;
        position: absolute;
        left: -1.2rem;
      }
    }
  }

  blockquote {
    margin: 2rem 0;
    padding: 1.5rem 2rem;
    border-left: 4px solid #8B7355;
    background: #f8f9fa;
    font-style: italic;
    color: #495057;
  }

  a {
    color: #8B7355;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: border-color 0.3s ease;

    &:hover {
      border-bottom-color: #8B7355;
    }
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

export default function ArticlePage() {
  const { language, setLanguage } = useLanguage();
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [article, setArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasAlternateVersion, setHasAlternateVersion] = useState(false);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const currentLang = searchParams.get('lang') || language;
        const response = await fetch(`/api/articles/${params.slug}?lang=${currentLang}`);
        if (!response.ok) {
          throw new Error('Article not found');
        }
        const data = await response.json();
        setArticle(data);

        // Diğer dildeki versiyonun varlığını kontrol et
        const currentSlug = params.slug as string;
        setHasAlternateVersion(!!slugMap[currentSlug]);
      } catch (error) {
        console.error('Error fetching article:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticle();
  }, [params.slug, language, searchParams]);

  const handleLanguageChange = async (newLang: Language) => {
    const currentSlug = params.slug as string;
    
    if (slugMap[currentSlug]) {
      // Diğer dildeki slug'ı al
      const newSlug = slugMap[currentSlug][newLang];
      
      try {
        // Önce diğer dildeki makalenin varlığını kontrol et
        const response = await fetch(`/api/articles/${newSlug}?lang=${newLang}`);
        if (response.ok) {
          // Dili değiştir
          setLanguage(newLang);

          // Yeni URL'ye yönlendir
          const newUrl = `/makalelerimiz/${newSlug}?lang=${newLang}`;
          window.location.href = newUrl;
        } else {
          console.error('Article not found in other language');
        }
      } catch (error) {
        console.error('Error checking article in other language:', error);
      }
    }
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = article?.title;

    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${title}&url=${url}`);
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`);
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${title} ${url}`);
        break;
    }
  };

  if (isLoading) {
    return (
      <PageContainer>
        <Header />
        <LoadingContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <i className="fas fa-circle-notch fa-spin" style={{ marginRight: '0.5rem' }} />
          {language === 'tr' ? 'Yükleniyor...' : 'Loading...'}
        </LoadingContainer>
        <Footer />
      </PageContainer>
    );
  }

  if (!article) {
    return (
      <PageContainer>
        <Header />
        <ErrorContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <i className="fas fa-exclamation-circle" style={{ marginRight: '0.5rem' }} />
          {language === 'tr' ? 'Makale bulunamadı.' : 'Article not found.'}
        </ErrorContainer>
        <Footer />
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Header />
      <HeroSection>
        <LanguageSwitch>
          <LanguageButton
            $isActive={language === 'tr'}
            onClick={() => handleLanguageChange('tr')}
            disabled={language === 'tr' || !hasAlternateVersion}
          >
            TR
          </LanguageButton>
          <LanguageButton
            $isActive={language === 'en'}
            onClick={() => handleLanguageChange('en')}
            disabled={language === 'en' || !hasAlternateVersion}
          >
            EN
          </LanguageButton>
        </LanguageSwitch>
        <HeroImage>
          <Image
            src={article.image}
            alt={article.title}
            fill
            style={{ objectFit: 'cover' }}
          />
        </HeroImage>
        <HeroContent>
          <ArticleTitle>
            {article.title}
          </ArticleTitle>
          <ArticleMeta>
            <MetaItem>
              <i className="far fa-calendar" />
              {new Date(article.date).toLocaleDateString(
                language === 'tr' ? 'tr-TR' : 'en-US',
                { year: 'numeric', month: 'long', day: 'numeric' }
              )}
            </MetaItem>
            <MetaItem>
              <i className="far fa-clock" />
              {language === 'tr' ? '5 dakika okuma' : '5 minute read'}
            </MetaItem>
          </ArticleMeta>
        </HeroContent>
      </HeroSection>

      <MainContent>
        <ArticleContent>
          <div dangerouslySetInnerHTML={{ 
            __html: article.content
          }} />
        </ArticleContent>

        <ShareSection>
          <ShareTitle>
            {language === 'tr' ? 'Bu Makaleyi Paylaş' : 'Share This Article'}
          </ShareTitle>
          <ShareButtons>
            <ShareButton onClick={() => handleShare('twitter')} title="Twitter">
              <i className="fab fa-twitter" />
            </ShareButton>
            <ShareButton onClick={() => handleShare('facebook')} title="Facebook">
              <i className="fab fa-facebook-f" />
            </ShareButton>
            <ShareButton onClick={() => handleShare('linkedin')} title="LinkedIn">
              <i className="fab fa-linkedin-in" />
            </ShareButton>
            <ShareButton onClick={() => handleShare('whatsapp')} title="WhatsApp">
              <i className="fab fa-whatsapp" />
            </ShareButton>
          </ShareButtons>
        </ShareSection>
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