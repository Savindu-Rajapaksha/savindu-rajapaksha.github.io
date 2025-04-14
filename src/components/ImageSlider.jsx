import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Component for simple image slider that maintains consistent height
const ImageSlider = ({ images, interval = 5000, autoPlay = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [height, setHeight] = useState(0);
  const containerRef = useRef(null);
  const imageRefs = useRef([]);
  
  // Initialize image refs
  useEffect(() => {
    imageRefs.current = Array(images.length).fill().map((_, i) => imageRefs.current[i] || React.createRef());
  }, [images.length]);
  
  // Calculate and set container height based on tallest image
  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        // Get initial height from container width to maintain aspect ratio until images load
        const containerWidth = containerRef.current.offsetWidth;
        // Default aspect ratio close to 16:9
        const defaultHeight = containerWidth * 0.6;
        setHeight(defaultHeight);
        
        // Once images are loaded, find the tallest one
        const calculateImageHeights = () => {
          const heights = imageRefs.current
            .filter(ref => ref.current)
            .map(ref => ref.current.offsetHeight);
          
          if (heights.length > 0) {
            const maxHeight = Math.max(...heights);
            if (maxHeight > 0) {
              setHeight(maxHeight);
            }
          }
        };
        
        // Initial calculation
        calculateImageHeights();
        
        // Add load event listeners to images to recalculate when they're fully loaded
        const imageElements = imageRefs.current
          .filter(ref => ref.current)
          .map(ref => ref.current);
          
        imageElements.forEach(img => {
          if (img.complete) {
            calculateImageHeights();
          } else {
            img.addEventListener('load', calculateImageHeights);
          }
        });
        
        // Cleanup
        return () => {
          imageElements.forEach(img => {
            img.removeEventListener('load', calculateImageHeights);
          });
        };
      }
    };
    
    updateHeight();
    
    // Update height on window resize
    window.addEventListener('resize', updateHeight);
    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, [images]);
  
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
  
  return (
    <div 
      ref={containerRef} 
      className="relative z-10 transform hover:rotate-1 transition-transform duration-500 max-w-lg w-full mx-auto group"
      style={{ height: `${height}px` }}
    >
      {/* Container with fixed height */}
      <div className="relative w-full h-full overflow-hidden rounded-3xl">
        {/* All images - positioned absolutely with fade transitions */}
        {images.map((src, index) => (
          <div
            key={index}
            ref={imageRefs.current[index]}
            className="absolute inset-0 w-full h-full transition-opacity duration-500"
            style={{
              opacity: index === currentIndex ? 1 : 0,
              zIndex: index === currentIndex ? 2 : 1,
            }}
          >
            <img 
              src={src} 
              alt={`Project ${index + 1}`}
              className="w-full h-full object-contain rounded-3xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
              style={{ maxHeight: '100%' }}
            />
          </div>
        ))}
      </div>
      
      {/* Only show navigation if multiple images */}
      {images.length > 1 && (
        <>
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
        </>
      )}
    </div>
  );
};

export default ImageSlider;