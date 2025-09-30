"use client";

import React from "react";
import {
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

type Social = {
  name: "linkedin" | "facebook" | "instagram" | "twitter" | "youtube";
  url: string;
  icon: React.ElementType;
  color: string;
};

const socials: Social[] = [
  {
    name: "linkedin",
    url: "#",
    icon: Linkedin,
    color: "#007bb5",
  },
  {
    name: "facebook",
    url: "#",
    icon: Facebook,
    color: "#1877f2",
  },
  {
    name: "instagram",
    url: "#",
    icon: Instagram,
    color: "#c32aa3",
  },
  {
    name: "twitter",
    url: "#",
    icon: Twitter,
    color: "#1da1f2",
  },
  {
    name: "youtube",
    url: "#",
    icon: Youtube,
    color: "#ff0000",
  },
];

export default function SocialLinks() {
  return (
    <ul className="flex justify-center items-center gap-4 md:gap-6">
      {socials.map((social) => {
        const Icon = social.icon;
        return (
          <li 
            key={social.name} 
            className="list-none cursor-pointer group"
            onMouseEnter={(e) => {
              const icon = e.currentTarget.querySelector('svg');
              if (icon) {
                icon.style.stroke = social.color;
                icon.style.color = social.color;
                icon.style.fill = 'none';
              }
            }}
            onMouseLeave={(e) => {
              const icon = e.currentTarget.querySelector('svg');
              if (icon) {
                icon.style.stroke = 'rgba(255, 255, 255, 0.8)';
                icon.style.color = 'rgba(255, 255, 255, 0.8)';
                icon.style.fill = 'none';
              }
            }}
          >
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110 hover:bg-white/20"
            >
              <Icon 
                className="w-5 h-5 md:w-6 md:h-6 transition-all duration-300" 
                style={{
                  stroke: 'rgba(255, 255, 255, 0.8)',
                  strokeWidth: '1.5',
                  fill: 'none',
                  color: 'rgba(255, 255, 255, 0.8)',
                  transition: 'stroke 0.3s ease, color 0.3s ease'
                }}
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

/* Simple color util functions */
function lighten(hex: string, amount: number): string {
  return adjust(hex, amount);
}
function darken(hex: string, amount: number): string {
  return adjust(hex, -amount);
}
function adjust(hex: string, amount: number): string {
  let col = hex.replace("#", "");
  let num = parseInt(col, 16);
  let r = (num >> 16) + amount * 255;
  let g = ((num >> 8) & 0x00ff) + amount * 255;
  let b = (num & 0x0000ff) + amount * 255;
  return (
    "#" +
    (
      0x1000000 +
      (clamp(r) << 16) +
      (clamp(g) << 8) +
      clamp(b)
    )
      .toString(16)
      .slice(1)
  );
}
function clamp(x: number) {
  return Math.max(0, Math.min(255, Math.round(x)));
}
