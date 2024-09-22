const graph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
}

const depthFirstTraversalRecursive = (graph, src) => {
  console.log(src)
  for (let neighbor of graph[src]) {
    depthFirstTraversalRecursive(graph, neighbor)
  }
}

depthFirstTraversalRecursive(graph, "a")
