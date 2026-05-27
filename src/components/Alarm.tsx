import React, { useState, useEffect } from 'react';
import { X, Check, Bell } from 'lucide-react';

interface AlarmProps {
  onClose: () => void;
}

interface AlarmItem {
  id: string;
  hour: number;
  minute: number;
  enabled: boolean;
}

export const Alarm: React.FC<AlarmProps> = ({ onClose }) => {
  const [alarms, setAlarms] = useState<AlarmItem[]>(() => {
    const saved = localStorage.getItem('alarms');
    return saved ? JSON.parse(saved) : [];
  });
  const [hour, setHour] = useState('00');
  const [minute, setMinute] = useState('00');

  useEffect(() => {
    localStorage.setItem('alarms', JSON.stringify(alarms));
  }, [alarms]);

  const addAlarm = () => {
    const newAlarm: AlarmItem = {
      id: Date.now().toString(),
      hour: parseInt(hour),
      minute: parseInt(minute),
      enabled: true,
    };
    setAlarms([...alarms, newAlarm].sort((a, b) => {
      if (a.hour !== b.hour) return a.hour - b.hour;
      return a.minute - b.minute;
    }));
  };

  const toggleAlarm = (id: string) => {
    setAlarms(alarms.map(alarm =>
      alarm.id === id ? { ...alarm, enabled: !alarm.enabled } : alarm
    ));
  };

  const deleteAlarm = (id: string) => {
    setAlarms(alarms.filter(alarm => alarm.id !== id));
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-slate-900 rounded-3xl p-6 w-full max-w-md border border-slate-700 shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Bell className="text-yellow-400" />
            闹钟设置
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-800 rounded-full transition-colors"
          >
            <X className="text-slate-400" />
          </button>
        </div>

        {/* 添加闹钟 */}
        <div className="flex items-center gap-3 mb-6">
          <input
            type="number"
            min="0"
            max="23"
            value={hour}
            onChange={(e) => setHour(e.target.value.padStart(2, '0'))}
            className="w-20 bg-slate-800 text-white text-center text-3xl py-3 rounded-xl border border-slate-700 focus:outline-none focus:border-blue-500"
          />
          <span className="text-3xl text-slate-400">:</span>
          <input
            type="number"
            min="0"
            max="59"
            value={minute}
            onChange={(e) => setMinute(e.target.value.padStart(2, '0'))}
            className="w-20 bg-slate-800 text-white text-center text-3xl py-3 rounded-xl border border-slate-700 focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={addAlarm}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <Check size={20} />
            添加
          </button>
        </div>

        {/* 闹钟列表 */}
        <div className="space-y-3 max-h-64 overflow-y-auto">
          {alarms.length === 0 ? (
            <div className="text-center text-slate-500 py-8">
              暂无闹钟
            </div>
          ) : (
            alarms.map((alarm) => (
              <div
                key={alarm.id}
                className={`flex items-center justify-between p-4 rounded-xl transition-all ${
                  alarm.enabled
                    ? 'bg-slate-800/80'
                    : 'bg-slate-800/30 opacity-50'
                }`}
              >
                <div className="text-3xl font-mono text-white">
                  {alarm.hour.toString().padStart(2, '0')}:{alarm.minute.toString().padStart(2, '0')}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleAlarm(alarm.id)}
                    className={`w-12 h-6 rounded-full transition-all ${
                      alarm.enabled ? 'bg-green-500' : 'bg-slate-600'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                        alarm.enabled ? 'translate-x-6' : 'translate-x-0.5'
                      }`}
                    />
                  </button>
                  <button
                    onClick={() => deleteAlarm(alarm.id)}
                    className="p-2 text-red-400 hover:bg-red-500/20 rounded-lg transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
