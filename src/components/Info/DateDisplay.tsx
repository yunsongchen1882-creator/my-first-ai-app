import React from 'react';
import { formatDate, getDayName } from '../../utils/timeUtils';

interface DateDisplayProps {
  date: Date;
  dayOfWeek: number;
}

export const DateDisplay: React.FC<DateDisplayProps> = ({ date, dayOfWeek }) => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div 
        className="text-2xl md:text-3xl font-rajdhani font-semibold text-cyber-purple tracking-widest px-6 py-3 border-2 border-cyber-purple rounded-lg"
        style={{
          boxShadow: '0 0 20px rgba(191, 0, 255, 0.5), inset 0 0 10px rgba(191, 0, 255, 0.2)'
        }}
      >
        {formatDate(date)}
      </div>
      <div 
        className="text-xl md:text-2xl font-rajdhani font-medium text-cyber-cyan tracking-wider"
        style={{
          textShadow: '0 0 10px rgba(0, 255, 249, 0.8)'
        }}
      >
        {getDayName(dayOfWeek)}
      </div>
    </div>
  );
};
