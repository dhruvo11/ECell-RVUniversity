import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Initiatives', path: '/initiatives' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Team', path: '/#team' },
  ];

  const isActive = (path: string) => {
    if (path.startsWith('/#')) return false;
    return location.pathname === path;
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 bg-black border-b border-white/10 ${
        scrolled ? 'py-3 shadow-2xl shadow-black' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-4">
            <div className="bg-white p-1 rounded-sm">
              <img 
                src="input_file_0.png" 
                alt="ECell RVU Logo" 
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="h-8 w-[1px] bg-white/20 mx-1" />
            <img 
              src="input_file_1.png" 
              alt="RV University Logo" 
              className="h-8 object-contain brightness-0 invert"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${
                  isActive(link.path) ? 'text-white' : 'text-white/50 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center gap-6 pl-6 border-l border-white/10">
              <button className="bg-white text-black px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-white/80 transition-all">
                Join Us
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-4 text-xs font-bold uppercase tracking-widest border-b border-white/10 ${
                    isActive(link.path) ? 'text-white' : 'text-white/50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-3">
                <button className="w-full bg-white text-black px-6 py-3 text-xs font-bold uppercase tracking-widest">
                  Join Us
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
