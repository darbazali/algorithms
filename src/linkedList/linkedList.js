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

  print = () => {
    let str = ""
    let current = this.head
    while (current !== null) {
      str += current.value + " -> "
      current = current.next
    }

    console.log(str + " NULL")
  }

  contains = (value) => {
    let current = this.head
    while (current !== null) {
      if (current.value === value) {
        return true
      }
      current = current.next
    }

    return false
  }

  getValues = () => {
    const values = []

    let current = this.head
    while (current !== null) {
      values.push(current.value)
      current = current.next
    }

    return values
  }
}

const list = new LinkedList()

list.append("a")
list.append("b")
list.append("c")

console.log(list.getValues())
