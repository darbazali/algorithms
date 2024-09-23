/* 
min change
----------
Write a function minChange that takes in an amount and an array of coins. 
The function should return the minimum number of coins required to create the amount. 
You may use each coin as many times as necessary.

If it is not possible to create the amount, then return -1.

@example:
---------
minChange(8, [1, 5, 4, 12]); // -> 2, because 4+4 is the minimum coins possible
minChange(2017, [4, 2, 10]); // -> -1

*/

const _minChange = (amount, coins, memo = {}) => {
  if (amount in memo) return memo[amount]
  if (amount < 0) return Infinity
  if (amount === 0) return 0

  let minCoins = Infinity
  for (let coin of coins) {
    const numCoins = 1 + _minChange(amount - coin, coins, memo)
    minCoins = Math.min(numCoins, minCoins)
  }

  memo[amount] = minCoins
  return minCoins
}

const minChange = (amount, coins) => {
  const result = _minChange(amount, coins)
  if (result === Infinity) return -1
  return result
}

console.log(minChange(8, [1, 5, 4, 12])) // -> 2
console.log(minChange(2017, [4, 2, 10])) // -> -1
