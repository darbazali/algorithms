/* 
anagrams
--------
Write a function, anagrams, that takes in two strings as arguments. 
The function should return a boolean indicating whether or not the strings are anagrams. 
Anagrams are strings that contain the same characters, but in any order.

@test-cases:
------------
anagrams('restful', 'fluster'); // -> true
anagrams('cats', 'tocs'); // -> false

*/

const anagrams = (s1, s2) => {
  const count = {}

  for (let char of s1) {
    if (!(char in count)) {
      count[char] = 0
    }

    count[char] += 1
  }

  for (let char of s2) {
    if (char in count) {
      count[char] -= 1
    } else {
      return false
    }
  }

  for (let char in count) {
    if (count[char] !== 0) return false
  }

  return true
}

console.log(anagrams("restful", "fluster")) // -> true
console.log(anagrams("cats", "tocs")) // -> false
