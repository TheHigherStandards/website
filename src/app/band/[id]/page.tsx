import React from 'react'
// import Navigation from '@/components/Navigation'
import { notFound } from 'next/navigation'

const bandMembers = {
  'curtis-allen-woodard': {
    name: 'Curtis Allen Woodard',
    role: 'Lead Vocals & Guitar',
    image: '/images/band/Curtis(1).jpg',
    bio: 'Frontman, guitarist, and the heart of the band. Known for his soulful voice and energetic stage presence.',
    fullBio: 'Curtis Allen Woodard, also known as @frisbeerunner, brings a unique blend of passion and musicianship to The Higher Standards. With years of experience performing and writing music, Curtis captivates audiences with his dynamic vocals and guitar skills. Off stage, he is known for his laid-back vibe and love for connecting with fans.',
    socialLinks: {
      facebook: 'https://www.facebook.com/frisbeerunner'
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
  'patrick-dunwody': {
    name: 'Patrick Dunwody',
    role: 'Bass Guitar',
    image: '/images/band/Pat(1).jpg',
    bio: 'Bass player extraordinaire, bringing the groove to every performance.',
    fullBio: 'Patrick Dunwody brings a unique style to the band with his innovative bass lines and infectious energy. He is known for his musical versatility and stage presence.',
    socialLinks: {
      facebook: 'https://www.facebook.com/patrick.dunwody'
    }
  },
  'bobby-melander': {
    name: 'Bobby Melander',
    role: 'Drums',
    image: '/images/band/Bobby.jpg',
    bio: 'Our powerhouse drummer with a passion for rhythm and groove.',
    fullBio: 'Bobby Melander brings energy and precision to the drums, driving the band\'s rhythm section with passion and creativity. His dynamic style and love for music make every performance unforgettable.',
    socialLinks: {
      facebook: 'https://www.facebook.com/bobby.melander'
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

export function generateStaticParams() {
  return [
    { id: 'curtis-allen-woodard' },
    { id: 'jane-smith' },
    { id: 'patrick-dunwody' },
    { id: 'bobby-melander' },
    { id: 'sarah-wilson' },
  ];
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
              <div className="h-64 md:h-full bg-gray-200 relative flex items-center justify-center overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-auto object-cover object-top rounded-lg shadow-lg"
                />
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