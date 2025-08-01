import { useState, useEffect } from 'react'
import { Menu, Calendar } from 'lucide-react'
import logoWhite from '/assets/logo/logoWhite.png'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMenuClick = () => {
    console.log('Menu clicked')
  }

  const handleBookNowClick = () => {
    console.log('Book Now clicked')
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-text-primary-title bg-opacity-90 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Increased nav height to h-24 (6rem) */}
        <div className="flex justify-between items-center h-24">
          
          {/* Menu Button - Left */}
          <button
            onClick={handleMenuClick}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-heritage-bg-primary text-heritage-bg-primary hover:bg-heritage-bg-primary hover:text-text-primary-title transition-colors group"
          >
            <Menu className="w-5 h-5" />
            <span className="font-medium text-sm" style={{ fontFamily: 'Work Sans, sans-serif' }}>Menu</span>
          </button>

          {/* Logo - Center */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <img
              src={logoWhite}
              alt="Otello Hotel Logo"
              className="h-16 object-contain"
            />
          </div>

          {/* Book Now Button - Right */}
          <button
            onClick={handleBookNowClick}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-button-accent-bg text-button-accent-bg hover:bg-button-accent-bg hover:text-heritage-bg-primary transition-colors font-medium"
            style={{ fontFamily: 'Work Sans, sans-serif' }}
          >
            <Calendar className="w-4 h-4" />
            <span className="text-sm">Book Now</span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;