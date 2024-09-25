/* 
decompress braces
-----------------
Write a function, decompressBraces, that takes in a compressed string as an argument. 
The function should return the string decompressed.
The compression format of the input string is 'n{subString}', where the subString within braces should be repeated n times.
You may assume that every number n is guaranteed to be an integer between 1 through 9.
You may assume that the input is valid and the decompressed string will only contain alphabetic characters.

@test-cases:
------------
decompressBraces("2{q}3{tu}v"); // -> qqtututuv 
decompressBraces("ch3{ao}"); // -> chaoaoao
decompressBraces("3{al4{ec}2{icia}}"); 
 -> alececececiciaiciaalececececiciaiciaalececececiciaicia 

*/

const isNumber = (char) => "123456789".includes(char)

const repeatString = (str, n) => {
  let result = ""

  for (let i = 0; i < n; i += 1) {
    result += str
  }

  return result
}

const decompressBraces = (str) => {
  const stack = []

  for (let char of str) {
    if (isNumber(char)) {
      stack.push(Number(char))
    } else {
      if (char === "}") {
        let segment = ""
        while (typeof stack[stack.length - 1] !== "number") {
          const popped = stack.pop()
          segment = popped + segment
        }
        const num = stack.pop()
        stack.push(repeatString(segment, num))
      } else if (char !== "{") {
        stack.push(char)
      }
    }
  }

  return stack.join("")
}

console.log(decompressBraces("2{q}3{tu}v")) // -> qqtututuv
console.log(decompressBraces("ch3{ao}")) // -> chaoaoao
console.log(decompressBraces("3{al4{ec}2{icia}}"))
// -> alececececiciaiciaalececececiciaiciaalececececiciaicia
