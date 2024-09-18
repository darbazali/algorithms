class Graph {
  adjacencyList = new Map()

  constructor() {
    this.adjacencyList = new Map()
  }

  addNode = (node) => {
    if (!this.adjacencyList.has(node)) {
      this.adjacencyList.set(node, [])
    }
  }
}

const graph = new Graph()
graph.addNode("a")
graph.addNode("b")
graph.addNode("c")

console.log(graph.adjacencyList)
