import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#0d1635' }}>
      <div className="text-center max-w-2xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-[#117f60] mb-4">404</h1>
          <h2 className="text-3xl font-bold text-white mb-4">Blog Post Not Found</h2>
          <p className="text-white/70 text-lg mb-8">
            The blog post you're looking for doesn't exist or may have been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            href="/blog"
            className="inline-block bg-[#117f60] hover:bg-[#0a5d47] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
          >
            Browse All Blog Posts
          </Link>
          
          <div className="text-white/50">
            <Link href="/" className="hover:text-white transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
