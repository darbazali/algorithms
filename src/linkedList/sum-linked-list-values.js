/* 
sum list
--------

Write a function, sumList, that takes in the head of a linked list containing numbers as an argument. 
The function should return the total sum of all values in the linked list. 

@example:
const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(-1);
const e = new Node(7);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

2 -> 8 -> 3 -> -1 -> 7

sumList(a); // 19

*/

import createLinkedList from "./create-linked-list.js"

const sumLinkedList = (head) => {
  let sum = 0
  let current = head

  while (current !== null) {
    if (Number(current.value)) {
      sum += current.value
    }

    current = current.next
  }

  return sum
}

const list = createLinkedList([2, 8, 3, -1, 7]) // -> 19
console.log(sumLinkedList(list))
