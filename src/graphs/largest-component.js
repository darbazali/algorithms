/* 
largest component
-----------------

Write a function, largestComponent, that takes in the adjacency list of an undirected graph. 
The function should return the size of the largest connected component in the graph.

@example:
---------

largestComponent({
  0: ['8', '1', '5'],
  1: ['0'],
  5: ['0', '8'],
  8: ['0', '5'],
  2: ['3', '4'],
  3: ['2', '4'],
  4: ['3', '2']
}); // -> 4

*/

const countComponentSizeDepthFirst = (graph, node, visited) => {
  const stack = [node]
  let size = 0

  while (stack.length > 0) {
    const current = stack.pop()

    for (let neighbor of graph[current]) {
      if (!visited.has(neighbor)) {
        size += 1
        stack.push(neighbor)
        visited.add(neighbor)
      }
    }
  }

  return size
}

const countComponentSize = (graph, node, visited) => {
  if (visited.has(node)) return 0
  visited.add(node)

  let size = 1

  for (let neighbor of graph[node]) {
    size += countComponentSize(graph, neighbor, visited)
  }

  return size
}

const largestComponent = (graph) => {
  const visited = new Set()
  let largest = 0

  for (let node in graph) {
    const size = countComponentSize(graph, node, visited)
    if (size > largest) largest = size
  }

  return largest
}

const largest = largestComponent({
  0: ["8", "1", "5"],
  1: ["0"],
  5: ["0", "8"],
  8: ["0", "5"],
  2: ["3", "4"],
  3: ["2", "4"],
  4: ["3", "2"],
})

console.log(largest) // -> 4
