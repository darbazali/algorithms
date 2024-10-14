/* 
create linked list
------------------
Write a function, createLinkedList, that takes in an array of values as an argument. 
The function should create a linked list containing each element of the array as the values of the nodes. 
The function should return the head of the linked list.

@test-cases:
------------
createLinkedList(["h", "e", "y"]); // h -> e -> y

*/
import Node from "./linked-list-node.mjs"

const createLinkedList = (values = []) => {
  const dummyHead = new Node(null)
  let tail = dummyHead

  for (let item of values) {
    const node = new Node(item)
    tail.next = node
    tail = tail.next
  }

  return dummyHead.next
}
