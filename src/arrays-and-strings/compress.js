/* 
compress
--------
Write a function, compress, that takes in a string as an argument. 
The function should return a compressed version of the string 
where consecutive occurrences of the same characters are compressed into the number of occurrences followed by the character. 
Single character occurrences should not be changed.

'aaa' compresses to '3a'
'cc' compresses to '2c'
't' should remain as 't'


@test-cases
compress('ccaaatsss'); // -> '2c3at3s'
compress('ssssbbz'); // -> '4s2bz'
compress('nnneeeeeeeeeeeezz'); // -> '3n12e2z'

*/

const compress = (str = "") => {
  let result = []
  let i = 0
  let j = 0

  while (j <= str.length) {
    if (str[j] === str[i]) {
      j += 1
    } else {
      const num = j - i
      if (num === 1) {
        result.push(str[i])
      } else {
        result.push(`${num}${str[i]}`)
      }

      i = j
    }
  }

  return result.join("")
}

console.log(compress("ccaaatsss")) // -> '2c3at3s'
console.log(compress("ssssbbz")) // -> '4s2bz'
console.log(compress("nnneeeeeeeeeeeezz")) // -> '3n12e2z'
