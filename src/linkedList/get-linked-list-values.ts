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

import type { INode } from "./linked-list-node"

const getLinkedListValues = <T>(head: INode<T>): T[] => {
  const values: T[] = []
  let current = head

  while (current !== null) {
    values.push(current.value)
    current = current.next!
  }

  return values
}

export default getLinkedListValues
