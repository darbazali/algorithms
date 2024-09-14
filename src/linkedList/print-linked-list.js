/*
Print linked list as string

@example
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

a -> b -> c -> d

printLinkedList(a); // a -> b -> c -> d -> NULL

*/

const printLinkedList = (head) => {
  let str = ""
  let current = head

  while (current !== null) {
    str += current.value + " -> "
    current = current.next
  }

  console.log(str + "NULL")
}

export const printLinkedListRecursive = (head, str = "") => {
  if (head === null) {
    console.log(str + "NULL")
    return
  }

  str += head.value + " -> "
  printLinkedListRecursive(head.next, str)
}

export default printLinkedList
