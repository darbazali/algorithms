/* 
depth first values
------------------
Write a function, depthFirstValues, that takes in the root of a binary tree. 
The function should return an array containing all values of the tree in depth-first order.

@test-cases:
------------
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

depthFirstValues(a); 
    -> ['a', 'b', 'd', 'e', 'c', 'f']

*/

const depthFirstValues = (root) => {
  if (root === null) return []

  const stack = [root]
  const values = []

  while (stack.length > 0) {
    const current = stack.pop()
    values.push(current.val)

    if (current.right !== null) stack.push(current.right)
    if (current.left !== null) stack.push(current.left)
  }

  return values
}