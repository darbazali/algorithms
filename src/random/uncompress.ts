const isNumber = (s: string): boolean => "0123456789".includes(s)

export const uncompress = (str: string): string => {
  let result = ""

  let i = 0
  let j = 0

  while (j < str.length) {
    if (isNumber(str[j])) {
      j++
    } else {
      const num: number = Number(str.slice(i, j))
      result += str[j].repeat(num)
    }

    j += 1
    i = j
  }

  return result
}
