import { motion } from 'framer-motion'

const Partners = () => {
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
            <h1 className="section-title mb-6">Our Partners</h1>
            <p className="text-xl md:text-2xl text-gray-300 font-exo leading-relaxed">
              Together, we're building the future of robotics
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Partner */}
      <section className="py-20 bg-cyber-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-orbitron font-bold gradient-text mb-4">
              Institutional Partner
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-cyber-light/50 backdrop-blur-lg border-2 border-cyber-primary/30 rounded-3xl p-12 text-center">
              <div className="mb-8">
                <img
                  src="/images/logoisetnabeul.png"
                  alt="ISET Nabeul"
                  className="h-32 w-auto mx-auto"
                />
              </div>
              <h3 className="text-3xl font-orbitron font-bold gradient-text mb-4">
                ISET Nabeul
              </h3>
              <p className="text-lg text-gray-300 font-exo max-w-2xl mx-auto leading-relaxed">
                Institut Supérieur des Études Technologiques de Nabeul - Our host institution 
                and main partner, providing world-class facilities and unwavering support for 
                technological education and innovation in Tunisia.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-20 bg-gradient-to-b from-cyber-dark to-cyber-darker">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title mb-6">Why Partner With Us?</h2>
            <p className="text-xl text-gray-400 font-exo max-w-3xl mx-auto">
              Join us in shaping the future of robotics education and innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'fa-eye',
                title: 'Brand Visibility',
                description: 'Showcase your brand to hundreds of talented engineering students and robotics enthusiasts',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: 'fa-users',
                title: 'Talent Access',
                description: 'Connect with the next generation of engineers and innovators',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: 'fa-handshake',
                title: 'Community Impact',
                description: 'Support STEM education and technological advancement in the region',
                color: 'from-green-500 to-emerald-500'
              },
              {
                icon: 'fa-chart-line',
                title: 'Innovation',
                description: 'Be part of cutting-edge robotics research and development',
                color: 'from-amber-500 to-orange-500'
              },
              {
                icon: 'fa-medal',
                title: 'Recognition',
                description: 'Receive acknowledgment across all event materials and communications',
                color: 'from-red-500 to-rose-500'
              },
              {
                icon: 'fa-network-wired',
                title: 'Networking',
                description: 'Build valuable connections with academic institutions and industry leaders',
                color: 'from-teal-500 to-cyan-500'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-cyber group"
              >
                <div className="mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${benefit.color} transform group-hover:scale-110 transition-transform duration-300`}>
                    <i className={`fas ${benefit.icon} text-2xl text-white`}></i>
                  </div>
                </div>
                <h3 className="text-xl font-orbitron font-bold mb-3 text-cyber-primary">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 font-exo">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section className="py-20 bg-cyber-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title mb-6">Partnership Opportunities</h2>
            <p className="text-xl text-gray-400 font-exo max-w-3xl mx-auto">
              Choose the partnership level that aligns with your goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                tier: 'Gold Partner',
                color: 'from-yellow-500 to-amber-500',
                icon: 'fa-crown',
                benefits: [
                  'Premier logo placement',
                  'Exclusive naming rights opportunity',
                  'Speaking opportunity at event',
                  'Booth space at venue',
                  'Social media recognition',
                  'Press release mention'
                ]
              },
              {
                tier: 'Silver Partner',
                color: 'from-gray-400 to-gray-300',
                icon: 'fa-star',
                benefits: [
                  'Logo on event materials',
                  'Booth space at venue',
                  'Social media recognition',
                  'Website acknowledgment',
                  'Event program mention'
                ]
              },
              {
                tier: 'Bronze Partner',
                color: 'from-orange-700 to-amber-700',
                icon: 'fa-award',
                benefits: [
                  'Logo on website',
                  'Social media mention',
                  'Event program listing',
                  'Certificate of partnership'
                ]
              }
            ].map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-cyber-light/50 backdrop-blur-lg border-2 border-cyber-primary/20 rounded-2xl p-8 h-full transform transition-all duration-300 hover:border-cyber-primary/60 hover:shadow-xl hover:shadow-cyber-primary/20 hover:-translate-y-2">
                  {/* Tier Badge */}
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${tier.color} mb-4`}>
                      <i className={`fas ${tier.icon} text-3xl text-white`}></i>
                    </div>
                    <h3 className={`text-2xl font-orbitron font-bold bg-gradient-to-r ${tier.color} bg-clip-text text-transparent`}>
                      {tier.tier}
                    </h3>
                  </div>

                  {/* Benefits List */}
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <i className={`fas fa-check text-lg mt-1 bg-gradient-to-r ${tier.color} bg-clip-text text-transparent`}></i>
                        <span className="text-gray-300 font-exo">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="mt-8">
                    <a
                      href="/contact"
                      className={`block w-full py-3 px-6 text-center bg-gradient-to-r ${tier.color} text-white font-orbitron font-bold rounded-lg transform transition-all duration-300 hover:scale-105`}
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="py-20 bg-gradient-to-br from-cyber-primary via-cyber-secondary to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 grid-pattern"></div>
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-black mb-6 text-white">
              Become a Partner
            </h2>
            <p className="text-xl md:text-2xl text-white/90 font-exo mb-10 max-w-3xl mx-auto">
              Join us in empowering the next generation of robotics innovators
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/contact"
                className="px-12 py-5 bg-white text-cyber-primary font-orbitron font-bold text-lg rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <i className="fas fa-envelope mr-2"></i>
                Contact Us
              </a>
              <a
                href="mailto:partners@cyberobotisetnabeul.tn"
                className="px-12 py-5 border-2 border-white text-white font-orbitron font-bold text-lg rounded-lg transform transition-all duration-300 hover:bg-white hover:text-cyber-primary hover:scale-105"
              >
                <i className="fas fa-paper-plane mr-2"></i>
                Send Proposal
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-cyber-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-orbitron font-bold gradient-text mb-4">
              What Partners Say
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-cyber-light/50 backdrop-blur-lg border border-cyber-primary/20 rounded-2xl p-8 md:p-12 text-center"
            >
              <div className="mb-6">
                <i className="fas fa-quote-left text-5xl text-cyber-primary opacity-50"></i>
              </div>
              <p className="text-xl text-gray-300 font-exo leading-relaxed mb-6">
                "Partnering with CybeRobot Club has been an incredible opportunity to connect 
                with talented students and support innovation in robotics. The Cyber Challenge 
                showcases the best of what's possible when passion meets technology."
              </p>
              <div className="inline-block px-6 py-3 bg-cyber-primary/20 border border-cyber-primary/40 rounded-lg">
                <p className="font-orbitron font-bold text-cyber-primary">Partnership Opportunities Available</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Partners
