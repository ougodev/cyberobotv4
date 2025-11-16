import { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission - for now just log
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

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
            <h1 className="section-title mb-6">Get in Touch</h1>
            <p className="text-xl md:text-2xl text-gray-300 font-exo leading-relaxed">
              Have questions? We're here to help you with anything you need
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-cyber-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-orbitron font-bold gradient-text mb-6">
                  Contact Information
                </h2>
                <p className="text-lg text-gray-300 font-exo mb-8">
                  Reach out to us through any of the following channels. We're always happy to answer your questions.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <div className="card-cyber">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyber-primary to-cyber-secondary flex items-center justify-center">
                        <i className="fas fa-map-marker-alt text-white text-xl"></i>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-orbitron font-bold mb-1 text-cyber-primary">Address</h3>
                      <p className="text-gray-300 font-exo">
                        ISET Nabeul<br />
                        Merazka 8000<br />
                        Nabeul, Tunisia
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card-cyber">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyber-primary to-cyber-secondary flex items-center justify-center">
                        <i className="fas fa-envelope text-white text-xl"></i>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-orbitron font-bold mb-1 text-cyber-primary">Email</h3>
                      <a
                        href="mailto:clubcyberobot@gmail.com"
                        className="text-gray-300 font-exo hover:text-cyber-primary transition-colors"
                      >
                        clubcyberobot@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="card-cyber">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyber-primary to-cyber-secondary flex items-center justify-center">
                        <i className="fas fa-phone text-white text-xl"></i>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-orbitron font-bold mb-1 text-cyber-primary">Phone</h3>
                      <a
                        href="tel:+21653081308"
                        className="text-gray-300 font-exo hover:text-cyber-primary transition-colors"
                      >
                        +216 96 619 523
                      </a>
                    </div>
                  </div>
                </div>

                <div className="card-cyber">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyber-primary to-cyber-secondary flex items-center justify-center">
                        <i className="fas fa-calendar text-white text-xl"></i>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-orbitron font-bold mb-1 text-cyber-primary">Event Date</h3>
                      <p className="text-gray-300 font-exo">November 23, 2025</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-orbitron font-bold mb-4 text-cyber-primary">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/club.cyber.robot.isetn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-cyber-light/50 border border-cyber-primary/30 flex items-center justify-center text-gray-300 hover:bg-cyber-primary hover:text-white hover:border-cyber-primary transition-all duration-300"
                  >
                    <i className="fab fa-facebook fa-lg"></i>
                  </a>
                  <a
                    href="https://instagram.com/cyberobotisetnabeul"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-cyber-light/50 border border-cyber-primary/30 flex items-center justify-center text-gray-300 hover:bg-cyber-primary hover:text-white hover:border-cyber-primary transition-all duration-300"
                  >
                    <i className="fab fa-instagram fa-lg"></i>
                  </a>
                  <a
                    href="https://linkedin.com/company/cyberobotisetnabeul"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-cyber-light/50 border border-cyber-primary/30 flex items-center justify-center text-gray-300 hover:bg-cyber-primary hover:text-white hover:border-cyber-primary transition-all duration-300"
                  >
                    <i className="fab fa-linkedin fa-lg"></i>
                  </a>
                  <a
                    href="https://twitter.com/cyberobotiset"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-cyber-light/50 border border-cyber-primary/30 flex items-center justify-center text-gray-300 hover:bg-cyber-primary hover:text-white hover:border-cyber-primary transition-all duration-300"
                  >
                    <i className="fab fa-twitter fa-lg"></i>
                  </a>
                </div>
              </div>

              {/* Logo */}
              <div className="pt-8">
                <img
                  src="/images/logocyberobot.png"
                  alt="CybeRobot Logo"
                  className="h-24 w-auto"
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-cyber-light/50 backdrop-blur-lg border border-cyber-primary/20 rounded-2xl p-8">
                <h2 className="text-2xl font-orbitron font-bold gradient-text mb-6">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-exo font-semibold text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-cyber-darker border border-cyber-primary/30 rounded-lg text-white font-exo focus:outline-none focus:border-cyber-primary transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-exo font-semibold text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-cyber-darker border border-cyber-primary/30 rounded-lg text-white font-exo focus:outline-none focus:border-cyber-primary transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-exo font-semibold text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-cyber-darker border border-cyber-primary/30 rounded-lg text-white font-exo focus:outline-none focus:border-cyber-primary transition-colors"
                      placeholder="What is this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-exo font-semibold text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 bg-cyber-darker border border-cyber-primary/30 rounded-lg text-white font-exo focus:outline-none focus:border-cyber-primary transition-colors resize-none"
                      placeholder="Tell us what you need..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary"
                  >
                    <i className="fas fa-paper-plane mr-2"></i>
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-cyber-dark to-cyber-darker">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-400 font-exo">
              Quick answers to common questions
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: 'When is the registration deadline?',
                answer: 'Registrations close on November 15, 2025. We recommend registering early as spots are limited.'
              },
              {
                question: 'Can international teams participate?',
                answer: 'Yes! We welcome teams from all countries. The competition is open to all robotics enthusiasts.'
              },
              {
                question: 'What are the age requirements?',
                answer: 'Requirements vary by challenge. Junior Challenge is for ages 12-18, while other challenges are open to all ages with robotics experience.'
              },
              {
                question: 'Are there accommodation options nearby?',
                answer: 'Yes, Nabeul has various hotels and accommodations. We can provide recommendations upon request.'
              },
              {
                question: 'What should teams bring on competition day?',
                answer: 'Bring your robot, tools, spare parts, registration confirmation, and ID. Full details will be sent after registration.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-cyber"
              >
                <h3 className="text-lg font-orbitron font-bold mb-3 text-cyber-primary flex items-start">
                  <i className="fas fa-question-circle text-cyber-accent mr-3 mt-1"></i>
                  {faq.question}
                </h3>
                <p className="text-gray-300 font-exo pl-8">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
