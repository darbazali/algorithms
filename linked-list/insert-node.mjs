/* 
insert node
-----------
Write a function, insertNode, that takes in the head of a linked list, a value, and an index. 
The function should insert a new node with the value into the list at the specified index. 
Consider the head of the linked list as index 0. 
The function should return the head of the resulting linked list.

Do this in-place.

You may assume that the input list is non-empty and the index is not greater than the length of the input list.

@test-cases:
------------
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

 a -> b -> c -> d

insertNode(a, 'x', 2);
 a -> b -> x -> c -> d

*/

import Node from "./linked-list-node.mjs"

const insertNode = (head, value, index) => {
  if (index === 0) {
    const newHead = new Node(value)
    newHead.next = head
    return newHead
  }

  let current = head
  let count = 0

  while (current !== null) {
    if (count === index - 1) {
      const next = current.next
      const node = new Node(value)
      current.next = node
      node.next = next
      break
    }

    count += 1
    current = current.next
  }

  return head
}
