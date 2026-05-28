import { useState, useEffect, useRef } from 'react';

export interface ClockState {
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
  dayOfWeek: number;
  date: Date;
  timezone: string;
  utcOffset: string;
}

export const useClock = () => {
  const [time, setTime] = useState<ClockState>(() => getCurrentTime());
  const intervalRef = useRef<number | null>(null);

  function getCurrentTime(): ClockState {
    const now = new Date();
    return {
      hours: now.getHours(),
      minutes: now.getMinutes(),
      seconds: now.getSeconds(),
      milliseconds: now.getMilliseconds(),
      dayOfWeek: now.getDay(),
      date: now,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      utcOffset: getUTCOffset()
    };
  }

  function getUTCOffset(): string {
    const offset = -new Date().getTimezoneOffset();
    const hours = Math.floor(Math.abs(offset) / 60);
    const sign = offset >= 0 ? '+' : '-';
    return `UTC${sign}${hours}`;
  }

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setTime(getCurrentTime());
    }, 50);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return time;
};
