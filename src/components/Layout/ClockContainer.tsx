import React from 'react';
import { useClock } from '../../hooks/useClock';
import { AnalogClock } from '../Clock/AnalogClock';
import { DigitalClock } from '../Clock/DigitalClock';
import { DateDisplay } from '../Info/DateDisplay';
import { TimezoneDisplay } from '../Info/TimezoneDisplay';
import { GridBackground } from '../Background/GridBackground';
import { ScanlineEffect } from '../Background/ScanlineEffect';
import { FloatingParticles } from '../Background/FloatingParticles';

export const ClockContainer: React.FC = () => {
  const { hours, minutes, seconds, dayOfWeek, date, timezone, utcOffset } = useClock();

  return (
    <div className="min-h-screen bg-cyber-bg flex items-center justify-center relative overflow-hidden">
      <GridBackground />
      <ScanlineEffect />
      <FloatingParticles />
      
      <div className="relative z-10 flex flex-col items-center space-y-8 px-4 py-12">
        <DateDisplay date={date} dayOfWeek={dayOfWeek} />
        
        <div className="w-full max-w-2xl">
          <AnalogClock 
            hours={hours} 
            minutes={minutes} 
            seconds={seconds} 
            size={400}
          />
        </div>
        
        <div className="mt-8">
          <DigitalClock hours={hours} minutes={minutes} seconds={seconds} />
        </div>
        
        <div className="mt-6">
          <TimezoneDisplay timezone={timezone} utcOffset={utcOffset} />
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
};
