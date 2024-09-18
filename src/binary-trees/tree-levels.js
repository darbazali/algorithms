/* 
tree levels
-----------

Write a function, treeLevels, that takes in the root of a binary tree. 
The function should return a 2-Dimensional array where each subarray represents a level of the tree.

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

treeLevels(a); // ->
 [
   ['a'],
   ['b', 'c'],
   ['d', 'e', 'f']
 ]

*/

import Node from "./binary-tree-node.js"

const treeLevels = (root) => {
  if (root === null) return []

  const levels = []
  const stack = [{ node: root, currentLevel: 0 }]

  while (stack.length > 0) {
    const { node, currentLevel } = stack.pop()

    if (levels.length === currentLevel) {
      levels[currentLevel] = [node.value]
    } else {
      levels[currentLevel].push(node.value)
    }

    if (node.right !== null) {
      stack.push({ node: node.right, currentLevel: currentLevel + 1 })
    }

    if (node.left !== null) {
      stack.push({ node: node.left, currentLevel: currentLevel + 1 })
    }
  }

  return levels
}

const treeLevelsRecursive = (root, levels = [], currentLevel = 0) => {
  if (root === null) return levels

  if (levels.length === currentLevel) {
    levels[currentLevel] = [root.value]
  } else {
    levels[currentLevel].push(root.value)
  }

  treeLevelsRecursive(root.left, levels, currentLevel + 1)
  treeLevelsRecursive(root.right, levels, currentLevel + 1)

  return levels
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

console.log(treeLevelsRecursive(a))
