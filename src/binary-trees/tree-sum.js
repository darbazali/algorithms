/* 
tree sum
--------

Write a function, treeSum, that takes in the root of a binary tree that contains number values. 
The function should return the total sum of all values in the tree.

@example:
---------

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

       3
    /    \
   11     4
  / \      \
 4   -2     1

treeSum(a); // -> 21

*/

import Node from "./binary-tree-node.js"

// depth-first version
const treeSum = (root) => {
  if (root === null) return 0

  let sum = 0
  const stack = [root]

  while (stack.length > 0) {
    const current = stack.pop()
    sum += current.value

    if (current.right !== null) stack.push(current.right)
    if (current.left !== null) stack.push(current.left)
  }

  return sum
}

// breadth-first version
export const treeSumBreadthFirst = (root) => {
  if (root === null) return 0

  let sum = 0
  const queue = [root]

  while (queue.length > 0) {
    const current = queue.shift()
    sum += current.value

    if (current.right !== null) queue.push(current.right)
    if (current.left !== null) queue.push(current.left)
  }

  return sum
}

// recursive version
export const treeSumRecursive = (root) => {
  if (root === null) return 0
  return root.value + treeSumRecursive(root.left) + treeSumRecursive(root.right)
}

const a = new Node(3)
const b = new Node(11)
const c = new Node(4)
const d = new Node(4)
const e = new Node(-2)
const f = new Node(1)

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

console.log(treeSumRecursive(a)) // -> 21

export default treeSum
