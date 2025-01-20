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
  return <HomePageClient />;
} 