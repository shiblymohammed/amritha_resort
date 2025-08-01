import React from 'react';

function Footer() {
  return (
    <footer className="bg-text-primary-title text-heritage-bg-primary py-20">
      <div className="w-[70%] mx-auto px-8 sm:px-12 lg:px-16">
        <div className="space-y-16">
          {/* Main Brand Section */}
          <div className="text-center space-y-8">
            {/* Brand/Logo */}
            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-3 mb-3">
                <span className="text-3xl text-button-accent-bg">*</span>
                <span 
                  className="text-4xl font-light tracking-wider"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  OTELLO
                </span>
              </div>
              <p 
                className="text-base tracking-[0.2em] text-heritage-bg-secondary"
                style={{ fontFamily: 'Work Sans, sans-serif' }}
              >
                HOTEL TEMPLATE
              </p>
            </div>

            {/* Call to Action */}
            <div className="space-y-3">
              <h2 
                className="text-5xl lg:text-6xl font-light tracking-wide"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Book a Reservation
              </h2>
              <p 
                className="text-3xl lg:text-4xl font-light tracking-wider"
                style={{ fontFamily: 'Work Sans, sans-serif' }}
              >
                +12 (34) 567 89 23
              </p>
              <p 
                className="text-lg text-heritage-bg-secondary max-w-2xl mx-auto leading-relaxed"
                style={{ fontFamily: 'Work Sans, sans-serif' }}
              >
                Experience luxury redefined at Otello Hotel. Your perfect stay begins with a simple call.
              </p>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center items-center gap-8 lg:gap-10 text-base lg:text-lg">
              {[
                'Home', 'Hotel', 'Stay', 'Rooms', 'Contact', 'Blog', 'Packages', 'Spa', 'Gallery', 'Questions'
              ].map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className={`transition-colors duration-300 hover:text-button-accent-bg ${
                    link === 'Rooms' ? 'text-button-accent-bg font-medium' : 'text-heritage-bg-secondary'
                  }`}
                  style={{ fontFamily: 'Work Sans, sans-serif' }}
                >
                  {link}
                </a>
              ))}
            </nav>

            {/* Social Media Icons */}
            <div className="flex justify-center items-center space-x-6">
              {[
                { icon: 'f', platform: 'Facebook' },
                { icon: 'in', platform: 'LinkedIn' },
                { icon: '▶', platform: 'YouTube' },
                { icon: '📸', platform: 'Instagram' },
                { icon: '🐦', platform: 'Twitter' }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-12 h-12 rounded-full border border-heritage-bg-secondary flex items-center justify-center text-heritage-bg-secondary hover:text-button-accent-bg hover:border-button-accent-bg transition-all duration-300"
                  title={social.platform}
                  style={{ fontFamily: 'Work Sans, sans-serif' }}
                >
                  <span className="text-base font-medium">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Additional Content Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-8 border-t border-heritage-bg-secondary/30">
            {/* Quick Links */}
            <div className="space-y-6">
              <h3 
                className="text-2xl font-light mb-6"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Quick Links
              </h3>
              <div className="space-y-3">
                {[
                  'About Our Hotel', 'Room Types', 'Dining Experience', 'Spa & Wellness',
                  'Event Spaces', 'Special Offers', 'Gift Cards', 'Corporate Events'
                ].map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block text-heritage-bg-secondary hover:text-button-accent-bg transition-colors duration-300 text-sm"
                    style={{ fontFamily: 'Work Sans, sans-serif' }}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h3 
                className="text-2xl font-light mb-6"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Contact Info
              </h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm text-heritage-bg-secondary">Address</p>
                  <p className="text-sm text-heritage-bg-primary leading-relaxed">
                    123 Luxury Avenue<br />
                    Heritage District<br />
                    City, State 12345
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-heritage-bg-secondary">Email</p>
                  <a 
                    href="mailto:info@otellohotel.com"
                    className="text-sm text-heritage-bg-primary hover:text-button-accent-bg transition-colors duration-300"
                  >
                    info@otellohotel.com
                  </a>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-heritage-bg-secondary">Emergency</p>
                  <p className="text-sm text-heritage-bg-primary">+12 (34) 567 89 24</p>
                </div>
              </div>
            </div>

            {/* Hotel Services */}
            <div className="space-y-6">
              <h3 
                className="text-2xl font-light mb-6"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Hotel Services
              </h3>
              <div className="space-y-3">
                {[
                  '24/7 Concierge Service', 'Valet Parking', 'Room Service', 'Laundry Service',
                  'Business Center', 'Fitness Center', 'Swimming Pool', 'Spa Treatments',
                  'Airport Shuttle', 'Pet-Friendly Rooms'
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="text-button-accent-bg text-sm">•</span>
                    <span className="text-sm text-heritage-bg-secondary">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-6">
              <h3 
                className="text-2xl font-light mb-6"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Stay Connected
              </h3>
              <p className="text-sm text-heritage-bg-secondary leading-relaxed">
                Subscribe to our newsletter for exclusive offers, luxury insights, and special events.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-heritage-bg-primary/10 border border-heritage-bg-secondary/30 text-heritage-bg-primary placeholder-heritage-bg-secondary/60 focus:outline-none focus:border-button-accent-bg transition-colors duration-300"
                  style={{ fontFamily: 'Work Sans, sans-serif' }}
                />
                <button className="w-full px-6 py-3 bg-button-accent-bg text-heritage-bg-primary hover:bg-button-accent-hover-bg transition-colors duration-300 text-sm tracking-[0.1em]">
                  SUBSCRIBE
                </button>
              </div>
              <p className="text-xs text-heritage-bg-secondary/80">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>

          {/* Awards & Recognition */}
          <div className="text-center space-y-6 pt-8 border-t border-heritage-bg-secondary/30">
            <h3 
              className="text-2xl font-light"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Awards & Recognition
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
              {[
                '⭐ 5-Star Luxury Rating', '🏆 Best Hotel 2024', '🌟 Michelin Star Dining',
                '💎 Diamond Award Winner', '🌿 Eco-Friendly Certified'
              ].map((award, index) => (
                <span
                  key={index}
                  className="text-sm text-heritage-bg-secondary tracking-[0.1em]"
                  style={{ fontFamily: 'Work Sans, sans-serif' }}
                >
                  {award}
                </span>
              ))}
            </div>
          </div>

          {/* Credits/Legal Links */}
          <div className="space-y-4 pt-8 border-t border-heritage-bg-secondary/30">
            <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-8 text-xs lg:text-sm">
              {['INSTRUCTIONS', 'LICENSES', 'CHANGELOG', 'PRIVACY POLICY', 'TERMS OF SERVICE'].map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-heritage-bg-secondary hover:text-button-accent-bg transition-colors duration-300 tracking-[0.1em]"
                  style={{ fontFamily: 'Work Sans, sans-serif' }}
                >
                  {link}
                </a>
              ))}
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-8 text-xs lg:text-sm">
              {['POWERED BY WEBFLOW', 'WEBFLOW TEMPLATES', '© 2024 OTELLO HOTEL'].map((text, index) => (
                <span
                  key={index}
                  className="text-heritage-bg-secondary tracking-[0.1em]"
                  style={{ fontFamily: 'Work Sans, sans-serif' }}
                >
                  {text}
                </span>
              ))}
            </div>
            <p 
              className="text-xs lg:text-sm text-heritage-bg-secondary tracking-[0.1em] text-center"
              style={{ fontFamily: 'Work Sans, sans-serif' }}
            >
              MADE BY METRIK
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;