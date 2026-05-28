import React from 'react';

export const FloatingParticles: React.FC = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    duration: `${3 + Math.random() * 4}s`,
    size: `${2 + Math.random() * 4}px`
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            backgroundColor: '#00fff9',
            boxShadow: '0 0 10px #00fff9, 0 0 20px #00fff9',
            opacity: 0.3,
            animation: `float ${particle.duration} ease-in-out ${particle.delay}s infinite`
          }}
        />
      ))}
    </div>
  );
};
