/* 
summing squares
---------------
Write a function, summingSquares, that takes a target number as an argument. 
The function should return the minimum number of perfect squares that sum to the target. 
A perfect square is a number of the form (i*i) where i >= 1.

For example: 1, 4, 9, 16 are perfect squares, but 8 is not perfect square.

Given 12:

summingSquares(12) -> 3

The minimum squares required for 12 is three, by doing 4 + 4 + 4.

Another way to make 12 is 9 + 1 + 1 + 1, but that requires four perfect squares.

@test-case:
summingSquares(8); // -> 2

*/

const summingSquares = (n) => {
  if (n === 0) return 0

  let minSquares = Infinity
  for (let i = 1; i <= Math.sqrt(n); i++) {
    const square = i * i
    const numSquares = 1 + summingSquares(n - square)
    minSquares = Math.min(minSquares, numSquares)
  }

  return minSquares
}

console.log(summingSquares(87)) // -> 4
