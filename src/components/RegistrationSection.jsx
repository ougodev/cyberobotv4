import { motion } from 'framer-motion'

const RegistrationSection = () => {
  const challenges = [
    {
      name: 'Junior',
      form: 'https://forms.gle/ijjLSLZdTVc9GJP56',
      color: 'from-red-600 to-pink-500',
      icon: 'fa-robot',
      country: 'Japan'
    },
    {
      name: 'All Terrain',
      form: 'https://forms.gle/pi1WvZ9k29cmgtzP6',
      color: 'from-green-600 to-emerald-500',
      icon: 'fa-mountain',
      country: 'Brazil'
    },
    {
      name: 'Line Follower',
      form: 'https://forms.gle/Rrkh9PrDPVrLva5C8',
      color: 'from-amber-600 to-yellow-500',
      icon: 'fa-route',
      country: 'Egypt'
    }
  ]

  return (
    <section id="register" className="py-20 bg-gradient-to-b from-cyber-dark to-cyber-darker relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title mb-6">Open for Registration</h2>
          <p className="text-xl text-gray-300 font-exo max-w-3xl mx-auto mb-4">
            Take your robot on a worldwide adventure
          </p>
          <p className="text-lg text-cyber-primary font-exo font-bold">
            Register now and don't miss your chance to compete and innovate
          </p>
        </motion.div>

        {/* Registration Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-cyber-light/50 backdrop-blur-lg border border-cyber-primary/20 rounded-2xl p-8 transform transition-all duration-300 hover:border-cyber-primary/60 hover:shadow-xl hover:shadow-cyber-primary/20 hover:-translate-y-2">
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${challenge.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    <i className={`fas ${challenge.icon} text-3xl text-white`}></i>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-orbitron font-bold mb-2 gradient-text text-center">
                  {challenge.name}
                </h3>
                <p className="text-gray-400 font-exo text-center mb-6">
                  {challenge.country}
                </p>

                {/* Register Button */}
                <a
                  href={challenge.form}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-4 px-6 bg-gradient-to-r ${challenge.color} rounded-lg text-center font-exo font-bold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyber-primary/50`}
                >
                  <i className="fas fa-pen mr-2"></i>
                  Register Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Payment Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-cyber-light/50 backdrop-blur-lg border-2 border-cyber-primary/30 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Payment Image */}
              <div className="md:w-1/3">
                <div className="relative rounded-xl overflow-hidden border-2 border-cyber-primary/40 shadow-lg shadow-cyber-primary/20">
                  <img
                    src="/images/payment.jpg"
                    alt="Payment Information"
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Payment Details */}
              <div className="md:w-2/3">
                <h3 className="text-2xl font-orbitron font-bold mb-4 gradient-text">
                  Registration & Payment
                </h3>
                <div className="space-y-4 text-gray-300 font-exo">
                  <div className="flex items-start space-x-3">
                    <i className="fas fa-check-circle text-cyber-primary text-xl mt-1"></i>
                    <p>
                      Complete the registration form for your chosen challenge(s)
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="fas fa-check-circle text-cyber-primary text-xl mt-1"></i>
                    <p>
                      Follow the payment instructions provided after registration
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="fas fa-check-circle text-cyber-primary text-xl mt-1"></i>
                    <p>
                      Receive confirmation and competition details via email
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="fas fa-info-circle text-cyber-accent text-xl mt-1"></i>
                    <p className="text-cyber-accent font-bold">
                      Early bird discounts available for registrations before November 10, 2025
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-cyber-primary/10 border border-cyber-primary/30 rounded-lg">
                  <p className="text-sm text-gray-400 font-exo">
                    <i className="fas fa-exclamation-triangle text-cyber-primary mr-2"></i>
                    Limited spots available. Register early to secure your participation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 font-exo mb-4">
            Need help with registration?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center space-x-2 text-cyber-primary hover:text-cyber-accent font-exo font-bold transition-colors"
          >
            <i className="fas fa-envelope"></i>
            <span>Contact Us</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default RegistrationSection
