class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

const a = new Node("A")
const b = new Node("B")

console.log(a, b)

a.next = b

console.log(a)
