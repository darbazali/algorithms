/* 
sum list
--------
Write a function, sumList, that takes in the head of a linked list containing numbers as an argument. 
The function should return the total sum of all values in the linked list.

@test-cases:
------------
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

import Node from "./linked-list-node.mjs"

const sumList = (head) => {
  let sum = 0
  let current = head

  while (current !== null) {
    sum += current.val
    current = current.next
  }

  return sum
}

const sumListRecursive = (head) => {
  if (head === null) return 0
  return head.val + sumListRecursive(head.next)
}

const a = new Node(2)
const b = new Node(8)
const c = new Node(3)
const d = new Node(-1)
const e = new Node(7)

a.next = b
b.next = c
c.next = d
d.next = e

console.log(sumListRecursive(a)) // -> 19
