import React from 'react';
import { DigitalClock } from './DigitalClock';
import { AnalogClock } from './AnalogClock';

interface ClockContainerProps {
  clockMode: 'digital' | 'analog';
  hours: number;
  minutes: number;
  seconds: number;
  date: string;
}

export const ClockContainer: React.FC<ClockContainerProps> = ({ clockMode, hours, minutes, seconds, date }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      {/* 时钟显示 */}
      <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-slate-700/50">
        {clockMode === 'digital' ? (
          <DigitalClock hours={hours} minutes={minutes} seconds={seconds} />
        ) : (
          <AnalogClock hours={hours} minutes={minutes} seconds={seconds} />
        )}
      </div>

      {/* 日期显示 */}
      <div className="text-xl md:text-2xl text-slate-300 text-center">
        {date}
      </div>
    </div>
  );
};
