/*
sum of lengths
Write a function sumOfLengths that takes in array of strings and returns the total length of the strings.

You must solve this recursively.

@example:
sumOfLengths(["goat", "cat", "purple"]); // -> 13
sumOfLengths([]); // -> 0

*/

export const sumOfLengthsRecursive = (strings: string[]): number => {
  if (strings.length === 0) return 0
  return strings[0].length + sumOfLengthsRecursive(strings.slice(1))
}
