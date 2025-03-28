import React, { useState, useEffect } from 'react';

const MatrixBackground = () => {
  const [matrixChars, setMatrixChars] = useState([]);

  useEffect(() => {
    // Create matrix characters
    const createMatrixEffect = () => {
      const width = window.innerWidth;
      const height = window.innerHeight * 5; // Cover full scroll height
      const columns = Math.floor(width / 40);
      
      // Create initial characters with better distribution
      const initialChars = [];
      const totalChars = Math.min(200, columns * 20); // Increased character count
      
      for (let i = 0; i < totalChars; i++) {
        initialChars.push({
          x: Math.floor(Math.random() * width), // Full random distribution
          y: Math.random() * height, // Distribute across full height
          char: getRandomChar(),
          speed: 0.5 + Math.random(),
          opacity: Math.random() * 0.4 + 0.1
        });
      }
      
      setMatrixChars(initialChars);
    };

    // Generate a random character
    const getRandomChar = () => {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>{}[]()$#@';
      return chars.charAt(Math.floor(Math.random() * chars.length));
    };

    // Animation frame to update positions
    let frameId;
    const animate = () => {
      setMatrixChars(prev => 
        prev.map(char => {
          // Move character up (bottom to top)
          const y = char.y - char.speed;
          
          // Reset if off screen
          if (y < -50) {
            return {
              ...char,
              y: window.innerHeight * 5, // Reset to bottom of entire page
              x: Math.floor(Math.random() * window.innerWidth),
              char: getRandomChar()
            };
          }
          
          return { ...char, y };
        })
      );
      
      frameId = requestAnimationFrame(animate);
    };
    
    createMatrixEffect();
    animate();
    
    // Handle window resize
    const handleResize = () => {
      createMatrixEffect();
    };
    
    window.addEventListener('resize', handleResize);
    
    // Clean up animation
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none" style={{ zIndex: 5 }}>
      {matrixChars.map((char, index) => (
        <div
          key={index}
          className="absolute font-mono text-cyan-400"
          style={{
            left: `${char.x}px`,
            top: `${char.y}px`,
            opacity: char.opacity,
          }}
        >
          {char.char}
        </div>
      ))}
    </div>
  );
};

export default MatrixBackground;