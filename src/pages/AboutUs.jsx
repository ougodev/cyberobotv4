import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const AboutUs = () => {
  const teamMembers = [
    { name: 'Amine Lakhel', position: 'Président', photo: '/images/teams/Amine Lakhel-Président.jpg' },
    { name: 'Dhouha Dhmiri', position: 'Vice Président', photo: '/images/teams/Dhouha Dhmiri-Vice Président.jpg' },
    { name: 'Mouhamed Hfidhi', position: 'Responsable CyberTech', photo: '/images/teams/Mouhamed Hfidhi-Responsable CyberTech.jpg' },
    { name: 'Aya Yakoubi', position: 'Responsable CyberArt', photo: '/images/teams/Aya Yakoubi-Responsable CyberArt.jpg' },
    { name: 'Nourane Amari', position: 'Responsable Sponsoring', photo: '/images/teams/Nourane Amari-Responsable Sponsoring.jpg' },
    { name: 'Farah Hajri', position: 'Responsable RH', photo: '/images/teams/Farah Hajri-Responsable RH.jpg' },
    { name: 'Ranim Bn Ali', position: 'Responsable Média', photo: '/images/teams/Ranim Bn Ali-Responsable Média.jpg' },
    { name: 'Safa Ayari', position: 'Responsable Planification', photo: '/images/teams/Safa Ayari-Responsable Planification.jpg' },
    { name: 'Mohamed Ali', position: 'Responsable Organisation', photo: '/images/teams/Mohamed Ali-Responsable Organisation.jpg' },
    { name: 'Yassine Bejaoui', position: 'Responsable Logistique', photo: '/images/teams/Yassine Bejaoui-Responsable Logistique.jpg' },
    { name: 'Fęr Yęl', position: 'Assistante RH', photo: '/images/teams/Fęr Yęl-Assistante RH.jpg' },
    { name: 'Nadine Mokhtar', position: 'Assistante Média', photo: '/images/teams/Nadine Mokhtar-Assistante Média.jpg' },
    { name: 'Abir Guesmi', position: 'Assistante Planification', photo: '/images/teams/Abir Guesmi-Assistante Planification.jpg' },
    { name: 'Emna Bouchnak', position: 'Assistante Organisation', photo: '/images/teams/Emna Bouchnak-Assistante Organisation.jpg' }
  ]

  const stats = [
    { number: '4', label: 'Editions', icon: 'fa-trophy' },
    { number: '500+', label: 'Participants', icon: 'fa-users' },
    { number: '100+', label: 'Robots', icon: 'fa-robot' },
    { number: '3', label: 'Countries', icon: 'fa-globe' }
  ]

  const values = [
    {
      title: 'Innovation',
      description: 'Pushing the boundaries of robotics technology and creative problem-solving',
      icon: 'fa-lightbulb'
    },
    {
      title: 'Collaboration',
      description: 'Building a community of passionate engineers and robotics enthusiasts',
      icon: 'fa-handshake'
    },
    {
      title: 'Excellence',
      description: 'Striving for the highest standards in competition and technical achievement',
      icon: 'fa-star'
    },
    {
      title: 'Education',
      description: 'Fostering learning and skill development in robotics and engineering',
      icon: 'fa-graduation-cap'
    }
  ]

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-cyber-darker to-cyber-dark overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="section-title mb-6">About CybeRobot Club</h1>
            <p className="text-xl md:text-2xl text-gray-300 font-exo leading-relaxed">
              Leading the next generation of robotics innovation at ISET Nabeul
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-cyber-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden border-2 border-cyber-primary/30 shadow-2xl shadow-cyber-primary/20">
                <img
                  src="/images/logocyberobot.png"
                  alt="CybeRobot Logo"
                  className="w-full h-auto bg-cyber-darker p-12"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-orbitron font-bold gradient-text">Our Mission</h2>
              <div className="space-y-4 text-gray-300 font-exo text-lg">
                <p>
                  CybeRobot is the premier robotics club at ISET Nabeul, dedicated to fostering 
                  innovation, creativity, and technical excellence in the field of robotics and automation.
                </p>
                <p>
                  Since our inception, we have been organizing world-class robotics competitions that 
                  challenge participants to push the boundaries of what's possible with technology.
                </p>
                <p>
                  The Cyber Challenge represents our flagship event, bringing together talented minds 
                  from across the region to compete, learn, and grow in a dynamic and supportive environment.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="px-6 py-3 bg-cyber-primary/20 border border-cyber-primary/40 rounded-lg">
                  <span className="font-orbitron font-bold text-cyber-primary">Est. 2022</span>
                </div>
                <div className="px-6 py-3 bg-cyber-primary/20 border border-cyber-primary/40 rounded-lg">
                  <span className="font-orbitron font-bold text-cyber-primary">ISET Nabeul</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-cyber-dark to-cyber-darker">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Our Impact</h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="card-cyber">
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyber-primary to-cyber-secondary">
                      <i className={`fas ${stat.icon} text-2xl text-white`}></i>
                    </div>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-orbitron font-black gradient-text mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-gray-400 font-exo font-semibold">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-cyber-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Our Values</h2>
            <p className="text-xl text-gray-400 font-exo max-w-3xl mx-auto">
              The principles that guide our community and competitions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-cyber group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-cyber-primary to-cyber-secondary flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <i className={`fas ${value.icon} text-2xl text-white`}></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-orbitron font-bold mb-2 text-cyber-primary">
                      {value.title}
                    </h3>
                    <p className="text-gray-400 font-exo leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-cyber-dark to-cyber-darker">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">The Team</h2>
            <p className="text-xl text-gray-400 font-exo max-w-3xl mx-auto">
              Passionate students working together to create extraordinary experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="card-cyber group"
              >
                <div className="relative overflow-hidden rounded-lg mb-3">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full aspect-square object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-darker via-transparent to-transparent opacity-60"></div>
                </div>
                <h3 className="text-lg font-orbitron font-bold text-cyber-primary mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-400 font-exo">
                  {member.position}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 bg-cyber-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyber-primary via-cyber-secondary to-purple-900 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 grid-pattern"></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-orbitron font-black mb-6 text-white">
                Join the CybeRobot Family
              </h2>
              <p className="text-xl text-white/90 font-exo mb-10 max-w-2xl mx-auto">
                Whether you're a participant, sponsor, or supporter, there's a place for you in our community
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/program/challenges"
                  className="px-10 py-4 bg-white text-cyber-primary font-orbitron font-bold rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  Register for Challenge
                </Link>
                <Link
                  to="/contact"
                  className="px-10 py-4 border-2 border-white text-white font-orbitron font-bold rounded-lg transform transition-all duration-300 hover:bg-white hover:text-cyber-primary hover:scale-105"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
