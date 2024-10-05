/* 
pair sum
--------
Write a function, pairSum, that takes in an array and a target sum as arguments. 
The function should return an array containing a pair of indices whose elements sum to the given target. 
The indices returned must be unique.

Be sure to return the indices, not the elements themselves.

There is guaranteed to be one such pair that sums to the target.

@test-cases
-----------
pairSum([3, 2, 5, 4, 1], 8); // -> [0, 2]
pairSum([4, 7, 9, 2, 5, 1], 5); // -> [0, 5]
pairSum([9, 9], 18); // -> [0, 1]

*/

const pairSum = (numbers, targetSum) => {
  const prev = {}

  for (let i = 0; i < numbers.length; i += 1) {
    const num = numbers[i]
    const complement = targetSum - num
    if (complement in prev) return [prev[complement], i]

    prev[num] = i
  }
}

console.log(pairSum([3, 2, 5, 4, 1], 8)) // -> [0, 2]
console.log(pairSum([4, 7, 9, 2, 5, 1], 5)) // -> [0, 5]
console.log(pairSum([9, 9], 18)) // -> [0, 1]
