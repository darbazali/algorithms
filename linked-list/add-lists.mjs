/* 
add lists
---------
* Write a function, addLists, that takes in the head of two linked lists, each representing a number. 
* The nodes of the linked lists contain digits as values. 
* The nodes in the input lists are reversed; this means that the least significant digit of the number is the head. 
* The function should return the head of a new linked listed representing the sum of the input lists. 
* The output list should have its digits reversed as well.

You must do this by traversing through the linked lists once.

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

@test-cases:
------------
   621
 + 354
 -----
   975

const a1 = new Node(1);
const a2 = new Node(2);
const a3 = new Node(6);
a1.next = a2;
a2.next = a3;
 1 -> 2 -> 6

const b1 = new Node(4);
const b2 = new Node(5);
const b3 = new Node(3);
b1.next = b2;
b2.next = b3;
 4 -> 5 -> 3

addLists(a1, b1);
 5 -> 7 -> 9

*/

import Node from "./linked-list-node.mjs"

const addLists = (head1, head2, carry = 0) => {
  if (head1 === null && head2 === null && carry === 0) return null

  const val1 = head1?.val ?? 0
  const val2 = head2?.val ?? 0

  const sum = val1 + val2 + carry
  const newCarry = sum > 9 ? 1 : 0
  const digit = sum % 10

  const resultNode = new Node(digit)

  const next1 = head1?.next ?? null
  const next2 = head2?.next ?? null

  resultNode.next = addLists(next1, next2, newCarry)
  return resultNode
}
