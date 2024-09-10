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

// const a = new Node(2)
// const b = new Node(8)
// const c = new Node(3)
// const d = new Node(-1)
// const e = new Node(7)

// a.next = b
// b.next = c
// c.next = d
// d.next = e

// // 2 -> 8 -> 3 -> -1 -> 7

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
