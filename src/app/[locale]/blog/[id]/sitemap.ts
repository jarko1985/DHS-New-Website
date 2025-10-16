import { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blogPosts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://dhs.exchange';
  
  // Generate sitemap entries for all blog posts
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/en/blog/${post.id}`,
    lastModified: new Date(post.publishDate),
    changeFrequency: 'weekly',
    priority: 0.8,
    alternates: {
      languages: {
        en: `${baseUrl}/en/blog/${post.id}`,
        ar: `${baseUrl}/ar/blog/${post.id}`,
      },
    },
  }));

  return blogEntries;
}
