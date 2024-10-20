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
  const stack = [root]
  let min = Infinity

  while (stack.length > 0) {
    const current = stack.pop()
    if (current.val < min) min = current.val

    if (current.right) stack.push(current.right)
    if (current.left) stack.push(current.left)
  }

  return min
}
