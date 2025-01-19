import { Metadata } from 'next';
import ServicePageClient from './ServicePageClient';
import { services } from '../data';
import { notFound } from 'next/navigation';

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find(s => s.slug === slug);
  
  if (!service) {
    return {
      title: 'Hizmet Bulunamadı',
      description: 'Aradığınız hizmet bulunamadı.'
    };
  }

  return {
    title: service.title_tr,
    description: service.description_tr,
    openGraph: {
      title: service.title_tr,
      description: service.description_tr,
      images: [service.image]
    }
  };
}

export default async function Page({ params }: { params: Params }) {
  const { slug } = await params;
  const service = services.find(s => s.slug === slug);

  if (!service) {
    notFound();
  }

  return <ServicePageClient service={service} />;
} 