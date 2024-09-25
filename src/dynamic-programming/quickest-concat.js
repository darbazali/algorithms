/* 
quickest concat
---------------
Write a function, quickestConcat, that takes in a string and an array of words as arguments. 
The function should return the minimum number of words needed to build the string by concatenating words of the array. 
If it is not possible to build the string, then return -1.

You may use words of the array as many times as needed.

@test-case:
-----------
quickestConcat('caution', ['ca', 'ion', 'caut', 'ut']); // -> 2
quickestConcat('rongbetty', ['wrong', 'bet']); // -> -1
quickestConcat('uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu', ['u', 'uu', 'uuu', 'uuuu', 'uuuuu']); // -> 7

*/

const _quickestConcat = (s, words, memo = {}) => {
  if (s in memo) return memo[s]
  if (s === "") return 0

  let minWords = Infinity
  for (let word of words) {
    if (s.startsWith(word)) {
      const suffix = s.slice(word.length)
      const attempt = 1 + _quickestConcat(suffix, words, memo)
      minWords = Math.min(attempt, minWords)
    }
  }

  memo[s] = minWords
  return minWords
}

const quickestConcat = (s, words) => {
  const result = _quickestConcat(s, words)
  if (result === Infinity) return -1
  return result
}

console.log(quickestConcat("caution", ["ca", "ion", "caut", "ut"])) // -> 2
console.log(quickestConcat("rongbetty", ["wrong", "bet"])) // -> -1
console.log(
  quickestConcat("uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu", ["u", "uu", "uuu", "uuuu", "uuuuu"]),
) // -> 7
