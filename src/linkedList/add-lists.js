/* 
add lists
Write a function, addLists, that takes in the head of two linked lists, each representing a number. 
The nodes of the linked lists contain digits as values. 
The nodes in the input lists are reversed; this means that the least significant digit of the number is the head. 
The function should return the head of a new linked listed representing the sum of the input lists. 
The output list should have its digits reversed as well.

You must do this by traversing through the linked lists once.

@example:
Say we wanted to compute 621 + 354 normally. The sum is 975:

   621
 + 354
 -----
   975

Then, the reversed linked list format of this problem would appear as:

    1 -> 2 -> 6
 +  4 -> 5 -> 3
 --------------
    5 -> 7 -> 9

*/

import Node from "./linked-list-node.js"

const addLists = (head1, head2) => {
  const dummyHead = new Node(null)
  let tail = dummyHead

  let current1 = head1
  let current2 = head2
  let carry = 0

  while (current1 !== null || current2 !== null || carry !== 0) {
    const val1 = current1 === null ? 0 : current1.value
    const val2 = current2 === null ? 0 : current2.value

    const sum = val1 + val2 + carry
    carry = sum > 9 ? 1 : 0

    const digit = sum % 10
    tail.next = new Node(digit)
    tail = tail.next

    if (current1 !== null) current1 = current1.next
    if (current2 !== null) current2 = current2.next
  }

  return dummyHead.next
}
