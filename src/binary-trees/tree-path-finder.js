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

@complexity:
------------
Time: O(n)
Space: O(n)
*/

import Node from "./binary-tree-node.js"

const pathFinderHelper = (root, target) => {
  if (root === null) return null
  if (root.value === target) return [root.value]

  const leftPath = pathFinderHelper(root.left, target)
  const rightPath = pathFinderHelper(root.right, target)

  if (leftPath !== null) {
    // target found on left
    leftPath.push(root.value)
    return leftPath
  }

  if (rightPath !== null) {
    // target found on right
    rightPath.push(root.value)
    return rightPath
  }

  return null
}

const pathFinder = (root, target) => {
  const result = pathFinderHelper(root, target)
  if (result === null) return null
  return result.reverse()
}

const root = new Node(0)
let current = root
for (let i = 1; i < 5000; i++) {
  current.right = new Node(i)
  current = current.right
}

const a = new Node("a")
const b = new Node("b")
const c = new Node("c")
const d = new Node("d")
const e = new Node("e")
const f = new Node("f")

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

console.log(pathFinder(a, "e")) // -> [ 'a', 'b', 'e' ]
console.log(pathFinder(root, 4000)) // -> [0, 1, ..., 4000]

export default pathFinder
