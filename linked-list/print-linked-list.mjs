import linkedList from "./linked-list-example.mjs"

const printLinkedList = (head) => {
  let current = head

  while (current !== null) {
    console.log(current.val)
    current = current.next
  }
}

printLinkedList(linkedList) // -> A B C D E
