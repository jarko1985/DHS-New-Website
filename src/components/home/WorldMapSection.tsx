"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function WorldMapSection() {
  // Dot positions (x, y) on the map image
  const dots = [
    { x: 100, y: 120 },
    { x: 330, y: 70 },
    { x: 410, y: 100 },
    { x: 470, y: 110 },
    { x: 650, y: 250 },
    { x: 200, y: 200 },
    { x: 650, y: 60 },
    { x: 600, y: 140 },
  ];
  // Connections: pairs of dot indices
  const connections = [
    [3, 0],
    [3, 1],
    [3, 4],
    [3, 5],
    [3, 6],
    [3, 7],
  ];
  // Helper to create a curved path between two points
  const curve = (a: { x: number; y: number }, b: { x: number; y: number }) => {
    const mx = (a.x + b.x) / 2;
    const my = (a.y + b.y) / 2 - 40; // curve height
    return `M${a.x},${a.y} Q${mx},${my} ${b.x},${b.y}`;
  };

  // State to control which lines are visible
  const [visible, setVisible] = useState(Array(connections.length).fill(false));

  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = [];
    function animate() {
      // Draw each line in sequence
      for (let i = 0; i < connections.length; i++) {
        timeouts.push(
          setTimeout(() => {
            setVisible((prev) => {
              const next = [...prev];
              next[i] = true;
              return next;
            });
          }, i * 400)
        );
      }
      // Reset after all are drawn
      timeouts.push(
        setTimeout(() => {
          setVisible(Array(connections.length).fill(false));
          animate();
        }, connections.length * 400 + 1000)
      );
    }
    animate();
    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center pb-16 md:pt-6 bg-blue-whale w-full overflow-hidden">
      <div className="text-center py-12">
        <span
          data-aos="fade-up"
          className="block text-elf-green tracking-widest text-sm font-bold mb-2"
        >
          GLOBAL NETWORK
        </span>
        <h2
          data-aos="fade-up"
          className="text-lg md:text-4xl font-bold text-white mb-4 font-roboto"
        >
          Available across the World
        </h2>
        <p
          data-aos="fade-up"
          className="text-white/80 font-roboto md:max-w-2xl mx-auto text-sm max-w-md"
        >
          Connect to global liquidity pools, trade securely across continents,
          and experience real-time access to the world's leading digital
          assets—wherever you are.
        </p>
      </div>
      <div className="relative w-full max-w-7xl mx-auto md:h-[600px] h-[400px]">
        {/* World map image as base layer */}
        <Image
          src="/images/world_map.png"
          alt="World Map"
          fill
          className="object-contain"
          style={{ zIndex: 1 }}
        />
        {/* Overlay SVG for dots and lines */}
        <svg
          viewBox="0 0 800 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          style={{ zIndex: 2 }}
        >
          {/* Curved lines with animation */}
          {connections.map(([from, to], i) => (
            <motion.path
              key={i}
              d={curve(dots[from], dots[to])}
              stroke="#117F60"
              strokeWidth="2"
              fill="none"
              opacity="0.7"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: visible[i] ? 1 : 0 }}
              transition={{ duration: 0.4, ease: "linear" }}
              strokeDasharray="1"
              strokeDashoffset="0"
            />
          ))}
          {/* Dots */}
          {dots.map((dot, i) => (
            <circle
              key={i}
              cx={dot.x}
              cy={dot.y}
              r="5"
              fill={dot.x === 470 && dot.y === 110 ? "#e47a5a" : "#117F60"}
              stroke="#fff"
              strokeWidth="2"
            />
          ))}
        </svg>
      </div>
    </section>
  );
}
