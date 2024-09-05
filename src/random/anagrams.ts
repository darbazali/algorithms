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

const anagrams = (s1: string, s2: string): void => {
  //   if (s1 === s2) return true

  const chars1: Record<string, number> = createHashFromString(s1)
  const chars2: Record<string, number> = createHashFromString(s2)

  console.log(chars1)
  console.log(chars2)
}

anagrams("restful", "fluster") // -> true
