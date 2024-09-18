class Stack {
  #items = []
  constructor(initial) {
    this.#items = Array.isArray(initial) ? [...initial] : [initial]
  }

  push = (item) => {
    this.#items.push(item)
  }

  pop = () => {
    if (this.isEmpty()) {
      throw new Error("The Stack is empty!")
    }
    return this.#items.pop()
  }

  isEmpty = () => this.#items.length === 0
}

export default Stack
