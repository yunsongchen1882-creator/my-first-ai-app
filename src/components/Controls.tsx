import React from 'react';
import { Clock, Watch, Bell, Globe } from 'lucide-react';

interface ControlsProps {
  clockMode: 'digital' | 'analog';
  setClockMode: (mode: 'digital' | 'analog') => void;
  timezone: string;
  setTimezone: (timezone: string) => void;
  showAlarm: boolean;
  setShowAlarm: (show: boolean) => void;
}

const timezones = [
  { label: '本地时间', value: '' },
  { label: '北京', value: 'Asia/Shanghai' },
  { label: '东京', value: 'Asia/Tokyo' },
  { label: '纽约', value: 'America/New_York' },
  { label: '伦敦', value: 'Europe/London' },
  { label: '巴黎', value: 'Europe/Paris' },
];

export const Controls: React.FC<ControlsProps> = ({
  clockMode, setClockMode, timezone, setTimezone, showAlarm, setShowAlarm }) => {
  return (
    <div className="flex flex-col gap-4">
      {/* 时钟模式切换 */}
      <div className="flex items-center justify-center gap-2 bg-slate-800/50 rounded-xl p-2">
        <button
          onClick={() => setClockMode('digital')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
            clockMode === 'digital'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
              : 'text-slate-300 hover:bg-slate-700/50'
          }`}
        >
          <Clock size={20} />
          <span>数字时钟</span>
        </button>
        <button
          onClick={() => setClockMode('analog')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
            clockMode === 'analog'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
              : 'text-slate-300 hover:bg-slate-700/50'
          }`}
        >
          <Watch size={20} />
          <span>模拟时钟</span>
        </button>
      </div>

      {/* 时区选择 */}
      <div className="flex items-center justify-center gap-2">
        <Globe className="text-slate-400" size={20} />
        <select
          value={timezone}
          onChange={(e) => setTimezone(e.target.value)}
          className="bg-slate-800/50 text-white px-4 py-2 rounded-lg border border-slate-700 focus:outline-none focus:border-blue-500"
        >
          {timezones.map((tz) => (
            <option key={tz.value} value={tz.value}>
              {tz.label}
            </option>
          ))}
        </select>
      </div>

      {/* 闹钟按钮 */}
      <button
        onClick={() => setShowAlarm(!showAlarm)}
        className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-xl shadow-lg hover:shadow-yellow-500/30 hover:scale-105 transition-all"
      >
        <Bell size={20} />
        <span>设置闹钟</span>
      </button>
    </div>
  );
};
