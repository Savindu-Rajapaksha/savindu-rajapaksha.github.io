import React, { useState, useEffect, useRef } from 'react';
import { Monitor, Smartphone, Globe, Briefcase, Ticket, ShoppingCart, PlaneTakeoff } from 'lucide-react';
import ComponentWrapper from '../components/ComponentWrapper';
import ImageSlider from '../components/ImageSlider'; // Import the new component
import projectimg1 from '../images/projectimg1.png'; // Web project image
import projectimg2 from '../images/projectimg2.png'; // Standalone project image
import projectimg3 from '../images/projectimg3.png'; // Standalone project image

const RecentProjects = () => {
  const [activeTab, setActiveTab] = useState('web'); // 'web' or 'standalone'
  const autoSwitchTimerRef = useRef(null);
  const containerRef = useRef(null);

  // Define separate image arrays for web and standalone projects
  const webProjectImages = [projectimg1];
  const standaloneProjectImages = [projectimg2, projectimg3];

  // Function to start/restart auto-switching timer
  const startAutoSwitchTimer = () => {
    // Clear any existing timer first
    if (autoSwitchTimerRef.current) {
      clearInterval(autoSwitchTimerRef.current);
    }
    
    // Set up a new interval
    autoSwitchTimerRef.current = setInterval(() => {
      setActiveTab(currentTab => currentTab === 'web' ? 'standalone' : 'web');
    }, 6000); // Change tab every 6 seconds
  };
  
  // Handle manual tab change
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    startAutoSwitchTimer(); // Reset the timer when a tab is manually clicked
  };

  // Auto-switching tabs effect with intersection observer
  useEffect(() => {
    // Create an observer to detect when the component is visible
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        
        // If component is visible, start auto-switching
        if (entry.isIntersecting) {
          startAutoSwitchTimer();
        } else {
          // If component is not visible, clear the timer
          if (autoSwitchTimerRef.current) {
            clearInterval(autoSwitchTimerRef.current);
          }
        }
      },
      { threshold: 0.3 } // Component is considered "visible" when 30% of it is in view
    );
    
    // Start observing the container
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    // Clean up on unmount
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
      if (autoSwitchTimerRef.current) {
        clearInterval(autoSwitchTimerRef.current);
      }
    };
  }, []);

  // Define web projects
  const webProjects = [
    {
      icon: <Globe className="h-6 w-6 text-cyan-400" />,
      iconBg: "cyan-500",
      title: "ExportHaven",
      titleGradient: "from-cyan-400 to-blue-500", // Updated to match screenshot
      description: "I Developed the ad management section and chat feature using RESTful APIs and Socket io.",
      status: "Online",
      statusColor: "green",
      category: "Web",
      technologies: [
        { name: "React.JS", color: "red" },
        { name: "Node.JS", color: "orange" },
        { name: "MongoDB", color: "purple" },
        { name: "Postman", color: "green" },
        { name: "GitHub", color: "blue" }
      ]
    }
  ];

  // Define standalone projects
  const standaloneProjects = [
    {
      icon: <Ticket className="h-6 w-6 text-blue-400" />,
      iconType: "lucide",
      iconBg: "blue-600",
      title: "Live Event Ticketing System",
      titleGradient: "from-cyan-400 to-blue-500", // Updated to match screenshot
      description: "Developed an event ticketing platform using multi-threading and Producer-Consumer pattern.",
      status: "Offline",
      statusColor: "gray",
      category: "Standalone",
      technologies: [
        { name: "Java", color: "red" },
        { name: "SpringBoot", color: "green" },
        { name: "React.JS", color: "blue" },
        { name: "MySQL", color: "orange" },
        { name: "Postman", color: "purple" }
      ]
    },
    {
      icon: <ShoppingCart className="h-6 w-6 text-blue-400" />,
      iconType: "lucide",
      iconBg: "blue-600",
      title: "Simple POS system",
      titleGradient: "from-cyan-400 to-blue-500", // Updated to match screenshot
      description: "Developed a basic POS system using MVC architecture and implementing full CRUD operations.",
      status: "Offline",
      statusColor: "gray",
      category: "Standalone",
      technologies: [
        { name: "SpringBoot", color: "red" },
        { name: "MySQL", color: "green" },
        { name: "Postman", color: "blue" },
        { name: "Swagger", color: "orange" }
      ]
    },
    {
      icon: <PlaneTakeoff className="h-6 w-6 text-cyan-400" />,
      iconType: "lucide",
      iconBg: "cyan-500",
      title: "Airline Ticketing System",
      titleGradient: "from-cyan-400 to-blue-500", // Updated to match screenshot
      description: "Developed an airplane seat booking system using Java CLI.",
      status: "Offline",
      statusColor: "gray",
      category: "Standalone",
      technologies: [
        { name: "Java", color: "red" }
      ]
    }
  ];

  return (
    <ComponentWrapper>
      {/* Added reference to the container */}
      <div ref={containerRef} className="mt-16 pt-8">
        {/* Recent Projects Header */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-3">Recent Projects</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Project Type Selector with auto-switch indicator */}
        <div className="flex justify-center mb-16">
          <div className="bg-gray-800/60 backdrop-blur-md rounded-full p-1.5 flex flex-wrap justify-center relative">
            <button 
              className={`px-6 py-2.5 rounded-full transition-all duration-300 font-medium ${
                activeTab === 'web' 
                ? 'bg-blue-500 text-white shadow-lg' 
                : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => handleTabChange('web')}
            >
              <div className="flex items-center">
                <Globe className="mr-2 h-4 w-4" />
                Web Projects
              </div>
            </button>
            <button 
              className={`px-6 py-2.5 rounded-full transition-all duration-300 font-medium ${
                activeTab === 'standalone' 
                ? 'bg-blue-500 text-white shadow-lg' 
                : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => handleTabChange('standalone')}
            >
              <div className="flex items-center">
                <Monitor className="mr-2 h-4 w-4" />
                Standalone Projects
              </div>
            </button>
            
            {/* Small indicator that this auto-switches */}
            <div className="absolute -bottom-6 left-0 right-0 flex justify-center">
              <div className="bg-gray-800/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-gray-400">
                Auto-switching when in view
              </div>
            </div>
          </div>
        </div>

        {/* Description Text */}
        <div className="mb-14">
          <p className="text-center text-gray-400 max-w-2xl mx-auto">
            {activeTab === 'web' ? (
              <>In below section contains web sites, web services that are developed using various technologies. Such as <span className="text-blue-400">React</span>, <span className="text-green-400">Node.js</span></>
            ) : (
              <>Standalone Solutions that developed with <span className="text-orange-400">Java</span>, <span className="text-blue-400">SpringBoot</span> & <span className="text-red-400">React</span> can found in below section</>
            )}
          </p>
        </div>

        {/* Showcase Image - Show different images based on active tab */}
        <div className="flex justify-center mb-20 relative">
          <ImageSlider 
            images={activeTab === 'web' ? webProjectImages : standaloneProjectImages} 
            interval={4000} 
            autoPlay={true} 
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Show projects based on active tab */}
          {(activeTab === 'web' ? webProjects : standaloneProjects).map((project, index) => (
            <div 
              key={index}
              className="bg-gray-800/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-700 hover:border-blue-800 hover:shadow-blue-500/10"
            >
              <div className="flex items-center mb-4">
                <div className={`w-16 h-16 rounded-full bg-${project.iconBg}/20 flex items-center justify-center mr-4`}>
                  {project.iconType === 'lucide' ? (
                    project.icon
                  ) : (
                    project.icon
                  )}
                </div>
                <h5 className={`text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${project.titleGradient}`}>
                  {project.title}
                </h5>
              </div>
              
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <span className="text-xs font-medium text-gray-500 mr-2">Status:</span>
                  <span className={`px-3 py-1 ${project.status === "Online" ? "bg-green-500/20 text-green-400" : "bg-gray-500/20 text-gray-400"} rounded-full text-xs font-medium`}>
                    {project.status}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-xs font-medium text-gray-500 mr-2">Category:</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className={`px-3 py-1 bg-${tech.color}-500/20 text-${tech.color}-400 rounded-full text-xs font-medium`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default RecentProjects;