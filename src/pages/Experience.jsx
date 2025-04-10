import React, { useState, useEffect } from 'react';
import { Briefcase, Calendar, Code, Package, Award, ExternalLink, GraduationCap, School, Clock, Trophy, MapPin } from 'lucide-react';
import ComponentWrapper from '../components/ComponentWrapper';

function Experience() {
  // State to track if we're on mobile
  const [isMobile, setIsMobile] = useState(false);
  
  // Check window size on mount and when resized
  useEffect(() => {
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

  // Handle smooth scrolling for navigation links
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ComponentWrapper>
      {/* Mobile-only Experience heading */}
      {isMobile && (
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            My Experience
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </div>
      )}
      
      <div className="flex flex-col lg:flex-row lg:space-x-6 pt-0 px-4 sm:px-6">
        {/* Left sidebar - Skills Overview */}
        <div className="w-full lg:w-64 flex-shrink-0 lg:mr-8 mb-8 lg:mb-0">
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-5 lg:sticky lg:top-24 border border-gray-700">
            <div className="mb-4">
              <h3 className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-3">
                Quick Navigation
              </h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#career" 
                    onClick={(e) => handleNavClick(e, 'career')}
                    className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    <Briefcase className="h-4 w-4 mr-2" />
                    <span>Career Experience</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#academic" 
                    onClick={(e) => handleNavClick(e, 'academic')}
                    className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    <GraduationCap className="h-4 w-4 mr-2" />
                    <span>Academic Qualifications</span>
                  </a>
                </li>
              </ul>
              <div className="h-px w-full bg-gray-700 my-4"></div>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
                Skills Overview
              </h3>
              <div className="space-y-4">
                {/* Java */}
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300 text-sm sm:text-base">Java</span>
                    <span className="text-blue-400 font-medium text-sm sm:text-base">Expert</span>
                  </div>
                  <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                
                {/* SpringBoot */}
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300 text-sm sm:text-base">SpringBoot</span>
                    <span className="text-blue-400 font-medium text-sm sm:text-base">Advanced</span>
                  </div>
                  <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                
                {/* JavaScript */}
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300 text-sm sm:text-base">Java Script</span>
                    <span className="text-blue-400 font-medium text-sm sm:text-base">Intermediate</span>
                  </div>
                  <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                
                {/* Node.JS */}
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300 text-sm sm:text-base">Node.JS</span>
                    <span className="text-blue-400 font-medium text-sm sm:text-base">Intermediate</span>
                  </div>
                  <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
                
                {/* React.JS */}
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300 text-sm sm:text-base">React.JS</span>
                    <span className="text-blue-400 font-medium text-sm sm:text-base">Intermediate</span>
                  </div>
                  <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="w-full max-w-5xl pl-0 sm:pl-4">
          {/* Career Experience Section */}
          <div id="career" className="flex flex-col items-start mb-8 sm:mb-12 ml-0 sm:ml-2 mt-2">
            <div className="relative mb-4 sm:mb-6">
              <Briefcase className="h-10 w-10 sm:h-12 sm:w-12 text-cyan-400 relative z-10" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 tracking-tight mb-2">Career Experience</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
          </div>

          {/* Modified Timeline Layout */}
          <div className="space-y-16 sm:space-y-32 relative">
            {/* The vertical line that spans all entries - hidden on small screens */}
            <div className="absolute left-6 sm:left-[120px] top-0 bottom-0 w-1 bg-blue-500 rounded-full h-full hidden sm:block"></div>
            
            {/* 2023 Experience */}
            <div className="flex flex-col md:flex-row md:items-start gap-4 sm:gap-6 relative">
              {/* Left side - Year - simplified for mobile */}
              <div className={`flex items-center sm:block ${isMobile ? 'mb-4' : 'w-28 flex-shrink-0'} relative`}>
                <span className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 mr-2 sm:mr-0">2023</span>
                <p className="text-gray-400 text-xs sm:text-sm sm:translate-x-2">Present</p>
                <div className={`${isMobile ? 'hidden' : 'mt-2 absolute left-[80px] top-[10px]'}`}>
                  <div className="h-6 w-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 relative z-10 border-4 border-gray-800 shadow-lg shadow-blue-500/20"></div>
                </div>
              </div>
              
              {/* Right side - Content */}
              <div className={`flex-1 ${isMobile ? '' : 'md:ml-24'}`}>
                <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-700 hover:border-blue-800 hover:shadow-blue-500/10">
                  <div className="flex items-center mb-4">
                    <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-xl bg-gray-700 flex items-center justify-center mr-3 sm:mr-4">
                      <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">Informatics Institute of Technology (IIT)</h3>
                  </div>
                  
                  <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                  Presently, studying Software Engineering at Informatics Institute of Technology (IIT), focusing on advanced programming concepts and enterprise software development since September 2023.
                  </p>

                  <div className="mb-4 sm:mb-5 bg-gray-700 rounded-xl p-3 sm:p-4">
                    <div className="flex items-center mb-2 sm:mb-3">
                      <Code className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mr-2" />
                      <h4 className="font-semibold text-sm sm:text-base text-gray-200">Technologies</h4>
                    </div>
                    <div className="flex flex-wrap gap-2 ml-6 sm:ml-7">
                      <span className="px-2 sm:px-3 py-1 bg-gray-800 rounded-full text-xs sm:text-sm font-medium text-blue-400 border border-gray-700">
                        Java
                      </span>
                      <span className="px-2 sm:px-3 py-1 bg-gray-800 rounded-full text-xs sm:text-sm font-medium text-blue-400 border border-gray-700">
                        Python
                      </span>
                      <span className="px-2 sm:px-3 py-1 bg-gray-800 rounded-full text-xs sm:text-sm font-medium text-blue-400 border border-gray-700">
                        Node.js
                      </span>
                      <span className="px-2 sm:px-3 py-1 bg-gray-800 rounded-full text-xs sm:text-sm font-medium text-blue-400 border border-gray-700">
                        MySQL
                      </span>
                      <span className="px-2 sm:px-3 py-1 bg-gray-800 rounded-full text-xs sm:text-sm font-medium text-blue-400 border border-gray-700">
                        Java Script
                      </span>
                      <span className="px-2 sm:px-3 py-1 bg-gray-800 rounded-full text-xs sm:text-sm font-medium text-blue-400 border border-gray-700">
                        MongoDB
                      </span>
                    </div>
                  </div>

                  <div className="bg-gray-700 rounded-xl p-3 sm:p-4">
                    <div className="flex items-center mb-2 sm:mb-3">
                      <Award className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mr-2" />
                      <h4 className="font-semibold text-sm sm:text-base text-gray-200">Role</h4>
                    </div>
                    <div className="ml-6 sm:ml-7">
                      <span className="px-3 sm:px-4 py-1 sm:py-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-xs sm:text-sm font-medium text-white shadow-lg">
                      Undergraduate Student
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Qualifications Section */}
          <div id="academic" className="flex flex-col items-start mb-8 sm:mb-12 ml-0 sm:ml-2 mt-16 sm:mt-32">
            <div className="relative mb-4 sm:mb-6">
              <GraduationCap className="h-10 w-10 sm:h-12 sm:w-12 text-cyan-400 relative z-10" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 tracking-tight mb-2">Academic Qualifications</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
          </div>

          {/* Academic Timeline */}
          <div className="space-y-16 sm:space-y-32 relative">
            {/* The vertical line for Academic Qualifications - hidden on small screens */}
            <div className="absolute left-6 sm:left-[120px] top-0 bottom-0 w-1 bg-blue-500 rounded-full h-full hidden sm:block"></div>
            
            {/* 2019 BSc */}
            <div className="flex flex-col md:flex-row md:items-start gap-4 sm:gap-6 relative">
              {/* Left side - Year - simplified for mobile */}
              <div className={`flex items-center sm:block ${isMobile ? 'mb-4' : 'w-28 flex-shrink-0'} relative`}>
                <span className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 mr-2 sm:mr-0">2019</span>
                <p className="text-gray-400 text-xs sm:text-sm">Undergraduate</p>
                <div className={`${isMobile ? 'hidden' : 'mt-2 absolute left-[80px] top-[10px]'}`}>
                  <div className="h-6 w-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 relative z-10 border-4 border-gray-800 shadow-lg shadow-blue-500/20"></div>
                </div>
              </div>
              
              {/* Right side - Content */}
              <div className={`flex-1 ${isMobile ? '' : 'md:ml-24'}`}>
                <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-700 hover:border-blue-900 hover:shadow-blue-500/10">
                  <div className="flex items-center mb-4">
                    <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-xl bg-gray-700 flex items-center justify-center mr-3 sm:mr-4">
                      <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">BEng (Hons) Software Engineering</h3>
                  </div>
                  
                  <div className="flex items-center mb-4 sm:mb-6">
                    <School className="h-4 w-4 text-blue-400 mr-2" />
                    <p className="text-sm sm:text-base text-gray-300 font-medium">Informatics Institute of Technology (IIT)</p>
                  </div>

                  <div className="mb-4 sm:mb-5 bg-gray-700 rounded-xl p-3 sm:p-4">
                    <div className="flex items-center mb-2 sm:mb-3">
                      <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mr-2" />
                      <h4 className="font-semibold text-sm sm:text-base text-gray-200">Duration</h4>
                    </div>
                    <p className="text-sm sm:text-base text-gray-300 ml-6 sm:ml-7">From 2023 to 2027</p>
                  </div>

                  <div className="bg-gray-700 rounded-xl p-3 sm:p-4">
                    <div className="flex items-center mb-2 sm:mb-3">
                      <Trophy className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mr-2" />
                      <h4 className="font-semibold text-sm sm:text-base text-gray-200">Achievement</h4>
                    </div>
                    <div className="ml-6 sm:ml-7">
                      <p className="text-sm sm:text-base text-gray-300">Currently pursuing the degree offered by University of Westminster - London</p>
                      <div className="mt-3 flex items-center">
                        <MapPin className="h-4 w-4 text-blue-400 mr-2" />
                        <span className="text-xs sm:text-sm text-blue-400 font-medium">University of Westminster - London, UK</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2013 Certification */}
            <div className="flex flex-col md:flex-row md:items-start gap-4 sm:gap-6 relative">
              {/* Left side - Year - simplified for mobile */}
              <div className={`flex items-center sm:block ${isMobile ? 'mb-4' : 'w-28 flex-shrink-0'} relative`}>
                <span className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 mr-2 sm:mr-0">2024</span>
                <p className="text-gray-400 text-xs sm:text-sm">Certification</p>
                <div className={`${isMobile ? 'hidden' : 'mt-2 absolute left-[80px] top-[10px]'}`}>
                  <div className="h-6 w-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 relative z-10 border-4 border-gray-800 shadow-lg shadow-blue-500/20"></div>
                </div>
              </div>
              
              {/* Right side - Content */}
              <div className={`flex-1 ${isMobile ? '' : 'md:ml-24'}`}>
                <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-700 hover:border-blue-900 hover:shadow-blue-500/10">
                  <div className="flex items-center mb-4">
                    <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-xl bg-gray-700 flex items-center justify-center mr-3 sm:mr-4">
                      <Award className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">SpringBoot Industrial Training Program</h3>
                  </div>
                  
                  <div className="flex items-center mb-4 sm:mb-6">
                    <School className="h-4 w-4 text-blue-400 mr-2" />
                    <p className="text-sm sm:text-base text-gray-300 font-medium">SpringBoot Acedamy Sri Lanka</p>
                  </div>

                  <div className="mb-4 sm:mb-5 bg-gray-700 rounded-xl p-3 sm:p-4">
                    <div className="flex items-center mb-2 sm:mb-3">
                      <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mr-2" />
                      <h4 className="font-semibold text-sm sm:text-base text-gray-200">Duration</h4>
                    </div>
                    <p className="text-sm sm:text-base text-gray-300 ml-6 sm:ml-7">Three months in 2024</p>
                  </div>

                  <div className="bg-gray-700 rounded-xl p-3 sm:p-4">
                    <div className="flex items-center mb-2 sm:mb-3">
                      <Trophy className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mr-2" />
                      <h4 className="font-semibold text-sm sm:text-base text-gray-200">Certification</h4>
                    </div>
                    <div className="ml-6 sm:ml-7">
                      <div className="flex items-center">
                        <span className="px-3 sm:px-4 py-1 sm:py-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-xs sm:text-sm font-medium text-white shadow-lg">
                          SpringBoot Industrial Training
                        </span>
                      </div>
                      <div className="mt-3">
                        <p className="text-sm sm:text-base text-gray-300">Java, SpringBoot Programmer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
}

export default Experience;