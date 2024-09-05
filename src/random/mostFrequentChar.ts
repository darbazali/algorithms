export const mostFrequentChar = (str: string): string => {
  const chars: Record<string, number> = {}

  for (let char of str) {
    if (!(char in chars)) {
      chars[char] = 0
    }

    chars[char] += 1
  }

  let best = ""
  for (let char of str) {
    if (best === "" || chars[char] > chars[best]) {
      best = char
    }
  }

  return best
}
