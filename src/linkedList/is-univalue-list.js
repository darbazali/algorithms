/* 
is univalue list
----------------

Write a function, isUnivalueList, that takes in the head of a linked list as an argument. 
The function should return a boolean indicating whether or not the linked list contains exactly one unique value.

You may assume that the input list is non-empty.

@example:
const a = new Node(7);
const b = new Node(7);
const c = new Node(7);

a.next = b;
b.next = c;
=> 7 -> 7 -> 7

isUnivalueList(a); // true

*/

const isUnivalueList = (head) => {
  let current = head

  while (current !== null) {
    if (current.value !== head.value) return false
    current = current.next
  }

  return true
}

export const isUnivalueListRecursive = (head) => {
  if (head.next === null) return true
  if (head.value !== head.next.value) return false
  return isUnivalueListRecursive(head.next)
}

export default isUnivalueList
