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
      <div className="relative h-[500px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Floating decorations */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-[#117f60]/20 rounded-full animate-float" />
        <div className="absolute bottom-20 left-10 w-16 h-16 bg-[#e47a5a]/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
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
