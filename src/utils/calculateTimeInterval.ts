export function calculateTimeInterval(startDate: Date, endDate: Date): string {
  const diffInMilliseconds = Math.abs(endDate.getTime() - startDate.getTime())

  const seconds = Math.floor(diffInMilliseconds / 1000) % 60
  const minutes = Math.floor(diffInMilliseconds / (1000 * 60)) % 60
  const hours = Math.floor(diffInMilliseconds / (1000 * 60 * 60))

  const formattedHours = hours.toString().padStart(2, '0')
  const formattedMinutes = minutes.toString().padStart(2, '0')
  const formattedSeconds = seconds.toString().padStart(2, '0')

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`
}