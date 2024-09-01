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

interface LinkedListNode<T> {
  value: T;
  next: LinkedListNode<T> | null;
}
