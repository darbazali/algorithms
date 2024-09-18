class Stack {
  constructor() {
    this.items = []
  }

  push = (item) => {
    this.items.push(item)
  }

  pop = () => {
    if (this.isEmpty()) {
      throw new Error("The Stack is empty!")
    }
    return this.items.pop()
  }

  isEmpty = () => this.items.length === 0

  // more methods could be added if needed
}

export default Stack
