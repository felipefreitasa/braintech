export function getSalutation(): string {
  const currentHour = new Date().getHours();

  if (currentHour >= 5 && currentHour < 12) {
    return "Bom dia!"
  }

  if (currentHour >= 12 && currentHour < 18) {
    return "Boa tarde!"
  }

  return "Boa noite!"
}