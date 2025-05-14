import React from 'react'
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
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
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
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
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
          </div>
          <div className="hidden sm:flex sm:items-center">
            <SocialLinks links={socialLinks} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation 