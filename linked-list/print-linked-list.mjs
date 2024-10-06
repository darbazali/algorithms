import linkedList from "./linked-list-example.mjs"

const printLinkedList = (head) => {
  let current = head

  while (current !== null) {
    console.log(current.val)
    current = current.next
  }
}

const printLinkedListRecursive = (head) => {
  if (head === null) return
  console.log(head.val)
  printLinkedListRecursive(head.next)
}

printLinkedList(linkedList) // -> A B C D E
