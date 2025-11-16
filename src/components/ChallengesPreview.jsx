import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import ChallengeTransition from './ChallengeTransition'

const ChallengesPreview = () => {
  const [selectedChallenge, setSelectedChallenge] = useState(null)
  const challenges = [
    {
      id: 1,
      name: 'Junior Challenge',
      country: 'Japan',
      flag: '🇯🇵',
      image: '/images/Junior Specification.jpg',
      description: 'Design your ultimate robot and plan your winning strategy. Perfect for young innovators.',
      color: 'from-red-600 to-pink-500',
      specs: 'https://drive.google.com/drive/folders/11ut9JsvJq9dlYnFXMKdu881ZFXF3O1fh',
      form: 'https://forms.gle/ijjLSLZdTVc9GJP56',
      icon: 'fa-robot'
    },
    {
      id: 2,
      name: 'All Terrain Challenge',
      country: 'Brazil',
      flag: '🇧🇷',
      image: '/images/All Terrain.jpg',
      description: 'Push your robot beyond all frontiers through the challenging Brazilian terrain.',
      color: 'from-green-600 to-emerald-500',
      specs: 'https://drive.google.com/drive/folders/14AoIdNGp3CC-Y68t4EbB-hNFuAKAqA54',
      form: 'https://forms.gle/pi1WvZ9k29cmgtzP6',
      icon: 'fa-mountain'
    },
    {
      id: 3,
      name: 'Line Follower Challenge',
      country: 'Egypt',
      flag: '🇪🇬',
      image: '/images/Line Follower.jpg',
      description: 'Follow the line towards glory through the sands of Egyptian innovation.',
      color: 'from-amber-600 to-yellow-500',
      specs: 'https://drive.google.com/drive/folders/1EehDzMKwuuUBA9qrPKm_XD_Ht9M0dX2J',
      form: 'https://forms.gle/Rrkh9PrDPVrLva5C8',
      icon: 'fa-route'
    }
  ]

  return (
    <section className="py-20 bg-cyber-darker relative">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
            <h2 className="section-title">Three Challenges, Three Countries</h2>
            <p className="text-xl text-gray-400 font-exo max-w-3xl mx-auto">
              Japan 🇯🇵 • Brazil 🇧🇷 • Egypt 🇪🇬 - Each challenge takes you to a new destination
            </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div 
                className="relative bg-cyber-light/50 backdrop-blur-lg border border-cyber-primary/20 rounded-2xl overflow-hidden transform transition-all duration-500 hover:border-cyber-primary/60 hover:shadow-2xl hover:shadow-cyber-primary/20 hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedChallenge(challenge.name.split(' ')[0])}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${challenge.color} opacity-20`}></div>
                  <img
                    src={challenge.image}
                    alt={challenge.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-darker via-cyber-darker/50 to-transparent"></div>
                  
                  {/* Country Badge */}
                  <div className="absolute top-4 right-4 bg-cyber-light/90 backdrop-blur-lg border border-cyber-primary/30 rounded-lg px-4 py-2 flex items-center space-x-2">
                    <span className="text-2xl">{challenge.flag}</span>
                    <span className="font-exo font-bold text-white">{challenge.country}</span>
                  </div>

                  {/* Icon */}
                  <div className="absolute bottom-4 left-4">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${challenge.color} flex items-center justify-center shadow-lg`}>
                      <i className={`fas ${challenge.icon} text-2xl text-white`}></i>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-orbitron font-bold mb-3 gradient-text">
                    {challenge.name}
                  </h3>
                  <p className="text-gray-400 font-exo mb-6 leading-relaxed">
                    {challenge.description}
                  </p>

                  {/* Actions */}
                  <div className="space-y-3">
                    <a
                      href={challenge.specs}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="block w-full py-3 px-4 bg-cyber-primary/20 hover:bg-cyber-primary/30 border border-cyber-primary/40 hover:border-cyber-primary rounded-lg text-center font-exo font-semibold text-cyber-primary transition-all duration-300 transform hover:scale-105"
                    >
                      <i className="fas fa-book mr-2"></i>
                      Download Specifications
                    </a>
                    <a
                      href={challenge.form}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className={`block w-full py-3 px-4 bg-gradient-to-r ${challenge.color} hover:shadow-lg hover:shadow-cyber-primary/50 rounded-lg text-center font-exo font-bold text-white transition-all duration-300 transform hover:scale-105`}
                    >
                      <i className="fas fa-pen mr-2"></i>
                      Register for Challenge
                    </a>
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 left-0 w-20 h-20">
                  <div className={`absolute inset-0 bg-gradient-to-br ${challenge.color} opacity-30 blur-xl`}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/program/challenges"
            onClick={(e) => {
              e.preventDefault()
              setSelectedChallenge('All')
            }}
            className="inline-flex items-center space-x-2 text-cyber-primary hover:text-cyber-accent font-exo font-bold text-lg transition-colors group"
          >
            <span>Explore All Challenges in Detail</span>
            <i className="fas fa-arrow-right transform group-hover:translate-x-2 transition-transform"></i>
          </Link>
        </motion.div>
      </div>

      {/* Challenge Transition Animation */}
      {selectedChallenge && (
        <ChallengeTransition 
          challenge={selectedChallenge}
          onComplete={() => setSelectedChallenge(null)}
        />
      )}
    </section>
  )
}

export default ChallengesPreview
