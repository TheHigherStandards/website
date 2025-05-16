import React from 'react'
// import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <main>
      {/* Hero Section with Background Image */}
      <div className="relative h-[110vh] md:h-[80vh] bg-black overflow-hidden pt-8 md:pt-0">
        {/* Animated Music Notes */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {/* Only single music notes, floating */}
          {/* Eighth Note */}
          <svg className="absolute left-1/2 bottom-20 w-6 h-10 animate-music-note" style={{ color: '#035b51', opacity: 0.7, animationDelay: '1.5s' }} fill="currentColor" viewBox="0 0 24 24"><path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z"/></svg>
          {/* Quarter Note */}
          <svg className="absolute left-1/4 bottom-2 w-7 h-10 animate-music-note" style={{ color: '#035b51', opacity: 0.6, animationDelay: '2.2s' }} fill="currentColor" viewBox="0 0 24 24"><path d="M12 3v12a4 4 0 1 0 2-3.465V3h-2z"/></svg>
          {/* More single notes for variety */}
          <svg className="absolute left-1/3 bottom-24 w-5 h-8 text-white opacity-60 animate-music-note" style={{ animationDelay: '2.8s' }} fill="currentColor" viewBox="0 0 24 24"><path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z"/></svg>
          <svg className="absolute right-1/4 bottom-16 w-8 h-10 animate-music-note" style={{ color: '#035b51', opacity: 0.8, animationDelay: '3.2s' }} fill="currentColor" viewBox="0 0 24 24"><path d="M12 3v12a4 4 0 1 0 2-3.465V3h-2z"/></svg>
          <svg className="absolute left-20 bottom-32 w-6 h-8 text-white opacity-70 animate-music-note" style={{ animationDelay: '1.2s' }} fill="currentColor" viewBox="0 0 24 24"><path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z"/></svg>
          <svg className="absolute right-10 bottom-24 w-7 h-10 animate-music-note" style={{ color: '#035b51', opacity: 0.7, animationDelay: '2.5s' }} fill="currentColor" viewBox="0 0 24 24"><path d="M12 3v12a4 4 0 1 0 2-3.465V3h-2z"/></svg>
          <svg className="absolute left-1/5 bottom-14 w-6 h-8 text-white opacity-60 animate-music-note" style={{ animationDelay: '3.8s' }} fill="currentColor" viewBox="0 0 24 24"><path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z"/></svg>
          <svg className="absolute right-1/3 bottom-4 w-5 h-8 animate-music-note" style={{ color: '#035b51', opacity: 0.6, animationDelay: '4.2s' }} fill="currentColor" viewBox="0 0 24 24"><path d="M12 3v12a4 4 0 1 0 2-3.465V3h-2z"/></svg>
        </div>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl w-full flex flex-col items-center">
            <img
              src="/images/logo.jpg"
              alt="The Higher Standards Logo"
              className="mx-auto mb-6 w-32 md:w-36 h-auto border-4 border-white rounded-2xl shadow-lg"
              style={{ maxHeight: '120px' }}
            />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              The Higher Standards
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8">
              Elevating your events with exceptional live music
            </p>
            <div className="flex justify-center w-full">
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
          {/* Upcoming Shows - moved up */}
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
            {/* Facebook Widget Below Upcoming Shows */}
            <div className="flex flex-col items-center mt-8">
              <h3 className="text-2xl font-semibold text-center mb-4 text-gray-900">Follow the Band</h3>
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fthehigherstandards&tabs=timeline&width=340&height=650&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="340"
                height="650"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="The Higher Standards Facebook Page"
              ></iframe>
            </div>
          </div>
          {/* Featured Merchandise - moved down */}
          <div className="mb-16 mt-16">
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
                  <a
                    href="/contact?subject=Merchandise Purchase Request - The Higher Standards T-Shirt"
                    className="block w-full text-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal hover:bg-teal/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal mt-4"
                  >
                    Request to Purchase
                  </a>
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
                  <a
                    href="/contact?subject=Merchandise Purchase Request - Band Hoodie"
                    className="block w-full text-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal hover:bg-teal/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal mt-4"
                  >
                    Request to Purchase
                  </a>
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
