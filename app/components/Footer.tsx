'use client';

import React, { Suspense } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #2C3E50;
  color: white;
  padding: 4rem 2rem;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FooterSection = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    color: #fff;
  }
`;

const FooterLink = styled(Link)`
  display: block;
  color: #ddd;
  text-decoration: none;
  margin-bottom: 0.8rem;
  transition: color 0.3s ease;

  &:hover {
    color: #8B7355;
  }
`;

const ContactInfo = styled.div`
  color: #ddd;
  
  p {
    margin-bottom: 0.8rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  i {
    color: #8B7355;
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #ddd;
`;

function FooterContentComponent() {
  const { language } = useLanguage();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>{language === 'tr' ? 'Hakkımızda' : 'About Us'}</h3>
          <ContactInfo>
            <p>
              {language === 'tr'
                ? 'Profesyonel ve güvenilir hukuki danışmanlık hizmetleri.'
                : 'Professional and reliable legal consultancy services.'}
            </p>
          </ContactInfo>
        </FooterSection>

        <FooterSection>
          <h3>{language === 'tr' ? 'Hızlı Erişim' : 'Quick Links'}</h3>
          <FooterLink href="/hakkimizda">
            {language === 'tr' ? 'Hakkımızda' : 'About'}
          </FooterLink>
          <FooterLink href="/hizmetlerimiz">
            {language === 'tr' ? 'Hizmetlerimiz' : 'Services'}
          </FooterLink>
          <FooterLink href="/makalelerimiz">
            {language === 'tr' ? 'Makalelerimiz' : 'Articles'}
          </FooterLink>
          <FooterLink href="/iletisim">
            {language === 'tr' ? 'İletişim' : 'Contact'}
          </FooterLink>
        </FooterSection>

        <FooterSection>
          <h3>{language === 'tr' ? 'İletişim' : 'Contact'}</h3>
          <ContactInfo>
            <p>
              <i className="fas fa-map-marker-alt"></i>
              Cevizli, Ulubey Sk. No:4, 34865 Kartal/İstanbul
            </p>
            <p>
              <i className="fas fa-phone"></i>
              +90 539 744 08 87
            </p>
            <p>
              <i className="fas fa-envelope"></i>
              info@erencangulkan.av.tr
            </p>
          </ContactInfo>
        </FooterSection>

        <FooterSection>
          <h3>{language === 'tr' ? 'Sosyal Medya' : 'Social Media'}</h3>
          <FooterLink href="https://linkedin.com" target="_blank">LinkedIn</FooterLink>
          <FooterLink href="https://twitter.com" target="_blank">Twitter</FooterLink>
          <FooterLink href="https://instagram.com" target="_blank">Instagram</FooterLink>
        </FooterSection>
      </FooterContent>

      <Copyright>
        © {new Date().getFullYear()} Av. Erencan Gülkan. {language === 'tr' ? 'Tüm hakları saklıdır.' : 'All rights reserved.'}
      </Copyright>
    </FooterContainer>
  );
}

export default function Footer() {
  return (
    <Suspense fallback={<div>Footer yükleniyor...</div>}>
      <FooterContentComponent />
    </Suspense>
  );
} 