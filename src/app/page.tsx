import React from 'react'
// import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <main>
      {/* Hero Section with Background Image */}
      <div className="relative h-[80vh] bg-gradient-to-r from-indigo-900 to-purple-900">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              The Higher Standards
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8">
              Elevating your events with exceptional live music
            </p>
            <div className="flex justify-center">
              <iframe
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/artist/2n31PctOZt8HEp8Qq2vvUY?utm_source=generator"
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Spotify Player"
                className="max-w-xl w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Content Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Featured Content</h2>
          
          {/* Featured Merchandise */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8 text-gray-900">Featured Merchandise</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-w-1 aspect-h-1 w-full">
                  <div className="w-full h-48 bg-gray-200 relative">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-900">
                      Band T-Shirt
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">The Higher Standards T-Shirt</h4>
                  <p className="text-gray-800 mb-2">Classic black t-shirt with band logo</p>
                  <p className="text-lg font-bold text-black">$25</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-w-1 aspect-h-1 w-full">
                  <div className="w-full h-48 bg-gray-200 relative">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-900">
                      Band Hoodie
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">Band Hoodie</h4>
                  <p className="text-gray-800 mb-2">Comfortable hoodie with embroidered band logo</p>
                  <p className="text-lg font-bold text-black">$45</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <a
                href="/merch"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal hover:bg-teal/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal"
              >
                View All Merchandise
              </a>
            </div>
          </div>

          {/* Upcoming Shows Preview */}
          <div>
            <h3 className="text-2xl font-semibold text-center mb-8 text-gray-900">Upcoming Shows</h3>
            <div className="bg-white rounded-lg shadow-lg p-4 max-w-2xl mx-auto w-full">
              <iframe
                src="https://calendar.google.com/calendar/embed?height=700&wkst=1&ctz=America%2FNew_York&showPrint=0&showNav=0&showTz=0&mode=AGENDA&showCalendars=0&showTabs=0&showDate=0&src=ZHV1MXM4ZWE5Y25rb281cm9jMmVlcW80b2dAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23009688"
                style={{ border: 'solid 1px #777' }}
                width="100%"
                height="700"
                frameBorder="0"
                scrolling="no"
                title="Upcoming Shows Calendar"
                className="text-gray-900"
              ></iframe>
              <div className="text-center mt-4 flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="/shows"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                >
                  View All Shows
                </a>
                <a
                  href="https://calendar.google.com/calendar/ical/ZHV1MXM4ZWE5Y25rb281cm9jMmVlcW80b2dAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ/public/basic.ics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal hover:bg-teal/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal"
                >
                  Subscribe to Calendar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Why Choose The Higher Standards?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Professional Excellence</h3>
              <p className="text-gray-800">Delivering top-tier musical performances with unmatched professionalism</p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Versatile Repertoire</h3>
              <p className="text-gray-800">From classic hits to contemporary favorites, we play it all</p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Unforgettable Experience</h3>
              <p className="text-gray-800">Creating memorable moments through exceptional live music</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
