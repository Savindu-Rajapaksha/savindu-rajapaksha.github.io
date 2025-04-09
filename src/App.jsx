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

  // Add state for mobile view
  const [isMobile, setIsMobile] = useState(false);

  // Create refs for each section
  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const otherRef = useRef(null);

  // Check window size on mount and when resized
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check initially
    checkIsMobile();

    // Add event listener
    window.addEventListener("resize", checkIsMobile);

    // Clean up
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // Setup intersection observer to detect which section is currently visible
  useEffect(() => {
    const sectionRefs = [
      { ref: headerRef, id: "header" },
      { ref: aboutRef, id: "about" },
      { ref: experienceRef, id: "experience" },
      { ref: skillsRef, id: "skills" },
      { ref: projectsRef, id: "projects" },
      { ref: otherRef, id: "other" },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = sectionRefs.find(
              (section) => section.ref.current === entry.target
            );
            if (section) {
              setActiveSection(section.id);
            }
          }
        });
      },
      {
        threshold: isMobile ? 0.2 : 0.4,
        rootMargin: isMobile ? "-50px 0px" : "0px",
      }
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
  }, [isMobile]);

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const sectionMap = {
      header: headerRef,
      about: aboutRef,
      experience: experienceRef,
      skills: skillsRef,
      projects: projectsRef,
      other: otherRef,
    };

    const ref = sectionMap[sectionId];
    if (ref && ref.current) {
      const navbarHeight = isMobile ? 50 : 60; // Smaller offset on mobile
      const y =
        ref.current.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="min-h-screen bg-gray-900 overflow-x-hidden">
      {/* Fixed matrix background for entire page */}
      <div className="fixed inset-0 z-0">
        <MatrixBackground />
      </div>

      {/* Fixed navigation */}
      <Navbar
        onPageChange={scrollToSection}
        currentPage={activeSection}
        isMobile={isMobile}
      />

      {/* Scroll to top button */}
      <ScrollToTopButton />

      {/* All sections on a single page */}
      <div className="relative z-10 px-2 sm:px-6 md:px-8">
        <section
          ref={headerRef}
          id="header"
          className="min-h-screen pt-0 md:pt-0"
        >
          <Profile />
        </section>

        <section
          ref={aboutRef}
          id="about"
          className="min-h-screen pt-12 md:pt-20"
        >
          <Aboutme />
        </section>

        <section
          ref={experienceRef}
          id="experience"
          className="min-h-screen pt-0 md:pt-20"
        >
          <Experience />
        </section>

        <section
          ref={skillsRef}
          id="skills"
          className="min-h-screen pt-0 md:pt-20"
        >
          <TechnicalSkills />
        </section>

        <section
          ref={projectsRef}
          id="projects"
          className="min-h-screen pt-0 md:pt-20"
        >
          <RecentProjects />
        </section>

        <section
          ref={otherRef}
          id="other"
          className="min-h-screen pt-0 md:pt-20"
        >
          <OtherThanTechnology />
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}

export default App;
