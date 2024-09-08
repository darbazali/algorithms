export const anagrams = (s1: string, s2: string): boolean => {
  if (s1 === s2) return true

  const count: Record<string, number> = {}

  for (let char of s1) {
    if (!(char in count)) {
      count[char] = 0
    }

    count[char] += 1
  }

  for (let char of s2) {
    if (char in count) {
      count[char] -= 1
    } else {
      return false
    }
  }

  for (let char in count) {
    if (count[char] !== 0) {
      return false
    }
  }

  return true
}
