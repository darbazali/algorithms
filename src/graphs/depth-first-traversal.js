import Stack from "../stack/stack.js"

const graph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
}

const depthFirstTraversal = (graph, src) => {
  const stack = new Stack(src)
  let str = ""

  while (!stack.isEmpty()) {
    const current = stack.pop()
    str += current + " "

    for (let neighbor of graph[current]) {
      stack.push(neighbor)
    }
  }

  console.log(str)
}

depthFirstTraversal(graph, "a") // a b d f c e
