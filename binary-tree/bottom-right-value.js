/* 
bottom right value
------------------
Write a function, bottomRightValue, that takes in the root of a binary tree. 
The function should return the right-most value in the bottom-most level of the tree.

You may assume that the input tree is non-empty.

@test-cases
-----------
const a = new Node(3);
const b = new Node(11);
const c = new Node(10);
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
   11     10
  / \      \
 4   -2     1

bottomRightValue(a); // -> 1

*/

const bottomRightValue = (root) => {
  const queue = [root]
  while (queue.length > 0) {
    const current = queue.shift()
    if (current.left) queue.push(current.left)
    if (current.right) queue.push(current.right)
    if (queue.length === 0) return current.val
  }
}
