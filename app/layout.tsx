'use client';

import { Suspense } from 'react';
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '../context/LanguageContext'
import StyledComponentsRegistry from '../lib/registry'
import Script from 'next/script'
import styled from 'styled-components'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
  weight: ['400', '500', '600', '700'],
})

const WhatsAppButton = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #25d366;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  z-index: 9999;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.75rem;
  }
`;

const LoadingSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #8B7355;
  border-radius: 50%;
  animation: spin 1s linear infinite;
`;

const LoadingContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className} style={{ background: '#ffffff' }}>
        <StyledComponentsRegistry>
          <Suspense fallback={
            <LoadingContainer>
              <LoadingSpinner />
            </LoadingContainer>
          }>
            <LanguageProvider>
              {children}
              <WhatsAppButton
                href="https://wa.me/905397440887"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp ile iletişime geçin"
              >
                <i className="fab fa-whatsapp"></i>
              </WhatsAppButton>
            </LanguageProvider>
          </Suspense>
        </StyledComponentsRegistry>
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/js/all.min.js"
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  )
} 