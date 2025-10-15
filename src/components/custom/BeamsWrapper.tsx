'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Beams to avoid SSR issues and React 19 compatibility problems
const Beams = dynamic(() => import('./Beams'), {
  ssr: false,
  loading: () => (
    <div 
      className="w-full h-full bg-black" 
      style={{ 
        background: 'linear-gradient(45deg, #000000 25%, transparent 25%), linear-gradient(-45deg, #000000 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #000000 75%), linear-gradient(-45deg, transparent 75%, #000000 75%)',
        backgroundSize: '20px 20px',
        backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
        opacity: 0.3
      }}
    />
  )
});

interface BeamsWrapperProps {
  beamWidth?: number;
  beamHeight?: number;
  beamNumber?: number;
  lightColor?: string;
  speed?: number;
  noiseIntensity?: number;
  scale?: number;
  rotation?: number;
}

export default function BeamsWrapper(props: BeamsWrapperProps) {
  return (
    <Suspense fallback={
      <div 
        className="w-full h-full bg-black" 
        style={{ 
          background: 'linear-gradient(45deg, #000000 25%, transparent 25%), linear-gradient(-45deg, #000000 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #000000 75%), linear-gradient(-45deg, transparent 75%, #000000 75%)',
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
          opacity: 0.3
        }}
      />
    }>
      <Beams {...props} />
    </Suspense>
  );
}
