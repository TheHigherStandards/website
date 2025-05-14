import React from 'react'
// import Navigation from '@/components/Navigation'
import { notFound } from 'next/navigation'

const bandMembers = {
  'john-doe': {
    name: 'John Doe',
    role: 'Lead Vocals & Guitar',
    image: '/images/band/john-doe.jpg',
    bio: 'Lead vocalist and guitarist with over 15 years of experience.',
    fullBio: 'John has been performing professionally for over 15 years. His powerful vocals and masterful guitar playing have made him a standout performer in the local music scene.',
    socialLinks: {
      instagram: 'https://instagram.com/johndoe',
      twitter: 'https://twitter.com/johndoe',
      spotify: 'https://open.spotify.com/artist/johndoe'
    }
  },
  'jane-smith': {
    name: 'Jane Smith',
    role: 'Bass Guitar',
    image: '/images/band/jane-smith.jpg',
    bio: 'Bass player extraordinaire, bringing the groove to every performance.',
    fullBio: 'Jane brings a unique style to the band with her innovative bass lines and infectious energy. She has toured nationally with several successful bands.',
    socialLinks: {
      instagram: 'https://instagram.com/janesmith',
      twitter: 'https://twitter.com/janesmith',
      spotify: 'https://open.spotify.com/artist/janesmith'
    }
  },
  'mike-johnson': {
    name: 'Mike Johnson',
    role: 'Drums',
    image: '/images/band/mike-johnson.jpg',
    bio: 'Our powerhouse drummer with a passion for rhythm.',
    fullBio: 'Mike\'s dynamic drumming style has been the backbone of The Higher Standards for the past decade. His precision and creativity behind the kit are unmatched.',
    socialLinks: {
      instagram: 'https://instagram.com/mikejohnson',
      twitter: 'https://twitter.com/mikejohnson',
      spotify: 'https://open.spotify.com/artist/mikejohnson'
    }
  },
  'sarah-wilson': {
    name: 'Sarah Wilson',
    role: 'Keyboard & Vocals',
    image: '/images/band/sarah-wilson.jpg',
    bio: 'Multi-talented keyboardist and backing vocalist.',
    fullBio: 'Sarah\'s versatility as both a keyboardist and vocalist adds depth to our sound. Her classical training brings a unique perspective to our arrangements.',
    socialLinks: {
      instagram: 'https://instagram.com/sarahwilson',
      twitter: 'https://twitter.com/sarahwilson',
      spotify: 'https://open.spotify.com/artist/sarahwilson'
    }
  }
}

export default function BandMemberPage({ params }: { params: { id: string } }) {
  const member = bandMembers[params.id as keyof typeof bandMembers]

  if (!member) {
    notFound()
  }

  return (
    <main>
      {/* Removed <Navigation /> */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3">
              <div className="h-64 md:h-full bg-gray-200 relative">
                {/* Add actual image later */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  {member.name}
                </div>
              </div>
            </div>
            <div className="p-8 md:w-2/3">
              <h1 className="text-3xl font-bold mb-2">{member.name}</h1>
              <p className="text-xl text-gray-600 mb-4">{member.role}</p>
              <p className="text-gray-700 mb-6">{member.fullBio}</p>
              <div className="flex space-x-4">
                {Object.entries(member.socialLinks).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    {platform.charAt(0).toUpperCase() + platform.slice(1)}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 