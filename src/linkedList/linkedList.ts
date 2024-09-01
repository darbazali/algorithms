// const fillValues = (head: LNodeInterface<string>, values: string[]): void => {
//   if (head === null) return;
//   values.push(head.value);
//   fillValues(head.next!, values);
// };

// const getValues = (head: LNodeInterface<string>): string[] => {
//   const values: string[] = [];
//   fillValues(head, values);
//   return values;
// };

interface ILinkedListNode<T> {
  value: T;
  next: ILinkedListNode<T> | null;
}

class LinkedListNode<T> implements ILinkedListNode<T> {
  public value: T;
  public next: null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}
