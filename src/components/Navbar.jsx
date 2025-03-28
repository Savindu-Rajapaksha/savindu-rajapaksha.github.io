import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, Code, FileText, Heart, Download } from 'lucide-react';

const Navbar = ({ onPageChange, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scrolling for navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Handle navigation
  const handleNavigation = (sectionId, event) => {
    event.preventDefault();
    onPageChange(sectionId);
    setIsOpen(false); // Close mobile menu
  };

  const navLinks = [
    { name: 'Home', icon: <Home className="w-5 h-5" />, href: '#header', section: 'header' },
    { name: 'About', icon: <User className="w-5 h-5" />, href: '#about', section: 'about' },
    { name: 'Experience', icon: <Briefcase className="w-5 h-5" />, href: '#experience', section: 'experience' },
    { name: 'Skills', icon: <Code className="w-5 h-5" />, href: '#skills', section: 'skills' },
    { name: 'Projects', icon: <FileText className="w-5 h-5" />, href: '#projects', section: 'projects' },
    { name: 'Other', icon: <Heart className="w-5 h-5" />, href: '#other', section: 'other' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#header" 
              className="flex items-center" 
              onClick={(e) => handleNavigation('header', e)}
            >
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Savindu Rajapaksha
              </span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    currentPage === link.section
                      ? 'text-white bg-gradient-to-r from-cyan-500 to-blue-500'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                  onClick={(e) => handleNavigation(link.section, e)}
                >
                  <div className="flex items-center space-x-1">
                    {link.icon}
                    <span>{link.name}</span>
                  </div>
                </a>
              ))}
              
              {/* Resume Button */}
              <a 
                href="/resume.pdf" 
                download="Savindu_Rajapaksha_Resume.pdf"
                className="ml-4 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-400 bg-[length:200%_auto] font-medium text-white shadow-lg shadow-cyan-500/20 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300"
              >
                <div className="flex items-center gap-1">
                  <span>Resume</span>
                  <Download className="w-4 h-4" />
                </div>
              </a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/80 backdrop-blur-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                currentPage === link.section
                  ? 'text-white bg-gradient-to-r from-cyan-500 to-blue-500'
                  : 'text-gray-300 hover:text-white hover:bg-gray-800'
              }`}
              onClick={(e) => handleNavigation(link.section, e)}
            >
              <div className="flex items-center space-x-3">
                {link.icon}
                <span>{link.name}</span>
              </div>
            </a>
          ))}
          
          {/* Mobile Resume Button */}
          <div className="px-3 py-2">
            <a 
              href="/resume.pdf" 
              download="Savindu_Rajapaksha_Resume.pdf"
              className="block w-full px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-400 bg-[length:200%_auto] font-medium text-white shadow-lg shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300 text-center"
            >
              <div className="flex items-center justify-center gap-1">
                <span>Resume</span>
                <Download className="w-4 h-4" />
              </div>
            </a>
          </div>
        </div>
      </div>
      
      {/* Gradient line - only visible when scrolled */}
      {isScrolled && (
        <div className="w-full">
          <div className="h-px w-full bg-gradient-to-r from-blue-500/30 via-blue-500/80 to-blue-500/30"></div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;