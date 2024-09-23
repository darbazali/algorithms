/* 
sum possible
------------
Write a function sumPossible that takes in an amount and an array of positive numbers. 
The function should return a boolean indicating whether or not it is possible to create the amount by summing numbers of the array. 
You may reuse numbers of the array as many times as necessary.

You may assume that the target amount is non-negative.

@example:
---------

sumPossible(8, [5, 12, 4]); // -> true, 4 + 4
sumPossible(15, [6, 2, 10, 19]); // -> false
sumPossible(10, [4, 5, 7]); // -> true
sumPossible(2017, [4, 2, 10]); // -> false

*/

const sumPossible = (amount, numbers, memo = {}) => {
  if (amount in memo) return memo[amount]

  if (amount < 0) return false
  if (amount === 0) return true

  for (let num of numbers) {
    if (sumPossible(amount - num, numbers, memo) === true) {
      memo[amount] = true
      return true
    }
  }

  memo[amount] = false
  return false
}

console.log(sumPossible(2017, [4, 2, 10])) // -> false
