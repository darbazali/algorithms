class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

const a = new Node("A")
const b = new Node("B")
const c = new Node("C")
const d = new Node("D")

a.next = b
b.next = c
c.next = d

// const a = new Node(2)
// const b = new Node(8)
// const c = new Node(3)
// const d = new Node(-1)
// const e = new Node(7)

// a.next = b
// b.next = c
// c.next = d
// d.next = e

// // 2 -> 8 -> 3 -> -1 -> 7

const printLinkedList = (head) => {
  let current = head

  while (current !== null) {
    console.log(current.value)
    current = current.next
  }
}

const linkedListToString = (head) => {
  let current = head
  let str = ""

  while (current !== null) {
    str += current.value + " -> "
    current = current.next
  }

  console.log(str + "NULL")
  return str + "NULL"
}

const printLinkedListRecursive = (head) => {
  if (head === null) return
  console.log(head.value)
  printLinkedListRecursive(head.next)
}

const getLinkedListValues = (head) => {
  const values = []
  let current = head

  while (current !== null) {
    values.push(current.value)
    current = current.next
  }

  return values
}

const sumList = (head) => {
  let sum = 0
  let current = head

  while (current !== null) {
    sum += current.value
    current = current.next
  }

  return sum
}

const linkedListFind = (head, target) => {
  let current = head

  while (current !== null) {
    if (current.value === target) {
      return true
    }
    current = current.next
  }

  return false
}

const getNodeValue = (head, index) => {
  let count = 0
  let current = head

  while (current !== null) {
    if (count === index) {
      return current.value
    }

    current = current.next
    count += 1
  }

  return null
}

const reverseLinkedList = (head) => {
  let prev = null
  let current = head

  while (current !== null) {
    const next = current.next
    current.next = prev
    prev = current
    current = next
  }

  return prev
}

const reverseLinkedListRecursive = (head, prev = null) => {
  if (head === null) return prev
  const next = head.next
  head.next = prev
  return reverseLinkedListRecursive(next, head)
}

const zipperList = (head1, head2) => {
  let tail = head1
  let current1 = head1.next
  let current2 = head2
  let count = 0

  while (current1 !== null && current2 !== null) {
    if (count % 2 === 0) {
      tail.next = current2
      current2 = current2.next
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

const mergeLists = (head1, head2) => {
  const dummyHead = new Node(null)
  let tail = dummyHead

  let current1 = head1
  let current2 = head2

  while (current1 !== null && current2 !== null) {
    if (current1.value < current2.value) {
      tail.next = current1
      current1 = current1.next
    } else {
      tail.next = current2
      current2 = current2.next
    }

    tail = tail.next
  }

  if (current1 !== null) tail.next = current1
  if (current2 !== null) tail.next = current2

  return dummyHead.next
}

/* 
The function should return a boolean indicating whether or not the linked list contains exactly one unique value.

const a = new Node(7);
const b = new Node(7);
const c = new Node(7);

a.next = b;
b.next = c;

// 7 -> 7 -> 7

isUniValueList(a); // true
*/

const isUniValueList = (head) => {
  let current = head

  while (current.next !== null) {
    const next = current.next
    if (current.value !== next.value) {
      return false
    }
    current = current.next
  }
  return true
}

const longestStreak = (head) => {
  if (head === null) return 0

  let currentNode = head
  let currentStreak = 0
  let maxStreak = 0
  let prev = head.value

  while (currentNode !== null) {
    if (currentNode.value === prev) {
      currentStreak += 1
    } else {
      currentStreak = 1
    }

    if (currentStreak > maxStreak) {
      maxStreak = currentStreak
    }

    prev = currentNode.value
    currentNode = currentNode.next
  }

  return maxStreak
}

const removeNode = (head, targetVal) => {
  if (head.value === targetVal) return head.next

  let current = head
  let prev = null

  while (current !== null) {
    if (current.value === targetVal) {
      // skip current Node
      prev.next = current.next
      break
    }

    prev = current
    current = current.next
  }

  return head
}

const insertNode = (head, value, index) => {
  if (index === 0) {
    const newHead = new Node(value)
    newHead.next = head
    return newHead
  }

  let current = head
  let count = 0

  while (current !== null) {
    if (count === index - 1) {
      const temp = current.next
      const newNode = new Node(value)
      current.next = newNode
      newNode.next = temp
      break
    }

    count += 1
    current = current.next
  }

  return head
}
