/* 
linked list values
------------------

Write a function, linkedListValues, that takes in the head of a linked list as an argument. 
The function should return an array containing all values of the nodes in the linked list.

@example:
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

a -> b -> c -> d

getLinkedListValues(a); // -> [ 'a', 'b', 'c', 'd' ]

*/

const getLinkedListValues = (head) => {
  const values = []
  let current = head

  while (current !== null) {
    values.push(current.value)
    current = current.next
  }

  return values
}

export const getLinkedListValuesRecursive = (head, values = []) => {
  if (head === null) return values
  values.push(head.value)
  return getLinkedListValuesRecursive(head.next, values)
}

export default getLinkedListValues
