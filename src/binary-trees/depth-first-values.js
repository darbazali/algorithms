/* 
depth first values
------------------

Write a function, depthFirstValues, that takes in the root of a binary tree. 
The function should return an array containing all values of the tree in depth-first order.

@example:
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

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

depthFirstValues(a); -> ['a', 'b', 'd', 'e', 'c', 'f']

*/

import Stack from "../stack/stack.js"
import Node from "./binary-tree-node.js"

const depthFirstValues = (root) => {
  if (root === null) return []

  const result = []
  const stack = new Stack(root)

  while (!stack.isEmpty()) {
    const current = stack.pop()
    result.push(current.value)

    if (current.right !== null) stack.push(current.right)
    if (current.left !== null) stack.push(current.left)
  }

  return result
}

export const depthFirstValuesRecursive = (root) => {
  if (root === null) return []

  const leftValues = depthFirstValuesRecursive(root.left)
  const rightValues = depthFirstValuesRecursive(root.right)

  return [root.value, ...leftValues, ...rightValues]
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

console.log(depthFirstValues(a)) // -> ['a', 'b', 'd', 'e', 'c', 'f']

export default depthFirstValues
