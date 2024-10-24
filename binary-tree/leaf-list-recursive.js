/* 
leaf list
Write a function, leafList, that takes in the root of a binary tree and returns an array containing the values of all leaf nodes in left-to-right order.

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

leafList(a); // -> [ 'd', 'e', 'f' ] 

*/

const isLeafNode = (node) => node.left === null && node.right === null

const fillLeaves = (root, leaves) => {
  if (root === null) return []
  if (isLeafNode(root)) leaves.push(root.val)
  fillLeaves(root.left, leaves)
  fillLeaves(root.right, leaves)
}

const leafList = (root) => {
  const leaves = []
  fillLeaves(root, leaves)
  return leaves
}
