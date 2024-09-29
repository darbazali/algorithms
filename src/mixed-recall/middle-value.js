/* 
middle value
------------
Write a function, middleValue, that takes in the head of a linked list as an argument. 
The function should return the value of the middle node in the linked list. 
If the linked list has an even number of nodes, then return the value of the second middle node.

You may assume that the input list is non-empty.

@test-cases:
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

 a -> b -> c -> d -> e
middleValue(a); // c

*/

import Node from "../linkedList/linked-list-node.js"

// O(n) time, O(n) space
const middleValue = (head) => {
  const values = []
  let current = head

  while (current !== null) {
    values.push(current.value)
    current = current.next
  }

  const mid = Math.floor(values.length / 2)
  return values[mid]
}

// Middle value using two pointers: O(n) time, O(1) space
const middleValueWithTwoPointers = (head) => {
  let fast = head
  let slow = head

  while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }

  return slow.value
}

const a = new Node("a")
const b = new Node("b")
const c = new Node("c")
const d = new Node("d")
const e = new Node("e")

a.next = b
b.next = c
c.next = d
d.next = e

// a -> b -> c -> d -> e
console.log(middleValueWithTwoPointers(a)) // -> c
