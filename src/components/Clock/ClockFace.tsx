import React from 'react';

interface ClockFaceProps {
  size: number;
}

export const ClockFace: React.FC<ClockFaceProps> = ({ size }) => {
  const marks = Array.from({ length: 12 }, (_, i) => {
    const angle = (i * 30 - 90) * (Math.PI / 180);
    const length = i % 3 === 0 ? 20 : 10;
    const width = i % 3 === 0 ? 3 : 1;
    const outerRadius = size / 2 - 10;
    const innerRadius = outerRadius - length;

    const x1 = size / 2 + outerRadius * Math.cos(angle);
    const y1 = size / 2 + outerRadius * Math.sin(angle);
    const x2 = size / 2 + innerRadius * Math.cos(angle);
    const y2 = size / 2 + innerRadius * Math.sin(angle);

    return { x1, y1, x2, y2, length, width };
  });

  const numbers = Array.from({ length: 12 }, (_, i) => {
    const angle = (i * 30 - 90) * (Math.PI / 180);
    const radius = size / 2 - 45;
    const x = size / 2 + radius * Math.cos(angle);
    const y = size / 2 + radius * Math.sin(angle);
    return { number: i === 0 ? 12 : i, x, y };
  });

  return (
    <svg width={size} height={size} className="absolute inset-0">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={size / 2 - 5}
        fill="none"
        stroke="url(#neonGradient)"
        strokeWidth="2"
        className="drop-shadow-[0_0_10px_rgba(0,255,249,0.5)]"
      />
      
      <defs>
        <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00fff9" />
          <stop offset="50%" stopColor="#bf00ff" />
          <stop offset="100%" stopColor="#ff00ff" />
        </linearGradient>
      </defs>

      {marks.map((mark, i) => (
        <line
          key={i}
          x1={mark.x1}
          y1={mark.y1}
          x2={mark.x2}
          y2={mark.y2}
          stroke="#00fff9"
          strokeWidth={mark.width}
          strokeLinecap="round"
          className="drop-shadow-[0_0_5px_#00fff9]"
        />
      ))}

      {numbers.map((num, i) => (
        <text
          key={i}
          x={num.x}
          y={num.y}
          textAnchor="middle"
          dominantBaseline="central"
          fill="#00fff9"
          fontSize="20"
          fontFamily="Orbitron, sans-serif"
          className="drop-shadow-[0_0_8px_#00fff9]"
        >
          {num.number}
        </text>
      ))}
    </svg>
  );
};
