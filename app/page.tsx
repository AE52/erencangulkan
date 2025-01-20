import { Suspense } from 'react';
import { Metadata } from 'next';
import HomePageClient from './HomePageClient';

export const metadata: Metadata = {
  title: 'Av. Eren Can Gülkan | Hukuk Bürosu',
  description: 'İstanbul merkezli hukuk bürosu olarak, geniş yelpazede hukuki danışmanlık ve avukatlık hizmetleri sunuyoruz.',
  openGraph: {
    title: 'Av. Eren Can Gülkan | Hukuk Bürosu',
    description: 'İstanbul merkezli hukuk bürosu olarak, geniş yelpazede hukuki danışmanlık ve avukatlık hizmetleri sunuyoruz.',
    images: ['/images/vesika.jpg']
  }
};

export default function Page() {
  return (
    <Suspense fallback={
      <div style={{ 
        height: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: '#ffffff'
      }}>
        <div style={{
          width: '50px',
          height: '50px',
          border: '3px solid #f3f3f3',
          borderTop: '3px solid #8B7355',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }} />
      </div>
    }>
      <HomePageClient />
    </Suspense>
  );
} 