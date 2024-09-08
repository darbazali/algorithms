/*
* reverse string recursive
* Write a function, reverseString, that takes in a string as an argument. 
* The function should return the string with its characters in reverse order. 
* You must do this recursively.

@example:
reverseString("hello"); // -> "olleh"
reverseString("abcdefg"); // -> "gfedcba"
reverseString("stopwatch"); // -> "hctawpots"
reverseString(""); // -> ""

*/

export const reverseStringRecursive = (s: string): string => {
  if (typeof s !== "string") {
    throw new Error("s must be of type string")
  }
  if (s.length === 0) return ""

  return reverseStringRecursive(s.slice(1)) + s[0]
}
