/* 
create combinations
-------------------
Write a function, createCombinations, that takes in an array and a length as arguments. 
The function should return a 2D array representing all of the combinations of the specified length.
The items within the combinations and the combinations themselves may be returned in any order.
You may assume that the input array contains unique elements and 1 <= k <= items.length.

@test-cases:
------------
createCombinations(["a", "b", "c"], 2); // ->
 [
   [ 'a', 'b' ],
   [ 'a', 'c' ],
   [ 'b', 'c' ]
 ]

*/

const createCombinations = (items = [], k = 0) => {
  if (items.length < k) return []
  if (k === 0) return [[]]

  const first = items[0]
  const combosWithFirst = []
  const partialCombos = createCombinations(items.slice(1), k - 1)

  for (let combo of partialCombos) {
    combosWithFirst.push([first, ...combo])
  }

  const combosWithoutFirst = createCombinations(items.slice(1), k)
  return [...combosWithFirst, ...combosWithoutFirst]
}

console.log(createCombinations(["a", "b", "c"], 2)) // -> [ [ 'a', 'b' ], [ 'a', 'c' ], [ 'b', 'c' ] ]
