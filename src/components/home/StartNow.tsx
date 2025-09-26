"use client";

import React from "react";
import Link from "next/link";

export default function StartNow() {
  return (
    <section className="relative overflow-hidden py-12">
      {/* Main Banner Container */}
      <div className="ramp-bg py-10 px-6 relative">
        {/* Geometric Background Elements */}
        <div className="absolute inset-0 opacity-10">
          {/* Top Left Lines */}
          <svg
            className="absolute top-8 left-8 w-32 h-32"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 10 L90 10 L90 50 L50 50 L50 90 L10 90 Z"
              stroke="white"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M20 20 L80 20 L80 40 L40 40 L40 80 L20 80 Z"
              stroke="white"
              strokeWidth="0.5"
              fill="none"
            />
          </svg>

          {/* Top Right Lines */}
          <svg
            className="absolute top-8 right-8 w-40 h-32"
            viewBox="0 0 120 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 10 L110 10 L110 30 L80 30 L80 60 L50 60 L50 90 L10 90 Z"
              stroke="white"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M20 20 L100 20 L100 40 L70 40 L70 70 L40 70 L40 80 L20 80 Z"
              stroke="white"
              strokeWidth="0.5"
              fill="none"
            />
          </svg>

          {/* Bottom Left Lines */}
          <svg
            className="absolute bottom-8 left-8 w-36 h-28"
            viewBox="0 0 110 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 80 L100 80 L100 60 L70 60 L70 30 L40 30 L40 10 L10 10 Z"
              stroke="white"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M20 70 L90 70 L90 50 L60 50 L60 20 L30 20 L30 20 L20 20 Z"
              stroke="white"
              strokeWidth="0.5"
              fill="none"
            />
          </svg>

          {/* Bottom Right Lines */}
          <svg
            className="absolute bottom-8 right-8 w-32 h-32"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M90 90 L10 90 L10 70 L40 70 L40 40 L70 40 L70 10 L90 10 Z"
              stroke="white"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M80 80 L20 80 L20 60 L50 60 L50 30 L80 30 L80 20 L80 20 Z"
              stroke="white"
              strokeWidth="0.5"
              fill="none"
            />
          </svg>

          {/* Additional decorative lines */}
          <div className="absolute top-1/4 left-1/4 w-16 h-0.5 bg-white/20 transform rotate-45"></div>
          <div className="absolute top-3/4 right-1/4 w-20 h-0.5 bg-white/20 transform -rotate-45"></div>
          <div className="absolute top-1/2 left-1/6 w-12 h-0.5 bg-white/20 transform rotate-12"></div>
          <div className="absolute bottom-1/4 right-1/6 w-14 h-0.5 bg-white/20 transform -rotate-12"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-blue-whale)] mb-8 leading-tight">
            Start earning crypto today!
          </h1>

          {/* Call to Action Button */}
          <div className="inline-block">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-blue-whale)] text-white font-semibold rounded-full text-lg hover:bg-[var(--color-blue-whale)]/90 transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-[0_8px_32px_rgba(13,22,53,0.3)]"
            >
              Sign Up Now
            </Link>
          </div>
        </div>

        {/* Additional Floating Elements */}
        <div className="absolute top-1/3 left-1/12 w-2 h-2 bg-white/30 rounded-full"></div>
        <div className="absolute top-2/3 right-1/12 w-3 h-3 bg-white/25 rounded-full"></div>
        <div className="absolute top-1/2 left-1/8 w-1.5 h-1.5 bg-white/35 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/8 w-2.5 h-2.5 bg-white/20 rounded-full"></div>
        
        {/* Corner accent elements */}
        <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-white/20"></div>
        <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-white/20"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-white/20"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-white/20"></div>
      </div>
    </section>
  );
}