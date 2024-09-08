const isNumber = (s: string): boolean => "0123456789".includes(s)

export const uncompress = (str: string): string => {
  const result: string[] = []

  let i = 0
  let j = 0

  while (j < str.length) {
    if (isNumber(str[j])) {
      j += 1
    } else {
      const num = Number(str.slice(i, j))
      result.push(str[j].repeat(num))

      j += 1
      i = j
    }
  }

  return result.join("")
}
