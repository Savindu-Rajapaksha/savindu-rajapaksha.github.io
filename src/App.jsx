import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import Aboutme from "./pages/Aboutme";
import Experience from "./pages/Experience";
import OtherThanTechnology from "./pages/OtherThanTechnology";
import RecentProjects from "./pages/RecentProjects";
import TechnicalSkills from "./pages/TechnicalSkills";
import Profile from "./pages/profile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import MatrixBackground from "./components/MatrixBackground";

function App() {
  // State to track which section is active for navbar highlighting
  const [activeSection, setActiveSection] = useState("header");
  
  // Create refs for each section
  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const otherRef = useRef(null);

  // Setup intersection observer to detect which section is currently visible
  useEffect(() => {
    const sectionRefs = [
      { ref: headerRef, id: "header" },
      { ref: aboutRef, id: "about" },
      { ref: experienceRef, id: "experience" },
      { ref: skillsRef, id: "skills" },
      { ref: projectsRef, id: "projects" },
      { ref: otherRef, id: "other" }
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = sectionRefs.find(section => section.ref.current === entry.target);
            if (section) {
              setActiveSection(section.id);
            }
          }
        });
      },
      { threshold: 0.4 }
    );
    
    sectionRefs.forEach(({ ref }) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sectionRefs.forEach(({ ref }) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  // Additional observer just for experience section with different threshold
  useEffect(() => {
    if (!experienceRef.current) return;
    
    const experienceObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection("experience");
          }
        });
      },
      { threshold: 0.2 } // Lower threshold just for experience section
    );
    
    experienceObserver.observe(experienceRef.current);
    
    return () => {
      if (experienceRef.current) {
        experienceObserver.unobserve(experienceRef.current);
      }
    };
  }, []);

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const sectionMap = {
      header: headerRef,
      about: aboutRef,
      experience: experienceRef,
      skills: skillsRef,
      projects: projectsRef,
      other: otherRef
    };

    const ref = sectionMap[sectionId];
    if (ref && ref.current) {
      const navbarHeight = 60;
      const y = ref.current.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  return (
    <main className="min-h-screen bg-gray-900">
      {/* Fixed matrix background for entire page */}
      <div className="fixed inset-0 z-0">
        <MatrixBackground />
      </div>
      
      {/* Fixed navigation */}
      <Navbar onPageChange={scrollToSection} currentPage={activeSection} />
      
      {/* Scroll to top button */}
      <ScrollToTopButton />
      
      {/* All sections on a single page */}
      <div className="relative z-10">
        <section ref={headerRef} id="header" className="min-h-screen">
          <Profile />
        </section>
        
        <section ref={aboutRef} id="about" className="min-h-screen">
          <Aboutme />
        </section>
        
        <section ref={experienceRef} id="experience" className="min-h-screen">
          <Experience />
        </section>
        
        <section ref={skillsRef} id="skills" className="min-h-screen">
          <TechnicalSkills />
        </section>
        
        <section ref={projectsRef} id="projects" className="min-h-screen">
          <RecentProjects />
        </section>
        
        <section ref={otherRef} id="other" className="min-h-screen">
          <OtherThanTechnology />
        </section>
        
        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}

export default App;