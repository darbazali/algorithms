export const createCharCounterMap = (str: string): Record<string, number> => {
  const count: Record<string, number> = {}
  for (let char of str) {
    if (!(char in count)) {
      count[char] = 0
    }
    count[char] += 1
  }
  return count
}
