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
