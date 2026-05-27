import { useState, useEffect } from 'react';

export function useClock(timezone?: string) {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getTimeComponents = () => {
    if (!timezone) {
      return {
        hours: time.getHours(),
        minutes: time.getMinutes(),
        seconds: time.getSeconds()
      };
    }
    
    try {
      const timeString = time.toLocaleTimeString('en-US', { 
        timeZone: timezone, 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: false 
      });
      const [hours, minutes, seconds] = timeString.split(':').map(Number);
      return { hours, minutes, seconds };
    } catch (e) {
      return {
        hours: time.getHours(),
        minutes: time.getMinutes(),
        seconds: time.getSeconds()
      };
    }
  };

  const getDate = () => {
    try {
      const options: Intl.DateTimeFormatOptions = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
      };
      if (timezone) {
        options.timeZone = timezone;
      }
      return time.toLocaleDateString('zh-CN', options);
    } catch (e) {
      return time.toLocaleDateString('zh-CN', {
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
      });
    }
  };

  const { hours, minutes, seconds } = getTimeComponents();

  return {
    time,
    hours,
    minutes,
    seconds,
    date: getDate(),
  };
}
