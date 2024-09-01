interface ILinkedListNode<T> {
  value: T
  next: ILinkedListNode<T> | null
}

class LinkedListNode<T> implements ILinkedListNode<T> {
  public value: T
  public next: ILinkedListNode<T> | null

  constructor(value: T) {
    this.value = value
    this.next = null
  }
}

const a = new LinkedListNode<string>("A")
const b = new LinkedListNode<string>("B")
const c = new LinkedListNode<string>("C")
const d = new LinkedListNode<string>("D")

a.next = b
b.next = c
c.next = d

const fillValues = (head: ILinkedListNode<string> | null, values: string[]): void => {
  if (head === null) return
  values.push(head.value)
  fillValues(head.next, values)
}

const getValues = (head: ILinkedListNode<string> | null): string[] => {
  const values: string[] = []
  fillValues(head, values)
  return values
}

/* =========================================================== */

const one = new LinkedListNode<number>(1)
const tow = new LinkedListNode<number>(2)
const three = new LinkedListNode<number>(3)
const four = new LinkedListNode<number>(4)
const five = new LinkedListNode<number>(5)

one.next = tow
tow.next = three
three.next = four

const sumValues = (head: ILinkedListNode<number> | null): number => {
  let sum = 0
  let current = head
  while (current !== null) {
    sum += current.value
    current = current.next
  }

  return sum
}

const sumListRecursively = (head: ILinkedListNode<number> | null): number => {
  if (head === null) return 0
  return head.value + sumListRecursively(head.next)
}

const findNode = (head: ILinkedListNode<number> | null, target: number): boolean => {
  let current = head

  while (current !== null) {
    if (current.value === target) return true
    current = current.next
  }

  return false
}

const findNodeRecursively = (
  head: ILinkedListNode<number> | null,
  target: number,
): boolean => {
  if (head === null) return false
  if (head.value === target) return true
  return findNodeRecursively(head.next, target)
}

type Traverse = (
  head: ILinkedListNode<number> | null,
  callback: (node: ILinkedListNode<number>) => void,
) => void

const traverseLinkedList: Traverse = (head, callback) => {
  let current = head

  while (current !== null) {
    callback(current)

    // move to next node
    current = current.next
  }
}

traverseLinkedList(one, (node) => console.log(node.value))
