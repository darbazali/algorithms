import { createCharCounterMap } from "../lib"

export const mostFrequentChar = (str: string): string => {
  const chars = createCharCounterMap(str)

  let best = ""
  for (let char of str) {
    if (best === "" || chars[char] > chars[best]) {
      best = char
    }
  }

  return best
}
