/* 
tree path finder
----------------

Write a function, pathFinder, that takes in the root of a binary tree and a target value. 
The function should return an array representing a path to the target value. 
If the target value is not found in the tree, then return null.

You may assume that the tree contains unique values.

@example:
---------

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

const pathFinder = (root, target) => {
  if (root === null) return null
  if (root.value === target) return [root.value]

  const leftPath = pathFinder(root.left, target)
  const rightPath = pathFinder(root.right, target)

  if (leftPath !== null) {
    // target found on left
    return [root.value, ...leftPath]
  }

  if (rightPath !== null) {
    // target found on right
    return [root.value, ...rightPath]
  }

  return null
}

export default pathFinder
