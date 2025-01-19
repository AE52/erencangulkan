'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { useLanguage } from '../context/LanguageContext';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

const HeaderContainer = styled.header`
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.06);
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
`;

const HeaderContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0.8rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
  }
`;

const Logo = styled.div`
  position: relative;
  width: 340px;
  height: 95px;
  margin-left: -2rem;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 260px;
    height: 75px;
    margin-left: -1.5rem;
  }
`;

const Nav = styled.nav<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${props => props.$isOpen ? '0' : '-100%'};
    width: 320px;
    height: 100vh;
    background: rgba(255, 255, 255, 0.98);
    padding: 2rem;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: -5px 0 25px rgba(0, 0, 0, 0.1);
    overflow-y: auto;
    flex-direction: column;
    backdrop-filter: blur(10px);
    gap: 0;
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 5rem;
    width: 100%;
  }
`;

const NavItem = styled.li`
  font-size: 1.1rem;
  white-space: nowrap;

  a {
    color: #2C3E50;
    text-decoration: none;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.7rem;
    padding: 0.8rem 1.2rem;
    border-radius: 8px;

    &:hover {
      color: #8B7355;
      background: rgba(139, 115, 85, 0.05);
    }

    &.cta-button {
      background: #8B7355;
      color: white;
      padding: 0.8rem 1.5rem;
      border-radius: 30px;
      font-weight: 500;
      margin-left: 1rem;

      &:hover {
        background: #6B573D;
        transform: translateY(-2px);
      }
    }

    i {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    
    a {
      padding: 0.8rem;
      justify-content: flex-start;
      width: 100%;
      margin-left: 0;
    }
  }
`;

const HamburgerButton = styled.button<{ $isOpen: boolean }>`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #2C3E50;
  z-index: 1001;
  transition: all 0.3s ease;
  opacity: ${props => props.$isOpen ? '0' : '1'};
  pointer-events: ${props => props.$isOpen ? 'none' : 'auto'};
  margin-right: 1rem;

  @media (max-width: 768px) {
    display: block;
    position: ${props => props.$isOpen ? 'fixed' : 'static'};
    right: ${props => props.$isOpen ? '1.5rem' : 'auto'};
  }
`;

const CloseButton = styled.button`
  display: none;
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #2C3E50;
  z-index: 1001;
  transition: all 0.3s ease;

  &:hover {
    transform: rotate(90deg);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const ContactInfo = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    margin-top: 2.5rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    width: 100%;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.2rem;
  color: #2C3E50;
  font-size: 0.95rem;
  padding: 0.8rem;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(139, 115, 85, 0.05);
  }

  i {
    font-size: 1.3rem;
    color: #8B7355;
    width: 24px;
    text-align: center;
  }

  a {
    color: inherit;
    text-decoration: none;
    
    &:hover {
      color: #8B7355;
    }
  }
`;

const LanguageButton = styled.button`
  background: rgba(139, 115, 85, 0.05);
  border: none;
  border-radius: 12px;
  padding: 0.7rem;
  color: #8B7355;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  min-width: 44px;
  height: 44px;

  img {
    width: 22px;
    height: 22px;
    object-fit: contain;
  }

  span {
    @media (max-width: 1024px) {
      display: none;
    }
  }

  &:hover {
    background: rgba(139, 115, 85, 0.1);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 1.5rem;
    right: 4.5rem;
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    z-index: 1001;
    
    &:hover {
      background: white;
      transform: none;
    }
  }
`;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageChange = () => {
    const newLang = language === 'tr' ? 'en' : 'tr';
    setLanguage(newLang);
    
    const params = new URLSearchParams(searchParams.toString());
    params.set('lang', newLang);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <HeaderContainer style={{ 
      boxShadow: isScrolled ? '0 2px 20px rgba(0, 0, 0, 0.1)' : '0 2px 20px rgba(0, 0, 0, 0.06)',
      background: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.98)'
    }}>
      <HeaderContent>
        <Link href="/">
          <Logo>
            <Image
              src="/images/logo.jpg"
              alt={language === 'tr' ? "Av. Erencan Gülkan" : "Att. Erencan Gülkan"}
              fill
              style={{ objectFit: 'contain' }}
              priority
              sizes="(max-width: 768px) 260px, 340px"
              quality={90}
              loading="eager"
            />
          </Logo>
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <LanguageButton onClick={handleLanguageChange}>
            <Image
              src={`/images/${language === 'tr' ? 'en' : 'tr'}.svg`}
              alt={language === 'tr' ? 'English' : 'Türkçe'}
              width={22}
              height={22}
            />
            <span>{language === 'tr' ? 'EN' : 'TR'}</span>
          </LanguageButton>
          <HamburgerButton onClick={() => setIsOpen(true)} $isOpen={isOpen}>
            <i className="fas fa-bars" />
          </HamburgerButton>
        </div>
        <Nav $isOpen={isOpen}>
          <CloseButton onClick={() => setIsOpen(false)}>
            <i className="fas fa-times" />
          </CloseButton>
          <NavList>
            <NavItem>
              <Link href="/" onClick={() => setIsOpen(false)}>
                <i className="fas fa-home" />
                {language === 'tr' ? 'Ana Sayfa' : 'Home'}
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/hizmetlerimiz" onClick={() => setIsOpen(false)}>
                <i className="fas fa-gavel" />
                {language === 'tr' ? 'Hizmetlerimiz' : 'Services'}
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/makalelerimiz" onClick={() => setIsOpen(false)}>
                <i className="fas fa-book-reader" />
                {language === 'tr' ? 'Makalelerimiz' : 'Articles'}
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/hakkimizda" onClick={() => setIsOpen(false)}>
                <i className="fas fa-user-tie" />
                {language === 'tr' ? 'Hakkımızda' : 'About Us'}
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/iletisim" onClick={() => setIsOpen(false)}>
                <i className="fas fa-phone" />
                {language === 'tr' ? 'İletişim' : 'Contact'}
              </Link>
            </NavItem>
            <NavItem>
              <a href="tel:+905397440887" onClick={() => setIsOpen(false)} className="cta-button">
                <i className="fas fa-headset" />
                {language === 'tr' ? 'Hemen Ara' : 'Call Now'}
              </a>
            </NavItem>
          </NavList>
          <ContactInfo>
            <ContactItem>
              <i className="fas fa-map-marker-alt" />
              <span>Cevizli, Ulubey Sk. No:4, 34865 Kartal/İstanbul</span>
            </ContactItem>
            <ContactItem>
              <i className="fas fa-phone-alt" />
              <a href="tel:+905397440887">+90 539 744 08 87</a>
            </ContactItem>
            <ContactItem>
              <i className="fas fa-envelope" />
              <a href="mailto:info@erencangulkan.av.tr">info@erencangulkan.av.tr</a>
            </ContactItem>
            <ContactItem>
              <i className="fas fa-clock" />
              <span>{language === 'tr' ? 'Pzt-Cmt: 09:00-18:00' : 'Mon-Sat: 09:00-18:00'}</span>
            </ContactItem>
          </ContactInfo>
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  );
} 