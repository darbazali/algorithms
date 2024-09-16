/* 
bottom right value
------------------

Write a function, bottomRightValue, that takes in the root of a binary tree. 
The function should return the right-most value in the bottom-most level of the tree.

You may assume that the input tree is non-empty.

@example:
---------

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
  let current = root // could be null, as well

  while (queue.length > 0) {
    current = queue.pop()

    if (current.left !== null) queue.unshift(current.left)
    if (current.right !== null) queue.unshift(current.right)
  }

  return current.value
}

export default bottomRightValue
