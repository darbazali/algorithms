interface INode<T> {
  value: T;
  next: INode<T> | null;
}

class LNode<T> implements INode<T> {
  constructor(public value: T, public next: INode<T> | null = null) {
    this.value = value;
    this.next = next;
  }
}

interface ILinkedList<T> {
  head: INode<T> | null;
  tail: INode<T> | null;
  size: number;

  isEmpty: () => boolean;
  push: (value: T) => void;
  toString: () => string;
}

class LinkedList<T> implements ILinkedList<T> {
  public head: INode<T> | null = null;
  public tail: INode<T> | null = null;
  public size: number = 0;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  push(value: T): void {
    const node = new LNode(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail!.next = node;
      this.tail = node;
    }
    this.size++;
  }

  toString: () => string = () => {
    let result = "";
    let node = this.head;
    while (node) {
      result += node.value;
      node = node.next;
    }
    return result;
  };
}

const linkedList = new LinkedList();

linkedList.push("A");
linkedList.push("B");

console.log(linkedList.toString());
