/* 
tree levels
-----------
Write a function, treeLevels, that takes in the root of a binary tree. 
The function should return a 2-Dimensional array where each subarray represents a level of the tree.

@test-cases
-----------
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

      a
    /   \
   b     c
  / \     \
 d   e     f

treeLevels(a);  ->
 [
   ['a'],
   ['b', 'c'],
   ['d', 'e', 'f']
 ]

*/

const fillLevels = (root, levels, levelNum) => {
  if (root === null) return levels

  if (levelNum === levels.length) {
    levels[levelNum] = [root.val]
  } else {
    levels[levelNum].push(root.val)
  }

  fillLevels(root.left, levels, levelNum + 1)
  fillLevels(root.right, levels, levelNum + 1)
}

const treeLevels = (root) => {
  const levels = []
  fillLevels(root, levels, 0)
  return levels
}
