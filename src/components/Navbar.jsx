import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, Transition } from '@headlessui/react'
import ChallengeTransition from './ChallengeTransition'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showTransition, setShowTransition] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const isActive = (path) => location.pathname === path

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cyber-darker/95 backdrop-blur-lg shadow-lg shadow-cyber-primary/10 border-b border-cyber-primary/20'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src="/images/logocyberobot.png"
              alt="CybeRobot Logo"
              className="h-12 w-auto transform transition-transform duration-300 group-hover:scale-110"
            />
            <div className="hidden md:block">
              <h1 className="text-xl font-orbitron font-bold gradient-text">
                CYBER CHALLENGE
              </h1>
              <p className="text-xs text-cyber-accent">V4.0 - Robot World Cup</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`nav-link font-exo font-semibold transition-all duration-300 ${
                isActive('/')
                  ? 'text-cyber-primary border-b-2 border-cyber-primary'
                  : 'text-gray-300 hover:text-cyber-primary'
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`nav-link font-exo font-semibold transition-all duration-300 ${
                isActive('/about')
                  ? 'text-cyber-primary border-b-2 border-cyber-primary'
                  : 'text-gray-300 hover:text-cyber-primary'
              }`}
            >
              About Us
            </Link>

            {/* Program Dropdown */}
            <Menu as="div" className="relative">
              <Menu.Button
                className={`nav-link font-exo font-semibold transition-all duration-300 flex items-center space-x-1 ${
                  location.pathname.startsWith('/program')
                    ? 'text-cyber-primary'
                    : 'text-gray-300 hover:text-cyber-primary'
                }`}
              >
                <span>Program</span>
                <i className="fas fa-chevron-down text-xs"></i>
              </Menu.Button>
              <Transition
                enter="transition duration-200 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-150 ease-in"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-left bg-cyber-light/95 backdrop-blur-lg border border-cyber-primary/30 rounded-lg shadow-lg shadow-cyber-primary/20 overflow-hidden">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/program/venue"
                          className={`block px-4 py-3 text-sm font-exo ${
                            active
                              ? 'bg-cyber-primary/20 text-cyber-primary'
                              : 'text-gray-300'
                          }`}
                        >
                          <i className="fas fa-map-marker-alt mr-2"></i>
                          Venue
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/program/schedule"
                          className={`block px-4 py-3 text-sm font-exo ${
                            active
                              ? 'bg-cyber-primary/20 text-cyber-primary'
                              : 'text-gray-300'
                          }`}
                        >
                          <i className="fas fa-calendar-alt mr-2"></i>
                          Schedule
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => {
                            setShowTransition(true)
                          }}
                          className={`block w-full text-left px-4 py-3 text-sm font-exo ${
                            active
                              ? 'bg-cyber-primary/20 text-cyber-primary'
                              : 'text-gray-300'
                          }`}
                        >
                          <i className="fas fa-trophy mr-2"></i>
                          Challenges
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

            <Link
              to="/partners"
              className={`nav-link font-exo font-semibold transition-all duration-300 ${
                isActive('/partners')
                  ? 'text-cyber-primary border-b-2 border-cyber-primary'
                  : 'text-gray-300 hover:text-cyber-primary'
              }`}
            >
              Partners
            </Link>

            <Link
              to="/contact"
              className={`nav-link font-exo font-semibold transition-all duration-300 ${
                isActive('/contact')
                  ? 'text-cyber-primary border-b-2 border-cyber-primary'
                  : 'text-gray-300 hover:text-cyber-primary'
              }`}
            >
              Contact
            </Link>

            <button
              onClick={() => setShowTransition(true)}
              className="btn-primary text-sm px-6 py-2"
            >
              Register Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-cyber-primary/20">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-cyber-primary font-exo font-semibold"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-cyber-primary font-exo font-semibold"
              >
                About Us
              </Link>
              <div className="pl-4 space-y-2">
                <p className="text-cyber-primary font-exo font-semibold">Program</p>
                <Link
                  to="/program/venue"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-300 hover:text-cyber-primary text-sm"
                >
                  Venue
                </Link>
                <Link
                  to="/program/schedule"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-300 hover:text-cyber-primary text-sm"
                >
                  Schedule
                </Link>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false)
                    setShowTransition(true)
                  }}
                  className="block w-full text-left text-gray-300 hover:text-cyber-primary text-sm"
                >
                  Challenges
                </button>
              </div>
              <Link
                to="/partners"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-cyber-primary font-exo font-semibold"
              >
                Partners
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-cyber-primary font-exo font-semibold"
              >
                Contact
              </Link>
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  setShowTransition(true)
                }}
                className="btn-primary text-center w-full"
              >
                Register Now
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Challenge Transition Animation */}
      {showTransition && (
        <ChallengeTransition 
          challenge="All"
          onComplete={() => setShowTransition(false)}
        />
      )}
    </nav>
  )
}

export default Navbar
