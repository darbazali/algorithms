/*
compress
Write a function, compress, that takes in a string as an argument. 
The function should return a compressed version of the string 
where consecutive occurrences of the same characters are compressed into the number of occurrences followed by the character. 
Single character occurrences should not be changed.
*/

export const compress = (str: string): string => {
  let result = ""

  let i = 0
  let j = 0

  while (j <= str.length) {
    if (str[j] === str[i]) {
      j += 1
    } else {
      const num = j - i
      if (num === 1) {
        result += str[i]
      } else {
        result += num + str[i]
      }

      i = j
    }
  }

  return result
}
