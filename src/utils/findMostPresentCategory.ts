export function findMostPresentCategory(data: any[]): string {
  const categoryCount = new Map<string, number>()

  for (const item of data) {
    const category = item.category
    if (categoryCount.has(category)) {
      categoryCount.set(category, categoryCount.get(category)! + 1)
    } else {
      categoryCount.set(category, 1)
    }
  }

  let mostPresentCategory = ''
  let maxCount = 0

  for (const [category, count] of categoryCount.entries()) {
    if (count > maxCount) {
      maxCount = count
      mostPresentCategory = category
    }
  }

  return mostPresentCategory
}