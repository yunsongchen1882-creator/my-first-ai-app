import React from 'react';

export const ScanlineEffect: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div 
        className="absolute w-full h-1 bg-gradient-to-b from-transparent via-cyber-cyan to-transparent opacity-30"
        style={{
          animation: 'scanline 8s linear infinite'
        }}
      />
    </div>
  );
};
