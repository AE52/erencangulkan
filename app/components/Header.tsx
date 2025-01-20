'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  background-color: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
`;

const Logo = styled.a`
  text-decoration: none;
  color: #2C3E50;
  font-weight: bold;
  font-size: 1.5rem;
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #2C3E50;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: white;
    padding: 1rem;
    gap: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #2C3E50;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #8B7355;
  }
`;

const LanguageButton = styled.button`
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  color: #2C3E50;

  svg {
    width: 24px;
    height: 16px;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const TurkishFlag = () => (
  <svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg">
    <rect width="30" height="20" fill="#E30A17"/>
    <circle cx="13" cy="10" r="6" fill="#ffffff"/>
    <circle cx="14.5" cy="10" r="5" fill="#E30A17"/>
    <g transform="translate(15.5 10) scale(0.8)">
      <path
        d="M0,-5 L1.5,-1.5 L5.5,-1.5 L2,0.6 L3.3,4.5 L0,2 L-3.3,4.5 L-2,0.6 L-5.5,-1.5 L-1.5,-1.5 Z"
        fill="#ffffff"
      />
    </g>
  </svg>
);

const BritishFlag = () => (
  <svg viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg">
    <rect width="30" height="20" fill="#012169"/>
    <path d="M0 0 L30 20 M30 0 L0 20" stroke="#ffffff" strokeWidth="4"/>
    <path d="M15 0 L15 20 M0 10 L30 10" stroke="#ffffff" strokeWidth="4"/>
    <path d="M15 0 L15 20 M0 10 L30 10" stroke="#C8102E" strokeWidth="2"/>
    <path d="M0 0 L30 20 M30 0 L0 20" stroke="#C8102E" strokeWidth="2"/>
  </svg>
);

const MobileMenu = styled.div<{ isOpen: boolean }>`
  display: none;
  
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: white;
    padding: 1rem;
    z-index: 999;
  }
`;

const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const MobileMenuLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

function HeaderContent() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageToggle = () => {
    setLanguage(language === 'tr' ? 'en' : 'tr');
  };

  return (
    <HeaderContainer>
      <Link href="/" passHref legacyBehavior>
        <Logo>
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={200}
            height={50}
            priority
          />
        </Logo>
      </Link>

      <MenuButton onClick={() => setIsOpen(!isOpen)}>
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </MenuButton>

      <NavLinks isOpen={isOpen}>
        <Link href="/" passHref legacyBehavior>
          <NavLink>{language === 'tr' ? 'Ana Sayfa' : 'Home'}</NavLink>
        </Link>
        <Link href="/hakkimizda" passHref legacyBehavior>
          <NavLink>{language === 'tr' ? 'Hakkımızda' : 'About'}</NavLink>
        </Link>
        <Link href="/hizmetlerimiz" passHref legacyBehavior>
          <NavLink>{language === 'tr' ? 'Hizmetlerimiz' : 'Services'}</NavLink>
        </Link>
        <Link href="/makalelerimiz" passHref legacyBehavior>
          <NavLink>{language === 'tr' ? 'Makalelerimiz' : 'Articles'}</NavLink>
        </Link>
        <Link href="/iletisim" passHref legacyBehavior>
          <NavLink>{language === 'tr' ? 'İletişim' : 'Contact'}</NavLink>
        </Link>
        <LanguageButton onClick={handleLanguageToggle}>
          {language === 'tr' ? (
            <>
              <BritishFlag />
              EN
            </>
          ) : (
            <>
              <TurkishFlag />
              TR
            </>
          )}
        </LanguageButton>
      </NavLinks>
    </HeaderContainer>
  );
}

export default function Header() {
  return (
    <HeaderContent />
  );
} 