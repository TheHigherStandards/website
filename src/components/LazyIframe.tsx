'use client';

import React, { useState, useEffect } from 'react';

interface LazyIframeProps {
  src: string;
  title: string;
  width?: string | number;
  height?: string | number;
  className?: string;
  style?: React.CSSProperties;
  allow?: string;
  allowFullScreen?: boolean;
  frameBorder?: string;
  scrolling?: string;
  loading?: 'lazy' | 'eager';
}

export default function LazyIframe({
  src,
  title,
  width = '100%',
  height = '400',
  className = '',
  style = {},
  allow = '',
  allowFullScreen = false,
  frameBorder = '0',
  scrolling = 'no',
  loading = 'lazy'
}: LazyIframeProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (loading === 'eager') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    const element = document.getElementById(`lazy-iframe-${title.replace(/\s+/g, '-').toLowerCase()}`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [title, loading]);

  return (
    <div
      id={`lazy-iframe-${title.replace(/\s+/g, '-').toLowerCase()}`}
      className={`lazy-iframe-container ${className}`}
      style={{
        width,
        height,
        backgroundColor: '#f5f5f5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...style
      }}
    >
      {!isVisible && (
        <div className="loading-placeholder">
          <div className="animate-pulse bg-gray-300 rounded h-full w-full"></div>
        </div>
      )}
      {isVisible && (
        <iframe
          src={src}
          title={title}
          width={width}
          height={height}
          className={className}
          style={style}
          allow={allow}
          allowFullScreen={allowFullScreen}
          frameBorder={frameBorder}
          scrolling={scrolling}
        />
      )}
    </div>
  );
} 