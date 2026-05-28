import React from 'react';

interface TimezoneDisplayProps {
  timezone: string;
  utcOffset: string;
}

export const TimezoneDisplay: React.FC<TimezoneDisplayProps> = ({ timezone, utcOffset }) => {
  return (
    <div className="flex flex-col items-center space-y-1 font-rajdhani text-sm md:text-base text-cyber-orange tracking-wide">
      <div className="flex items-center space-x-2">
        <span 
          className="w-2 h-2 rounded-full bg-cyber-orange"
          style={{
            boxShadow: '0 0 10px rgba(255, 102, 0, 0.8)'
          }}
        />
        <span>{timezone}</span>
      </div>
      <div className="text-cyber-cyan">{utcOffset}</div>
    </div>
  );
};
