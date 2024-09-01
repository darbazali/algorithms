interface ILinkedListNode<T> {
  value: T;
  next: ILinkedListNode<T> | null;
}

class LinkedListNode<T> implements ILinkedListNode<T> {
  public value: T;
  public next: ILinkedListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

const a = new LinkedListNode<string>("A");
const b = new LinkedListNode<string>("B");
const c = new LinkedListNode<string>("C");
const d = new LinkedListNode<string>("D");

a.next = b;
b.next = c;
c.next = d;

const getValues = (head: ILinkedListNode<string>): string[] => {
  const values: string[] = [];

  let current = head;
  while (current !== null) {
    values.push(current.value);
    current = current.next!;
  }

  return values;
};

// const fillValues = (head: ILinkedListNode<string>, values: string[]): void => {
//   if (head === null) return;
//   values.push(head.value);
//   fillValues(head.next!, values);
// };

// const getValues = (head: ILinkedListNode<string>): string[] => {
//   const values: string[] = [];
//   fillValues(head, values);
//   return values;
// };

console.log(getValues(a));
