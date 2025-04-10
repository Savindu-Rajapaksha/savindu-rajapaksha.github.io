import React from 'react';

// A wrapper component to provide consistent styling for all sections
const ComponentWrapper = ({ children, className = "" }) => {
  return (
    <div className={`bg-transparent text-white relative w-full ${className}`}>
      <div className="w-full mx-auto relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ComponentWrapper;