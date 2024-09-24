/* 
count paths
-----------
Write a function, countPaths, that takes in a grid as an argument. 
In the grid, 'X' represents walls and 'O' represents open spaces. 
You may only move down or to the right and cannot pass through walls. 
The function should return the number of ways possible to travel from the top-left corner of the grid to the bottom-right corner.

@example:
---------
const grid = [
  ["O", "O"],
  ["O", "O"],
];

countPaths(grid); // -> 2

*/

const countPaths = (grid = [], r = 0, c = 0) => {
  // catch out of bounds positions
  if (r === grid.length) return 0
  if (c === grid[0].length) return 0
  if (grid[r][c] === "X") return 0

  if (r === grid.length - 1 && c === grid[0].length - 1) return 1

  const downCount = countPaths(grid, r + 1, c) // move to down
  const rightCount = countPaths(grid, r, c + 1) // move to right

  return downCount + rightCount
}

const grid = [
  ["O", "O"],
  ["O", "O"],
]

console.log(countPaths(grid)) // -> 2
