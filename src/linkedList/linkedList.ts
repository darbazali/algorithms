interface LNodeInterface<T> {
  value: T;
  next: LNodeInterface<T> | null;
}

class LNodeClass<T> implements LNodeInterface<T> {
  value: T;
  next: LNodeInterface<T> | null;

  constructor(value: T) {
    this.value = value;
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

const printValues = (head: LNodeInterface<string>): void => {
  let current = head;
  while (current !== null) {
    console.log(current.value);
    current = current.next!;
  }
};

const printValuesRecursively = (head: LNodeInterface<string>): void => {
  if (head === null) return;
  console.log(head.value);
  printValuesRecursively(head.next!);
};

const getValues = (head: LNodeInterface<string>): string[] => {
  const values: string[] = [];

  let current = head;
  while (current !== null) {
    values.push(current.value);
    current = current.next!;
  }

  return values;
};

console.log(getValues(a));
