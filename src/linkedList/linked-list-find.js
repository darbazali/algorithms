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

export const linkedListFindRecursive = (head, target) => {
  if (head === null) return false
  if (head.value === target) {
    return true
  }
  return linkedListFindRecursive(head.next, target)
}

export default linkedListFind
