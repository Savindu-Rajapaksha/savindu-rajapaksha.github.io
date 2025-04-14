import React from 'react';

// A wrapper component to provide consistent styling for all sections
const ComponentWrapper = ({ children, className = "" }) => {
  return (
    <div className={`relative w-full bg-transparent text-white px-4 sm:px-6 lg:px-16 xl:px-24 ${className}`}>
      <div className="w-full max-w-7xl mx-auto">
        {children}
      </div>
    </div>
  );
};

export default ComponentWrapper;