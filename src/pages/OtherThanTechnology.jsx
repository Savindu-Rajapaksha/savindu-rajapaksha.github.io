import React, { useState, useEffect } from 'react';
import { Heart, Award, Bot, MapPin, Gamepad2 } from 'lucide-react';
import ComponentWrapper from '../components/ComponentWrapper';

const OtherThanTechnology = () => {
  // State for mouse position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Update mouse position on move
  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <ComponentWrapper>
      <div 
        className="relative z-10 w-full pt-0"
        onMouseMove={handleMouseMove}
      >      
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-3 hover:scale-105 transition-transform duration-300">
            Other than the technology
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full hover:w-32 transition-all duration-300"></div>
        </div>

        {/* Soft Skills Section */}
        <div className="mb-12 w-full px-4 lg:px-0">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mr-4 hover:rotate-12 transition-transform duration-300">
              <Award className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-white hover:text-blue-400 transition-colors duration-300">Soft Skills</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
            {/* Teamwork Skill */}
            <div className="group perspective">
              <div className="bg-gray-800/40 backdrop-blur-md rounded-2xl p-8 border border-gray-700 hover:border-cyan-500 transition-all duration-500 shadow-lg hover:shadow-cyan-500/10 h-full hover:-translate-y-2 transform-gpu hover:rotate-1">
                <div className="flex justify-center mb-6">
                  <div className="relative w-36 h-36 group-hover:scale-105 transition-transform duration-300">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle 
                        cx="50" 
                        cy="50" 
                        r="45" 
                        fill="none" 
                        stroke="#2A303C" 
                        strokeWidth="8"
                      />
                      <circle 
                        cx="50" 
                        cy="50" 
                        r="45" 
                        fill="none" 
                        stroke="url(#teamwork-gradient)" 
                        strokeWidth="8"
                        strokeDasharray="283"
                        strokeDashoffset="0"
                        className="transform origin-center -rotate-90"
                      />
                      <defs>
                        <linearGradient id="teamwork-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#06b6d4" />
                          <stop offset="100%" stopColor="#3b82f6" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:scale-110 transition-transform duration-500">100%</span>
                      <span className="text-sm text-gray-400 mt-1 group-hover:text-gray-300 transition-colors duration-300">Teamwork</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 text-center leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  Excellent ability to collaborate, contribute ideas, and support team members to achieve common goals.
                </p>
              </div>
            </div>

            {/* Critical Thinking Skill */}
            <div className="group perspective">
              <div className="bg-gray-800/40 backdrop-blur-md rounded-2xl p-8 border border-gray-700 hover:border-orange-500 transition-all duration-500 shadow-lg hover:shadow-orange-500/10 h-full hover:-translate-y-2 transform-gpu hover:-rotate-1">
                <div className="flex justify-center mb-6">
                  <div className="relative w-36 h-36 group-hover:scale-105 transition-transform duration-300">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle 
                        cx="50" 
                        cy="50" 
                        r="45" 
                        fill="none" 
                        stroke="#2A303C" 
                        strokeWidth="8"
                      />
                      <circle 
                        cx="50" 
                        cy="50" 
                        r="45" 
                        fill="none" 
                        stroke="url(#critical-gradient)" 
                        strokeWidth="8"
                        strokeDasharray="283"
                        strokeDashoffset="28.3"
                        className="transform origin-center -rotate-90"
                      />
                      <defs>
                        <linearGradient id="critical-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#f97316" />
                          <stop offset="100%" stopColor="#db2777" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 group-hover:scale-110 transition-transform duration-500">90%</span>
                      <span className="text-sm text-gray-400 mt-1 group-hover:text-gray-300 transition-colors duration-300">Critical Thinking</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 text-center leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  Strong analytical skills to evaluate situations, identify problems, and develop effective solutions.
                </p>
              </div>
            </div>

            {/* Social Skills */}
            <div className="group perspective">
              <div className="bg-gray-800/40 backdrop-blur-md rounded-2xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-500 shadow-lg hover:shadow-purple-500/10 h-full hover:-translate-y-2 transform-gpu hover:rotate-1">
                <div className="flex justify-center mb-6">
                  <div className="relative w-36 h-36 group-hover:scale-105 transition-transform duration-300">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle 
                        cx="50" 
                        cy="50" 
                        r="45" 
                        fill="none" 
                        stroke="#2A303C" 
                        strokeWidth="8"
                      />
                      <circle 
                        cx="50" 
                        cy="50" 
                        r="45" 
                        fill="none" 
                        stroke="url(#social-gradient)" 
                        strokeWidth="8"
                        strokeDasharray="283"
                        strokeDashoffset="28.3"
                        className="transform origin-center -rotate-90"
                      />
                      <defs>
                        <linearGradient id="social-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#8b5cf6" />
                          <stop offset="100%" stopColor="#d946ef" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 group-hover:scale-110 transition-transform duration-500">90%</span>
                      <span className="text-sm text-gray-400 mt-1 group-hover:text-gray-300 transition-colors duration-300">Social Skills</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 text-center leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  Excellent communication abilities and interpersonal skills that facilitate effective collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Interests Section */}
        <div className="w-full px-4 lg:px-0">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center mr-4 hover:rotate-12 transition-transform duration-300">
              <Heart className="h-6 w-6 text-pink-400" />
            </div>
            <h3 className="text-2xl font-bold text-white hover:text-pink-400 transition-colors duration-300">Interests</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {/* Technology Interest */}
            <div className="group">
              <div className="bg-gray-800/40 backdrop-blur-md rounded-2xl p-6 border border-gray-700 hover:border-indigo-500 transition-all duration-300 shadow-lg h-full hover:-translate-y-2 transform-gpu hover:rotate-1">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center mr-4 group-hover:rotate-12 transition-transform duration-300">
                    <Bot className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors duration-300">Technologies</h4>
                  </div>
                </div>
                <p className="text-gray-400 ml-16 group-hover:text-gray-300 transition-colors duration-300">
                  such as Robotics & Automobile
                </p>
              </div>
            </div>
            
            {/* Crypto Interest - Replace Soft Science */}
            <div className="group">
              <div className="bg-gray-800/40 backdrop-blur-md rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 shadow-lg h-full hover:-translate-y-2 transform-gpu hover:-rotate-1">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mr-4 group-hover:rotate-12 transition-transform duration-300">
                    {/* Replace Brain icon with Bitcoin icon */}
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-6 w-6 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3v3m0-3c-3.87 0-7 3.13-7 7m7-7c3.87 0 7 3.13 7 7m-7 7v-3m-3-4h6m-6 0c-.55 0-1 .45-1 1s.45 1 1 1m6-2c.55 0 1 .45 1 1s-.45 1-1 1" 
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300">Cryptocurrency</h4>
                  </div>
                </div>
                <p className="text-gray-400 ml-16 group-hover:text-gray-300 transition-colors duration-300">
                  Trading & Blockchain Technology
                </p>
              </div>
            </div>
            
            {/* Traveling & Gaming Interest - Fix the spacing */}
            <div className="group">
              <div className="bg-gray-800/40 backdrop-blur-md rounded-2xl p-6 border border-gray-700 hover:border-green-500 transition-all duration-300 shadow-lg h-full hover:-translate-y-2 transform-gpu hover:rotate-1">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center mr-4 group-hover:-rotate-12 transition-transform duration-300">
                    <Gamepad2 className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors duration-300">Travelling & Gaming</h4>
                  </div>
                </div>
                <p className="text-gray-400 ml-16 group-hover:text-gray-300 transition-colors duration-300">
                  Travelling, Hiking & Computer Gaming
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default OtherThanTechnology;