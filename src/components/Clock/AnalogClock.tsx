import React from 'react';
import { ClockFace } from './ClockFace';
import { ClockHands } from './ClockHands';

interface AnalogClockProps {
  hours: number;
  minutes: number;
  seconds: number;
  size?: number;
}

export const AnalogClock: React.FC<AnalogClockProps> = ({ 
  hours, 
  minutes, 
  seconds, 
  size = 400 
}) => {
  return (
    <div 
      className="relative animate-neon-pulse"
      style={{ width: size, height: size }}
    >
      <div 
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle at center, #0a0a0f 0%, #0a0a0f 70%, rgba(0,255,249,0.1) 100%)',
          boxShadow: `
            0 0 30px rgba(0, 255, 249, 0.3),
            0 0 60px rgba(0, 255, 249, 0.2),
            inset 0 0 30px rgba(0, 255, 249, 0.1)
          `
        }}
      />
      <ClockFace size={size} />
      <ClockHands hours={hours} minutes={minutes} seconds={seconds} size={size} />
    </div>
  );
};
