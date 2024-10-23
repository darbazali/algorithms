/* 
level averages
--------------
Write a function, levelAverages, that takes in the root of a binary tree that contains number values. 
The function should return an array containing the average value of each level.

@test-cases:
------------
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

const getAvg = (arr) => {
  let sum = 0
  for (let num of arr) {
    sum += num
  }
  return sum / arr.length
}

const levelAverages = (root) => {
  if (root === null) return []

  const levels = []
  const queue = [{ node: root, level: 0 }]

  while (queue.length > 0) {
    const { node, level } = queue.shift()
    if (level === levels.length) {
      levels[level] = [node.val]
    } else {
      levels[level].push(node.val)
    }

    if (node.right) queue.push({ node: node.right, level: level + 1 })
    if (node.left) queue.push({ node: node.left, level: level + 1 })
  }

  return levels.map(getAvg)
}
