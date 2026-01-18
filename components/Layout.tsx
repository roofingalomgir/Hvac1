
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, ChevronUp, Search } from 'lucide-react';
import { NAVIGATION, CONTACT_INFO, SOCIAL_LINKS, COLORS, } from '../constants';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar */}
      <div className="hidden lg:block bg-[#031441] text-white py-2 px-4 border-b border-white/10">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex space-x-6">
            <div className="flex items-center space-x-2">
              <MapPin size={14} className="text-accent" />
              <span>{CONTACT_INFO.address}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} className="text-accent" />
              <span>{CONTACT_INFO.email}</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span>Visit Our Social Pages:</span>
            <div className="flex space-x-3">
                {SOCIAL_LINKS.map((link, idx) => (
                    <a key={idx} href={link.url} className="hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">
                        {link.icon}
                    </a>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white py-5'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">

          <Link to="/" className="flex items-center">
            <img
              src="https://organiclandscapiing.com/wp-content/uploads/2025/08/Green-Leaves-Landscaping-Logo.png"
              alt="Coolex Logo"
              className="
          h-8
          sm:h-10
          md:h-12
          lg:h-14
          w-auto
          object-contain
        "
            />
          </Link>



          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAVIGATION.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-semibold transition-colors uppercase text-xs tracking-widest ${location.pathname === item.path ? 'text-accent' : 'text-gray-800 hover:text-accent'
                  }`}
              >
                {item.name}
              </Link>
            ))}
            <button className="text-gray-800 hover:text-accent">
              <Search size={20} />
            </button>
            <Link to="/contact" className="bg-accent text-white px-6 py-3 rounded text-sm font-bold hover:bg-[#e64a19] transition-all uppercase tracking-wider">
              Get Appointment
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-[#031441]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t p-4 absolute top-full left-0 right-0 shadow-lg animate-in slide-in-from-top">
            <div className="flex flex-col space-y-4">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-semibold py-2 uppercase text-xs tracking-widest ${location.pathname === item.path ? 'text-accent' : 'text-gray-800'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/contact" className="bg-accent text-white px-6 py-3 rounded text-sm font-bold text-center uppercase tracking-wider">
                Get Appointment
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-[#031441] text-white pt-20 pb-10">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-accent rounded flex items-center justify-center text-white font-bold text-xl italic">C</div>
              <span className="text-2xl font-bold tracking-tight">Coolex</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              We specialize in top-quality HVAC services, ensuring your indoor comfort all year round. From repairs to installations, we have you covered.
            </p>
            <div className="flex space-x-3">
              {SOCIAL_LINKS.map((link, idx) => (
                <a key={idx} href={link.url} className="w-10 h-10 border border-white/20 rounded flex items-center justify-center hover:bg-accent hover:border-accent transition-all">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-accent pb-2 inline-block">Address</h4>
            <div className="space-y-4 text-gray-400">
              <p className="flex items-start space-x-3">
                <MapPin className="text-accent flex-shrink-0" size={18} />
                <span>{CONTACT_INFO.address}</span>
              </p>
              <h4 className="text-lg font-bold mt-8 mb-4 border-b border-accent pb-2 inline-block text-white">Phone</h4>
              <p className="flex items-center space-x-3">
                <Phone className="text-accent" size={18} />
                <span>{CONTACT_INFO.phone}</span>
              </p>
              <p className="flex items-center space-x-3">
                <Mail className="text-accent" size={18} />
                <span>{CONTACT_INFO.email}</span>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-accent pb-2 inline-block">Company</h4>
            <ul className="space-y-4 text-gray-400">
              {['About', 'Our Mission', 'Our Blogs', 'Help Center', 'Contact Us'].map((item) => (
                <li key={item}><a href="#" className="hover:text-accent transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-accent pb-2 inline-block">Service</h4>
            <ul className="space-y-4 text-gray-400">
              {['AC Installation', 'Thermostat Install', 'Emergency Repair', 'Full Maintenance', 'Tailored Solutions'].map((item) => (
                <li key={item}><a href="#" className="hover:text-accent transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="container mx-auto px-4 bg-[#0a1e53] rounded-xl p-8 mb-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <h3 className="text-2xl font-bold max-w-md text-center lg:text-left">Join our newsletter to stay updated with our latest news</h3>
            <div className="flex w-full lg:w-auto">
              <input type="email" placeholder="Your Email" className="bg-[#031441] border-none text-white px-6 py-4 rounded-l-md focus:outline-none w-full lg:w-80" />
              <button className="bg-accent text-white px-6 py-4 rounded-r-md hover:bg-[#e64a19] transition-colors">
                <Mail size={24} />
              </button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pt-10 border-t border-white/10 text-center text-gray-400 text-sm">
          <p>© Copyright {new Date().getFullYear()} by Company.com</p>
        </div>
      </footer>

      {/* Back to top */}
      {isScrolled && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-accent text-white p-3 rounded-full shadow-lg z-50 hover:bg-[#031441] transition-all duration-300"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
};

export default Layout;
