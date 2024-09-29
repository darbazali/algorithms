/* 
linked list cycle
-----------------
Write a function, linkedListCycle, that takes in the head of a linked list as an argument. 
The function should return a boolean indicating whether or not the linked list contains a cycle.

@test-case:
-----------
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');

a.next = b;
b.next = c;
c.next = d;
d.next = b; // cycle

        _______
      /        \
a -> b -> c -> d 

linkedListCycle(a);  // true

*/

import Node from "../linkedList/linked-list-node.js"

// using a set to keep track of visited nodes
const linkedListCycle = (head) => {
  const visited = new Set()
  let current = head

  while (current !== null) {
    if (visited.has(current.value)) return true
    visited.add(current.value)
    current = current.next
  }

  return false
}

// Using two pointers
const linkedListCycleWithTwoPointers = (head) => {
  let fast = head
  let slow = head
  let firstIteration = true

  while (fast !== null && fast.next !== null) {
    if (fast === slow && !firstIteration) return true
    fast = fast.next.next
    slow = slow.next
    firstIteration = false
  }

  return false
}

const a = new Node("a")
const b = new Node("b")
const c = new Node("c")
const d = new Node("d")

a.next = b
b.next = c
c.next = d
d.next = b // cycle

//         _______
//       /        \
// a -> b -> c -> d

console.log(linkedListCycleWithTwoPointers(a)) // true
