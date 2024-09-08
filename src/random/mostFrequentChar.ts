export const mostFrequentChar = (str: string): string => {
  if (str.length < 2) return str

  const count: Record<string, number> = {}

  for (let char of str) {
    if (!(char in count)) {
      count[char] = 0
    }
    count[char] += 1
  }

  let best = ""
  for (let char in count) {
    if (best === "" || count[char] > count[best]) {
      best = char
    }
  }

  return best
}
