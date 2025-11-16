import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import VideoHero from '../components/VideoHero'
import ChallengesPreview from '../components/ChallengesPreview'
import CountdownTimer from '../components/CountdownTimer'
import RegistrationSection from '../components/RegistrationSection'
import GlobeAnimation from '../components/GlobeAnimation'
import ChallengeTransition from '../components/ChallengeTransition'

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [showTransition, setShowTransition] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="overflow-hidden">
      {/* Video Hero Section */}
      <VideoHero />

      {/* Event Title & Countdown */}
      <section className="relative py-20 bg-cyber-darker">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="inline-block mb-6">
              <span className="px-6 py-2 bg-cyber-primary/20 border border-cyber-primary/40 rounded-full text-cyber-primary font-orbitron font-bold text-sm tracking-wider">
                NOVEMBER 23, 2025
              </span>
            </div>
            
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-black mb-8 leading-tight"
              data-text="CYBER CHALLENGE V4.0"
            >
              <span className="gradient-text glitch" data-text="CYBER CHALLENGE V4.0">
                CYBER CHALLENGE V4.0
              </span>
            </h1>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-exo font-bold mb-6 text-white">
              À travers le Globe
            </h2>

            <div className="mb-8">
              <p className="text-2xl md:text-3xl font-orbitron font-bold gradient-text mb-4">
                ROBOT WORLD CUP
              </p>
              <div className="flex items-center justify-center space-x-4 text-gray-300">
                <i className="fas fa-robot text-3xl text-cyber-primary"></i>
                <i className="fas fa-globe-americas text-3xl text-cyber-accent"></i>
                <i className="fas fa-trophy text-3xl text-cyber-primary"></i>
              </div>
            </div>

            <p className="text-lg md:text-xl text-gray-300 font-exo max-w-3xl mx-auto mb-12 leading-relaxed">
              Cette année, le monde devient notre arène. Chaque défi se déroule dans un pays différent, 
              où l'innovation rencontre l'aventure et où la créativité ne connaît pas de frontières.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button onClick={() => setShowTransition(true)} className="btn-primary">
                <i className="fas fa-rocket mr-2"></i>
                Register Now
              </button>
              <button 
                onClick={() => setShowTransition(true)}
                className="btn-outline"
              >
                <i className="fas fa-book mr-2"></i>
                View Challenges
              </button>
            </div>

            {/* Countdown Timer */}
            <CountdownTimer targetDate="2025-11-23T07:00:00" />
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-20 left-10 w-64 h-64 bg-cyber-primary rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyber-secondary rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
      </section>

      {/* Theme Introduction with Globe */}
      <section className="py-20 bg-gradient-to-b from-cyber-darker to-cyber-dark relative overflow-hidden">
        {/* Globe Background */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <GlobeAnimation />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">
                Un Nouveau Chapitre Commence
              </h2>
              <div className="space-y-6 text-gray-300 font-exo text-lg">
                <p className="leading-relaxed">
                  Nous emmenons la robotique dans un tour du monde, où chaque mission apporte 
                  de nouveaux défis, de nouvelles cultures et de nouvelles découvertes.
                </p>
                <p className="leading-relaxed">
                  Nos robots sont plus que des concurrents, ce sont des <span className="text-cyber-primary font-bold">voyageurs</span>, 
                  des <span className="text-cyber-primary font-bold">rêveurs</span> et des <span className="text-cyber-primary font-bold">explorateurs</span> dans 
                  une quête mondiale alimentée par la passion et la technologie.
                </p>
                <p className="leading-relaxed">
                  Préparez-vous à naviguer dans des territoires inconnus, à décoder les missions cachées 
                  et à vivre le frisson d'un voyage robotique mondial.
                </p>
                <div className="pt-4">
                  <div className="inline-flex items-center space-x-2 bg-cyber-primary/10 border border-cyber-primary/30 rounded-lg px-6 py-3">
                    <i className="fas fa-globe text-cyber-primary text-2xl"></i>
                    <span className="font-orbitron font-bold text-cyber-primary">
                      Where the world unites through innovation
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-cyber-primary/20 border-2 border-cyber-primary/30">
                <img
                  src="/images/cyberv4.jpg"
                  alt="Cyber Challenge V4.0"
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-darker via-transparent to-transparent"></div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-cyber-light/90 backdrop-blur-lg border border-cyber-primary/30 rounded-xl p-6 shadow-xl">
                <div className="text-center">
                  <p className="text-4xl font-orbitron font-bold gradient-text mb-1">3</p>
                  <p className="text-sm text-gray-400 font-exo">Challenges</p>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-cyber-light/90 backdrop-blur-lg border border-cyber-primary/30 rounded-xl p-6 shadow-xl">
                <div className="text-center">
                  <p className="text-4xl font-orbitron font-bold gradient-text mb-1">3</p>
                  <p className="text-sm text-gray-400 font-exo">Countries</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenges Preview */}
      <ChallengesPreview />

      {/* Key Features */}
      <section className="py-20 bg-cyber-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Why Participate?</h2>
            <p className="text-xl text-gray-400 font-exo max-w-3xl mx-auto">
              Join the ultimate robotics competition and showcase your innovation on a global stage
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: 'fa-globe-americas',
                title: 'Global Adventure',
                description: 'Compete across three countries with unique challenges'
              },
              {
                icon: 'fa-trophy',
                title: 'Win Prizes',
                description: 'Amazing prizes and recognition for top performers'
              },
              {
                icon: 'fa-users',
                title: 'Network',
                description: 'Connect with robotics enthusiasts and experts'
              },
              {
                icon: 'fa-lightbulb',
                title: 'Innovate',
                description: 'Push the boundaries of robotics technology'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-cyber text-center group"
              >
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-cyber-primary to-cyber-secondary transform group-hover:scale-110 transition-transform duration-300">
                    <i className={`fas ${feature.icon} text-3xl text-white`}></i>
                  </div>
                </div>
                <h3 className="text-xl font-orbitron font-bold mb-3 text-cyber-primary">
                  {feature.title}
                </h3>
                <p className="text-gray-400 font-exo">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <RegistrationSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-cyber-primary via-cyber-secondary to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/cyberv4.jpg')] bg-cover bg-center opacity-10"></div>
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-black mb-6 text-white">
              Ready for the Adventure?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 font-exo mb-10 max-w-3xl mx-auto">
              The competition is fierce... are you ready to take the lead?
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => setShowTransition(true)}
                className="px-12 py-5 bg-white text-cyber-primary font-orbitron font-bold text-lg rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                Register for Challenge
              </button>
              <Link
                to="/program/schedule"
                className="px-12 py-5 border-2 border-white text-white font-orbitron font-bold text-lg rounded-lg transform transition-all duration-300 hover:bg-white hover:text-cyber-primary hover:scale-105"
              >
                View Schedule
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge Transition Animation */}
      {showTransition && (
        <ChallengeTransition 
          challenge="All"
          onComplete={() => setShowTransition(false)}
        />
      )}
    </div>
  )
}

export default Home
