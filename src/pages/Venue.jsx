import { motion } from 'framer-motion'

const Venue = () => {
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
            <h1 className="section-title mb-6">Event Venue</h1>
            <p className="text-xl md:text-2xl text-gray-300 font-exo leading-relaxed">
              Join us at ISET Nabeul, the heart of technological innovation in Tunisia
            </p>
          </motion.div>
        </div>
      </section>

      {/* Venue Info */}
      <section className="py-20 bg-cyber-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl font-orbitron font-bold gradient-text mb-6">
                  ISET Nabeul
                </h2>
                <p className="text-lg text-gray-300 font-exo leading-relaxed mb-6">
                  The Institut Supérieur des Études Technologiques de Nabeul is a premier 
                  institution for technological education in Tunisia, equipped with state-of-the-art 
                  facilities perfect for hosting world-class robotics competitions.
                </p>
              </div>

              {/* Address Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyber-primary to-cyber-secondary flex items-center justify-center">
                      <i className="fas fa-map-marker-alt text-white text-xl"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-orbitron font-bold mb-1 text-cyber-primary">Address</h3>
                    <p className="text-gray-300 font-exo">
                      Merazka 8000<br />
                      Nabeul, Tunisia
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyber-primary to-cyber-secondary flex items-center justify-center">
                      <i className="fas fa-calendar-alt text-white text-xl"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-orbitron font-bold mb-1 text-cyber-primary">Date</h3>
                    <p className="text-gray-300 font-exo">November 23, 2025</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyber-primary to-cyber-secondary flex items-center justify-center">
                      <i className="fas fa-clock text-white text-xl"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-orbitron font-bold mb-1 text-cyber-primary">Time</h3>
                    <p className="text-gray-300 font-exo">7:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyber-primary to-cyber-secondary flex items-center justify-center">
                      <i className="fas fa-parking text-white text-xl"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-orbitron font-bold mb-1 text-cyber-primary">Parking</h3>
                    <p className="text-gray-300 font-exo">Free parking available on campus</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://www.google.com/maps/search/ISET+Nabeul+Merazka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <i className="fas fa-map-marked-alt mr-2"></i>
                  Get Directions
                </a>
                <a
                  href="/program/schedule"
                  className="btn-outline"
                >
                  <i className="fas fa-calendar mr-2"></i>
                  View Schedule
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border-2 border-cyber-primary/30 shadow-2xl shadow-cyber-primary/20">
                <img
                  src="/images/logoisetnabeul.png"
                  alt="ISET Nabeul"
                  className="w-full h-auto bg-cyber-darker p-8"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-b from-cyber-dark to-cyber-darker">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-orbitron font-bold gradient-text mb-4">Location Map</h2>
            <p className="text-lg text-gray-400 font-exo">
              Find your way to ISET Nabeul
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border-2 border-cyber-primary/30 shadow-2xl shadow-cyber-primary/20"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.9567!2d10.7341!3d36.8503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd35e!2sISET%20Nabeul!5e0!3m2!1sen!2stn!4v1234567890"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Getting There */}
      <section className="py-20 bg-cyber-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-orbitron font-bold gradient-text mb-4">Getting There</h2>
            <p className="text-lg text-gray-400 font-exo">
              Multiple transportation options available
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="card-cyber text-center"
            >
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500">
                  <i className="fas fa-car text-3xl text-white"></i>
                </div>
              </div>
              <h3 className="text-xl font-orbitron font-bold mb-3 text-cyber-primary">
                By Car
              </h3>
              <p className="text-gray-400 font-exo">
                Free parking available on campus. Follow GPS directions to ISET Nabeul, Merazka.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="card-cyber text-center"
            >
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-500">
                  <i className="fas fa-bus text-3xl text-white"></i>
                </div>
              </div>
              <h3 className="text-xl font-orbitron font-bold mb-3 text-cyber-primary">
                Public Transport
              </h3>
              <p className="text-gray-400 font-exo">
                Regular bus services connect Nabeul to major cities. Local taxis available from the city center.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="card-cyber text-center"
            >
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500">
                  <i className="fas fa-taxi text-3xl text-white"></i>
                </div>
              </div>
              <h3 className="text-xl font-orbitron font-bold mb-3 text-cyber-primary">
                Taxi / Ride-Share
              </h3>
              <p className="text-gray-400 font-exo">
                Convenient taxi and ride-share services available throughout Nabeul.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-gradient-to-b from-cyber-dark to-cyber-darker">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-orbitron font-bold gradient-text mb-4">Venue Facilities</h2>
            <p className="text-lg text-gray-400 font-exo">
              Everything you need for a successful competition
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: 'fa-wifi', label: 'Free WiFi' },
              { icon: 'fa-utensils', label: 'Food & Beverages' },
              { icon: 'fa-restroom', label: 'Modern Facilities' },
              { icon: 'fa-plug', label: 'Power Outlets' },
              { icon: 'fa-wheelchair', label: 'Accessible' },
              { icon: 'fa-tools', label: 'Workshop Area' },
              { icon: 'fa-users', label: 'Spectator Area' },
              { icon: 'fa-first-aid', label: 'First Aid' }
            ].map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-cyber-light/50 backdrop-blur-lg border border-cyber-primary/20 rounded-xl p-6 text-center transform transition-all duration-300 hover:border-cyber-primary/60 hover:-translate-y-1"
              >
                <i className={`fas ${facility.icon} text-3xl text-cyber-primary mb-3`}></i>
                <p className="text-gray-300 font-exo font-semibold">{facility.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cyber-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyber-primary to-cyber-secondary rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl font-orbitron font-black mb-6 text-white">
              See You at ISET Nabeul
            </h2>
            <p className="text-xl text-white/90 font-exo mb-8 max-w-2xl mx-auto">
              We look forward to welcoming you to an unforgettable robotics competition
            </p>
            <a
              href="#register"
              className="inline-block px-10 py-4 bg-white text-cyber-primary font-orbitron font-bold rounded-lg transform transition-all duration-300 hover:scale-105"
            >
              Register Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Venue
