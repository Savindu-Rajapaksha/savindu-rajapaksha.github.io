import React, { useState, useEffect, useRef } from "react";
import {
  Code,
  Globe,
  Smartphone,
  Monitor,
  Database,
  Cloud,
  Wrench,
  Server,
  Box,
  Terminal,
  Layers,
} from "lucide-react";
import ComponentWrapper from '../components/ComponentWrapper';

const TechnicalSkills = () => {
  const [activeTab, setActiveTab] = useState('technologies'); // Default active tab
  const autoSwitchTimerRef = useRef(null);

  // Function to start/restart auto-switching timer
  const startAutoSwitchTimer = () => {
    // Clear any existing timer first
    if (autoSwitchTimerRef.current) {
      clearInterval(autoSwitchTimerRef.current);
    }
    
    // Set up a new interval
    autoSwitchTimerRef.current = setInterval(() => {
      setActiveTab(currentTab => {
        // List of tab IDs in desired rotation order
        const tabIds = ['technologies', 'frameworks', 'databases', 'tools'];
        
        // Find the current index and move to the next tab
        const currentIndex = tabIds.indexOf(currentTab);
        const nextIndex = (currentIndex + 1) % tabIds.length;
        return tabIds[nextIndex];
      });
    }, 6000); // Change tab every 6 seconds
  };
  
  // Handle manual tab change
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    startAutoSwitchTimer(); // Reset the timer when a tab is manually clicked
  };

  // Auto-switching tabs effect - initial setup
  useEffect(() => {
    startAutoSwitchTimer();
    
    // Clean up interval on unmount
    return () => {
      if (autoSwitchTimerRef.current) {
        clearInterval(autoSwitchTimerRef.current);
      }
    };
  }, []);

  // Define category tabs - all colors changed to blue
  const tabs = [
    { id: 'technologies', label: 'Technologies', icon: <Code className="h-4 w-4" />, color: 'blue' },
    { id: 'frameworks', label: 'Frameworks', icon: <Layers className="h-4 w-4" />, color: 'blue' },
    { id: 'databases', label: 'Databases', icon: <Database className="h-4 w-4" />, color: 'blue' },
    { id: 'tools', label: 'Tools & IDEs', icon: <Wrench className="h-4 w-4" />, color: 'blue' },
  ];

  // Define technologies
  const technologies = [
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      title: "Java",
      description: "As my primary language, I have good knowledge in application & web service development using Java"
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      title: "Node.js",
      description: "Proficient in backend service development with Node.js & Express.js"
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      title: "HTML",
      description: "Proficient in web front end development with HTML5"
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      title: "CSS",
      description: "Proficient in styling and responsive web design with CSS"
    }
  ];

  // Define frameworks
  const frameworks = [
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      title: "Spring Boot",
      description: "Good experience in web service development with Spring Boot"
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      title: "React Native",
      description: "Wide knowledge in Cross Platform Mobile development with React Native library"
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      title: "Bootstrap",
      description: "Experienced with responsive design and UI components using Bootstrap framework"
    },
    {
      svgPath: "M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z",
      svgFill: "#06B6D4",
      title: "Tailwind CSS",
      description: "Proficient in utility-first CSS framework for modern responsive web design"
    }
  ];

  // Define databases
  const databases = [
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      title: "MySQL",
      description: "Good experience in database management with MySQL"
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      title: "MongoDB",
      description: "Good experience in MongoDB"
    }
  ];

  // Define tools
  const tools = [
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      title: "Git",
      description: "Experienced with version control and collaborative development using Git"
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      title: "GitHub",
      description: "Proficient with repository management and collaboration through GitHub"
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      title: "VS Code",
      description: "Proficient with the tool & very familiar in development with VSCode"
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg",
      title: "IntelliJ IDEA",
      description: "Proficient with Java development using IntelliJ IDEA"
    },
    {
      icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
      title: "Postman",
      description: "Skilled in API testing and development workflow with Postman"
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg",
      title: "Swagger",
      description: "Experienced in API documentation and testing with Swagger"
    }
  ];

  // Helper function to render technology cards
  const renderTechCard = (tech, index) => (
    <div key={index} className="flex flex-col items-center group">
      <div className="w-20 h-20 rounded-full bg-gray-800/80 backdrop-blur-sm shadow-lg flex items-center justify-center mb-4 p-4 group-hover:scale-110 transition-transform border border-gray-700">
        {tech.icon ? (
          <img
            src={tech.icon}
            alt={tech.title}
            className="w-12 h-12"
          />
        ) : tech.svgPath ? (
          <svg viewBox="0 0 24 24" className="w-12 h-12" fill={tech.svgFill || "currentColor"}>
            <path d={tech.svgPath} />
          </svg>
        ) : (
          tech.customIcon
        )}
      </div>
      <h4 className="text-lg font-bold text-white mb-2">{tech.title}</h4>
      <p className="text-gray-400 text-center text-sm">
        {tech.description}
      </p>
    </div>
  );

  // Helper function to get animation class based on active tab
  const getTabAnimationClass = (tabId) => {
    if (tabId === activeTab) {
      return 'opacity-100 translate-y-0 duration-700';
    }
    return 'opacity-0 translate-y-4 absolute inset-0 pointer-events-none';
  };

  // Render content based on active tab
  const renderTabContent = () => {
    return (
      <div className="relative min-h-[40vh]">
        {/* Technologies content */}
        <div className={`transition-all transform ${getTabAnimationClass('technologies')}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {technologies.map((tech, index) => renderTechCard(tech, index))}
          </div>
        </div>

        {/* Frameworks content */}
        <div className={`transition-all transform ${getTabAnimationClass('frameworks')}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {frameworks.map((fw, index) => renderTechCard(fw, index))}
          </div>
        </div>

        {/* Databases content */}
        <div className={`transition-all transform ${getTabAnimationClass('databases')}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {databases.map((db, index) => renderTechCard(db, index))}
          </div>
        </div>

        {/* Tools content */}
        <div className={`transition-all transform ${getTabAnimationClass('tools')}`}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {tools.map((tool, index) => renderTechCard(tool, index))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <ComponentWrapper>
      {/* Added margin-top: 6rem (mt-24) to create space between sections */}
      <div className="mt-24">
        {/* Technical Skills Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Technical Skills
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Tabs Navigation with progress indicator */}
        <div className="flex justify-center mb-16">
          <div className="bg-gray-800/60 backdrop-blur-md rounded-full p-1.5 flex flex-wrap justify-center relative">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              let buttonClasses = "px-5 py-2.5 rounded-full transition-all duration-300 font-medium flex items-center mb-1 md:mb-0 mx-1 ";
              
              // All active tabs now use blue color
              if (isActive) {
                buttonClasses += "bg-blue-500 text-white shadow-lg";
              } else {
                buttonClasses += "text-gray-400 hover:text-white";
              }
              
              return (
                <button
                  key={tab.id}
                  className={buttonClasses}
                  onClick={() => handleTabChange(tab.id)}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              );
            })}
            
            {/* Small indicator that this auto-switches */}
            <div className="absolute -bottom-6 left-0 right-0 flex justify-center">
              <div className="bg-gray-800/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-gray-400">
                Auto-switching enabled
              </div>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center mb-8">
            {tabs.find(tab => tab.id === activeTab)?.icon && (
              <div className="h-6 w-6 text-blue-500 mr-3">
                {tabs.find(tab => tab.id === activeTab)?.icon}
              </div>
            )}
            <h3 className="text-xl font-bold text-blue-400">
              {tabs.find(tab => tab.id === activeTab)?.label || 'Skills'}
            </h3>
          </div>
          <div className="h-px w-full bg-gray-800 mb-10"></div>
        </div>

        {/* Dynamic Content Based on Active Tab */}
        {renderTabContent()}
      </div>
    </ComponentWrapper>
  );
};

export default TechnicalSkills;