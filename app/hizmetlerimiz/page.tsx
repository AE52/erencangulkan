import { Metadata } from 'next';
import ServicesPageClient from './ServicesPageClient';

export const metadata: Metadata = {
  title: 'Hizmetlerimiz | Av. Eren Can Gülkan',
  description: 'Aile hukuku, iş hukuku, idare hukuku ve daha birçok alanda uzman hukuki danışmanlık ve avukatlık hizmetleri sunuyoruz.',
  openGraph: {
    title: 'Hizmetlerimiz | Av. Eren Can Gülkan',
    description: 'Aile hukuku, iş hukuku, idare hukuku ve daha birçok alanda uzman hukuki danışmanlık ve avukatlık hizmetleri sunuyoruz.',
    images: ['/images/vesika.jpg']
  }
};

export default function Page() {
  return <ServicesPageClient />;
} 