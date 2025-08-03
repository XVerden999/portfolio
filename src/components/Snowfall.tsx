'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface Snowflake {
  left: string;
  size: string;
  opacity: number;
  startY: number;
}

interface SnowfallProps {
  flakeCount?: number;
}

const Snowfall: React.FC<SnowfallProps> = ({ flakeCount = 50 }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [flakes, setFlakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    const newFlakes: Snowflake[] = Array.from({ length: flakeCount }).map(() => ({
      left: `${Math.random() * 100}vw`,
      size: `${Math.random() * 4 + 4}px`,
      opacity: Math.random() * 0.5 + 0.5,
      startY: -Math.random() * window.innerHeight,
    }));
    setFlakes(newFlakes);
  }, [flakeCount]);

  useEffect(() => {
    if (!containerRef.current) return;
    const flakeElements = containerRef.current.querySelectorAll<HTMLDivElement>('.snowflake');
    flakeElements.forEach((flake) => {
      const duration = Math.random() * 5 + 5;
      const delay = Math.random() * 5;
      gsap.fromTo(
        flake,
        { y: `-${Math.random() * window.innerHeight}px` },
        {
          y: '100vh',
          x: `+=${Math.random() * 100 - 50}`,
          opacity: 0,
          duration,
          delay,
          repeat: -1,
          ease: 'none',
        }
      );
    });
  }, [flakes]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed top-0 left-0 w-screen h-screen z-0 overflow-hidden"
    >
      {flakes.map((flake, i) => (
        <div
          key={i}
          className="snowflake absolute bg-white rounded-full"
          style={{
            top: '-10px',
            left: flake.left,
            width: flake.size,
            height: flake.size,
            opacity: flake.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default Snowfall;
