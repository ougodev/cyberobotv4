import { motion } from 'framer-motion'
import GlobeAnimation from '../components/GlobeAnimation'

const Challenges = () => {
  const challenges = [
    {
      id: 1,
      name: 'Junior Challenge',
      country: 'Japan',
      flag: '🇯🇵',
      image: '/images/Junior Specification.jpg',
      tagline: 'Ready for the Adventure?',
      description: 'The Junior Specification Book is here! Are you ready to explore? This complete guide gives you all the tools to design your ultimate robot and plan your winning strategy. The competition is fierce… are you ready to take the lead?',
      color: 'from-red-600 to-pink-500',
      specs: 'https://drive.google.com/drive/folders/11ut9JsvJq9dlYnFXMKdu881ZFXF3O1fh',
      form: 'https://forms.gle/ijjLSLZdTVc9GJP56',
      icon: 'fa-robot',
      features: [
        'Design creativity and innovation',
        'Strategic planning challenges',
        'Team collaboration opportunities',
        'Educational foundation in robotics'
      ],
      requirements: [
        'Age-appropriate design specifications',
        'Safety requirements compliance',
        'Technical documentation',
        'Team registration (2-4 members)'
      ]
    },
    {
      id: 2,
      name: 'All Terrain Challenge',
      country: 'Brazil',
      flag: '🇧🇷',
      image: '/images/All Terrain.jpg',
      tagline: 'Explore, Create, Push Beyond Frontiers',
      description: 'The all-terrain specification book has landed directly from Brazil! Prepare to explore, create, and push your robot beyond all frontiers. The adventure begins now, are you ready to hit the road?',
      color: 'from-green-600 to-emerald-500',
      specs: 'https://drive.google.com/drive/folders/14AoIdNGp3CC-Y68t4EbB-hNFuAKAqA54',
      form: 'https://forms.gle/pi1WvZ9k29cmgtzP6',
      icon: 'fa-mountain',
      features: [
        'Navigate challenging Brazilian terrain',
        'Obstacle detection and avoidance',
        'Rugged design requirements',
        'Speed and stability balance'
      ],
      requirements: [
        'Terrain adaptability specifications',
        'Power and torque requirements',
        'Sensor integration',
        'Durability standards'
      ]
    },
    {
      id: 3,
      name: 'Line Follower Challenge',
      country: 'Egypt',
      flag: '🇪🇬',
      image: '/images/Line Follower.jpg',
      tagline: 'Follow the Line Towards Glory',
      description: 'After crossing new horizons, our journey now takes us to Egypt. The line follower specification book has arrived! Your roadmap to success through the sands of innovation. Pack your creativity... and follow the line towards glory.',
      color: 'from-amber-600 to-yellow-500',
      specs: 'https://drive.google.com/drive/folders/1EehDzMKwuuUBA9qrPKm_XD_Ht9M0dX2J',
      form: 'https://forms.gle/Rrkh9PrDPVrLva5C8',
      icon: 'fa-route',
      features: [
        'Precision line tracking through Egyptian-themed course',
        'High-speed navigation',
        'Advanced sensor calibration',
        'Optimal path following algorithms'
      ],
      requirements: [
        'Line detection system specifications',
        'Speed and accuracy balance',
        'PID control implementation',
        'Compact design constraints'
      ]
    }
  ]

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section with Globe Background */}
      <section className="relative py-20 bg-gradient-to-b from-cyber-darker to-cyber-dark overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        
        {/* Animated Globe Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <GlobeAnimation />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="section-title mb-6">Competition Challenges</h1>
            <p className="text-xl md:text-2xl text-gray-300 font-exo leading-relaxed mb-4">
              Three unique challenges, three countries, one extraordinary competition
            </p>
            <div className="flex items-center justify-center space-x-3 text-2xl">
              <span>🇯🇵 Japan</span>
              <span className="text-cyber-primary">•</span>
              <span>🇧🇷 Brazil</span>
              <span className="text-cyber-primary">•</span>
              <span>🇪🇬 Egypt</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenges Detailed */}
      {challenges.map((challenge, index) => (
        <section
          key={challenge.id}
          className={`py-20 ${index % 2 === 0 ? 'bg-cyber-dark' : 'bg-gradient-to-b from-cyber-dark to-cyber-darker'}`}
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Image Column */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={index % 2 === 1 ? 'lg:order-2' : ''}
              >
                <div className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${challenge.color} opacity-20 rounded-2xl blur-2xl group-hover:opacity-30 transition-opacity duration-500`}></div>
                  <div className="relative rounded-2xl overflow-hidden border-2 border-cyber-primary/30 shadow-2xl shadow-cyber-primary/20 transform group-hover:scale-105 transition-transform duration-500">
                    <img
                      src={challenge.image}
                      alt={challenge.name}
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyber-darker via-transparent to-transparent"></div>
                    
                    {/* Country Badge */}
                    <div className="absolute top-6 right-6 bg-cyber-light/90 backdrop-blur-lg border border-cyber-primary/30 rounded-lg px-6 py-3 flex items-center space-x-3">
                      <span className="text-3xl">{challenge.flag}</span>
                      <div>
                        <p className="text-xs text-gray-400 font-exo">Location</p>
                        <p className="font-orbitron font-bold text-white">{challenge.country}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Content Column */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={index % 2 === 1 ? 'lg:order-1' : ''}
              >
                <div className="space-y-6">
                  {/* Challenge Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${challenge.color}`}>
                    <i className={`fas ${challenge.icon} text-3xl text-white`}></i>
                  </div>

                  {/* Title */}
                  <div>
                    <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-3">
                      {challenge.name}
                    </h2>
                    <p className={`text-xl font-exo font-bold bg-gradient-to-r ${challenge.color} bg-clip-text text-transparent`}>
                      {challenge.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-lg text-gray-300 font-exo leading-relaxed">
                    {challenge.description}
                  </p>

                  {/* Features */}
                  <div>
                    <h3 className="text-xl font-orbitron font-bold text-cyber-primary mb-4">
                      Key Features
                    </h3>
                    <ul className="space-y-3">
                      {challenge.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <i className={`fas fa-check-circle text-lg mt-1 bg-gradient-to-r ${challenge.color} bg-clip-text text-transparent`}></i>
                          <span className="text-gray-300 font-exo">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Requirements */}
                  <div>
                    <h3 className="text-xl font-orbitron font-bold text-cyber-primary mb-4">
                      Requirements
                    </h3>
                    <ul className="space-y-3">
                      {challenge.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <i className="fas fa-star text-cyber-accent mt-1"></i>
                          <span className="text-gray-300 font-exo">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <a
                      href={challenge.specs}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      <i className="fas fa-download mr-2"></i>
                      Download Specifications
                    </a>
                    <a
                      href={challenge.form}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-8 py-4 bg-gradient-to-r ${challenge.color} text-white font-bold rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
                    >
                      <i className="fas fa-pen mr-2"></i>
                      Register Now
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* General Rules Section */}
      <section className="py-20 bg-cyber-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">General Competition Rules</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: 'fa-users',
                title: 'Team Composition',
                description: 'Teams must consist of 2-4 members from the same institution'
              },
              {
                icon: 'fa-id-card',
                title: 'Registration',
                description: 'All team members must be registered before the deadline'
              },
              {
                icon: 'fa-clipboard-check',
                title: 'Homologation',
                description: 'All robots must pass technical inspection before competition'
              },
              {
                icon: 'fa-shield-alt',
                title: 'Safety First',
                description: 'All designs must comply with safety regulations'
              },
              {
                icon: 'fa-stopwatch',
                title: 'Time Limits',
                description: 'Respect all scheduled times and competition duration'
              },
              {
                icon: 'fa-handshake',
                title: 'Fair Play',
                description: 'Maintain sportsmanship and ethical conduct throughout'
              }
            ].map((rule, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-cyber text-center"
              >
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyber-primary to-cyber-secondary">
                    <i className={`fas ${rule.icon} text-2xl text-white`}></i>
                  </div>
                </div>
                <h3 className="text-lg font-orbitron font-bold mb-2 text-cyber-primary">
                  {rule.title}
                </h3>
                <p className="text-gray-400 font-exo text-sm">
                  {rule.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-cyber-primary via-cyber-secondary to-purple-900">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-black mb-6 text-white">
              Choose Your Challenge
            </h2>
            <p className="text-xl text-white/90 font-exo mb-10 max-w-3xl mx-auto">
              Download the specifications, prepare your robot, and register for the competition
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="#register"
                className="px-12 py-5 bg-white text-cyber-primary font-orbitron font-bold text-lg rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                Register Your Team
              </a>
              <a
                href="/program/schedule"
                className="px-12 py-5 border-2 border-white text-white font-orbitron font-bold text-lg rounded-lg transform transition-all duration-300 hover:bg-white hover:text-cyber-primary hover:scale-105"
              >
                View Schedule
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Challenges
