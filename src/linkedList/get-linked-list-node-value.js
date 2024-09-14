/* 
get node value
--------------

Write a function, getNodeValue, that takes in the head of a linked list and an index. 
The function should return the value of the linked list at the specified index.

If there is no node at the given index, then return null.

@example:
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

=> a -> b -> c -> d

getNodeValue(a, 2); // 'c'

*/

import createLinkedList from "./create-linked-list.js"

const list = createLinkedList(["a", "b", "c", "d"])

const getNodeValue = (head, target) => {
  let count = 0
  let current = head

  while (current !== null) {
    if (count === target) {
      return current.value
    }

    count += 1
    current = current.next
  }

  return null
}

console.log(getNodeValue(list, 2)) // -> 'c'
console.log(getNodeValue(list, 4)) // -> null
