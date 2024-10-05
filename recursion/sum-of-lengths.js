/* 
sum of lengths
--------------
Write a function sumOfLengths that takes in array of strings and returns the total length of the strings.

You must solve this recursively.

@test-cases:
------------
sumOfLengths(["goat", "cat", "purple"]); // -> 13
sumOfLengths(["bike", "at", "pencils", "phone"]); // -> 18
sumOfLengths([]); // -> 0
sumOfLengths(["", " ", "  ", "   ", "    ", "     "]); // -> 15
sumOfLengths(["0", "313", "1234567890"]); // -> 14 

*/

const sumOfLengths = (strings = []) => {
  if (strings.length === 0) return 0
  return strings[0].length + sumOfLengths(strings.slice(1))
}
