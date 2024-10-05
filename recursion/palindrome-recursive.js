/* 
palindrome recursive
--------------------
Write a function, palindrome, that takes in a string and returns a boolean indicating whether or not the string is the same forwards and backwards.

You must solve this recursively.

@test-cases:
------------
palindrome("pop"); // -> true
palindrome("kayak"); // -> true
palindrome(""); // -> true

*/

const palindrome = (s = "") => {
  if (s.length <= 1) return true
  if (s[0] !== s[s.length - 1]) return false
  return palindrome(s.slice(1, -1))
}

console.log(palindrome("pop")) // -> true
console.log(palindrome("kayak")) // -> true
console.log(palindrome("")) // -> true
