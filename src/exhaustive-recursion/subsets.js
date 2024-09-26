/* 
subsets
-------
Write a function, subsets, that takes in an array as an argument. 
The function should return a 2D array where each subarray represents one of the possible subsets of the array.
The elements within the subsets and the subsets themselves may be returned in any order.
You may assume that the input array contains unique elements.

@test-cases:
subsets(['a', 'b']); // ->
 [ 
   [], 
   [ 'b' ], 
   [ 'a' ], 
   [ 'a', 'b' ] 
 ]

subsets([]); // ->
 [ 
   []
 ]

*/

const subsets = (elements = []) => {
  if (elements.length === 0) return [[]]

  const first = elements[0]
  const subsetsWithoutFirst = subsets(elements.slice(1))

  const subsetsWithFirst = []
  for (let sub of subsetsWithoutFirst) {
    subsetsWithFirst.push([first, ...sub])
  }

  return [...subsetsWithoutFirst, ...subsetsWithFirst]
}

console.log(subsets(["a", "b"])) // -> [ [], [ 'b' ], [ 'a' ], [ 'a', 'b' ] ]
console.log(subsets(["b"])) // -> [ [], [ 'b' ] ]
console.log(subsets([])) // -> [ [] ]
