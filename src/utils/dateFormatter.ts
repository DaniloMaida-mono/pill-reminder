export function amPmFormatter(date: Date): string {
  let hour = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hour >= 12 ? 'pm' : 'am';

  hour = hour % 12 || 12;
  return `${hour}:${minutes < 10 ? '0' + minutes : minutes} ${ampm}`;
}
