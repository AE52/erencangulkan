'use client';

import React, { Suspense } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import styled from 'styled-components';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  background: white;
`;

const MainContent = styled.div`
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    max-width: 600px;
  }
`;

const ContactInfo = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const InfoTitle = styled.h2`
  font-size: 2rem;
  color: #2C3E50;
  margin-bottom: 2rem;
`;

const InfoItem = styled.div`
  margin-bottom: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  i {
    color: #8B7355;
    font-size: 1.5rem;
    margin-top: 0.2rem;
  }
`;

const InfoContent = styled.div`
  h3 {
    font-size: 1.2rem;
    color: #2C3E50;
    margin-bottom: 0.5rem;
  }

  p, a {
    color: #666;
    line-height: 1.6;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #8B7355;
  }
`;

const Map = styled.div`
  margin-top: 2rem;
  border-radius: 10px;
  overflow: hidden;
  height: 300px;

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
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

function ContactContent() {
  const { language } = useLanguage();

  return (
    <PageContainer>
      <Header />
      <MainContent>
        <ContactInfo>
          <InfoTitle>
            {language === 'tr' ? 'İletişim Bilgileri' : 'Contact Information'}
          </InfoTitle>

          <InfoItem>
            <i className="fas fa-map-marker-alt"></i>
            <InfoContent>
              <h3>{language === 'tr' ? 'Adres' : 'Address'}</h3>
              <a 
                href="https://www.google.com/maps/place/Avukat+Erencan+G%C3%BClkan/@40.912348,29.1762322,19.25z/data=!4m6!3m5!1s0x14cac53e4e84d5a7:0xcf3af1ea936b7d8d!8m2!3d40.91244!4d29.1762836!16s%2Fg%2F11wbcc__c1?hl=tr&entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
              >
                {language === 'tr'
                  ? 'Cevizli, Ulubey Sk. No:4, 34865 Kartal/İstanbul'
                  : 'Cevizli, Ulubey Sk. No:4, 34865 Kartal/İstanbul'}
              </a>
            </InfoContent>
          </InfoItem>

          <InfoItem>
            <i className="fas fa-phone"></i>
            <InfoContent>
              <h3>{language === 'tr' ? 'Telefon' : 'Phone'}</h3>
              <a href="tel:+905397440887">+90 539 744 08 87</a>
            </InfoContent>
          </InfoItem>

          <InfoItem>
            <i className="fas fa-envelope"></i>
            <InfoContent>
              <h3>{language === 'tr' ? 'E-posta' : 'Email'}</h3>
              <a href="mailto:av.erencangulkan@gmail.com">info@erencangulkan.av.tr</a>
            </InfoContent>
          </InfoItem>

          <Map>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d753.0887247068927!2d29.175847473775566!3d40.91234797607517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac53e4e84d5a7%3A0xcf3af1ea936b7d8d!2sAvukat%20Erencan%20G%C3%BClkan!5e0!3m2!1str!2str!4v1710271132346!5m2!1str!2str"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={language === 'tr' ? 'Ofis Konumu' : 'Office Location'}
            ></iframe>
          </Map>
        </ContactInfo>
        <ContactForm />
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

export default function ContactPageClient() {
  return (
    <Suspense fallback={<div>Yükleniyor...</div>}>
      <ContactContent />
    </Suspense>
  );
} 