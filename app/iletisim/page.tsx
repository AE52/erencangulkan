import { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: 'İletişim | Av. Eren Can Gülkan',
  description: 'Hukuki danışmanlık ve avukatlık hizmetleri için bizimle iletişime geçin. İstanbul\'da hizmetinizdeyiz.',
  openGraph: {
    title: 'İletişim | Av. Eren Can Gülkan',
    description: 'Hukuki danışmanlık ve avukatlık hizmetleri için bizimle iletişime geçin. İstanbul\'da hizmetinizdeyiz.',
    images: ['/images/vesika.jpg']
  }
};

export default function Page() {
  return <ContactPageClient />;
} 