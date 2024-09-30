/* 
lowest common ancestor
----------------------
Write a function, lowestCommonAncestor, that takes in the root of a binary tree and two values. 
The function should return the value of the lowest common ancestor of the two values in the tree.

You may assume that the tree values are unique and the tree is non-empty.

Note that a node may be considered an ancestor of itself.

@test-cases:
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
const g = new Node('g');
const h = new Node('h');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
e.right = h;

      a
    /    \
   b      c
  / \      \
 d   e      f
    / \
    g  h

lowestCommonAncestor(a, 'd', 'h'); // b
lowestCommonAncestor(a, 'd', 'g'); // b
lowestCommonAncestor(a, 'g', 'c'); // a

*/

import Node from "../binary-trees/binary-tree-node.js"

const lowestCommonAncestor = (root, val1, val2) => {
  const path1 = findPath(root, val1)
  const path2 = findPath(root, val2)

  const set2 = new Set(path2)

  for (let val of path1) {
    if (set2.has(val)) return val
  }
}

const findPath = (root, target) => {
  if (root === null) return null
  if (root.value === target) return [root.value]

  const leftPath = findPath(root.left, target)
  if (leftPath !== null) {
    leftPath.push(root.value)
    return leftPath
  }

  const rightPath = findPath(root.right, target)
  if (rightPath !== null) {
    rightPath.push(root.value)
    return rightPath
  }

  return null
}

const a = new Node("a")
const b = new Node("b")
const c = new Node("c")
const d = new Node("d")
const e = new Node("e")
const f = new Node("f")
const g = new Node("g")
const h = new Node("h")

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f
e.left = g
e.right = h

console.log(lowestCommonAncestor(a, "d", "h")) // b
console.log(lowestCommonAncestor(a, "d", "g")) // b
console.log(lowestCommonAncestor(a, "g", "c")) // a
