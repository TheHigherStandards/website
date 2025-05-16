import React from 'react';
import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-4 text-teal">Thank You!</h1>
        <p className="text-lg text-gray-800 mb-6">
          We appreciate you reaching out. We will get back to you via email as soon as possible.
        </p>
        <Link href="/" className="inline-block px-6 py-3 bg-teal text-white rounded-md font-medium hover:bg-teal/80 transition">Return Home</Link>
      </div>
    </main>
  );
} 