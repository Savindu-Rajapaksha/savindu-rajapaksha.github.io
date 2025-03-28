import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) { // Increased threshold for visibility
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    // Smooth scroll to top with a bit of easing
    const scrollStep = -window.scrollY / 20;
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-3 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-400 
      text-white shadow-lg shadow-cyan-500/20 z-50 transition-all duration-500 hover:shadow-xl 
      hover:shadow-cyan-500/40 transform hover:-translate-y-1 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
      }`}
    >
      <ArrowUp size={24} />
    </button>
  );
};

export default ScrollToTopButton;