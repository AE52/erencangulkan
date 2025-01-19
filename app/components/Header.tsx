'use client';

import React, { Suspense } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #2C3E50;
  text-decoration: none;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: #2C3E50;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #8B7355;
  }
`;

const LanguageButton = styled.button`
  background: none;
  border: none;
  color: #2C3E50;
  cursor: pointer;
  padding: 0.5rem;
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #8B7355;
  }
`;

function HeaderContentComponent() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'tr' ? 'en' : 'tr');
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo href="/">Av. Erencan Gülkan</Logo>
        <Nav>
          <NavLink href="/hakkimizda">
            {language === 'tr' ? 'Hakkımızda' : 'About'}
          </NavLink>
          <NavLink href="/hizmetlerimiz">
            {language === 'tr' ? 'Hizmetlerimiz' : 'Services'}
          </NavLink>
          <NavLink href="/makalelerimiz">
            {language === 'tr' ? 'Makalelerimiz' : 'Articles'}
          </NavLink>
          <NavLink href="/iletisim">
            {language === 'tr' ? 'İletişim' : 'Contact'}
          </NavLink>
          <LanguageButton onClick={toggleLanguage}>
            {language === 'tr' ? 'EN' : 'TR'}
          </LanguageButton>
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  );
}

export default function Header() {
  return (
    <Suspense fallback={<div>Header yükleniyor...</div>}>
      <HeaderContentComponent />
    </Suspense>
  );
} 