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
