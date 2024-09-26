/* 
permutations
------------
Write a function, permutations, that takes in an array an argument. 
The function should return a 2D array where each subarray represents one of the possible permutations of the array.
The subarrays may be returned in any order.
You may assume that the input array contains unique elements.

@test-cases:
------------
permutations(['a', 'b', 'c']); // -> 
 [ 
   [ 'a', 'b', 'c' ], 
   [ 'b', 'a', 'c' ], 
   [ 'b', 'c', 'a' ], 
   [ 'a', 'c', 'b' ], 
   [ 'c', 'a', 'b' ], 
   [ 'c', 'b', 'a' ] 
 ] 

*/

const permutations = (items = []) => {
  if (items.length === 0) return [[]]

  const first = items[0]
  const perms = permutations(items.slice(1))
  const fullPermutations = []

  for (let perm of perms) {
    for (let i = 0; i <= perm.length; i++) {
      fullPermutations.push([...perm.slice(0, i), first, ...perm.slice(i)])
    }
  }

  return fullPermutations
}

console.log(permutations(["a", "b", "c"]))
