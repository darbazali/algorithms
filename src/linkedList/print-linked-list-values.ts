import type { INode } from "./linked-list-node"
import Node from "./linked-list-node"

const printLinkedListValues = <T>(head: INode<T>): void => {
  let str = ""

  let current = head
  while (current !== null) {
    str += current.value + " -> "
    current = current.next!
  }

  console.log(str + "NULL")
}

export default printLinkedListValues

const a = new Node("a")
const b = new Node("b")
const c = new Node("c")
const d = new Node("d")

a.next = b
b.next = c
c.next = d

printLinkedListValues(a) // a -> b -> c -> d -> NULL
