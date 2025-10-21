// src/components/RoadMap.tsx
import React from "react";
import Image from "next/image";

type RoadMapItem = {
  label: string;
  title: string;
  text: string;
};

type RoadMapProps = {
  items: RoadMapItem[];
  ringColor?: string;
  centerColor?: string;
};

export default function RoadMap({
  items,
  ringColor = "#117f60",
  centerColor = "#e47a5a",
}: RoadMapProps) {
  return (
    <div className="bg-blue-whale pt-8 pb-32">
        <div className="px-4 md:px-6 xl:max-w-[70%] mx-auto">
      <div className="">
        {items.map((item, idx) => {
          const isEven = (idx + 1) % 2 === 0;
          // Prepare rich formatting: keep paragraphs and extract ordered/bullet lists
          const raw = (item.text || "");
          const lines = raw.split(/\n+/).map((l) => l.trim()).filter(Boolean);
          const firstListIndex = lines.findIndex((l) => /^\d+\.\s+/.test(l) || /^[-•]\s+/.test(l));
          const intro = firstListIndex === -1 ? lines.join("\n") : lines.slice(0, firstListIndex).join("\n");
          const listItems = firstListIndex === -1 ? [] : lines.slice(firstListIndex).map((l) => l.replace(/^\d+\.\s+/, '').replace(/^[-•]\s+/, ''));
          const imageSrc = `/images/how-to/step-${item.label}.png`;

          return (
            <div
              key={idx}
              className="group relative flex flex-col items-center md:items-stretch md:flex-row md:h-[175px]"
            >
              {/* Mobile full ring with inner glow and label */}
              <div className="md:hidden w-full flex flex-col items-center mt-4 md:mt-0">
                <div
                  className="relative mx-auto w-[180px] h-[180px] rounded-full flex items-center justify-center transition-transform duration-300 ease-out group-hover:scale-[1.03] group-active:scale-[0.99]"
                  style={{ backgroundColor: ringColor, boxShadow: "0 18px 40px rgba(0,0,0,0.35)" }}
                >
                  <div className="w-[120px] h-[120px] rounded-full bg-white shadow-[0_0_25px_rgba(255,255,255,0.65)] group-hover:shadow-[0_0_35px_rgba(255,255,255,0.8)] transition-shadow duration-300 flex items-center justify-center overflow-hidden">
                    <div className="relative w-[100px] h-[100px] rounded-full overflow-hidden ring-2 ring-white/40 shadow-[0_6px_18px_rgba(0,0,0,0.25)]">
                      <Image src={imageSrc} alt={`Step ${item.label}`} fill className="object-cover" sizes="100px" />
                    </div>
                  </div>
                </div>
                {/* Short connector stem */}
                <div
                  className="w-3 h-6 rounded-b-md md:mt-2 transition-colors duration-300"
                  style={{ backgroundColor: ringColor }}
                />
              </div>
              {/* Circle (desktop: centered & rotated ring; mobile: solid ring at top) */}
              <div
                className={[
                  "hidden md:block rounded-full md:absolute md:inset-0 md:m-auto",
                  "w-[140px] h-[140px] md:w-[200px] md:h-[200px]",
                  "border-[20px] md:border-[25px]",
                  "flex-shrink-0 transition-all duration-300",
                  "md:[transform:rotate(45deg)]",
                  // Mobile: full ring, Desktop: alternating wedges
                  "border-transparent",
                  "[border-color:var(--ringColor)] md:[border-color:transparent]",
                ].join(" ")}
                style={
                  {
                    ["--ringColor" as any]: ringColor,
                    // Desktop wedges only
                    borderTopColor: !isEven ? ringColor : "transparent",
                    borderRightColor: !isEven ? ringColor : "transparent",
                    borderBottomColor: isEven ? ringColor : "transparent",
                    borderLeftColor: isEven ? ringColor : "transparent",
                    boxShadow: "0 22px 44px rgba(0,0,0,0.35)",
                  } as React.CSSProperties
                }
              >
                {/* inner image disk */}
                <div
                  className={[
                    "absolute inset-0 m-auto",
                    "flex items-center justify-center",
                    "w-[80px] h-[80px] md:w-[110px] md:h-[110px]",
                    "rounded-full overflow-hidden ring-2 ring-white/40",
                    "shadow-[0_0_10px_5px_rgba(0,0,0,0.13)] group-hover:shadow-[0_0_16px_6px_rgba(0,0,0,0.18)]",
                    "md:[transform:rotate(-45deg)]",
                  ].join(" ")}
                  style={{ backgroundColor: "#fff" }}
                >
                  <Image src={imageSrc} alt={`Step ${item.label}`} fill className="object-cover" sizes="110px" />
                </div>
              </div>

              {/* Card (desktop: left/right; mobile: full width under circle) */}
              <div
                className={[
                  "relative bg-[var(--ringColor)] text-white rounded-xl p-3 md:p-4 z-10",
                  "w-full",
                  "mt-4 md:mt-0",
                  "md:absolute",
                  isEven ? "md:left-0" : "md:right-0",
                  "md:w-[35%]",
                  // base border + glass
                  "backdrop-blur-sm border-2 border-[#e47a5a]/80 shadow-[0_6px_18px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out",
                  // hover intensifies border color and shadow
                  "hover:border-[#e47a5a] hover:shadow-[0_18px_46px_rgba(0,0,0,0.4)] hover:-translate-y-0.5",
                  // glowing ring on hover
                  "hover:outline hover:outline-2 hover:outline-offset-2 hover:outline-[#e47a5a]/40",
                ].join(" ")}
                style={{ ["--ringColor" as any]: ringColor }}
              >
                {/* Desktop horizontal connector bar */}
                <div
                  className={[
                    "hidden md:block absolute top-[30%] -translate-y-1/2 h-5 bg-[var(--ringColor)] -z-10",
                    isEven ? "right-[-22%]" : "left-[-22%]",
                  ].join(" ")}
                  style={{ width: "25%" }}
                />

                <h4 className="text-lg md:text-[16px] font-semibold capitalize mb-2 md:mb-2">
                  {item.title}
                </h4>
                <div className="text-white/95 space-y-2 max-h-[280px] md:max-h-[220px] overflow-y-auto pr-1">
                  {intro && (
                    <p className="m-0 text-sm md:text-[14px] leading-relaxed whitespace-pre-line">
                      {intro}
                    </p>
                  )}
                  {listItems.length > 0 && (
                    <ol className="list-decimal pl-5 space-y-1 text-sm md:text-[14px] leading-relaxed marker:text-white/70">
                      {listItems.map((li, i) => (
                        <li key={i}>{li}</li>
                      ))}
                    </ol>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
}
