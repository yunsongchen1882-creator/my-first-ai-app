export const formatTime = (hours: number, minutes: number, seconds: number): string => {
  const h = hours.toString().padStart(2, '0');
  const m = minutes.toString().padStart(2, '0');
  const s = seconds.toString().padStart(2, '0');
  return `${h}:${m}:${s}`;
};

export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}年${month}月${day}日`;
};

export const getDayName = (dayOfWeek: number): string => {
  const days = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  return days[dayOfWeek];
};

export const getTimezoneInfo = () => {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const now = new Date();
  const offset = -now.getTimezoneOffset();
  const hours = Math.floor(Math.abs(offset) / 60);
  const sign = offset >= 0 ? '+' : '-';
  return {
    name: timezone,
    offset: `UTC${sign}${hours}`
  };
};
