import React from 'react';

export const GridBackground: React.FC = () => {
  return (
    <div 
      className="fixed inset-0 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0, 255, 249, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 249, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        backgroundPosition: 'center center'
      }}
    />
  );
};
