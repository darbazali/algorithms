interface INode<T> {
  value: T;
  next: INode<T> | null;
}

interface LinkedList<T> {
  head: INode<T> | null;
  tail: INode<T> | null;
  size: number;

  isEmpty(): boolean;
  add(value: T): void;
}

class LinkedListNode<T> implements INode<T> {
  value: T;
  next: INode<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList<T> implements LinkedList<T> {
  head!: INode<T> | null;
  tail!: INode<T> | null;
  size!: number;

  isEmpty(): boolean {
    return this.size === 0;
  }

  add(value: T): void {
    const node = new LinkedListNode<T>(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = null;
    } else {
      this.tail = node;
      this.tail!.next = null;
    }
    this.size++;
  }
}

const linkedList = new LinkedList<number>();

linkedList.add(1);

console.log(linkedList);
