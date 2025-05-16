"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
// import Navigation from '@/components/Navigation'

export default function ContactPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });
      if (res.ok) {
        router.push('/contact/thank-you');
      } else {
        setError('There was a problem sending your message. Please try again.');
      }
    } catch {
      setError('There was a problem sending your message. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">Contact Us</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-gray-900"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-gray-900"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-900">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-gray-900"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-gray-900"
              ></textarea>
            </div>

            {error && <div className="text-red-600 text-sm">{error}</div>}

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal hover:bg-teal/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal disabled:opacity-60"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>

        {/* Additional Contact Information */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Email Us</h2>
            <p className="text-gray-800">
              For booking inquiries and general questions, please use the form above or email us directly at:
              <br />
              <a href="mailto:thehigherstandardsband@gmail.com" className="text-indigo-600 hover:text-indigo-500 font-medium">
                thehigherstandardsband@gmail.com
              </a>
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Follow Us</h2>
            <p className="text-gray-800">
              Stay updated with our latest news and events by following us on social media.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
} 