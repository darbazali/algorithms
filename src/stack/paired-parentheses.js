/* 
paired parentheses
------------------

Write a function, pairedParentheses, that takes in a string as an argument. 
The function should return a boolean indicating whether or not the string has well-formed parentheses.

You may assume the string contains only alphabetic characters, '(', or ')'.

@example:
---------

pairedParentheses("(david)((abby))"); // -> true

*/

const pairedParentheses = (str = "") => {
  let count = 0

  for (let char of str) {
    if (char === "(") count += 1
    if (char === ")") {
      if (count === 0) return false
      count -= 1
    }
  }

  return count === 0
}

console.log(pairedParentheses("(david)((abby))")) // -> true
console.log(pairedParentheses("(david)((abby)")) // -> false
