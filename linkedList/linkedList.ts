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
