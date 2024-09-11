class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  append = (value) => {
    if (this.head === null) {
      this.head = new Node(value)
      return
    }

    let current = this.head
    while (current.next !== null) {
      current = current.next
    }

    current.next = new Node(value)
  }
}

const list = new LinkedList()

list.append("a")
list.append("b")
list.append("c")

console.log(list.head)
