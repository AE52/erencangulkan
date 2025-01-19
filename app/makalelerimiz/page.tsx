import { Metadata } from 'next';
import ArticlesPageClient from './ArticlesPageClient';

export const metadata: Metadata = {
  title: 'Makalelerimiz | Av. Eren Can Gülkan',
  description: 'Hukuki konularda güncel makaleler ve bilgilendirici içerikler. Hukuk alanındaki gelişmeleri ve önemli konuları ele alıyoruz.',
  openGraph: {
    title: 'Makalelerimiz | Av. Eren Can Gülkan',
    description: 'Hukuki konularda güncel makaleler ve bilgilendirici içerikler. Hukuk alanındaki gelişmeleri ve önemli konuları ele alıyoruz.',
    images: ['/images/vesika.jpg']
  }
};

export default function Page() {
  return <ArticlesPageClient />;
} 