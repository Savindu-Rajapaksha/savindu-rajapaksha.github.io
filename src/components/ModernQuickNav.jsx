import React, { useState, useEffect, useRef } from 'react';
import { Briefcase, GraduationCap, ChevronRight } from 'lucide-react';

const ModernQuickNav = () => {
  // State to track if skills section is visible
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);
  
  // Skills data with skill name, level, percentage
  const skills = [
    { name: "Java", level: "Expert", percentage: 90 },
    { name: "SpringBoot", level: "Advanced", percentage: 75 },
    { name: "Java Script", level: "Intermediate", percentage: 60 },
    { name: "Node.JS", level: "Intermediate", percentage: 65 },
    { name: "React.JS", level: "Intermediate", percentage: 60 }
  ];

  // Set up intersection observer to detect when skills section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Delay animation start slightly for a better effect
          setTimeout(() => {
            setIsVisible(true);
          }, 300);
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the element is visible
      }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  // Handle smooth scrolling for navigation links
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-5 border border-gray-700 hover:border-cyan-800 transition-all duration-300">
      <div className="mb-4">
        <h3 className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
          Quick Navigation
        </h3>
        
        <div className="space-y-3">
          {/* Career Experience Link - Modern Card Style */}
          <a 
            href="#career" 
            onClick={(e) => handleNavClick(e, 'career')}
            className="flex items-center justify-between p-3 bg-gray-900/60 rounded-lg hover:bg-cyan-900/20 transition-all duration-300 group border border-gray-700/50 hover:border-cyan-700"
          >
            <div className="flex items-center">
              <div className="w-9 h-9 rounded-lg bg-cyan-900/30 flex items-center justify-center mr-3 group-hover:bg-cyan-800/40 transition-all duration-300">
                <Briefcase className="h-5 w-5 text-cyan-400" />
              </div>
              <span className="text-gray-300 group-hover:text-cyan-300 transition-colors">Career Experience</span>
            </div>
            <ChevronRight className="h-4 w-4 text-gray-500 group-hover:text-cyan-400 transform group-hover:translate-x-1 transition-all duration-300" />
          </a>
          
          {/* Academic Qualifications Link - Modern Card Style */}
          <a 
            href="#academic" 
            onClick={(e) => handleNavClick(e, 'academic')}
            className="flex items-center justify-between p-3 bg-gray-900/60 rounded-lg hover:bg-blue-900/20 transition-all duration-300 group border border-gray-700/50 hover:border-blue-700"
          >
            <div className="flex items-center">
              <div className="w-9 h-9 rounded-lg bg-blue-900/30 flex items-center justify-center mr-3 group-hover:bg-blue-800/40 transition-all duration-300">
                <GraduationCap className="h-5 w-5 text-blue-400" />
              </div>
              <span className="text-gray-300 group-hover:text-blue-300 transition-colors">Academic Qualifications</span>
            </div>
            <ChevronRight className="h-4 w-4 text-gray-500 group-hover:text-blue-400 transform group-hover:translate-x-1 transition-all duration-300" />
          </a>
        </div>
      </div>

      <div className="h-px w-full bg-gray-700/50 my-5"></div>

      <div ref={skillsRef}>
        <h3 className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-5">
          Skills Overview
        </h3>

        <div className="space-y-4">
          {/* Map through skills array to create skill bars */}
          {skills.map((skill, index) => (
            <div key={index} className="group">
              <div className="flex justify-between mb-1.5">
                <div className="flex items-center">
                  <span className="text-gray-300 text-sm sm:text-base group-hover:text-white transition-colors duration-300">
                    {skill.name}
                  </span>
                </div>
                <span className="text-blue-400 font-medium text-sm sm:text-base">{skill.level}</span>
              </div>
              <div className="h-2.5 w-full bg-gray-700/70 rounded-full overflow-hidden backdrop-blur-sm">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full relative group-hover:shadow-inner shadow-blue-400 transition-all duration-1000 ease-out"
                  style={{ 
                    width: isVisible ? `${skill.percentage}%` : '0%',
                    transitionDelay: `${index * 150}ms` // Stagger the animations
                  }}
                >
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModernQuickNav;