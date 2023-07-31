export function sumStringTimes(timeStrings: string[]): string {
  const SECONDS_PER_HOUR = 3600;
  const SECONDS_PER_MINUTE = 60;

  function parseTimeToSeconds(timeStr: string): number {
    const [hours, minutes, seconds] = timeStr.split(':').map(Number);
    return hours * SECONDS_PER_HOUR + minutes * SECONDS_PER_MINUTE + seconds;
  }

  function formatSecondsToTime(totalSeconds: number): string {
    const hours = Math.floor(totalSeconds / SECONDS_PER_HOUR);
    const minutes = Math.floor((totalSeconds % SECONDS_PER_HOUR) / SECONDS_PER_MINUTE);
    const seconds = totalSeconds % SECONDS_PER_MINUTE;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  const totalSeconds = timeStrings.reduce((acc, timeStr) => acc + parseTimeToSeconds(timeStr), 0);
  const totalTimeFormatted = formatSecondsToTime(totalSeconds);

  return totalTimeFormatted;
}