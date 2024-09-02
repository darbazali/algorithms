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
const six = new LinkedListNode<number>(6)
const seven = new LinkedListNode<number>(7)

one.next = tow
tow.next = three
three.next = four

five.next = six
six.next = seven

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

const getNodeValue = <T>(head: ILinkedListNode<T> | null, index: number): T | null => {
  let count = 0
  let current = head

  while (current !== null) {
    if (count === index) return current.value

    count += 1
    current = current.next
  }

  return null
}

const getNodeValueRecursively = <T>(
  head: ILinkedListNode<T> | null,
  index: number,
): T | null => {
  if (head === null) return null
  if (index === 0) return head.value
  return getNodeValueRecursively(head.next, index - 1)
}

const reverseList = <T>(head: ILinkedListNode<T> | null): ILinkedListNode<T> | null => {
  if (head === null) return null

  let current = head
  let prev = null

  while (current !== null) {
    const next = current.next
    current.next = prev
    prev = current
    current = next!
  }

  return prev
}

const reverseListRecursively = <T>(
  head: ILinkedListNode<T> | null,
  prev: ILinkedListNode<T> | null = null,
): ILinkedListNode<T> | null => {
  if (head === null) return prev
  const next = head.next
  head.next = prev
  return reverseListRecursively(next, head)
}

const zipperList = <T>(
  head1: ILinkedListNode<T>,
  head2: ILinkedListNode<T>,
): ILinkedListNode<T> => {
  let tail = head1
  let current1 = head1.next
  let current2 = head2
  let count = 0

  while (current1 !== null && current2 !== null) {
    if (count % 2 === 0) {
      tail.next = current2
      current2 = current2.next!
    } else {
      tail.next = current1
      current1 = current1.next
    }

    tail = tail.next
    count += 1
  }

  if (current1 !== null) tail.next = current1
  if (current2 !== null) tail.next = current2

  return head1
}

traverseLinkedList(zipperList(one, five), (node) => console.log(node.value))
