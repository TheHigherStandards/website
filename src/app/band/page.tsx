import React from 'react'
// import Navigation from '@/components/Navigation'
import Link from 'next/link'

const bandMembers = [
  {
    id: 'john-doe',
    name: 'John Doe',
    role: 'Lead Vocals & Guitar',
    image: '/images/band/john-doe.jpg',
    bio: 'Lead vocalist and guitarist with over 15 years of experience.'
  },
  {
    id: 'jane-smith',
    name: 'Jane Smith',
    role: 'Bass Guitar',
    image: '/images/band/jane-smith.jpg',
    bio: 'Bass player extraordinaire, bringing the groove to every performance.'
  },
  {
    id: 'mike-johnson',
    name: 'Mike Johnson',
    role: 'Drums',
    image: '/images/band/mike-johnson.jpg',
    bio: 'Our powerhouse drummer with a passion for rhythm.'
  }
]

export default function BandPage() {
  return (
    <main>
      {/* Removed <Navigation /> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">Meet The Band</h1>
        <div className="text-center mb-12">
          <p className="text-lg text-gray-800">
            We are a St. Petersburg, FL based band playing original tunes and spreading good vibes. Formed in 2022, THS has been playing gigs up and down the beach and writing new songs. Our first single &quot;Feels Like Paradise&quot; was released Dec 20th, 2024. We have a bunch more music on the way and appreciate you checking us out. Give us a follow and we&apos;ll keep putting out fresh tunes. Much Love!
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bandMembers.map((member) => (
            <Link 
              href={`/band/${member.id}`} 
              key={member.id}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <div className="aspect-w-1 aspect-h-1 w-full">
                  <div className="w-full h-64 bg-gray-200 relative">
                    {/* Add actual images later */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-900">
                      {member.name}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2 text-gray-900">{member.name}</h2>
                  <p className="text-gray-800 mb-2">{member.role}</p>
                  <p className="text-gray-700 text-sm">{member.bio}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
} 