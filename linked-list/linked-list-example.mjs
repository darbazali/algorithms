import Node from "./linked-list-node.mjs"

const linkedList = new Node("A")
const b = new Node("B")
const c = new Node("C")
const d = new Node("D")
const e = new Node("E")

linkedList.next = b
b.next = c
c.next = d
d.next = e

export default linkedList
