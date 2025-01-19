import { Metadata } from 'next';
import ArticlePageClient from './ArticlePageClient';
import { articles } from '../data';
import { notFound } from 'next/navigation';

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return {
      title: 'Makale Bulunamadı',
      description: 'Aradığınız makale bulunamadı.'
    };
  }

  return {
    title: article.title_tr,
    description: article.excerpt_tr,
    openGraph: {
      title: article.title_tr,
      description: article.excerpt_tr,
      images: [article.image]
    }
  };
}

export default async function Page({ params }: { params: Params }) {
  const { slug } = await params;
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    notFound();
  }

  return <ArticlePageClient article={article} />;
} 