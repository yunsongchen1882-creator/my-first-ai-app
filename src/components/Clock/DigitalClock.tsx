import React from 'react';
import { formatTime } from '../../utils/timeUtils';

interface DigitalClockProps {
  hours: number;
  minutes: number;
  seconds: number;
}

export const DigitalClock: React.FC<DigitalClockProps> = ({ hours, minutes, seconds }) => {
  const timeString = formatTime(hours, minutes, seconds);
  const [hPart, rest] = timeString.split(':');
  const [mPart, sPart] = rest.split(':');

  return (
    <div className="flex items-center justify-center font-orbitron text-6xl md:text-8xl font-bold tracking-wider">
      <span className="text-cyber-cyan drop-shadow-[0_0_20px_#00fff9]">
        {hPart}
      </span>
      <span className="text-cyber-pink animate-blink mx-2">:</span>
      <span className="text-cyber-cyan drop-shadow-[0_0_20px_#00fff9]">
        {mPart}
      </span>
      <span className="text-cyber-pink animate-blink mx-2">:</span>
      <span className="text-cyber-cyan drop-shadow-[0_0_20px_#00fff9]">
        {sPart}
      </span>
    </div>
  );
};
