export function getSalutation(): string {
  const currentHour = new Date().getHours();

  if (currentHour >= 5 && currentHour < 12) {
    return "Good morning!"
  }

  if (currentHour >= 12 && currentHour < 18) {
    return "Good afternoon!"
  }

  return "Good evening!"
}