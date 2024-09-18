class Queue {
  #items = []
  constructor(initial) {
    this.#items = Array.isArray(initial) ? [...initial] : [initial]
  }

  enqueue = (item) => {
    this.#items.push(item)
  }

  dequeue = () => {
    if (this.isEmpty()) {
      throw new Error("The Queue is empty")
    }
    return this.#items.shift()
  }

  isEmpty = () => this.#items.length === 0
}

export default Queue
