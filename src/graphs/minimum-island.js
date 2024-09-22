/* 
minimum island
--------------

Write a function, minimumIsland, that takes in a grid containing Ws and Ls. W represents water and L represents land. 
The function should return the size of the smallest island. 
An island is a vertically or horizontally connected region of land.

You may assume that the grid contains at least one island.

@example:
---------

const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

minimumIsland(grid); // -> 2

*/

const countIslandSize = (grid, r, c, visited) => {
  const rowInbounds = 0 <= r && r < grid.length
  const colInbounds = 0 <= c && c < grid[0].length
  if (!rowInbounds || !colInbounds) return 0

  if (grid[r][c] === "W") return 0

  const pos = r + "," + c
  if (visited.has(pos)) return 0
  visited.add(pos)

  let size = 1
  size += countIslandSize(grid, r - 1, c, visited)
  size += countIslandSize(grid, r + 1, c, visited)
  size += countIslandSize(grid, r, c - 1, visited)
  size += countIslandSize(grid, r, c + 1, visited)
  return size
}

const minimumIsland = (grid) => {
  const visited = new Set()
  let minimum = Infinity

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      const size = countIslandSize(grid, r, c, visited)
      if (size > 0 && size < minimum) minimum = size
    }
  }

  return minimum
}

const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
]

console.log(minimumIsland(grid)) // -> 2
