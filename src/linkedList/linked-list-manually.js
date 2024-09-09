class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

const a = new Node("A")
const b = new Node("B")
const c = new Node("C")
const d = new Node("D")

a.next = b
b.next = c
c.next = d

// A -> B -> C -> D -> NULL

const printLinkedList = (head) => {
  let current = head

  while (current !== null) {
    console.log(current.value)
    current = current.next
  }
}

const printLinkedListRecursive = (head) => {
  if (head === null) return

  console.log(head.value)
  printLinkedListRecursive(head.next)
}

const getLinkedListValues = (head) => {
  const values = []
  let current = head

  while (current !== null) {
    values.push(current.value)
    current = current.next
  }

  return values
}

const one = new Node(1)
const two = new Node(2)
const three = new Node(3)
const four = new Node(4)

one.next = two
two.next = three
three.next = four

const sumList = (head) => {
  let sum = 0
  let current = head

  while (current !== null) {
    sum += current.value
    current = current.next
  }

  return sum
}

const linkedListFind = (head, target) => {
  let current = head

  while (current !== null) {
    if (current.value === target) {
      return true
    }
    current = current.next
  }

  return false
}

const getNodeValue = (head, index) => {
  let count = 0
  let current = head

  while (current !== null) {
    if (count === index) {
      return current.value
    }
    current = current.next
    count += 1
  }

  return null
}

console.log(getNodeValue(a, 1)) // -> B
