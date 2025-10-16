"use client";

import React, { useState, useEffect } from 'react';

interface BlogContentProps {
  content: string;
}

export default function BlogContent({ content }: BlogContentProps) {
  const [readingProgress, setReadingProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const article = document.querySelector('.blog-content');
      if (article) {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        setReadingProgress(Math.min(scrollPercent, 100));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-6 relative">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-white/10 z-50">
        <div 
          className="h-full bg-gradient-to-r from-[#117f60] to-[#e47a5a] transition-all duration-300 ease-out"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <div className="xl:max-w-[70%] mx-auto px-4">
        <div className={`glass rounded-2xl p-6 md:p-8 shadow-2xl transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
           <div
             className="blog-content prose prose-lg max-w-none text-white tracking-wide
                 prose-headings:text-white prose-headings:font-bold prose-headings:mb-6 prose-headings:mt-12 prose-headings:tracking-wide prose-headings:relative
                 prose-h2:text-4xl prose-h2:text-[#117f60] prose-h2:border-b-2 prose-h2:border-[#117f60]/40 prose-h2:pb-4 prose-h2:mb-8 prose-h2:relative prose-h2:before:content-[''] prose-h2:before:absolute prose-h2:before:left-0 prose-h2:before:top-0 prose-h2:before:w-1 prose-h2:before:h-full prose-h2:before:bg-gradient-to-b prose-h2:before:from-[#117f60] prose-h2:before:to-[#e47a5a] prose-h2:before:rounded-full prose-h2:before:-ml-4
                 prose-h3:text-3xl prose-h3:text-[#e47a5a] prose-h3:mt-8 prose-h3:mb-6 prose-h3:relative prose-h3:before:content-['•'] prose-h3:before:text-[#117f60] prose-h3:before:text-2xl prose-h3:before:absolute prose-h3:before:-left-6 prose-h3:before:top-0
                 prose-h4:text-2xl prose-h4:text-white prose-h4:mt-6 prose-h4:mb-4 prose-h4:font-semibold prose-h4:bg-gradient-to-r prose-h4:from-[#117f60]/20 prose-h4:to-transparent prose-h4:pl-4 prose-h4:py-2 prose-h4:rounded-l-lg prose-h4:border-l-4 prose-h4:border-[#e47a5a]
                 prose-p:text-white prose-p:leading-relaxed prose-p:text-lg prose-p:opacity-90 prose-p:mb-6 prose-p:tracking-wide prose-p:indent-4 prose-p:first:indent-0
                 prose-a:text-[#117f60] prose-a:no-underline prose-a:font-medium hover:prose-a:text-[#e47a5a] prose-a:transition-all prose-a:duration-300 prose-a:relative prose-a:after:content-[''] prose-a:after:absolute prose-a:after:bottom-0 prose-a:after:left-0 prose-a:after:w-0 prose-a:after:h-0.5 prose-a:after:bg-[#e47a5a] prose-a:after:transition-all prose-a:after:duration-300 hover:prose-a:after:w-full
                 prose-strong:text-white prose-strong:font-semibold prose-strong:opacity-100 prose-strong:bg-[#117f60]/20 prose-strong:px-2 prose-strong:py-1 prose-strong:rounded prose-strong:relative prose-strong:before:content-[''] prose-strong:before:absolute prose-strong:before:inset-0 prose-strong:before:bg-gradient-to-r prose-strong:before:from-[#117f60]/30 prose-strong:before:to-[#e47a5a]/30 prose-strong:before:rounded prose-strong:before:-z-10
                 prose-em:text-[#e47a5a] prose-em:not-italic prose-em:font-medium prose-em:bg-[#e47a5a]/20 prose-em:px-2 prose-em:py-1 prose-em:rounded
                 prose-blockquote:border-l-4 prose-blockquote:border-[#117f60] prose-blockquote:bg-gradient-to-r prose-blockquote:from-[#117f60]/10 prose-blockquote:to-[#e47a5a]/5 
                 prose-blockquote:text-white prose-blockquote:italic prose-blockquote:pl-8 prose-blockquote:py-6 prose-blockquote:pr-6
                 prose-blockquote:my-8 prose-blockquote:rounded-r-xl prose-blockquote:shadow-2xl prose-blockquote:tracking-wide prose-blockquote:relative prose-blockquote:before:content-['\\201C'] prose-blockquote:before:absolute prose-blockquote:before:top-4 prose-blockquote:before:left-4 prose-blockquote:before:text-4xl prose-blockquote:before:text-[#117f60] prose-blockquote:before:font-serif prose-blockquote:before:opacity-50
                 prose-code:text-[#e47a5a] prose-code:bg-gradient-to-r prose-code:from-white/10 prose-code:to-white/5 prose-code:px-3 prose-code:py-2 prose-code:rounded-lg prose-code:text-sm prose-code:font-mono prose-code:border prose-code:border-white/20 prose-code:shadow-sm
                 prose-pre:bg-gradient-to-br prose-pre:from-white/5 prose-pre:to-white/2 prose-pre:border prose-pre:border-white/20 prose-pre:rounded-xl prose-pre:p-6 prose-pre:shadow-xl prose-pre:overflow-x-auto
                 prose-ul:text-white prose-ul:opacity-90 prose-ul:my-6 prose-ul:space-y-3 prose-ul:pl-6
                 prose-ol:text-white prose-ol:opacity-90 prose-ol:my-6 prose-ol:space-y-3 prose-ol:pl-6
                 prose-li:text-white prose-li:leading-relaxed prose-li:opacity-90 prose-li:marker:text-[#117f60] prose-li:tracking-wide prose-li:relative prose-li:pl-2 prose-li:before:content-[''] prose-li:before:absolute prose-li:before:left-0 prose-li:before:top-2 prose-li:before:w-1 prose-li:before:h-1 prose-li:before:bg-[#e47a5a] prose-li:before:rounded-full
                 prose-table:w-full prose-table:border-collapse prose-table:my-12 prose-table:shadow-2xl prose-table:rounded-xl prose-table:overflow-hidden prose-table:backdrop-blur-sm
                 prose-thead:bg-gradient-to-r prose-thead:from-[#117f60] prose-thead:to-[#0a5d47] prose-thead:shadow-lg
                 prose-th:text-white prose-th:font-bold prose-th:text-left prose-th:p-6 prose-th:border-b-2 prose-th:border-[#e47a5a] prose-th:tracking-wider prose-th:text-lg prose-th:relative prose-th:after:content-[''] prose-th:after:absolute prose-th:after:bottom-0 prose-th:after:left-0 prose-th:after:right-0 prose-th:after:h-0.5 prose-th:after:bg-gradient-to-r prose-th:after:from-[#e47a5a] prose-th:after:to-[#117f60]
                 prose-tbody:bg-gradient-to-b prose-tbody:from-white/5 prose-tbody:to-white/2
                 prose-tr:border-b prose-tr:border-white/10 hover:prose-tr:bg-white/10 prose-tr:transition-all prose-tr:duration-300 prose-tr:group
                 prose-td:text-white prose-td:p-6 prose-td:opacity-90 prose-td:tracking-wide prose-td:group-hover:opacity-100 prose-td:transition-opacity prose-td:duration-300
                 fade-in-scale
                 [&_table]:border [&_table]:border-white/20 [&_table]:rounded-xl [&_table]:my-12 [&_table]:overflow-hidden [&_table]:shadow-2xl
                 [&_thead]:bg-gradient-to-r [&_thead]:from-[#117f60] [&_thead]:to-[#0a5d47] [&_thead]:shadow-lg
                 [&_th]:text-white [&_th]:font-bold [&_th]:text-left [&_th]:p-6 [&_th]:border-b-2 [&_th]:border-[#e47a5a] [&_th]:tracking-wider [&_th]:text-lg
                 [&_tbody]:bg-gradient-to-b [&_tbody]:from-white/5 [&_tbody]:to-white/2
                 [&_tr]:border-b [&_tr]:border-white/10 [&_tr:hover]:bg-white/10 [&_tr]:transition-all [&_tr]:duration-300 [&_tr]:group
                 [&_td]:text-white [&_td]:p-6 [&_td]:opacity-90 [&_td]:align-top [&_td]:tracking-wide [&_td]:group-hover:opacity-100 [&_td]:transition-opacity [&_td]:duration-300
                 [&_ol]:list-decimal [&_ol]:list-inside [&_ol]:space-y-4
                 [&_ol_li]:relative [&_ol_li]:pl-4 [&_ol_li]:before:content-[''] [&_ol_li]:before:absolute [&_ol_li]:before:left-0 [&_ol_li]:before:top-2 [&_ol_li]:before:w-2 [&_ol_li]:before:h-2 [&_ol_li]:before:bg-[#117f60] [&_ol_li]:before:rounded-full
                 [&_ul]:list-disc [&_ul]:list-inside [&_ul]:space-y-3
                 [&_ul_li]:relative [&_ul_li]:pl-4 [&_ul_li]:before:content-[''] [&_ul_li]:before:absolute [&_ul_li]:before:left-0 [&_ul_li]:before:top-2 [&_ul_li]:before:w-1.5 [&_ul_li]:before:h-1.5 [&_ul_li]:before:bg-[#e47a5a] [&_ul_li]:before:rounded-full"
             dangerouslySetInnerHTML={{ __html: content }}
           />
        </div>
      </div>
    </section>
  );
}