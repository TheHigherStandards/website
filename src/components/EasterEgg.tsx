'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const easterEggImage = '/images/easter-egg/Pat.png';

export default function EasterEgg() {
  const [showImages, setShowImages] = useState(false);
  const [imageCount, setImageCount] = useState(1); // Start with 1 image
  const pathname = usePathname();

  useEffect(() => {
    // Only add event listeners if we're on the band page
    if (pathname !== '/band') return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Check for Cmd + V (Mac) or Ctrl + V (Windows)
      if ((e.metaKey || e.ctrlKey) && e.key === 'v') {
        e.preventDefault(); // Prevent default browser behavior
        setShowImages(true);
        // Add 1 more image each time Cmd + V is pressed
        setImageCount(prev => prev + 1);
      }
    };

    const handleClick = () => {
      if (showImages) {
        setShowImages(false);
        // Reset image count when clicking
        setImageCount(1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('click', handleClick);
    };
  }, [showImages, pathname]);

  // Don't render anything if we're not on the band page
  if (pathname !== '/band') return null;
  if (!showImages) return null;

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
            transform: 'rotate(0deg)', // Keep images upright
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