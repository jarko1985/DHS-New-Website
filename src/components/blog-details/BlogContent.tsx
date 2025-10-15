"use client";

import React from 'react';

interface BlogContentProps {
  content: string;
}

export default function BlogContent({ content }: BlogContentProps) {
  return (
    <section className="py-6">

      <div className="xl:max-w-[70%] mx-auto">
        <div className="glass rounded-2xl p-4 shadow-2xl">
           <div
             className="prose prose-lg max-w-none text-white
                 prose-headings:text-white prose-headings:font-bold
                 prose-p:text-white prose-p:leading-relaxed prose-p:text-lg prose-p:opacity-90
                 prose-a:text-[#117f60] prose-a:no-underline hover:prose-a:text-[#e47a5a]
                 prose-strong:text-white prose-strong:font-semibold
                 prose-blockquote:border-l-[#117f60] prose-blockquote:text-white prose-blockquote:opacity-80
                 prose-code:text-[#e47a5a] prose-code:bg-white/10 prose-code:px-2 prose-code:py-1 prose-code:rounded
                 prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10
                 prose-ul:text-white prose-ol:text-white prose-ul:opacity-90 prose-ol:opacity-90
                 prose-li:text-white prose-li:leading-relaxed prose-li:opacity-90
                 fade-in-scale"
             dangerouslySetInnerHTML={{ __html: content }}
           />
        </div>

      </div>
    </section>
  );
}
