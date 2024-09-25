/* 
max palindrome subsequence
---------------------
Write a function, maxPalindromeSubsequence, that takes in a string as an argument. 
The function should return the length of the longest subsequence of the string that is also a palindrome.

A subsequence of a string can be created by deleting any characters of the string, while maintaining the relative order of characters.

@test-case:
----------
maxPalindromeSubsequence("luwxult"); // -> 5

*/

const maxPalindromeSubsequence = (str, i = 0, j = str.length - 1, memo = {}) => {
  const key = i + "," + j
  if (key in memo) return memo[key]

  if (i === j) return 1
  if (i > j) return 0

  if (str[i] === str[j]) {
    memo[key] = 2 + maxPalindromeSubsequence(str, i + 1, j - 1, memo)
  } else {
    memo[key] = Math.max(
      maxPalindromeSubsequence(str, i + 1, j, memo),
      maxPalindromeSubsequence(str, i, j - 1, memo),
    )
  }

  return memo[key]
}

console.log(maxPalindromeSubsequence("luwxult")) // -> 5
console.log(
  maxPalindromeSubsequence(
    "enamelpinportlandtildecoldpressedironyflannelsemioticsedisonbulbfashionaxe",
  ),
) // -> 31
