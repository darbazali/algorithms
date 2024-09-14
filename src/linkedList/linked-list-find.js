/* 
linked list find
----------------

Write a function, linkedListFind, that takes in the head of a linked list and a target value. 
The function should return a boolean indicating whether or not the linked list contains the target.

@example: 
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

a -> b -> c -> d

linkedListFind(a, "c"); // true

*/

import createLinkedList from "./create-linked-list.js"

const list = createLinkedList(["a", "b", "c", "d"])

const linkedListFind = (head, target) => {
  let current = head

  while (current !== null) {
    if (current.value === target) {
      return true
    }

    current = current.next
  }

  return false
}

export default linkedListFind

console.log(linkedListFind(list, "a")) // -> true
console.log(linkedListFind(list, "e")) // -> false
