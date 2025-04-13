import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Component for simple image slider that maintains original image size
const ImageSlider = ({ images, interval = 5000, autoPlay = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  
  // Function to go to next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  
  // Function to go to previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  
  // Auto-play functionality
  useEffect(() => {
    if (autoPlay && images.length > 1) {
      const timer = setInterval(nextImage, interval);
      return () => clearInterval(timer);
    }
  }, [currentIndex, autoPlay, interval, images.length]);
  
  // Don't render if no images
  if (!images || images.length === 0) return null;
  
  // Render a single image without controls if only one image
  if (images.length === 1) {
    return (
      <div ref={containerRef} className="relative z-10 transform hover:rotate-1 transition-transform duration-500 max-w-lg">
        <img 
          src={images[0]} 
          alt="Project Showcase"
          className="relative z-10 rounded-3xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
        />
      </div>
    );
  }
  
  return (
    <div ref={containerRef} className="relative z-10 transform hover:rotate-1 transition-transform duration-500 max-w-lg group">
      {/* Current image - visible */}
      <img 
        src={images[currentIndex]} 
        alt="Project Showcase"
        className="relative z-10 rounded-3xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
      />
      
      {/* Navigation buttons */}
      <button 
        onClick={prevImage}
        className="absolute left-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-gray-900/50 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-900/70 z-20"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      
      <button 
        onClick={nextImage}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-gray-900/50 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-900/70 z-20"
        aria-label="Next image"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white w-4' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;