/* 
create linked list
------------------

Write a function, createLinkedList, that takes in an array of values as an argument. 
The function should create a linked list containing each element of the array as the values of the nodes. 
The function should return the head of the linked list.

@example:
createLinkedList(["h", "e", "y"]); // h -> e -> y
createLinkedList([1, 7, 1, 8]); // 1 -> 7 -> 1 -> 8

*/

import Node from "./linked-list-node.js"

const createLinkedList = (values) => {
  const dummyHead = new Node(null)
  let tail = dummyHead

  for (let value of values) {
    tail.next = new Node(value)
    tail = tail.next
  }

  return dummyHead.next
}

export default createLinkedList
