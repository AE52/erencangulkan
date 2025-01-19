import { NextRequest, NextResponse } from 'next/server';
import { articles } from '../../../../data/articles';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { searchParams } = new URL(request.url);
    const lang = searchParams.get('lang') || 'tr';
    
    const article = articles.find(a => 
      (lang === 'tr' && a.slug_tr === params.slug) || 
      (lang === 'en' && a.slug_en === params.slug)
    );

    if (!article) {
      return NextResponse.json(
        { error: 'Article not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      slug: lang === 'tr' ? article.slug_tr : article.slug_en,
      title: lang === 'tr' ? article.title_tr : article.title_en,
      content: lang === 'tr' ? article.content_tr : article.content_en,
      date: article.date,
      image: article.image
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 