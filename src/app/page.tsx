import React from 'react'
import Image from 'next/image'
import Script from 'next/script'
import dynamic from 'next/dynamic'
// import Navigation from '@/components/Navigation'

// Dynamically import LazyIframe to reduce initial bundle size
const LazyIframe = dynamic(() => import('../components/LazyIframe'), {
  ssr: false,
  loading: () => <div className="animate-pulse bg-gray-300 rounded h-full w-full"></div>,
})

export default function Home() {
  return (
    <main>
      {/* HubSpot Script */}
      <Script
        src="https://js-na2.hsforms.net/forms/embed/243093346.js"
        strategy="afterInteractive"
      />
      
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
            <Image
              src="/images/logo.jpg"
              alt="The Higher Standards Logo"
              width={144}
              height={120}
              priority
              sizes="(max-width: 768px) 128px, 144px"
              className="mx-auto mb-6 w-32 md:w-36 border-4 border-white rounded-2xl shadow-lg mt-4 md:mt-12"
              style={{ 
                height: 'auto',
                aspectRatio: '144/120'
              }}
            />
            <h1 className="hero-text hero-title">
              The Higher Standards
            </h1>
            {/* Use system font for fastest LCP */}
            <p className="hero-text hero-subtitle">
              Elevating your events with exceptional live music
            </p>
            <div className="flex justify-center w-full">
              <LazyIframe
                src="https://open.spotify.com/embed/artist/2n31PctOZt8HEp8Qq2vvUY?utm_source=generator"
                title="Spotify Player"
                width="100%"
                height={352}
                className="max-w-xl w-full"
                style={{ borderRadius: '12px' }}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                allowFullScreen={true}
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Content Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Upcoming Shows - moved up */}
          <div>
            <h2 className="text-2xl font-semibold text-center mb-8 text-gray-900">Upcoming Shows</h2>
            <div className="bg-white rounded-lg shadow-lg p-4 max-w-2xl mx-auto w-full">
              <LazyIframe
                src="https://calendar.google.com/calendar/embed?height=700&wkst=1&ctz=America%2FNew_York&showPrint=0&showNav=0&showTz=0&mode=AGENDA&showCalendars=0&showTabs=0&showDate=0&src=ZHV1MXM4ZWE5Y25rb281cm9jMmVlcW80b2dAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23009688"
                title="Upcoming Shows Calendar"
                width="100%"
                height={700}
                className="text-gray-900"
                style={{ border: 'solid 1px #777' }}
                loading="lazy"
              />
              <div className="text-center mt-4 flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="/shows"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black underline"
                >
                  View All Shows
                </a>
                <a
                  href="https://calendar.google.com/calendar/ical/ZHV1MXM4ZWE5Y25rb281cm9jMmVlcW80b2dAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ/public/basic.ics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal hover:bg-teal/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal underline"
                >
                  Subscribe to Calendar
                </a>
              </div>
            </div>
            
            {/* Community Building Section with HubSpot Form - Small */}
            <div className="mt-12 max-w-md mx-auto">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Stay Connected</h3>
                <p className="text-sm text-gray-600">
                  Get updates on shows and new music
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
                <div 
                  className="hs-form-frame" 
                  data-region="na2" 
                  data-form-id="06a63991-b835-4f11-898c-7ca984f6b30c" 
                  data-portal-id="243093346"
                ></div>
              </div>
            </div>
            
            {/* Facebook Widget Below Upcoming Shows */}
            <div className="flex flex-col items-center mt-8">
              <h2 className="text-2xl font-semibold text-center mb-4 text-gray-900">Follow the Band</h2>
              <LazyIframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fthehigherstandards&tabs=timeline&width=340&height=650&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                title="The Higher Standards Facebook Page"
                width={340}
                height={650}
                style={{ border: 'none', overflow: 'hidden' }}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                loading="lazy"
              />
            </div>
          </div>
          {/* Featured Merchandise - moved down */}
          <div className="mb-16 mt-16">
            <h2 className="text-2xl font-semibold text-center mb-8 text-gray-900">Featured Merchandise</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {/* T-Shirt */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/merch/Tshirt.png"
                    alt="The Higher Standards T-Shirt"
                    width={200}
                    height={192}
                    className="h-full w-auto object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">The Higher Standards T-Shirt</h4>
                  <p className="text-gray-800 mb-2">Classic t-shirt with band logo</p>
                  <p className="text-lg font-bold text-black">$25</p>
                  <a
                    href="/contact?subject=Merchandise Purchase Request - The Higher Standards T-Shirt"
                    className="block w-full text-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal hover:bg-teal/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal mt-4"
                  >
                    Request to Purchase
                  </a>
                </div>
              </div>
              {/* Tank Top */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/merch/Tank.png"
                    alt="The Higher Standards Tank Top"
                    width={200}
                    height={192}
                    className="h-full w-auto object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">The Higher Standards Tank Top</h4>
                  <p className="text-gray-800 mb-2">Comfortable tank top with band logo</p>
                  <p className="text-lg font-bold text-black">$20</p>
                  <a
                    href="/contact?subject=Merchandise Purchase Request - The Higher Standards Tank Top"
                    className="block w-full text-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal hover:bg-teal/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal mt-4"
                  >
                    Request to Purchase
                  </a>
                </div>
              </div>
              {/* Hat */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/merch/Hat.png"
                    alt="The Higher Standards Hat"
                    width={200}
                    height={192}
                    className="h-full w-auto object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">The Higher Standards Hat</h4>
                  <p className="text-gray-800 mb-2">Adjustable hat with band logo</p>
                  <p className="text-lg font-bold text-black">$20</p>
                  <a
                    href="/contact?subject=Merchandise Purchase Request - The Higher Standards Hat"
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
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal hover:bg-teal/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal underline"
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
