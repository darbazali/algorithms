/*
linked list values
Write a function, linkedListValues, that takes in the head of a linked list as an argument. 
The function should return an array containing all values of the nodes in the linked list.

@example:
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

a -> b -> c -> d

getLinkedListValues(a); // -> [ 'a', 'b', 'c', 'd' ]

*/

import createLinkedList from "./create-linked-list"
import type { INode } from "./linked-list-node"

const getLinkedListValues = <T>(head: INode<T> | null): T[] => {
  const values: T[] = []
  let current = head

  while (current !== null) {
    values.push(current.value)
    current = current.next!
  }

  return values
}

const getLinkedListValuesRecursive = <T>(head: INode<T>, values: T[] = []): T[] => {
  if (head === null) return values
  values.push(head.value)
  getLinkedListValuesRecursive(head.next!, values)
  return values
}

const list = createLinkedList<string>(["a", "b", "c", "d"])
console.log(getLinkedListValues(list))

export default getLinkedListValues
