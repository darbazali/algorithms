/* 
tree min value
--------------
Write a function, treeMinValue, that takes in the root of a binary tree that contains number values. 
The function should return the minimum value within the tree.

You may assume that the input tree is non-empty.

@test-cases
-----------
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

treeMinValue(a); // -> -2

*/

const treeMinValue = (root) => {
  if (root === null) return Infinity
  const leftValues = treeMinValue(root.left)
  const rightValues = treeMinValue(root.right)
  return Math.min(root.val, leftValues, rightValues)
}
