/* 
tree includes
-------------

Write a function, treeIncludes, that takes in the root of a binary tree and a target value. 
The function should return a boolean indicating whether or not the value is contained in the tree.

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

treeIncludes(a, "e"); // -> true

*/

const treeIncludes = (root, target) => {
  if (root === null) return false

  const stack = [root]

  while (stack.length > 0) {
    const node = stack.pop()
    if (node.value === target) return true
    if (node.right !== null) stack.push(node.right)
    if (node.left !== null) stack.push(node.left)
  }

  return false
}

export default treeIncludes
