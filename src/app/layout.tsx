import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import EasterEgg from '../components/EasterEgg'

const inter = Inter({ subsets: ['latin'] })

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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="icon" href="/images/favicon1.ico" type="image/x-icon" />
        {/* Preload Inter font for faster LCP */}
        <link rel="preload" href="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTcviYw.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} min-h-screen bg-gray-50`}>
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