'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

const FooterContainer = styled.footer`
  background-color: #1a1a1a;
  color: white;
  padding: 4rem 0;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const FooterSection = styled.div`
  h3 {
    color: #8B7355;
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 0.75rem;
  }

  a {
    color: #f5f5f5;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #8B7355;
    }
  }
`;

const ContactInfo = styled.div`
  margin-top: 1rem;
  
  p {
    display: flex;
    align-items: center;
    margin-bottom: 0.75rem;
    
    i {
      margin-right: 0.5rem;
      color: #8B7355;
    }
  }
`;

const MapContainer = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 1rem;
`;

export default function Footer() {
  const { language } = useLanguage();

  const services = [
    { slug: 'aile-hukuku', title: language === 'tr' ? 'Aile Hukuku' : 'Family Law' },
    { slug: 'ceza-hukuku', title: language === 'tr' ? 'Ceza Hukuku' : 'Criminal Law' },
    { slug: 'icra-iflas-hukuku', title: language === 'tr' ? 'İcra ve İflas Hukuku' : 'Enforcement & Bankruptcy Law' },
    { slug: 'tazminat-hukuku', title: language === 'tr' ? 'Tazminat Hukuku' : 'Compensation Law' },
  ];

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>{language === 'tr' ? 'İletişim' : 'Contact'}</h3>
          <ContactInfo>
            <p>
              <i className="fas fa-map-marker-alt"></i>
              {language === 'tr' ? 'Cevizli, Ulubey Sk. No:4, 34865 Kartal/İstanbul' : 'Cevizli, Ulubey Sk. No:4, 34865 Kartal/İstanbul'}
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
          <h3>{language === 'tr' ? 'Çalışma Alanlarımız' : 'Practice Areas'}</h3>
          <ul>
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/hizmetlerimiz/${service.slug}`}>
                  {service.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/hizmetlerimiz">
                {language === 'tr' ? 'Tümünü Gör' : 'View All'}
              </Link>
            </li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>{language === 'tr' ? 'Hızlı Bağlantılar' : 'Quick Links'}</h3>
          <ul>
            <li>
              <Link href="/">
                {language === 'tr' ? 'Anasayfa' : 'Home'}
              </Link>
            </li>
            <li>
              <Link href="/hakkimizda">
                {language === 'tr' ? 'Hakkımızda' : 'About Us'}
              </Link>
            </li>
            <li>
              <Link href="/hizmetlerimiz">
                {language === 'tr' ? 'Hizmetlerimiz' : 'Our Services'}
              </Link>
            </li>
            <li>
              <Link href="/makalelerimiz">
                {language === 'tr' ? 'Makalelerimiz' : 'Our Articles'}
              </Link>
            </li>
            
            <li>
              <Link href="/iletisim">
                {language === 'tr' ? 'İletişim' : 'Contact'}
              </Link>
            </li>
            
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>{language === 'tr' ? 'Konum' : 'Location'}</h3>
          <MapContainer>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d753.0887247068927!2d29.175847473775566!3d40.91234797607517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac53e4e84d5a7%3A0xcf3af1ea936b7d8d!2sAvukat%20Erencan%20G%C3%BClkan!5e0!3m2!1str!2str!4v1710271132346!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={language === 'tr' ? 'Ofis Konumu' : 'Office Location'}
            />
          </MapContainer>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
} 