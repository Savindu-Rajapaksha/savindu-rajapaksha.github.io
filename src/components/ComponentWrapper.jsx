import React from 'react';

// A wrapper component to provide consistent styling for all sections
const ComponentWrapper = ({ children, className = "" }) => {
  return (
    <div className={`min-h-screen bg-transparent text-white py-4 px-4 relative ${className}`}>
      <div className="max-w-7xl mx-auto relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ComponentWrapper;