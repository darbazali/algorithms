import type { INode } from "./linked-list-node"

const printLinkedListValues = <T>(head: INode<T>): void => {
  let current = head
  while (current !== null) {
    console.log(current.value)
    current = current.next!
  }
}

export default printLinkedListValues
