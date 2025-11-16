import { useEffect, useRef, useState } from 'react'

const VideoHero = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const iframeRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Loading Overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-cyber-darker flex items-center justify-center z-20">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyber-primary mb-4"></div>
            <p className="text-cyber-primary font-orbitron font-bold">Loading Experience...</p>
          </div>
        </div>
      )}

      {/* Vimeo Video Embed */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          ref={iframeRef}
          src="https://player.vimeo.com/video/1137397211?autoplay=1&loop=1&muted=0&background=0&quality=1080p"
          className="absolute top-1/2 left-1/2 w-[100vw] h-[100vh] -translate-x-1/2 -translate-y-1/2"
          style={{
            width: '100vw',
            height: '56.25vw',
            minHeight: '100vh',
            minWidth: '177.78vh',
          }}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          onLoad={() => setIsLoaded(true)}
        ></iframe>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-darker/40 to-cyber-darker z-10"></div>

      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-black text-white mb-4 text-shadow">
              ROBOT WORLD CUP
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-exo mb-8 max-w-3xl mx-auto">
              Experience innovation without borders
            </p>
            <div className="flex justify-center items-center space-x-4 animate-float">
              <div className="w-3 h-3 bg-cyber-primary rounded-full animate-pulse"></div>
              <span className="text-cyber-primary font-orbitron font-bold">LIVE ON NOVEMBER 23, 2025</span>
              <div className="w-3 h-3 bg-cyber-primary rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoHero
