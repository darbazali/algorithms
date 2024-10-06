/* 
linked list values
------------------
Write a function, linkedListValues, that takes in the head of a linked list as an argument. 
The function should return an array containing all values of the nodes in the linked list.

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

linkedListValues(a); // -> [ 'a', 'b', 'c', 'd' ]

*/

import linkedList from "./linked-list-example.mjs"

const linkedListValues = (head) => {
  const values = []
  let current = head

  while (current !== null) {
    values.push(current.val)
    current = current.next
  }

  return values
}

const linkedListValuesRecursive = (head) => {
  const values = []
  fillValues(head, values)
  return values
}

const fillValues = (head, values) => {
  if (head === null) return
  values.push(head.val)
  fillValues(head.next, values)
}

console.log(linkedListValuesRecursive(linkedList)) // -> [ 'A', 'B', 'C', 'D', 'E' ]
