import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import GlobeAnimation from './GlobeAnimation'

const ChallengeTransition = ({ challenge, onComplete }) => {
  const [phase, setPhase] = useState('globe') // globe -> transition -> complete
  const navigate = useNavigate()

  const handleTransitionComplete = () => {
    setPhase('complete')
    setTimeout(() => {
      if (onComplete) onComplete()
      // Scroll to top before navigation
      window.scrollTo(0, 0)
      navigate('/program/challenges')
    }, 500)
  }

  const countryMap = {
    'Junior': 'Japan',
    'All': 'Japan',
    'All Terrain': 'Brazil',
    'Line Follower': 'Egypt',
    'Line': 'Egypt'
  }

  // Start transition immediately
  const [animationStarted, setAnimationStarted] = useState(false)
  
  if (!animationStarted) {
    setAnimationStarted(true)
    setPhase('globe')
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-cyber-darker flex items-center justify-center"
      >
        <div className="w-full h-full relative">
          {/* Globe Animation with Palestine Flag Background */}
          <div className="absolute inset-0">
            {/* Palestine Flag Background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <img 
                src="/images/pleastine.png" 
                alt="Palestine Background" 
                className="w-96 h-64 object-cover blur-sm"
              />
            </div>
            
            <GlobeAnimation 
              isTransitioning={true}
              targetCountry={countryMap[challenge] || 'Japan'}
              onTransitionComplete={handleTransitionComplete}
            />
          </div>

          {/* Overlay Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h2 className="text-4xl md:text-6xl font-orbitron font-black gradient-text mb-4">
                  {challenge} Challenge
                </h2>
                <div className="flex items-center justify-center space-x-4 text-2xl md:text-3xl font-exo">
                  <span className="text-cyber-accent">Tunisia 🇹🇳</span>
                  <i className="fas fa-arrow-right text-cyber-primary"></i>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">Palestine</span>
                    <img src="/images/pleastine.png" alt="Palestine" className="w-8 h-6 object-cover rounded" />
                  </div>
                  <i className="fas fa-arrow-right text-cyber-primary"></i>
                  <span className="text-cyber-primary font-bold">
                    {countryMap[challenge]} {
                      countryMap[challenge] === 'Japan' ? '🇯🇵' :
                      countryMap[challenge] === 'Brazil' ? '🇧🇷' : '🇪🇬'
                    }
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-gray-400 font-exo"
              >
                <i className="fas fa-spinner fa-spin mr-2"></i>
                Navigating to destination...
              </motion.div>
            </div>
          </div>

          {/* Progress Bar */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyber-primary via-green-400 to-cyber-accent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 3.5 }}
            style={{ transformOrigin: 'left' }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ChallengeTransition
