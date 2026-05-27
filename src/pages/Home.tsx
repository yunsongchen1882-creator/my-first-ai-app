import React, { useState, useEffect } from 'react';
import { useClock } from '../hooks/useClock';
import { ClockContainer } from '../components/ClockContainer';
import { Controls } from '../components/Controls';
import { Alarm } from '../components/Alarm';

export default function Home() {
  const [clockMode, setClockMode] = useState<'digital' | 'analog'>('digital');
  const [timezone, setTimezone] = useState('');
  const [showAlarm, setShowAlarm] = useState(false);
  const { hours, minutes, seconds, date } = useClock(timezone);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/50 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* 标题 */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">
            时钟应用
          </h1>
          <p className="text-slate-400 text-lg">
            精美设计，功能丰富
          </p>
        </div>

        {/* 时钟容器 */}
        <ClockContainer
          clockMode={clockMode}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          date={date}
        />

        {/* 控制面板 */}
        <div className="mt-8">
          <Controls
            clockMode={clockMode}
            setClockMode={setClockMode}
            timezone={timezone}
            setTimezone={setTimezone}
            showAlarm={showAlarm}
            setShowAlarm={setShowAlarm}
          />
        </div>

        {/* 闹钟弹窗 */}
        {showAlarm && <Alarm onClose={() => setShowAlarm(false)} />}
      </div>
    </div>
  );
}