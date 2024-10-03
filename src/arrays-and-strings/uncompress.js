/* 
uncompress
----------
Write a function, uncompress, that takes in a string as an argument. 
The input string will be formatted into multiple groups according to the following pattern:
for example, '2c' or '3a'.

The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively. 
You may assume that the input string is well-formed according to the previously mentioned pattern.

@test-cases
-----------
uncompress("2c3a1t"); // -> 'ccaaat'
uncompress("4s2b"); // -> 'ssssbb'
uncompress("3n12e2z"); // -> 'nnneeeeeeeeeeeezz'

*/

const repeatString = (str, n) => {
  let result = ""

  for (let i = 0; i < n; i++) {
    result += str
  }

  return result
}

const uncompress = (str = "") => {
  let result = []
  let i = 0
  let j = 0

  while (j < str.length) {
    const char = str[j]
    if (char.match(/[0-9]/gi)) {
      j += 1
    } else {
      const num = Number(str.slice(i, j))
      result.push(repeatString(char, num))
      j += 1
      i = j
    }
  }

  return result.join("")
}

console.log(uncompress("2c3a1t")) // -> 'ccaaat'
console.log(uncompress("4s2b")) // -> 'ssssbb'
console.log(uncompress("3n12e2z")) // -> 'nnneeeeeeeeeeeezz'
