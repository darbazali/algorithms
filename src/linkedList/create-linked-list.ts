/*
create linked list
------------------

Write a function, createLinkedList, that takes in an array of values as an argument. 
The function should create a linked list containing each element of the array as the values of the nodes. 
The function should return the head of the linked list.

@example:
createLinkedList(["h", "e", "y"]); // h -> e -> y

*/

import type { INode } from "./linked-list-node"
import Node from "./linked-list-node"

const createLinkedList = <T>(values: T[]): INode<T> | null => {
  if (values.length === 0) return null
  // @ts-expect-error
  const dummyHead: INode<T> = new Node(null)
  let tail: INode<T> = dummyHead

  for (let value of values) {
    tail.next = new Node(value)
    tail = tail.next
  }

  return dummyHead.next
}

export default createLinkedList
