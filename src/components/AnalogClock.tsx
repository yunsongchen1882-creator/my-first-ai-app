import React from 'react';

interface AnalogClockProps {
  hours: number;
  minutes: number;
  seconds: number;
}

export const AnalogClock: React.FC<AnalogClockProps> = ({ hours, minutes, seconds }) => {
  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = (hours % 12) * 30 + minutes * 0.5;

  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
        {/* 时钟边框 */}
        <circle cx="50" cy="50" r="48" fill="none" stroke="#1e3a8a" strokeWidth="3" />
        <circle cx="50" cy="50" r="45" fill="none" stroke="#3b82f6" strokeWidth="1" />
        
        {/* 刻度 */}
        {Array.from({ length: 60 }).map((_, i) => {
          const isHourMarker = i % 5 === 0;
          const angle = i * 6;
          return (
            <line
              key={i}
              x1="50"
              y1={isHourMarker ? "8" : "10"}
              x2="50"
              y2={isHourMarker ? "14" : "12"}
              stroke={isHourMarker ? "#f59e0b" : "#60a5fa"}
              strokeWidth={isHourMarker ? "2" : "1"}
              transform={`rotate(${angle} 50 50)`}
            />
          );
        })}
        
        {/* 时针 */}
        <line
          x1="50"
          y1="50"
          x2="50"
          y2="28"
          stroke="#ffffff"
          strokeWidth="3"
          strokeLinecap="round"
          transform={`rotate(${hourDeg} 50 50)`}
          style={{ transition: 'transform 0.5s ease-out' }}
        />
        
        {/* 分针 */}
        <line
          x1="50"
          y1="50"
          x2="50"
          y2="18"
          stroke="#60a5fa"
          strokeWidth="2"
          strokeLinecap="round"
          transform={`rotate(${minuteDeg} 50 50)`}
          style={{ transition: 'transform 0.3s ease-out' }}
        />
        
        {/* 秒针 */}
        <line
          x1="50"
          y1="50"
          x2="50"
          y2="12"
          stroke="#f59e0b"
          strokeWidth="1"
          strokeLinecap="round"
          transform={`rotate(${secondDeg} 50 50)`}
          style={{ transition: 'transform 0.1s linear' }}
        />
        
        {/* 中心点 */}
        <circle cx="50" cy="50" r="2" fill="#f59e0b" />
        <circle cx="50" cy="50" r="1" fill="#ffffff" />
      </svg>
    </div>
  );
};
