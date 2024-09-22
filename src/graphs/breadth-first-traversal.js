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
  const queue = new Queue(src)
  let str = ""

  while (!queue.isEmpty()) {
    const current = queue.dequeue()
    str += current + " "

    for (let neighbor of graph[current]) {
      queue.enqueue(neighbor)
    }
  }

  console.log(str)
}

breadthFirstTraversal(graph, "a")
