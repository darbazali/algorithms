/* 
lefty nodes
-----------
Write a function, leftyNodes, that takes in the root of a binary tree. 
The function should return an array containing the left-most value on every level of the tree. 
The array must be ordered in a top-down fashion where the root is the first element.

Note that the left-most node on a level may not necessarily be a left child.

@test-cases:
------------
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
const g = new Node('g');
const h = new Node('h');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
e.right = h;

      a
    /    \
   b      c
  / \      \
 d   e      f
    / \
    g  h

leftyNodes(a);  // [ 'a', 'b', 'd', 'g' ]

*/

const leftyNodes = (root, level = 0, values = []) => {
  if (root === null) return []

  if (values.length === level) {
    values.push(root.value)
  }

  leftyNodes(root.left, level + 1, values)
  leftyNodes(root.right, level + 1, values)

  return values
}
