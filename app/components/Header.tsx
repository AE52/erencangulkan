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
  border: 2px solid #2C3E50;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  color: #2C3E50;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #2C3E50;
    color: white;
  }
`;

function HeaderContent() {
  const { language, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

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
        <LanguageButton onClick={toggleLanguage}>
          {language === 'tr' ? 'EN' : 'TR'}
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