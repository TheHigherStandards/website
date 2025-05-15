"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import SocialLinks from './SocialLinks'

const socialLinks = [
  {
    platform: 'Instagram',
    url: 'https://www.instagram.com/thehigherstandards/',
    icon: 'fab fa-instagram'
  },
  {
    platform: 'Facebook',
    url: 'https://www.facebook.com/thehigherstandards',
    icon: 'fab fa-facebook'
  },
  {
    platform: 'Spotify',
    url: 'https://open.spotify.com/artist/2n31PctOZt8HEp8Qq2vvUY?si=Jstghai1SZu7n8wIJroMdA',
    icon: 'fab fa-spotify'
  }
]

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <img
                  src="/images/logo.jpg"
                  alt="The Higher Standards Logo"
                  className="h-12 w-auto"
                  style={{ maxHeight: '48px' }}
                />
              </Link>
            </div>
            {/* Hamburger menu button for mobile */}
            <button
              className="sm:hidden ml-4 p-2 rounded-md text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Open main menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          {/* Desktop nav links */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link href="/" className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-gray-600">
              Home
            </Link>
            <Link href="/band" className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-gray-600">
              Band
            </Link>
            <Link href="/shows" className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-gray-600">
              Shows
            </Link>
            <Link href="/merch" className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-gray-600">
              Merch
            </Link>
            <Link href="/contact" className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-gray-600">
              Contact
            </Link>
          </div>
          {/* Desktop social links */}
          <div className="hidden sm:flex sm:items-center">
            <SocialLinks links={socialLinks} />
          </div>
        </div>
        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div className="sm:hidden mt-2 bg-white rounded-lg shadow-lg p-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-900 hover:text-gray-600" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
              <Link href="/band" className="text-gray-900 hover:text-gray-600" onClick={() => setMenuOpen(false)}>
                Band
              </Link>
              <Link href="/shows" className="text-gray-900 hover:text-gray-600" onClick={() => setMenuOpen(false)}>
                Shows
              </Link>
              <Link href="/merch" className="text-gray-900 hover:text-gray-600" onClick={() => setMenuOpen(false)}>
                Merch
              </Link>
              <Link href="/contact" className="text-gray-900 hover:text-gray-600" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
              <div className="flex space-x-4 mt-2">
                <SocialLinks links={socialLinks} />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation 