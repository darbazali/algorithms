/* 
breadth first values
--------------------

Write a function, breadthFirstValues, that takes in the root of a binary tree. 
The function should return an array containing all values of the tree in breadth-first order.

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

breadthFirstValues(a); -> ['a', 'b', 'c', 'd', 'e', 'f']

*/

const breadthFirstValues = (root) => {
  if (root === null) return []

  const values = []
  const queue = [root]

  while (queue.length > 0) {
    const current = queue.pop()
    values.push(current.value)

    if (current.left !== null) queue.unshift(current.left)
    if (current.right !== null) queue.unshift(current.right)
  }

  return values
}

export default breadthFirstValues