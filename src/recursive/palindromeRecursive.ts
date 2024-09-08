/*
palindrome recursive
Write a function, palindrome, that takes in a string and returns a boolean indicating whether or not the string is the same forwards and backwards.

You must solve this recursively.

@example:
palindrome("pop"); // -> true
palindrome("kayak"); // -> true
palindrome("pops"); // -> false
palindrome("boot"); // -> false

*/

export const palindromeRecursive = (s: string): boolean => {
  if (s.length === 0 || s.length === 1) {
    return true
  }

  if (s[0] !== s[s.length - 1]) {
    return false
  }

  return palindromeRecursive(s.slice(1, -1))
}
