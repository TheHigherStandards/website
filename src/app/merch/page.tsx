"use client";
import React, { useState } from 'react';
// import Navigation from '@/components/Navigation'

const merchItems = [
  {
    id: 'tshirt',
    name: 'The Higher Standards T-Shirt',
    description: 'Classic t-shirt with band logo',
    price: '$25',
    image: '/images/merch/Tshirt.png',
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'tank',
    name: 'The Higher Standards Tank Top',
    description: 'Comfortable tank top with band logo',
    price: '$20',
    image: '/images/merch/Tank.png',
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'hat',
    name: 'The Higher Standards Hat',
    description: 'Adjustable hat with band logo',
    price: '$20',
    image: '/images/merch/Hat.png',
    sizes: ['One Size']
  }
]

// Type for a merch item
interface MerchItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  sizes: string[];
}

interface PurchaseModalProps {
  open: boolean;
  onClose: () => void;
  product: MerchItem | null;
}

function PurchaseModal({ open, onClose, product }: PurchaseModalProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });
      if (res.ok) {
        setSuccess(true);
        form.reset();
      } else {
        setError('There was a problem sending your request. Please try again.');
      }
    } catch {
      setError('There was a problem sending your request. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-black text-2xl">&times;</button>
        {success ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 text-teal">Thank you!</h2>
            <p className="mb-4">Your request has been sent. We will reach out via email soon.</p>
            <button onClick={onClose} className="px-6 py-2 bg-teal text-white rounded-md font-medium hover:bg-teal/80 transition">Close</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-2xl font-bold text-center mb-4 text-gray-900">Request to Purchase</h2>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-900">Name</label>
              <input type="text" name="name" id="name" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal focus:ring-teal text-gray-900" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email</label>
              <input type="email" name="email" id="email" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal focus:ring-teal text-gray-900" />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-900">Subject</label>
              <input type="text" name="subject" id="subject" required defaultValue={`Merchandise Purchase Request - ${product?.name || ''}`} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal focus:ring-teal text-gray-900" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-900">Message</label>
              <textarea name="message" id="message" rows={4} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal focus:ring-teal text-gray-900" placeholder="Please include your preferred size (if applicable), quantity, and shipping address."></textarea>
            </div>
            {error && <div className="text-red-600 text-sm">{error}</div>}
            <div>
              <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal hover:bg-teal/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal disabled:opacity-60" disabled={loading}>
                {loading ? 'Sending...' : 'Send Request'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default function MerchPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<MerchItem | null>(null);

  function openModal(product: MerchItem) {
    setSelectedProduct(product);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
    setSelectedProduct(null);
  }

  return (
    <main>
      {/* Removed <Navigation /> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">Band Merchandise</h1>
        
        {/* How to Purchase Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">How to Purchase</h2>
          <p className="text-gray-800 mb-4">
            To purchase any of our merchandise, please click the &quot;Request to Purchase&quot; button on the item you&apos;re interested in.
            This will open a form where you can specify:
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
        <PurchaseModal open={modalOpen} onClose={closeModal} product={selectedProduct} />

        {/* Merchandise Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {merchItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative w-full">
                <div className="w-full h-64 bg-gray-200 relative overflow-hidden flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
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
                <button
                  onClick={() => openModal(item)}
                  className="block w-full text-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal hover:bg-teal/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal"
                >
                  Request to Purchase
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
} 