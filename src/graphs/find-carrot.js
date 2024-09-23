/* 
find carrot
-----------
Write a function, findCarrot, that takes in a grid, a starting row, and a starting column. 
In the grid, 'X's are walls, 'O's are open spaces, and 'C's are carrots. 
The function should return a boolean representing whether it cna reach the position of carrot or not. 
You may move up, down, left, or right, but cannot pass through walls (X). 
If there is no possible path to a carrot, then return -1.

@example:
---------

const grid = [
  ['O', 'O', 'X', 'X', 'X'],
  ['O', 'X', 'X', 'X', 'C'],
  ['O', 'X', 'O', 'X', 'X'],
  ['O', 'O', 'O', 'O', 'O'],
  ['O', 'X', 'X', 'X', 'X'],
  ['O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'C', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O'],
];

findCarrot(grid, 3, 4); // -> true

*/
