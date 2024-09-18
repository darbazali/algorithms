/* 
level averages
--------------

Write a function, levelAverages, that takes in the root of a binary tree that contains number values. 
The function should return an array containing the average value of each level.


@example:
---------

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

levelAverages(a); // -> [ 3, 7.5, 1 ] 

*/

const calculateAverages = (arr) =>
  arr.map((subArray) => {
    const sum = subArray.reduce((acc, num) => acc + num, 0)
    return sum / subArray.length
  })

const levelAveragesHelper = (root) => {
  if (root === null) return []

  const levels = []
  const stack = [{ node: root, currentLevel: 0 }]

  while (stack.length > 0) {
    const { node, currentLevel } = stack.pop()

    if (levels.length === currentLevel) {
      levels[currentLevel] = [node.value]
    } else {
      levels[currentLevel].push(node.value)
    }

    if (node.right !== null) {
      stack.push({ node: node.right, currentLevel: currentLevel + 1 })
    }

    if (node.left !== null) {
      stack.push({ node: node.left, currentLevel: currentLevel + 1 })
    }
  }

  return levels
}

const levelAverages = (root) => {
  const levels = levelAveragesHelper(root)
  return calculateAverages(levels)
}
