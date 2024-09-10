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

console.log(getLinkedListValues(a))
