import React from 'react'
// import Navigation from '@/components/Navigation'

const merchItems = [
  {
    id: 'tshirt-black',
    name: 'The Higher Standards T-Shirt',
    description: 'Classic black t-shirt with band logo',
    price: '$25',
    image: '/images/merch/tshirt-black.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'hoodie',
    name: 'Band Hoodie',
    description: 'Comfortable hoodie with embroidered band logo',
    price: '$45',
    image: '/images/merch/hoodie.jpg',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'hat',
    name: 'Band Cap',
    description: 'Adjustable cap with embroidered logo',
    price: '$20',
    image: '/images/merch/hat.jpg',
    sizes: ['One Size']
  },
  {
    id: 'sticker',
    name: 'Band Sticker Pack',
    description: 'Set of 3 vinyl stickers with band logo',
    price: '$10',
    image: '/images/merch/sticker.jpg',
    sizes: ['One Size']
  }
]

export default function MerchPage() {
  return (
    <main>
      {/* Removed <Navigation /> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">Band Merchandise</h1>
        
        {/* Merchandise Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {merchItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative w-full">
                <div className="w-full h-64 bg-gray-200 relative">
                  {/* Add actual images later */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-900">
                    {item.name}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-gray-900">{item.name}</h2>
                <p className="text-gray-800 mb-2">{item.description}</p>
                <p className="text-lg font-bold text-black mb-4">{item.price}</p>
                <div className="mb-4">
                  <p className="text-sm text-gray-700 mb-2">Available Sizes:</p>
                  <div className="flex flex-wrap gap-2">
                    {item.sizes.map((size) => (
                      <span
                        key={size}
                        className="px-2 py-1 bg-gray-100 rounded text-sm text-gray-900"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={`/contact?subject=Merchandise Purchase Request - ${item.name}`}
                  className="block w-full text-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal hover:bg-teal/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal"
                >
                  Request to Purchase
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Purchase Information */}
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">How to Purchase</h2>
          <p className="text-gray-800 mb-4">
            To purchase any of our merchandise, please click the &quot;Request to Purchase&quot; button on the item you&apos;re interested in.
            This will take you to our contact form where you can specify:
          </p>
          <ul className="list-disc list-inside text-gray-800 mb-6">
            <li>The item(s) you&apos;d like to purchase</li>
            <li>Your preferred size (if applicable)</li>
            <li>Quantity desired</li>
            <li>Your shipping address</li>
          </ul>
          <p className="text-gray-800">
            We&apos;ll get back to you within 24-48 hours with payment instructions and shipping details.
          </p>
        </div>
      </div>
    </main>
  )
} 