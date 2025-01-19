import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '../context/LanguageContext'
import StyledComponentsRegistry from '../lib/registry'
import { metadata } from './metadata'
import Script from 'next/script'
import WhatsAppButton from '../components/WhatsAppButton'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
})

export { metadata }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>
        <link
          rel="preconnect"
          href="https://cdnjs.cloudflare.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </StyledComponentsRegistry>
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/js/all.min.js"
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />
        <WhatsAppButton />
      </body>
    </html>
  )
} 