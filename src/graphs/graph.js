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

  // Remove an edge between two vertices (nodes)
  removeEdge = (node1, node2) => {
    if (this.adjacencyList.has(node1) && this.adjacencyList.has(node2)) {
      this.adjacencyList.set(
        node1,
        this.adjacencyList.get(node1).filter((v) => v !== node2),
      )
      this.adjacencyList.set(
        node2,
        this.adjacencyList.get(node2).filter((v) => v !== node1),
      )
    }
  }

  removeNode(node) {
    if (this.adjacencyList.has(node)) {
      // Remove edges associated with this node
      this.adjacencyList.get(node).forEach((neighbor) => {
        this.removeEdge(node, neighbor)
      })

      // Remove the node itself
      this.adjacencyList.delete(node)
    }
  }

  display() {
    for (let [node, edges] of this.adjacencyList.entries()) {
      console.log(`${node} -> [ ${edges.join(", ")} ]`)
    }
  }
}

export default Graph
