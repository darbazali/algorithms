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

const treeLevels = (root) => {
  if (root === null) return []

  const queue = [{ node: root, level: 0 }]
  const levels = []

  while (queue.length > 0) {
    const { node, level } = queue.shift()

    if (level === levels.length) {
      levels[level] = [node.val]
    } else {
      levels[level].push(node.val)
    }

    if (node.left) queue.push({ node: node.left, level: level + 1 })
    if (node.right) queue.push({ node: node.right, level: level + 1 })
  }

  return levels
}
