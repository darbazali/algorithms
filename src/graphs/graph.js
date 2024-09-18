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

  // Add an edge between two vertices (nodes)
  addEdge = (node1, node2) => {
    if (this.adjacencyList.has(node1) && this.adjacencyList.has(node2)) {
      this.adjacencyList.get(node1).push(node2)
      this.adjacencyList.get(node2).push(node1)
    }
  }
}

const graph = new Graph()
graph.addNode("a")
graph.addNode("b")
graph.addNode("c")

graph.addEdge("a", "b")
graph.addEdge("a", "c")

console.log(graph.adjacencyList)
