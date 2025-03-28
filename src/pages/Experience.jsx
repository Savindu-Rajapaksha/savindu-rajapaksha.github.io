import React, { useState, useEffect } from 'react';
import { Briefcase, Calendar, Code, Package, Award, ExternalLink, GraduationCap, School, Clock, Trophy, MapPin } from 'lucide-react';
import ComponentWrapper from '../components/ComponentWrapper';

function Experience() {
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
      {/* Added pt-16 (padding-top: 4rem) to ensure content is visible below fixed navbar */}
      <div className="flex flex-col lg:flex-row lg:space-x-6 pt-0">
        {/* Left sidebar - Skills Overview */}
        <div className="w-full lg:w-64 flex-shrink-0 lg:mr-8 mb-8 lg:mb-0">
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-5 lg:sticky lg:top-24 mr-4 border border-gray-700">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-3">
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
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
                Skills Overview
              </h3>
              <div className="space-y-4">
                {/* Java - blue color (was orange/red) */}
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Java</span>
                    <span className="text-blue-400 font-medium">Expert</span>
                  </div>
                  <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                
                {/* SpringBoot - blue color (was green) */}
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">SpringBoot</span>
                    <span className="text-blue-400 font-medium">Advanced</span>
                  </div>
                  <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                
                {/* JavaScript - blue color (was yellow) */}
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Java Script</span>
                    <span className="text-blue-400 font-medium">Intermediate</span>
                  </div>
                  <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                
                {/* Node.JS - blue color (was orange) */}
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Node.JS</span>
                    <span className="text-blue-400 font-medium">Intermediate</span>
                  </div>
                  <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
                
                {/* React.JS - blue color (already blue) */}
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">React.JS</span>
                    <span className="text-blue-400 font-medium">Intermediate</span>
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
          <div id="career" className="flex flex-col items-start mb-12 ml-2 mt-2">
            <div className="relative mb-6">
              <Briefcase className="h-12 w-12 text-cyan-400 relative z-10" />
            </div>
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 tracking-tight mb-2">Career Experience</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
          </div>

          {/* Modified Timeline Layout */}
          <div className="space-y-32 relative">
            {/* The vertical line that spans all entries - Fixed blue line for Career Experience */}
            <div className="absolute left-[120px] top-0 bottom-0 w-1 bg-blue-500 rounded-full h-full"></div>
            
            {/* 2023 Experience - Blue (was Green) */}
            <div className="flex flex-col md:flex-row md:items-start gap-6 relative">
              {/* Left side - Year - keep position but move dot */}
              <div className="w-28 flex-shrink-0 relative flex flex-col items-start ml-0">
                <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">2023</span>
                <p className="text-gray-400 text-sm translate-x-2">Present</p>
                <div className="mt-2 absolute left-[80px] top-[10px]">
                  <div className="h-6 w-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 relative z-10 border-4 border-gray-800 shadow-lg shadow-blue-500/20"></div>
                </div>
              </div>
              
              {/* Right side - Content - moved further to the right */}
              <div className="flex-1 md:ml-24">
                <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-700 hover:border-blue-800 hover:shadow-blue-500/10">
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 rounded-xl bg-gray-700 flex items-center justify-center mr-4">
                      <Briefcase className="h-5 w-5 text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Informatics Institute of Technology (IIT)</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                  Presently, studying Software Engineering at Informatics Institute of Technology (IIT), focusing on advanced programming concepts and enterprise software development since September 2023.
                  </p>

                  <div className="mb-5 bg-gray-700 rounded-xl p-4">
                    <div className="flex items-center mb-3">
                      <Code className="h-5 w-5 text-blue-400 mr-2" />
                      <h4 className="font-semibold text-gray-200">Technologies</h4>
                    </div>
                    <div className="flex flex-wrap gap-2 ml-7">
                      <span className="px-3 py-1 bg-gray-800 rounded-full text-sm font-medium text-blue-400 border border-gray-700">
                        Java
                      </span>
                      <span className="px-3 py-1 bg-gray-800 rounded-full text-sm font-medium text-blue-400 border border-gray-700">
                        Python
                      </span>
                      <span className="px-3 py-1 bg-gray-800 rounded-full text-sm font-medium text-blue-400 border border-gray-700">
                        Node.js
                      </span>
                      <span className="px-3 py-1 bg-gray-800 rounded-full text-sm font-medium text-blue-400 border border-gray-700">
                        MySQL
                      </span>
                      <span className="px-3 py-1 bg-gray-800 rounded-full text-sm font-medium text-blue-400 border border-gray-700">
                        Java Script
                      </span>
                      <span className="px-3 py-1 bg-gray-800 rounded-full text-sm font-medium text-blue-400 border border-gray-700">
                        MongoDB
                      </span>
                    </div>
                  </div>

                  <div className="bg-gray-700 rounded-xl p-4">
                    <div className="flex items-center mb-3">
                      <Award className="h-5 w-5 text-blue-400 mr-2" />
                      <h4 className="font-semibold text-gray-200">Role</h4>
                    </div>
                    <div className="ml-7">
                      <span className="px-4 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-medium text-white shadow-lg">
                      Undergraduate Student
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Qualifications Section */}
          <div id="academic" className="flex flex-col items-start mb-12 ml-2 mt-32">
            <div className="relative mb-6">
              <GraduationCap className="h-12 w-12 text-cyan-400 relative z-10" />
            </div>
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 tracking-tight mb-2">Academic Qualifications</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
          </div>

          {/* Academic Timeline */}
          <div className="space-y-32 relative">
            {/* The vertical line for Academic Qualifications - blue line (was purple to orange gradient) */}
            <div className="absolute left-[120px] top-0 bottom-0 w-1 bg-blue-500 rounded-full h-full"></div>
            
            {/* 2019 BSc - Blue (was Purple) */}
            <div className="flex flex-col md:flex-row md:items-start gap-6 relative">
              {/* Left side - Year */}
              <div className="w-28 flex-shrink-0 relative flex flex-col items-start ml-0">
                <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">2019</span>
                <p className="text-gray-400 text-sm translate-x-0">Undergraduate</p>
                <div className="mt-2 absolute left-[80px] top-[10px]">
                  <div className="h-6 w-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 relative z-10 border-4 border-gray-800 shadow-lg shadow-blue-500/20"></div>
                </div>
              </div>
              
              {/* Right side - Content */}
              <div className="flex-1 md:ml-24">
                <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-700 hover:border-blue-900 hover:shadow-blue-500/10">
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 rounded-xl bg-gray-700 flex items-center justify-center mr-4">
                      <GraduationCap className="h-5 w-5 text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">BEng (Hons) Software Engineering</h3>
                  </div>
                  
                  <div className="flex items-center mb-6">
                    <School className="h-4 w-4 text-blue-400 mr-2" />
                    <p className="text-gray-300 font-medium">Informatics Institute of Technology (IIT)</p>
                  </div>

                  <div className="mb-5 bg-gray-700 rounded-xl p-4">
                    <div className="flex items-center mb-3">
                      <Clock className="h-5 w-5 text-blue-400 mr-2" />
                      <h4 className="font-semibold text-gray-200">Duration</h4>
                    </div>
                    <p className="text-gray-300 ml-7">From 2023 to 2027</p>
                  </div>

                  <div className="bg-gray-700 rounded-xl p-4">
                    <div className="flex items-center mb-3">
                      <Trophy className="h-5 w-5 text-blue-400 mr-2" />
                      <h4 className="font-semibold text-gray-200">Achievement</h4>
                    </div>
                    <div className="ml-7">
                      <p className="text-gray-300">Currently pursuing the degree offered by University of Westminster - London</p>
                      <div className="mt-3 flex items-center">
                        <MapPin className="h-4 w-4 text-blue-400 mr-2" />
                        <span className="text-blue-400 text-sm font-medium">University of Westminster - London, UK</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2013 Certification - Blue (was Orange) */}
            <div className="flex flex-col md:flex-row md:items-start gap-6 relative">
              {/* Left side - Year */}
              <div className="w-28 flex-shrink-0 relative flex flex-col items-start ml-0">
                <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">2013</span>
                <p className="text-gray-400 text-sm translate-x-0">Certification</p>
                <div className="mt-2 absolute left-[80px] top-[10px]">
                  <div className="h-6 w-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 relative z-10 border-4 border-gray-800 shadow-lg shadow-blue-500/20"></div>
                </div>
              </div>
              
              {/* Right side - Content */}
              <div className="flex-1 md:ml-24">
                <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-700 hover:border-blue-900 hover:shadow-blue-500/10">
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 rounded-xl bg-gray-700 flex items-center justify-center mr-4">
                      <Award className="h-5 w-5 text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">SpringBoot Industrial Training Program</h3>
                  </div>
                  
                  <div className="flex items-center mb-6">
                    <School className="h-4 w-4 text-blue-400 mr-2" />
                    <p className="text-gray-300 font-medium">SpringBoot Acedamy Sri Lanka</p>
                  </div>

                  <div className="mb-5 bg-gray-700 rounded-xl p-4">
                    <div className="flex items-center mb-3">
                      <Clock className="h-5 w-5 text-blue-400 mr-2" />
                      <h4 className="font-semibold text-gray-200">Duration</h4>
                    </div>
                    <p className="text-gray-300 ml-7">Three months in 2024</p>
                  </div>

                  <div className="bg-gray-700 rounded-xl p-4">
                    <div className="flex items-center mb-3">
                      <Trophy className="h-5 w-5 text-blue-400 mr-2" />
                      <h4 className="font-semibold text-gray-200">Certification</h4>
                    </div>
                    <div className="ml-7">
                      <div className="flex items-center">
                        <span className="px-4 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-medium text-white shadow-lg">
                          SpringBoot Industrial Training
                        </span>
                      </div>
                      <div className="mt-3">
                        <p className="text-gray-300">Java, SpringBoot Programmer</p>
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