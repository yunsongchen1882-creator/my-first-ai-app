import React from 'react';

interface ClockHandsProps {
  hours: number;
  minutes: number;
  seconds: number;
  size: number;
}

export const ClockHands: React.FC<ClockHandsProps> = ({ hours, minutes, seconds, size }) => {
  const center = size / 2;
  
  const hoursAngle = (hours % 12 + minutes / 60) * 30 - 90;
  const minutesAngle = (minutes + seconds / 60) * 6 - 90;
  const secondsAngle = seconds * 6 - 90;

  const hourLength = size * 0.25;
  const minuteLength = size * 0.35;
  const secondLength = size * 0.4;

  const createHand = (angle: number, length: number, width: number, color: string, glow: string) => {
    const radians = angle * (Math.PI / 180);
    const x2 = center + length * Math.cos(radians);
    const y2 = center + length * Math.sin(radians);

    return (
      <line
        x1={center}
        y1={center}
        x2={x2}
        y2={y2}
        stroke={color}
        strokeWidth={width}
        strokeLinecap="round"
        className={glow}
      />
    );
  };

  return (
    <svg width={size} height={size} className="absolute inset-0">
      <circle
        cx={center}
        cy={center}
        r="8"
        fill="#0a0a0f"
        stroke="#00fff9"
        strokeWidth="2"
        className="drop-shadow-[0_0_10px_#00fff9]"
      />
      
      {createHand(hoursAngle, hourLength, 6, '#00fff9', 'drop-shadow-[0_0_15px_#00fff9]')}
      {createHand(minutesAngle, minuteLength, 4, '#00fff9', 'drop-shadow-[0_0_12px_#00fff9]')}
      {createHand(secondsAngle, secondLength, 2, '#ff00ff', 'drop-shadow-[0_0_8px_#ff00ff]')}
      
      <circle
        cx={center}
        cy={center}
        r="4"
        fill="#ff00ff"
        className="drop-shadow-[0_0_8px_#ff00ff]"
      />
    </svg>
  );
};
