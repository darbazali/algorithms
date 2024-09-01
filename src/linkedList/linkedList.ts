interface LNodeInterface<T> {
  head: T;
  next: LNodeInterface<T> | null;
}

class LNodeClass<T> implements LNodeInterface<T> {
  head: T;
  next: LNodeInterface<T> | null;

  constructor(head: T) {
    this.head = head;
    this.next = null;
  }
}

const a = new LNodeClass<string>("A");

console.log(a);
