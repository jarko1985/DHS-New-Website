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
    <ul className="flex justify-center items-center gap-8 md:gap-12 mb-7 md:mb-0">
      {socials.map((social) => {
        const Icon = social.icon;
        return (
          <li key={social.name} className="list-none">
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block w-8 h-8 md:w-12 md:h-12 text-center transition-transform duration-500 transform [transform:perspective(1000px)_rotate(-30deg)_skew(25deg)_translate(0,0)] hover:[transform:perspective(1000px)_rotate(-30deg)_skew(25deg)_translate(10px,-10px)] md:hover:[transform:perspective(1000px)_rotate(-30deg)_skew(25deg)_translate(15px,-15px)] shadow-lg hover:shadow-2xl"
              style={{ backgroundColor: social.color }}
            >
              {/* left shadow */}
              <span
                className="absolute top-[10px] left-[-20px] h-full w-5 [transform:rotate(0deg)_skewY(-45deg)] transition-all duration-500"
                style={{ backgroundColor: darken(social.color, 0.1) }}
              />
              {/* bottom shadow */}
              <span
                className="absolute bottom-[-20px] left-[-10px] h-5 w-full [transform:rotate(0deg)_skewX(-45deg)] transition-all duration-500"
                style={{ backgroundColor: lighten(social.color, 0.1) }}
              />
              <Icon className="w-4 h-4 md:w-6 md:h-6 text-[#262626] leading-[32px] md:leading-[48px] inline-block transition-colors duration-500 group-hover:text-white mx-auto my-2 md:my-3" />
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
