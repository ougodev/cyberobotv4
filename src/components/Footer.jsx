import { Link } from 'react-router-dom'
import { useState } from 'react'
import ChallengeTransition from './ChallengeTransition'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [showTransition, setShowTransition] = useState(false)

  return (
    <footer className="bg-cyber-darker border-t border-cyber-primary/20 mt-20">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <img
              src="/images/logocyberobot.png"
              alt="CybeRobot Logo"
              className="h-16 w-auto"
            />
            <h3 className="text-xl font-orbitron font-bold gradient-text">
              CYBER CHALLENGE V4.0
            </h3>
            <p className="text-gray-400 text-sm font-exo">
              Robot World Cup - Where innovation meets adventure across the globe
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/club.cyber.robot.isetn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyber-primary transition-colors"
              >
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a
                href="https://instagram.com/cyberobotisetnabeul"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyber-primary transition-colors"
              >
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a
                href="https://linkedin.com/company/cyberobotisetnabeul"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyber-primary transition-colors"
              >
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-orbitron font-bold text-cyber-primary">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-cyber-primary transition-colors font-exo">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-cyber-primary transition-colors font-exo">
                  About Us
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => setShowTransition(true)}
                  className="text-gray-400 hover:text-cyber-primary transition-colors font-exo"
                >
                  Challenges
                </button>
              </li>
              <li>
                <Link to="/partners" className="text-gray-400 hover:text-cyber-primary transition-colors font-exo">
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Program */}
          <div className="space-y-4">
            <h4 className="text-lg font-orbitron font-bold text-cyber-primary">Program</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/program/venue" className="text-gray-400 hover:text-cyber-primary transition-colors font-exo">
                  Venue
                </Link>
              </li>
              <li>
                <Link to="/program/schedule" className="text-gray-400 hover:text-cyber-primary transition-colors font-exo">
                  Schedule
                </Link>
              </li>
              <li>
                <button onClick={() => setShowTransition(true)} className="text-gray-400 hover:text-cyber-primary transition-colors font-exo">
                  Registration
                </button>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-cyber-primary transition-colors font-exo">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-orbitron font-bold text-cyber-primary">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-400 font-exo text-sm">
                <i className="fas fa-map-marker-alt text-cyber-primary mt-1"></i>
                <span>ISET Nabeul, Merazka 8000, Nabeul, Tunisia</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 font-exo text-sm">
                <i className="fas fa-envelope text-cyber-primary"></i>
                <a href="mailto:clubcyberobot@gmail.com" className="hover:text-cyber-primary">
                  clubcyberobot@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 font-exo text-sm">
                <i className="fas fa-phone text-cyber-primary"></i>
                <a href="tel:+21653081308" className="hover:text-cyber-primary">
                  +216 53 081 308
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 font-exo text-sm">
                <i className="fas fa-calendar text-cyber-primary"></i>
                <span>November 23, 2025</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cyber-primary/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm font-exo text-center md:text-left">
              &copy; {currentYear} CybeRobot Club - ISET Nabeul. All rights reserved.
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 text-sm font-exo">Developed by</span>
              <a 
                href="https://www.linkedin.com/in/oussama-gobji" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyber-accent hover:text-cyber-primary transition-colors font-semibold inline-flex items-center gap-1"
              >
                Oussama Gobji
                <i className="fab fa-linkedin text-sm"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-cyber-primary to-transparent"></div>

      {/* Challenge Transition Animation */}
      {showTransition && (
        <ChallengeTransition 
          challenge="All"
          onComplete={() => setShowTransition(false)}
        />
      )}
    </footer>
  )
}

export default Footer
