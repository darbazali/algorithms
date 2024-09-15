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

import Node from "./binary-tree-node.js"

const depthFirstValues = (root) => {
  if (root === null) return []

  const result = []
  const stack = [root]

  while (stack.length > 0) {
    const current = stack.pop()
    result.push(current.value)

    if (current.right !== null) stack.push(current.right)
    if (current.left !== null) stack.push(current.left)
  }

  return result
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

console.log(depthFirstValues(b))
