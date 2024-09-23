/* 
closest carrot
--------------
Write a function, closestCarrot, that takes in a grid, a starting row, and a starting column. 
In the grid, 'X's are walls, 'O's are open spaces, and 'C's are carrots. 
The function should return a number representing the length of the shortest path from the starting position to a carrot. 
You may move up, down, left, or right, but cannot pass through walls (X). 
If there is no possible path to a carrot, then return -1.

@example:
---------
const grid = [
  ['O', 'O', 'O', 'O', 'O'],
  ['O', 'X', 'O', 'O', 'O'],
  ['O', 'X', 'X', 'O', 'O'],
  ['O', 'X', 'C', 'O', 'O'],
  ['O', 'X', 'X', 'O', 'O'],
  ['C', 'O', 'O', 'O', 'O'],
];

closestCarrot(grid, 1, 2); // -> 4

*/

const closestCarrot = (grid, startRow, startCol) => {
  const visited = new Set([startRow + "," + startCol])
  const queue = [[startRow, startCol, 0]]

  while (queue.length > 0) {
    const [row, col, distance] = queue.shift()

    if (grid[row][col] === "C") return distance

    const deltas = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ]

    for (let delta of deltas) {
      const [rowDelta, colDelta] = delta

      const neighborRow = row + rowDelta
      const neighborCol = col + colDelta

      const rowInbounds = 0 <= neighborRow && neighborRow < grid.length
      const colInbounds = 0 <= neighborCol && neighborCol < grid[0].length

      const pos = neighborRow + "," + neighborCol

      if (
        rowInbounds &&
        colInbounds &&
        grid[neighborRow][neighborCol] !== "X" &&
        !visited.has(pos)
      ) {
        queue.push([neighborRow, neighborCol, distance + 1])
        visited.add(pos)
      }
    }
  }

  return -1
}

const grid = [
  ["O", "O", "O", "O", "O"],
  ["O", "X", "O", "O", "O"],
  ["O", "X", "X", "O", "O"],
  ["O", "X", "C", "O", "O"],
  ["O", "X", "X", "O", "O"],
  ["C", "O", "O", "O", "O"],
]

console.log(closestCarrot(grid, 1, 2)) // -> 4
