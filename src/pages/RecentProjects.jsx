import React, { useState, useEffect, useRef } from 'react';
import { Monitor, Smartphone, Globe, Briefcase, Ticket, ShoppingCart, PlaneTakeoff, Github, ExternalLink } from 'lucide-react';
import ComponentWrapper from '../components/ComponentWrapper';
import ImageSlider from '../components/ImageSlider'; // Import the new component
import projectimg1 from '../images/projectimg1.png'; // Web project image
import projectimg2 from '../images/projectimg2.png'; // Standalone project image
import projectimg3 from '../images/projectimg3.png'; // Standalone project image

const RecentProjects = () => {
  const [activeTab, setActiveTab] = useState('web'); // 'web' or 'standalone'
  const autoSwitchTimerRef = useRef(null);
  const containerRef = useRef(null);
  const [tabHeight, setTabHeight] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const webContentRef = useRef(null);
  const standaloneContentRef = useRef(null);

  // Define separate image arrays for web and standalone projects
  const webProjectImages = [projectimg1];
  const standaloneProjectImages = [projectimg2, projectimg3];

  // Function to update tab content height
  const updateTabHeight = () => {
    if (activeTab === 'web' && webContentRef.current) {
      setTabHeight(webContentRef.current.scrollHeight);
    } else if (activeTab === 'standalone' && standaloneContentRef.current) {
      setTabHeight(standaloneContentRef.current.scrollHeight);
    }
  };

  // Update height on window resize
  useEffect(() => {
    const handleResize = () => {
      updateTabHeight();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [activeTab]);

  // Update height when tab changes or content loads
  useEffect(() => {
    // Short delay to ensure content has rendered
    const timer = setTimeout(() => {
      updateTabHeight();
      setIsTransitioning(false);
    }, 50);
    
    return () => clearTimeout(timer);
  }, [activeTab]);

  // Function to start/restart auto-switching timer
  const startAutoSwitchTimer = () => {
    // Clear any existing timer first
    if (autoSwitchTimerRef.current) {
      clearInterval(autoSwitchTimerRef.current);
    }
    
    // Set up a new interval
    autoSwitchTimerRef.current = setInterval(() => {
      // First set transitioning state to apply smooth height animation
      setIsTransitioning(true);
      
      // Small delay before changing tab to let transition start
      setTimeout(() => {
        setActiveTab(currentTab => currentTab === 'web' ? 'standalone' : 'web');
      }, 50);
    }, 6000); // Change tab every 6 seconds
  };
  
  // Handle manual tab change
  const handleTabChange = (tabId) => {
    if (tabId === activeTab) return; // Skip if already on this tab
    
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(tabId);
      startAutoSwitchTimer(); // Reset the timer when a tab is manually clicked
    }, 50);
  };

  // Auto-switching tabs effect with intersection observer
  useEffect(() => {
    // Create an observer to detect when the component is visible
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        
        // If component is visible, start auto-switching
        if (entry.isIntersecting) {
          // Initial height calculation when first visible
          updateTabHeight();
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
        { name: "React.JS", color: "blue" },
        { name: "Node.JS", color: "green" },
        { name: "MongoDB", color: "purple" },
        { name: "Postman", color: "orange" },
        { name: "GitHub", color: "gray" }
      ],
      github: "https://github.com/nimdiyar/SDGP_SE_63_Exporthaven"
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
      ],
      github: "https://github.com/Savindu-Rajapaksha/live-event-ticketing-system-backend"
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
        { name: "SpringBoot", color: "green" },
        { name: "MySQL", color: "blue" },
        { name: "Postman", color: "orange" },
        { name: "Swagger", color: "gray" }
      ],
      github: "https://github.com/SavinduHansaka/POS-System"
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
      ],
      github: "https://github.com/Savindu-Rajapaksha/ticketing-system-CLI/tree/master"
    }
  ];

  // Create a component to render projects
  const ProjectGrid = ({ projects }) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div 
          key={index}
          className="bg-gray-800/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-700 hover:border-blue-800 hover:shadow-blue-500/10"
        >
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mr-4">
              {project.icon}
            </div>
            <div>
              <h5 className={`text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${project.titleGradient} mb-1`}>
                {project.title}
              </h5>
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-xs text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  <Github className="h-3 w-3 mr-1" />
                  View on GitHub
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              )}
            </div>
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
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, techIndex) => (
              <span 
                key={techIndex} 
                className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs font-medium"
                style={{
                  backgroundColor: `rgba(var(--${tech.color}-rgb), 0.2)`,
                  color: `rgb(var(--${tech.color}-rgb))`
                }}
              >
                {tech.name}
              </span>
            ))}
          </div>
          
          {project.github && (
            <div className="mt-4 pt-4 border-t border-gray-700">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center w-full py-2 px-3 rounded-lg bg-gray-700 hover:bg-blue-600 text-white text-sm font-medium transition-colors duration-300"
              >
                <Github className="h-4 w-4 mr-2" />
                View Source Code
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  );

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

        {/* Container for all tab content with smooth height transition */}
        <div 
          className="relative overflow-hidden transition-all duration-500 ease-in-out"
          style={{ height: tabHeight ? `${tabHeight}px` : 'auto' }}
        >
          {/* Web Projects Content */}
          <div 
            ref={webContentRef}
            className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out ${
              activeTab === 'web' 
                ? 'opacity-100 translate-x-0 visible' 
                : 'opacity-0 -translate-x-6 invisible'
            }`}
            style={{ visibility: activeTab === 'web' || isTransitioning ? 'visible' : 'hidden' }}
          >
            {/* Description Text */}
            <div className="mb-14">
              <p className="text-center text-gray-400 max-w-2xl mx-auto">
                In below section contains web sites, web services that are developed using various technologies. Such as <span className="text-blue-400">React</span>, <span className="text-green-400">Node.js</span>
              </p>
            </div>

            {/* Showcase Image */}
            <div className="flex justify-center mb-20 relative">
              <div className="w-full max-w-lg mx-auto">
                <ImageSlider 
                  images={webProjectImages} 
                  interval={4000} 
                  autoPlay={true} 
                />
              </div>
            </div>

            {/* Web Projects Grid */}
            <ProjectGrid projects={webProjects} />
          </div>

          {/* Standalone Projects Content */}
          <div 
            ref={standaloneContentRef}
            className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out ${
              activeTab === 'standalone' 
                ? 'opacity-100 translate-x-0 visible' 
                : 'opacity-0 translate-x-6 invisible'
            }`}
            style={{ visibility: activeTab === 'standalone' || isTransitioning ? 'visible' : 'hidden' }}
          >
            {/* Description Text */}
            <div className="mb-14">
              <p className="text-center text-gray-400 max-w-2xl mx-auto">
                Standalone Solutions that developed with <span className="text-orange-400">Java</span>, <span className="text-blue-400">SpringBoot</span> & <span className="text-red-400">React</span> can found in below section
              </p>
            </div>

            {/* Showcase Image */}
            <div className="flex justify-center mb-20 relative">
              <div className="w-full max-w-lg mx-auto">
                <ImageSlider 
                  images={standaloneProjectImages} 
                  interval={4000} 
                  autoPlay={true} 
                />
              </div>
            </div>

            {/* Standalone Projects Grid */}
            <ProjectGrid projects={standaloneProjects} />
          </div>
        </div>

        {/* Custom CSS variables for technology pill colors */}
        <style jsx>{`
          :root {
            --blue-rgb: 59, 130, 246;
            --green-rgb: 34, 197, 94;
            --red-rgb: 239, 68, 68;
            --purple-rgb: 168, 85, 247;
            --orange-rgb: 249, 115, 22;
            --gray-rgb: 107, 114, 128;
          }
        `}</style>
      </div>
    </ComponentWrapper>
  );
};

export default RecentProjects;