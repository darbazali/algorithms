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
const b = new LNodeClass<string>("B");
const c = new LNodeClass<string>("C");
const d = new LNodeClass<string>("D");

a.next = b;
b.next = c;
c.next = d;

console.log(a);
