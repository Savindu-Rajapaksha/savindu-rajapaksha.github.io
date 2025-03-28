import React, { useState } from 'react';
import ComponentWrapper from '../components/ComponentWrapper';

function Aboutme() {
  const [isVisible, setIsVisible] = useState(true); // Set to true by default for immediate visibility
  
  const techSkills = [
    "Web Application Development",
    "UI/UX Design & Development",
    "Cross-Platform Mobile Application Development"
  ];

  // Custom component for syntax highlighting JSON - keeping exactly as in original
  const ColorfulJSON = () => (
    <pre className="bg-black p-4 rounded-lg overflow-x-auto text-sm font-mono transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
      <span className="text-gray-400">{'{'}</span>
      <br />
      <span className="text-gray-400 ml-4">"</span><span className="text-yellow-300">Name with Initials</span><span className="text-gray-400">"</span><span className="text-gray-400">: </span><span className="text-gray-400">"</span><span className="text-green-400">R. W. Savindu Hansaka Rajapaksah</span><span className="text-gray-400">",</span>
      <br />
      <span className="text-gray-400 ml-4">"</span><span className="text-yellow-300">Born on</span><span className="text-gray-400">"</span><span className="text-gray-400">: </span><span className="text-gray-400">"</span><span className="text-green-400">20th January 2003</span><span className="text-gray-400">",</span>
      <br />
      <span className="text-gray-400 ml-4">"</span><span className="text-yellow-300">Mobile</span><span className="text-gray-400">"</span><span className="text-gray-400">: </span><span className="text-gray-400">"</span><span className="text-green-400">(+94) 702430521</span><span className="text-gray-400">",</span>
      <br />
      <span className="text-gray-400 ml-4">"</span><span className="text-yellow-300">Email</span><span className="text-gray-400">"</span><span className="text-gray-400">: </span><span className="text-gray-400">"</span><span className="text-green-400">savinduhansaka362@gmail.com</span><span className="text-gray-400">",</span>
      <br />
      <span className="text-gray-400 ml-4">"</span><span className="text-yellow-300">Tech-Skills</span><span className="text-gray-400">"</span><span className="text-gray-400">: [</span>
      <br />
      <span className="text-gray-400 ml-8">"</span><span className="text-blue-400">Web Application Development</span><span className="text-gray-400">",</span>
      <br />
      <span className="text-gray-400 ml-8">"</span><span className="text-blue-400">UI/UX Design & Development</span><span className="text-gray-400">",</span>
      <br />
      <span className="text-gray-400 ml-8">"</span><span className="text-blue-400">Cross-Platform Mobile Application Development</span><span className="text-gray-400">"</span>
      <br />
      <span className="text-gray-400 ml-4">]</span>
      <br />
      <span className="text-gray-400">{'}'}</span>
    </pre>
  );

  return (
    <ComponentWrapper>
      <div className="max-w-4xl mx-auto relative z-10">
        {/* About Section */}
        <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-800 hover:border-cyan-900 hover:shadow-cyan-500/10 transition-all duration-300 mb-8">
          <div className="prose prose-invert max-w-none">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent inline-block mb-6">
              About Me
            </h1>
            
            <p className="text-gray-300 mb-4">
              Immersed in a BEng (Hons) Software Engineering program at Informatics Institute of Technology, I am honing my skills in Java, Spring Boot and Node.js. This education, in collaboration with the University of Westminster, shapes me into a problem-solver adept at crafting robust web solutions.
            </p>
          </div>
        </div>
        
        {/* JSON Data Section - Preserving exactly as in original */}
        <div className="mt-8 bg-gray-900/40 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-800 hover:border-cyan-900 hover:shadow-cyan-500/10 transition-all duration-300">
          <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Basic Information</h2>
          <ColorfulJSON />
        </div>
      </div>
    </ComponentWrapper>
  );
}

export default Aboutme;