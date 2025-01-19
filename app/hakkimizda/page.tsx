import { Suspense } from 'react';
import ClientAboutPage from './client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Suspense fallback={<div>Yükleniyor...</div>}>
          <ClientAboutPage />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
} 