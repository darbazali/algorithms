/* 
fib
---
Write a function fib that takes in a number argument, n, and returns the n-th number of the Fibonacci sequence.

The 0-th number of the sequence is 0.

The 1-st number of the sequence is 1.

To generate further numbers of the sequence, calculate the sum of previous two numbers.

Solve this recursively.

@example:
---------
fib(46); // -> 1836311903

*/

// brute-force approach
const fibBruteForce = (n) => {
  if (n === 0 || n === 1) return n
  return fibBruteForce(n - 1) + fibBruteForce(n - 2)
}

// console.log(fibBruteForce(46)) // -> 1836311903 in 17.073 seconds

// memoized
const fib = (n, memo = {}) => {
  if (n === 0 || n === 1) return n
  if (n in memo) return memo[n]

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
  return memo[n]
}

console.log(fib(46)) // -> 1836311903 in 0.056 seconds 99.67% faster
