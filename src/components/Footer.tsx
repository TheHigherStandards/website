import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#015a50] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} The Higher Standards. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/thehigherstandards/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              Instagram
            </a>
            <a href="https://www.facebook.com/thehigherstandards" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              Facebook
            </a>
            <a href="https://open.spotify.com/artist/2n31PctOZt8HEp8Qq2vvUY?si=Jstghai1SZu7n8wIJroMdA" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              Spotify
            </a>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-sm text-gray-400">
              Website created by <a href="https://alex-sparks.com" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">alex-sparks.com</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 