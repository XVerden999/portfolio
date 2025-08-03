'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface EyeProps {
  size?: number; // in rem units (e.g. 6 = 6rem)
}

const Eye: React.FC<EyeProps> = ({ size = 6 }) => {
  const eyeRef = useRef<HTMLDivElement | null>(null);
  const pupilRef = useRef<HTMLDivElement | null>(null);

  const sizeRem = `${size}rem`;
  const pupilScale = 0.3;
  const movementScale = 0.2;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!eyeRef.current || !pupilRef.current) return;

      const eyeRect = eyeRef.current.getBoundingClientRect();
      const centerX = eyeRect.left + eyeRect.width / 2;
      const centerY = eyeRect.top + eyeRect.height / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const angle = Math.atan2(dy, dx);

      const radius = eyeRect.width * movementScale;
      const pupilX = Math.cos(angle) * radius;
      const pupilY = Math.sin(angle) * radius;

      gsap.to(pupilRef.current, {
        x: pupilX,
        y: pupilY,
        duration: 0.2,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={eyeRef}
      className="rounded-full bg-white/90 border-0 relative overflow-hidden flex items-center justify-center mr-4"
      style={{
        width: sizeRem,
        height: sizeRem,
      }}
    >
      <div
        ref={pupilRef}
        className="absolute rounded-full bg-sexy-purple"
        style={{
          width: `calc(${sizeRem} * ${pupilScale})`,
          height: `calc(${sizeRem} * ${pupilScale})`,
        }}
      />
    </div>
  );
};

export default Eye;
