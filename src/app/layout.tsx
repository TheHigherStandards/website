import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Script from 'next/script'
import dynamic from 'next/dynamic'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
})

// Dynamically import EasterEgg to reduce initial bundle size
const EasterEgg = dynamic(() => import('../components/EasterEgg'), {
  ssr: false,
  loading: () => null,
})

export const metadata: Metadata = {
  title: 'The Higher Standards',
  description: 'The Higher Standards - Rock Band',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for faster resource loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://js-na2.hsforms.net" />
        <link rel="preconnect" href="https://open.spotify.com" />
        <link rel="preconnect" href="https://calendar.google.com" />
        <link rel="preconnect" href="https://www.facebook.com" />
        
        {/* DNS prefetch for additional domains */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://js-na2.hsforms.net" />
        <link rel="dns-prefetch" href="https://open.spotify.com" />
        <link rel="dns-prefetch" href="https://calendar.google.com" />
        <link rel="dns-prefetch" href="https://www.facebook.com" />
        
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        
        <link rel="icon" href="/images/favicon1.ico" type="image/x-icon" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/images/logo.jpg" as="image" />
        
        {/* Preload Inter font for fastest LCP */}
        <link 
          rel="preload" 
          href="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTcviYw.ttf" 
          as="font" 
          type="font/ttf" 
          crossOrigin="anonymous" 
        />
      </head>
      <body className={`${inter.className} min-h-screen bg-gray-50`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-45L7CCMKCP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-45L7CCMKCP');
          `}
        </Script>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <EasterEgg />
        </div>
      </body>
    </html>
  )
} 