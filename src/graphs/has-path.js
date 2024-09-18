/* 
has path
--------

Write a function, hasPath, that takes in an object representing the adjacency list of a directed acyclic graph and two nodes (src, dst). 
The function should return a boolean indicating whether or not there exists a directed path between the source and destination nodes.

@example:
---------

const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};

hasPath(graph, 'f', 'k'); // true

*/

import Stack from "../stack/stack.js"

const hasPath = (graph, src, dst) => {
  if (src === dst) return true

  const stack = new Stack(src)

  while (!stack.isEmpty()) {
    const current = stack.pop()
    if (current === dst) return true

    const neighbors = graph[current]
    for (let neighbor of neighbors) {
      stack.push(neighbor)
    }
  }

  return false
}

const graph = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
}

console.log(hasPath(graph, "f", "k")) // true
console.log(hasPath(graph, "f", "j")) // false
