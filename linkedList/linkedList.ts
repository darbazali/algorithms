interface LinkedListNode<T> {
  value: T;
  next: LinkedListNode<T> | null;
}

class LinkedListNode<T> {
  value: T;
  next: LinkedListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

interface LinkedList<T> {
  head: LinkedListNode<T> | null;
  tail: LinkedListNode<T> | null;
  length: number;

  isEmpty(): boolean;
}

class LinkedList<T> implements LinkedList<T> {
  head: LinkedListNode<T> | null;
  tail: LinkedListNode<T> | null;
  length: number;

  isEmpty() {
    return this.length === 0;
  }
}

const linkedList = new LinkedList();

console.log(linkedList.isEmpty());
