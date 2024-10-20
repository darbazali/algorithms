/* 
tree path finder
----------------
Write a function, pathFinder, that takes in the root of a binary tree and a target value. 
The function should return an array representing a path to the target value. 
If the target value is not found in the tree, then return null.

You may assume that the tree contains unique values.

@test-cases:
------------
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

pathFinder(a, 'e'); // -> [ 'a', 'b', 'e' ]

*/

const pathFinderHelper = (root, target) => {
  if (root === null) return null
  if (root.val === target) return [root.val]

  const leftPaths = pathFinderHelper(root.left, target)
  const rightPaths = pathFinderHelper(root.right, target)

  if (leftPaths !== null) {
    leftPaths.push(root.val)
    return leftPaths
  }

  if (rightPaths !== null) {
    rightPaths.push(root.val)
    return rightPaths
  }

  return null
}

const pathFinder = (root, target) => {
  const paths = pathFinderHelper(root, target)

  if (paths === null) return null
  return paths.reverse()
}
