/* 
overlap subsequence
-------------------
Write a function, overlapSubsequence, that takes in two strings as arguments. 
The function should return the length of the longest overlapping subsequence.
A subsequence of a string can be created by deleting any characters of the string, 
while maintaining the relative order of characters.

@test-cases:
-----------
overlapSubsequence("dogs", "daogt"); // -> 3

*/

const overlapSubsequence = (str1, str2, i = 0, j = 0) => {
  if (i === str1.length || j === str2.length) return 0

  if (str1[i] === str2[j]) {
    return 1 + overlapSubsequence(str1, str2, i + 1, j + 1)
  } else {
    return Math.max(
      overlapSubsequence(str1, str2, i + 1, j),
      overlapSubsequence(str1, str2, i, j + 1),
    )
  }
}

console.log(overlapSubsequence("dogs", "daogt")) // -> 3
console.log(
  overlapSubsequence(
    "mumblecorebeardleggingsauthenticunicorn",
    "succulentspughumblemeditationlocavore",
  ),
) // -> 15
