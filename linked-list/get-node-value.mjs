/* 
get node value
--------------
Write a function, getNodeValue, that takes in the head of a linked list and an index. 
The function should return the value of the linked list at the specified index.

If there is no node at the given index, then return null.

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

getNodeValue(a, 2); // 'c'

*/

import Node from "./linked-list-node.mjs"

const getNodeValue = (head, index) => {
  let count = 0
  let current = head

  while (current !== null) {
    if (count === index) return current.val
    current = current.next
    count += 1
  }

  return null
}

const getNodeValueRecursive = (head, index, count = 0) => {
  if (head === null) return null
  if (count === index) return head.val
  return getNodeValueRecursive(head.next, index, count + 1)
}

const a = new Node("a")
const b = new Node("b")
const c = new Node("c")
const d = new Node("d")

a.next = b
b.next = c
c.next = d

console.log(getNodeValueRecursive(a, 2)) // -> 'c'
console.log(getNodeValueRecursive(a, 5)) // -> null
