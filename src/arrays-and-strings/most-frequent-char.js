/* 
most frequent char
------------------
Write a function, mostFrequentChar, that takes in a string as an argument. 
The function should return the most frequent character of the string. 
If there are ties, return the character that appears earlier in the string.

You can assume that the input string is non-empty.

@test-cases:
------------
mostFrequentChar('bookeeper'); // -> 'e'
mostFrequentChar('david'); // -> 'd'
mostFrequentChar('potato'); // -> 'o'

*/

const mostFrequentChar = (s = "") => {
  const count = {}

  for (let char of s) {
    if (!(char in count)) {
      count[char] = 0
    }

    count[char] += 1
  }

  let best = ""
  for (let char of s) {
    if (best === "" || count[char] > count[best]) {
      best = char
    }
  }

  return best
}

console.log(mostFrequentChar("bookeeper")) // -> 'e'
console.log(mostFrequentChar("david")) // -> 'd'
console.log(mostFrequentChar("potato")) // -> 'o'
