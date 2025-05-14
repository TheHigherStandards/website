import React from 'react'
// import Navigation from '@/components/Navigation'

export default function ShowsPage() {
  return (
    <main>
      {/* Removed <Navigation /> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">Upcoming Shows</h1>
        {/* Google Calendar Embed */}
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
        </div>
        {/* Subscribe Button */}
        <div className="text-center mt-8">
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
    </main>
  )
} 