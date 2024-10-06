import Node from "./linked-list-node.mjs"

const a = new Node("A")
const b = new Node("B")
const c = new Node("C")
const d = new Node("D")
const e = new Node("E")

a.next = b
b.next = c
c.next = d
d.next = e

const printLinkedList = (head) => {
  let current = head

  while (current !== null) {
    console.log(current.val)
    current = current.next
  }
}

printLinkedList(a) // -> A B C D E
