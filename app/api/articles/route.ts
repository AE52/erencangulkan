import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const lang = searchParams.get('lang') || 'tr';
    
    const postsDirectory = path.join(process.cwd(), '_posts', lang);
    const files = await fs.readdir(postsDirectory);
    const markdownFiles = files.filter(file => file.endsWith('.md'));

    const articles = await Promise.all(
      markdownFiles.map(async (file) => {
        const filePath = path.join(postsDirectory, file);
        const fileContent = await fs.readFile(filePath, 'utf8');
        const { data } = matter(fileContent);
        
        return {
          slug: file.replace('.md', ''),
          title: data.title || '',
          excerpt: data.excerpt || '',
          date: data.date || new Date().toISOString(),
          image: data.image || 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80'
        };
      })
    );

    // Sort articles by date in descending order
    articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return NextResponse.json(articles);
  } catch (error) {
    console.error('Error reading articles:', error);
    return NextResponse.json(
      { error: 'Failed to fetch articles' },
      { status: 500 }
    );
  }
} 