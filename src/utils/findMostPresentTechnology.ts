export function findMostPresentTechnology(data: any[]): string {
  const technologyCount = new Map<string, number>()

  for (const item of data) {
    const technology = item.technology
    if (technologyCount.has(technology)) {
      technologyCount.set(technology, technologyCount.get(technology)! + 1)
    } else {
      technologyCount.set(technology, 1)
    }
  }

  let mostPresentTechnology = ''
  let maxCount = 0

  for (const [technology, count] of technologyCount.entries()) {
    if (count > maxCount) {
      maxCount = count
      mostPresentTechnology = technology
    }
  }

  return mostPresentTechnology
}