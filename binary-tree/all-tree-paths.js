/* 
all tree paths
--------------
Write a function, allTreePaths, that takes in the root of a binary tree. 
The function should return a 2-Dimensional array where each subarray represents a root-to-leaf path in the tree.

The order within an individual path must start at the root and end at the leaf, 
but the relative order among paths in the outer array does not matter.

You may assume that the input tree is non-empty.

@test-cases
-----------
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

allTreePaths(a);  ->
 [ 
   [ 'a', 'b', 'd' ], 
   [ 'a', 'b', 'e' ], 
   [ 'a', 'c', 'f' ] 
 ] 


*/

const isLeafNode = (node) => node.left === null && node.right === null

const _allTreePaths = (root) => {
  if (root === null) return []
  if (isLeafNode(root)) return [[root.val]]

  const allPaths = []

  const leftPaths = _allTreePaths(root.left)
  for (let path of leftPaths) {
    path.push(root.val)
    allPaths.push(path)
  }

  const rightPaths = _allTreePaths(root.right)
  for (let path of rightPaths) {
    path.push(root.val)
    allPaths.push(path)
  }

  return allPaths
}

const allTreePaths = (root) => {
  const paths = _allTreePaths(root)

  for (let path of paths) {
    path.reverse()
  }

  return paths
}
