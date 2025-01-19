import { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
  title: 'Hakkımızda | Av. Eren Can Gülkan',
  description: 'İstanbul Barosu\'na kayıtlı avukat olarak, müvekkillerime en iyi hukuki hizmeti sunmak için çalışıyorum.',
  openGraph: {
    title: 'Hakkımızda | Av. Eren Can Gülkan',
    description: 'İstanbul Barosu\'na kayıtlı avukat olarak, müvekkillerime en iyi hukuki hizmeti sunmak için çalışıyorum.',
    images: ['/images/vesika.jpg']
  }
};

export default function Page() {
  return <AboutPageClient />;
} 