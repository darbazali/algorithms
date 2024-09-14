export interface ILinkedListNode<T> {
  readonly value: T
  next: T | null
}

class LinkedListNode<T> implements LinkedListNode<T> {
  private value: T
  public next: T | null
  constructor(value: T, next = null) {
    this.value = value
    this.next = next
  }
}

export default LinkedListNode
