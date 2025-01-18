import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const slug = await params.slug;
    const { searchParams } = new URL(request.url);
    const lang = searchParams.get('lang') || 'tr';
    
    const filePath = path.join(process.cwd(), '_posts', lang, `${slug}.md`);
    const fileContent = await fs.readFile(filePath, 'utf8');
    const { data, content } = matter(fileContent);

    // Convert markdown content to HTML
    const contentHtml = marked(content);

    const article = {
      slug: slug,
      title: data.title || '',
      excerpt: data.excerpt || '',
      date: data.date || new Date().toISOString(),
      image: data.image || 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80',
      content: contentHtml
    };

    return NextResponse.json(article);
  } catch (error) {
    console.error('Error reading article:', error);
    return NextResponse.json(
      { error: 'Article not found' },
      { status: 404 }
    );
  }
} 