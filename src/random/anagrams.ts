import { createCharCounterMap } from "../lib"

export const anagrams = (s1: string, s2: string): boolean => {
  if (s1 === s2) return true

  const chars = createCharCounterMap(s1)

  for (let char of s2) {
    if (char in chars) {
      chars[char] -= 1
    } else {
      return false
    }
  }

  for (let char in chars) {
    if (chars[char] !== 0) {
      return false
    }
  }

  return true
}
