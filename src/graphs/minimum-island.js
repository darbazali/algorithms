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

const minimumIsland = (grid) => {
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      console.log(r, c, grid[r][c])
    }
  }
}

const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
]

minimumIsland(grid) // -> 2
