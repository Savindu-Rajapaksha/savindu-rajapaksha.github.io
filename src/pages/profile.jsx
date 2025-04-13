import React, { useState, useEffect } from "react";
import {
  Github,
  Mail,
  Linkedin,
  Phone,
  Download,
  ChevronDown
} from "lucide-react";
import profileImage from "../images/image.png";
import resumePdf from "../images/Savindu_Rajapaksha.pdf"; // Import the PDF file

// Star icon component - Updated to use cyan color consistently
const Star = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6 text-cyan-500" // Changed from text-cyan-400 to text-cyan-500 for more consistent blue
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

// Custom Frontend Icon (Code brackets)
const FrontendIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

// Custom Backend Icon (Terminal-like)
const BackendIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <polyline points="4 17 10 11 4 5"></polyline>
    <line x1="12" y1="19" x2="20" y2="19"></line>
  </svg>
);

// Custom FullStack Icon (Circle with dots/connections)
const FullStackIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="8" r="1" fill="currentColor"></circle>
    <circle cx="8" cy="14" r="1" fill="currentColor"></circle>
    <circle cx="16" cy="14" r="1" fill="currentColor"></circle>
    <line x1="12" y1="9" x2="8" y2="13"></line>
    <line x1="12" y1="9" x2="16" y2="13"></line>
  </svg>
);

const Headerfile = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Check if mobile
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check initially
    checkIsMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIsMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const skills = [
    { icon: <FrontendIcon />, text: "Front-End", delay: 100 },
    { icon: <BackendIcon />, text: "Back-end", delay: 200 },
    { icon: <FullStackIcon />, text: "Full Stack", delay: 300 },
  ];

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
      href: "mailto:savindu.h.rajapaksha@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5 text-white" />,
      label: "Phone",
      href: "https://wa.me/94702430521",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-transparent pt-1">
      {/* Changed from absolute to relative positioning */}
      <div className="relative flex flex-col items-center justify-start pt-10 sm:pt-16 md:pt-20 p-4 sm:p-6 md:p-8 lg:p-16 z-10">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div
            className={`flex flex-col gap-6 md:gap-8 transition-all duration-1000 ease-in-out mt-12 ${
              isVisible
                ? "transform-none opacity-100"
                : "translate-x-full opacity-0"
            }`}
          >
            <div className="relative">
              <div className="absolute -left-4 -top-4">
                <div className="relative">
                  <Star />
                  <div className="absolute inset-0 animate-ping opacity-75">
                    <Star />
                  </div>
                </div>
              </div>
              <h2 className="text-lg sm:text-xl font-semibold tracking-wider text-white text-opacity-90">
                WELCOME TO MY WORLD
              </h2>
              <h1 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Hello, I'm{" "}
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  Savindu Rajapaksha
                </span>
              </h1>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  style={{ transitionDelay: `${skill.delay}ms` }}
                  className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-1.5 sm:py-3 rounded-full bg-gray-800/80 border border-gray-700 transition-all duration-500 ease-in-out hover:scale-110 hover:border-cyan-900 hover:shadow-lg hover:shadow-cyan-500/20 ${
                    isVisible
                      ? "transform-none opacity-100"
                      : "-translate-x-full opacity-0"
                  }`}
                >
                  {skill.icon}
                  <span className="font-medium text-xs sm:text-sm md:text-base text-white">
                    {skill.text}
                  </span>
                </div>
              ))}
            </div>

            <p className="max-w-2xl text-sm sm:text-base md:text-lg text-white leading-relaxed p-4 sm:p-6 bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-700 shadow-lg shadow-black/10">
              Architecting digital masterpieces that solve complex problems with elegant simplicity. Where vision meets execution, possibilities become reality.
            </p>

            {/* Mobile Profile Image - Only visible on mobile */}
            <div className="flex justify-center lg:hidden mb-4 sm:mb-6">
              <div className="relative w-40 sm:w-56 md:w-64 h-40 sm:h-56 md:h-64 rounded-2xl overflow-hidden transition-all duration-500 ease-in-out hover:scale-105 shadow-xl shadow-cyan-500/30">
                <div className="absolute inset-0 rounded-2xl border border-white/30 z-10"></div>
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover z-1 filter-none"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <a 
                href={resumePdf} 
                download="Savindu_Rajapaksha_Resume.pdf"
                className="w-full sm:w-auto relative overflow-hidden px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-400 bg-[length:200%_auto] font-semibold tracking-wide text-white shadow-lg shadow-cyan-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/60 transition-all duration-500 ease-in-out text-center"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Download Resume
                  <Download className="w-4 h-4" />
                </span>
              </a>

              <div className="flex gap-4 mt-2 sm:mt-0">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="relative"
                    onMouseEnter={() => setHoveredSocial(social.label)}
                    onMouseLeave={() => setHoveredSocial("")}
                  >
                    <div className="relative p-2 sm:p-3 bg-gray-800/80 rounded-full border border-gray-700 transition-all duration-400 ease-in-out hover:border-cyan-900 hover:scale-110">
                      <div className="relative flex items-center justify-center">
                        {social.icon}
                      </div>
                    </div>
                    {hoveredSocial === social.label && (
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-4 py-2 bg-gray-800/80 rounded-full text-white text-sm whitespace-nowrap shadow-lg shadow-black/10 border border-gray-700">
                        {social.label}
                      </div>
                    )}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Intern Status Badge - Below social media icons on mobile */}
            <div className="lg:hidden w-full p-4 sm:p-5 bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-700 transform scale-100 transition-all duration-400 ease-in-out hover:-translate-y-2 hover:scale-105 hover:border-cyan-900 hover:shadow-lg hover:shadow-cyan-500/50">
              <div className="text-white text-center">
                <p className="text-xs sm:text-sm font-medium text-white">
                  SEEKING
                </p>
                <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Intern
                </p>
                <p className="text-xs sm:text-sm text-white">of Software Engineer</p>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Image (Desktop only) */}
          <div className="hidden lg:block relative">
            <div className="relative w-88 ml-auto flex justify-center">
              <div className="relative w-80 h-80 rounded-2xl overflow-hidden transition-all duration-500 ease-in-out hover:scale-105 shadow-xl shadow-cyan-500/30 -ml-40">
                {/* Simple border without blur */}
                <div className="absolute inset-0 rounded-2xl border border-white/30 z-10"></div>

                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover z-1 filter-none"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 p-6 bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-700 transform scale-100 transition-all duration-400 ease-in-out hover:-translate-y-2 hover:scale-105 hover:border-cyan-900 hover:shadow-lg hover:shadow-cyan-500/50">
                <div className="text-white">
                  <p className="text-sm font-medium text-white">
                    SEEKING
                  </p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Intern
                  </p>
                  <p className="text-white"> of Software Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reduced space at the bottom for mobile */}
      {isMobile && <div className="h-4"></div>}

      {/* Only show chevron on desktop */}
      {!isMobile && (
        <div className="relative bottom-8 left-1/2 -translate-x-1/2 z-10 flex justify-center mt-8">
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-white text-opacity-50 animate-bounce" />
        </div>
      )}
    </div>
  );
};

export default Headerfile;