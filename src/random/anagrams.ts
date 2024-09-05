const createHashFromString = (str: string): Record<string, number> => {
  const chars: Record<string, number> = {}

  for (let char of str) {
    if (!(char in chars)) {
      chars[char] = 0
    }

    chars[char] += 1
  }

  return chars
}

const anagrams = (s1: string, s2: string): boolean => {
  if (s1 === s2) return true

  const chars: Record<string, number> = createHashFromString(s1)

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

console.log(anagrams("restful", "fluster")) // -> true
