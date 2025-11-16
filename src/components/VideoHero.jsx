import { useEffect, useRef, useState } from 'react'

const VideoHero = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const iframeRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const toggleMute = () => {
    if (iframeRef.current) {
      const player = iframeRef.current.contentWindow
      const message = isMuted ? { method: 'setVolume', value: 1 } : { method: 'setVolume', value: 0 }
      player.postMessage(JSON.stringify(message), '*')
      setIsMuted(!isMuted)
    }
  }

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
          src={`https://player.vimeo.com/video/1137397211?autoplay=1&loop=1&muted=${isMuted ? 1 : 0}&background=0&quality=1080p`}
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

      {/* Sound Toggle Button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-24 right-4 md:bottom-28 md:right-8 z-30 bg-cyber-primary/80 hover:bg-cyber-primary backdrop-blur-sm text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group"
        aria-label={isMuted ? 'Activer le son' : 'Couper le son'}
      >
        {isMuted ? (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
          </svg>
        )}
        <span className="absolute -top-12 right-0 bg-cyber-darker/90 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          {isMuted ? 'Activer le son' : 'Couper le son'}
        </span>
      </button>

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
