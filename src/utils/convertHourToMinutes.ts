export default function convertHourToMinutes(time: string): number {
  const [hour, minutes] = time.split(':').map(Number);
  const timeMinutes = hour * 60 + minutes;

  return timeMinutes;
}
