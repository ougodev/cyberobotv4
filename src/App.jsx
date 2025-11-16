import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Venue from './pages/Venue'
import Schedule from './pages/Schedule'
import Challenges from './pages/Challenges'
import Partners from './pages/Partners'
import Contact from './pages/Contact'
import ParticleBackground from './components/ParticleBackground'

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-cyber-darker">
        <ParticleBackground />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/program/venue" element={<Venue />} />
          <Route path="/program/schedule" element={<Schedule />} />
          <Route path="/program/challenges" element={<Challenges />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
