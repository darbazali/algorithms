import Queue from "../queue/queue.js"

const graph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
}

const breadthFirstTraversal = (graph, src) => {
  const visited = new Set()
  const queue = new Queue(src)
  let str = ""

  while (!queue.isEmpty()) {
    const current = queue.dequeue()
    str += current + " "

    for (let neighbor of graph[current]) {
      if (!visited.has(neighbor)) {
        queue.enqueue(neighbor)
        visited.add(neighbor)
      }
    }
  }

  console.log(str)
}

breadthFirstTraversal(graph, "a") // -> a c b e d f
