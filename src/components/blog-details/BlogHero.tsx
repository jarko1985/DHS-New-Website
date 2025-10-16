"use client";

import React from 'react';
import Image from 'next/image';

interface BlogHeroProps {
  title: string;
  image: string;
  author: string;
  publishDate: string;
  category: string;
}

export default function BlogHero({ title, image, author, publishDate, category }: BlogHeroProps) {
  return (
    <section className="relative">
      {/* Hero Image */}
      <div className="relative h-[300px] md:h-[600px] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain transition-transform duration-700 hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Enhanced Floating decorations */}
        {/* Top decorations */}
        <div className="absolute top-8 right-12 w-24 h-24 bg-[#117f60]/30 rounded-full blur-sm animate-float" />
        <div className="absolute top-20 right-32 w-16 h-16 bg-[#117f60]/20 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-12 left-20 w-20 h-20 bg-[#e47a5a]/25 rounded-full blur-md animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-32 left-8 w-12 h-12 bg-[#e47a5a]/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        
        {/* Middle decorations */}
        <div className="absolute top-1/3 right-8 w-14 h-14 bg-gradient-to-br from-[#117f60]/30 to-[#e47a5a]/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-16 w-18 h-18 bg-[#117f60]/15 rounded-full blur-lg animate-float" style={{ animationDelay: '2.5s' }} />
        <div className="absolute top-1/2 right-24 w-10 h-10 bg-[#e47a5a]/35 rounded-full animate-float" style={{ animationDelay: '0.8s' }} />
        
        {/* Bottom decorations */}
        <div className="absolute bottom-24 left-12 w-22 h-22 bg-[#e47a5a]/25 rounded-full blur-sm animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-16 right-20 w-16 h-16 bg-[#117f60]/30 rounded-full animate-float" style={{ animationDelay: '1.8s' }} />
        <div className="absolute bottom-32 left-32 w-14 h-14 bg-gradient-to-tr from-[#b22f26]/25 to-[#117f60]/25 rounded-full blur-md animate-float" style={{ animationDelay: '0.3s' }} />
        <div className="absolute bottom-8 right-8 w-20 h-20 bg-[#e47a5a]/20 rounded-full animate-float" style={{ animationDelay: '2.2s' }} />
        
        {/* Small accent decorations */}
        <div className="absolute top-24 right-48 w-6 h-6 bg-white/20 rounded-full animate-float" style={{ animationDelay: '1.2s' }} />
        <div className="absolute bottom-40 left-40 w-8 h-8 bg-white/15 rounded-full blur-sm animate-float" style={{ animationDelay: '0.6s' }} />
        <div className="absolute top-40 left-48 w-5 h-5 bg-[#117f60]/40 rounded-full animate-float" style={{ animationDelay: '1.7s' }} />
      </div>

      {/* Blog Metadata */}
      <div className="xl:max-w-[70%] mx-auto mt-8 relative z-10">
        <div className="glass-dark rounded-2xl p-4 shadow-4xl">
          <div className="flex flex-wrap items-center gap-6 text-white/80 mb-6">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-[#117f60] rounded-full mr-3 animate-pulse" />
              <span className="text-sm">Written by <span className="text-[#117f60] font-medium">{author}</span></span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-[#e47a5a] rounded-full mr-3 animate-pulse" style={{ animationDelay: '0.5s' }} />
              <span className="text-sm">{publishDate}</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-gradient-to-r from-[#b22f26] to-[#e47a5a] rounded-full mr-3 animate-pulse" style={{ animationDelay: '1s' }} />
              <span className="text-sm text-white/90 font-medium">{category}</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold text-white leading-tight slide-in-up">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}
