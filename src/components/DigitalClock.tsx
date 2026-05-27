import React from 'react';

interface DigitalClockProps {
  hours: number;
  minutes: number;
  seconds: number;
}

export const DigitalClock: React.FC<DigitalClockProps> = ({ hours, minutes, seconds }) => {
  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  return (
    <div className="flex items-center justify-center gap-2">
      <div className="text-7xl md:text-9xl font-bold text-white drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]">
        {formatNumber(hours)}
      </div>
      <div className="text-7xl md:text-9xl font-bold text-blue-400 animate-pulse">
        :
      </div>
      <div className="text-7xl md:text-9xl font-bold text-white drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]">
        {formatNumber(minutes)}
      </div>
      <div className="text-7xl md:text-9xl font-bold text-blue-400 animate-pulse">
        :
      </div>
      <div className="text-7xl md:text-9xl font-bold text-yellow-400 drop-shadow-[0_0_10px_rgba(245,158,11,0.8)]">
        {formatNumber(seconds)}
      </div>
    </div>
  );
};
