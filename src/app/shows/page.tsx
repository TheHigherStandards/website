import React from 'react'
// import Navigation from '@/components/Navigation'
import EasterEgg from '@/components/EasterEgg'

const showImages = [
  '/images/shows/3052790102122890305.jpg',
  '/images/shows/1453928144055547002.jpg',
  '/images/shows/4161697786459575683.jpg',
  '/images/shows/4564719335699501063.jpg',
  '/images/shows/8397990822546362399.jpg',
  '/images/shows/3644861020820469784.jpg',
  '/images/shows/8972564149290362313.jpg',
  '/images/shows/3366907787004190731.jpg',
  '/images/shows/4711676143741137761.jpg',
  '/images/shows/3659838295847553357.jpg',
  '/images/shows/8598986792253899467.jpg',
  '/images/shows/1561835716352930524.jpg',
  '/images/shows/4318080370576969119.jpg',
  '/images/shows/image (4).png',
  '/images/shows/image (5).png',
]

export default function ShowsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <EasterEgg />
      {/* Removed <Navigation /> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Live Shows</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Capturing the energy and excitement of our performances through the lens
          </p>
        </div>

        {/* Enhanced Photo Gallery Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {showImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image}
                  alt={`Live show photo ${index + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="text-sm font-medium">Live Performance</p>
                  <p className="text-xs opacity-90">The Higher Standards</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Want to see us live? Check out our upcoming shows!
          </p>
          <a
            href="https://calendar.google.com/calendar/ical/ZHV1MXM4ZWE5Y25rb281cm9jMmVlcW80b2dAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ/public/basic.ics"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-teal hover:bg-teal/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal transition-colors duration-300"
          >
            Subscribe to Our Calendar
          </a>
        </div>
      </div>
    </main>
  )
} 