import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone, Heart, ExternalLink, Code, ChevronDown } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [hoveredSocial, setHoveredSocial] = useState("");
  
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5 text-white" />,
      label: "GitHub",
      href: "https://github.com/SavinduHansaka",
    },
    {
      icon: <Linkedin className="w-5 h-5 text-white" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/savindu-rajapaksha/",
    },
    {
      icon: <Mail className="w-5 h-5 text-white" />,
      label: "Email",
      href: "mailto:savinduhansaka362@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5 text-white" />,
      label: "Phone",
      href: "https://wa.me/94702430521",
    },
  ];

  return (
    <>
      {/* Full width horizontal line with padding - Fixed to be truly full width */}
      <div className="w-full pt-16">
        <div className="w-full h-px bg-gradient-to-r from-blue-500/30 via-blue-500/80 to-blue-500/30"></div>
      </div>
      
      <footer className="relative z-10 bg-gray-900/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          {/* Top section with columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Column 1: Brand & Description */}
            <div>
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
                Savindu Rajapaksha
              </h3>
              <p className="text-gray-400 mb-6">
                Software engineer specializing in full-stack development, committed to creating elegant solutions for complex problems.
              </p>
              
              <div className="flex flex-wrap items-center gap-6">

                {/* Social Media Icons */}
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index} 
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="relative p-3 bg-gray-800/80 rounded-full border border-gray-700 hover:border-cyan-900 hover:scale-110 transition-all duration-300"
                      onMouseEnter={() => setHoveredSocial(social.label)}
                      onMouseLeave={() => setHoveredSocial("")}
                    >
                      {social.icon}
                      {hoveredSocial === social.label && (
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-4 py-2 bg-gray-800/80 rounded-full text-white text-sm whitespace-nowrap shadow-lg shadow-black/10 border border-gray-700">
                          {social.label}
                        </div>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#header" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    About Me
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Technical Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Column 3: Contact */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Mail className="w-5 h-5 text-blue-400 mr-3 mt-0.5" />
                  <span className="text-gray-400">savindu.h.rajapaksha@gmail.com</span>
                </li>
                <li className="flex items-start">
                  <Phone className="w-5 h-5 text-blue-400 mr-3 mt-0.5" />
                  <span className="text-gray-400">(+94) 702430521</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-gray-800/80 rounded-xl border border-gray-700">
                <p className="text-gray-400 text-sm">
                  Open to internships and collaboration opportunities.
                </p>
              </div>
            </div>
          </div>
          
          {/* Bottom section with copyright */}
          <div className="pt-3 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Savindu Rajapaksha. All rights reserved.
            </p>
            <div className="flex items-center text-gray-400 text-sm">
              <span className="flex items-center">
                <Code className="w-4 h-4 mr-1" />
                Crafted with
              </span>
              <span>React.js</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;