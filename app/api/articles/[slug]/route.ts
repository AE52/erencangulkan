import { NextRequest } from 'next/server';
import { articles } from '../../../../data/articles';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
): Promise<Response> {
  try {
    const { slug } = await params;
    const { searchParams } = new URL(request.url);
    const lang = searchParams.get('lang') || 'tr';
    
    const article = articles.find(a => 
      (lang === 'tr' && a.slug_tr === slug) || 
      (lang === 'en' && a.slug_en === slug)
    );

    if (!article) {
      return new Response(JSON.stringify({ error: 'Article not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({
      slug: lang === 'tr' ? article.slug_tr : article.slug_en,
      title: lang === 'tr' ? article.title_tr : article.title_en,
      content: lang === 'tr' ? article.content_tr : article.content_en,
      date: article.date,
      image: article.image
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
} 