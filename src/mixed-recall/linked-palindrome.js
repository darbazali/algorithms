/* 
linked palindrome
-----------------
Write a function, linkedPalindrome, that takes in the head of a linked list as an argument. 
The function should return a boolean indicating whether or not the linked list is a palindrome. 
A palindrome is a sequence that is the same both forwards and backwards.

@test-cases:
------------
const a = new Node(3);
const b = new Node(2);
const c = new Node(7);
const d = new Node(7);
const e = new Node(2);
const f = new Node(3);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

 3 -> 2 -> 7 -> 7 -> 2 -> 3
linkedPalindrome(a); // true

*/

import Node from "../linkedList/linked-list-node.js"

const linkedPalindrome = (head) => {
  const values = []
  let current = head

  while (current !== null) {
    values.push(current.value)
    current = current.next
  }

  return isArrayPalindrome(values)
}

const isArrayPalindrome = (arr = []) => {
  if (arr.length === 0) return true

  let left = 0
  let right = arr.length - 1

  while (left < right) {
    if (arr[left] !== arr[right]) return false
    left++
    right--
  }

  return true
}

const a = new Node(3)
const b = new Node(2)
const c = new Node(7)
const d = new Node(7)
const e = new Node(2)
const f = new Node(3)

a.next = b
b.next = c
c.next = d
d.next = e
e.next = f

console.log(linkedPalindrome(a))
