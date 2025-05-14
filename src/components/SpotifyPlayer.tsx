import React from 'react'

interface SpotifyPlayerProps {
  playlistId: string
  height?: number
  width?: string
}

const SpotifyPlayer: React.FC<SpotifyPlayerProps> = ({
  playlistId,
  height = 352,
  width = '100%'
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <iframe
        src={`https://open.spotify.com/embed/playlist/${playlistId}`}
        width={width}
        height={height}
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  )
}

export default SpotifyPlayer 