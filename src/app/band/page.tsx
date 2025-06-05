import React from 'react'
// import Navigation from '@/components/Navigation'
import Link from 'next/link'

const bandMembers = [
  {
    id: 'curtis-allen-woodard',
    name: 'Curtis Allen Woodard',
    role: 'Lead Vocals & Guitar',
    image: '/images/band/Curtis(1).jpg',
    bio: 'Frontman, guitarist, and the heart of the band. Known for his soulful voice and energetic stage presence.'
  },
  {
    id: 'patrick-dunwody',
    name: 'Patrick Dunwody',
    role: 'Bass Guitar',
    image: '/images/band/Pat(1).jpg',
    bio: 'Bass player extraordinaire, bringing the groove to every performance.'
  },
  {
    id: 'bobby-melander',
    name: 'Bobby Melander',
    role: 'Drums',
    image: '/images/band/Bobby.jpg',
    bio: 'Our powerhouse drummer with a passion for rhythm and groove.'
  }
]

export default function BandPage() {
  return (
    <main>
      {/* Removed <Navigation /> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">Meet The Band</h1>
        <div className="flex justify-center mb-12">
          <img src="/images/band/TheHigherStandards.jpg" alt="The Higher Standards Band" className="w-full max-w-md rounded-lg shadow-lg" />
        </div>
        <div className="text-center mb-12">
          <p className="text-lg text-gray-800">
            We are a St. Petersburg, FL based band playing original tunes and spreading good vibes. Formed in 2022, THS has been playing gigs up and down the beach and writing new songs. Our first single &quot;Feels Like Paradise&quot; was released Dec 20th, 2024. We have a bunch more music on the way and appreciate you checking us out. Give us a follow and we&apos;ll keep putting out fresh tunes. Much Love!
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bandMembers.map((member) => (
            <Link 
              href={`/band/${member.id}`} 
              key={member.id}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <div className="flex justify-center items-center mt-6 mb-2">
                  <div className="w-48 h-64 md:w-56 md:h-72 rounded-2xl overflow-hidden border-4 border-white shadow-lg bg-gray-200 flex items-start">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />
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