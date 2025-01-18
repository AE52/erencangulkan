'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  height: 80px;
  display: flex;
  align-items: center;
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const Logo = styled(motion.div)`
  position: relative;
  width: 200px;
  height: 60px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 160px;
    height: 48px;
  }
`;

const NavLinks = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 2.5rem;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const MobileNav = styled(motion.div)`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 300px;
  background: white;
  padding: 6rem 2rem 2rem;
  box-shadow: 4px 0 12px rgba(0, 0, 0, 0.1);
  z-index: 40;

  @media (max-width: 1024px) {
    display: block;
  }
`;

const MobileNavOverlay = styled(motion.div)`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 35;

  @media (max-width: 1024px) {
    display: block;
  }
`;

const NavLink = styled(motion.div)`
  a {
    color: #333;
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
    transition: color 0.3s ease;

    &:hover {
      color: #8B7355;
    }
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const LanguageButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: 1px solid #8B7355;
  border-radius: 4px;
  padding: 0.5rem 0.75rem;
  color: #8B7355;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #8B7355;
    color: white;
  }
`;

const ActionButton = styled(motion.button)`
  background: #8B7355;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #6B573D;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #333;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 1024px) {
    display: block;
  }
`;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const navLinks = [
    { href: "/", text: language === 'tr' ? "Anasayfa" : "Home" },
    { href: "/hizmetlerimiz", text: language === 'tr' ? "Hizmetlerimiz" : "Our Services" },
    { href: "/hakkimizda", text: language === 'tr' ? "Hakkımızda" : "About Us" },
    { href: "/makalelerimiz", text: language === 'tr' ? "Makalelerimiz" : "Our Articles" },
    { href: "/iletisim", text: language === 'tr' ? "İletişim" : "Contact" }
  ];

  const handleLanguageChange = () => {
    const newLang = language === 'tr' ? 'en' : 'tr';
    setLanguage(newLang);

    // URL'deki dil parametresini güncelle
    const params = new URLSearchParams(searchParams.toString());
    params.set('lang', newLang);
    
    // Mevcut path'i koru ve sadece dil parametresini güncelle
    const newUrl = `${pathname}?${params.toString()}`;
    router.push(newUrl);
    router.refresh();
  };

  return (
    <HeaderContainer>
      <Nav>
        <Link href="/">
          <Logo>
            <Image
              src="/images/logo.jpg"
              alt={language === 'tr' ? "Av. Erencan Gülkan" : "Att. Erencan Gülkan"}
              fill
              className="object-contain"
              priority
            />
          </Logo>
        </Link>

        <NavLinks>
          {navLinks.map((link) => (
            <NavLink key={link.href}>
              <Link href={link.href}>{link.text}</Link>
            </NavLink>
          ))}
        </NavLinks>

        <RightSection>
          <LanguageButton onClick={handleLanguageChange}>
            <Image
              src={`/images/${language === 'tr' ? 'en' : 'tr'}-flag.svg`}
              alt={language === 'tr' ? 'English' : 'Türkçe'}
              width={20}
              height={20}
            />
            {language === 'tr' ? 'EN' : 'TR'}
          </LanguageButton>

          <ActionButton onClick={() => window.location.href = 'tel:+905397440887'}>
            <i className="fas fa-phone"></i>
            {language === 'tr' ? 'Hemen Ara' : 'Call Now'}
          </ActionButton>

          <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`} />
          </MenuButton>
        </RightSection>

        {isMenuOpen && (
          <>
            <MobileNavOverlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />
            <MobileNav
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {navLinks.map((link) => (
                <NavLink key={link.href} style={{ margin: '0.75rem 0' }}>
                  <Link href={link.href} onClick={() => setIsMenuOpen(false)}>
                    {link.text}
                  </Link>
                </NavLink>
              ))}
              <NavLink style={{ margin: '0.75rem 0' }}>
                <Link href="tel:+905397440887">
                  {language === 'tr' ? 'Hemen Ara' : 'Call Now'}
                </Link>
              </NavLink>
            </MobileNav>
          </>
        )}
      </Nav>
    </HeaderContainer>
  );
} 