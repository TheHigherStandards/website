import React from 'react'

interface SocialLink {
  platform: string
  url: string
  icon: string
}

interface SocialLinksProps {
  links: SocialLink[]
  className?: string
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links, className = '' }) => {
  return (
    <div className={`flex space-x-4 ${className}`}>
      {links.map((link) => (
        <a
          key={link.platform}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 transition-colors"
          aria-label={`Follow us on ${link.platform}`}
        >
          <span className="sr-only">{link.platform}</span>
          <i className={link.icon} aria-hidden="true"></i>
        </a>
      ))}
    </div>
  )
}

export default SocialLinks 