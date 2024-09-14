export interface INode<T> {
  value: T
  next: INode<T> | null
}

class Node<T> implements INode<T> {
  public value: T
  public next: INode<T> | null
  constructor(value: T, next = null) {
    this.value = value
    this.next = next
  }
}

export default Node
