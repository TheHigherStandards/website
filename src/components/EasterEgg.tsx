'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { usePathname } from 'next/navigation';

const easterEggImage = '/images/easter-egg/Pat.png';

export default function EasterEgg() {
  const [showImages, setShowImages] = useState(false);
  const [imageCount, setImageCount] = useState(1);
  const pathname = usePathname();

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'v') {
      e.preventDefault();
      setShowImages(true);
      setImageCount(prev => prev + 1);
    }
  }, []);

  const handleClick = useCallback(() => {
    if (showImages) {
      setShowImages(false);
      setImageCount(1);
    }
  }, [showImages]);

  useEffect(() => {
    if (pathname !== '/band') return;

    window.addEventListener('keydown', handleKeyDown, { passive: false });
    window.addEventListener('click', handleClick, { passive: true });

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('click', handleClick);
    };
  }, [pathname, handleKeyDown, handleClick]);

  if (pathname !== '/band' || !showImages) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {Array.from({ length: imageCount }).map((_, index) => (
        <div
          key={index}
          className="absolute animate-float"
          style={{
            left: `${Math.random() * 80}%`,
            top: `${Math.random() * 80}%`,
            animationDelay: `${index * 0.5}s`,
            transform: 'rotate(0deg)',
          }}
        >
          <img
            src={easterEggImage}
            alt="Easter Egg"
            className="w-32 h-32 object-contain"
            style={{
              filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.3))',
            }}
          />
        </div>
      ))}
    </div>
  );
} 