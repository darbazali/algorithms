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

  append(value) {
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

  print() {
    let str = ""
    let current = this.head

    while (current !== null) {
      str += `[${current.value}] -> `
      current = current.next
    }

    console.log(`${str} ${current}`)
  }

  contains(target) {
    let current = this.head
    while (current !== null) {
      if (current.value === target) return true
      current = current.next
    }

    return false
  }

  delete(target) {
    if (this.head.value === target) {
      return this.head.next
    }

    let current = this.head
    let prev = null

    while (current !== null) {
      if (current.value === target) {
        prev.next = current.next
      }
      prev = current
      current = current.next
    }

    return this.head
  }
}

const list = new LinkedList()

list.append("a")
list.append("b")
list.append("c")
list.append("d")

list.print()
console.log("--------------")
list.delete("c")

list.print()
