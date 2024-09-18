import Stack from "../stack/stack.js"

const graph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
}

const depthFirstValues = (graph, source) => {
  const stack = new Stack(source)
  const values = []

  while (!stack.isEmpty()) {
    const current = stack.pop()
    values.push(current)

    const neighbors = graph[current]

    for (let neighbor of neighbors) {
      stack.push(neighbor)
    }
  }

  return values
}

const depthFirstPrintRecursive = (graph, src) => {
  console.log(src)
  const neighbors = graph[src]
  for (let neighbor of neighbors) {
    depthFirstPrintRecursive(graph, neighbor)
  }
}

depthFirstPrintRecursive(graph, "a")
