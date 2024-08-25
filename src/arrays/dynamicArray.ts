interface IDynamicArray {
  data: number[];
  length: number;
  isEmpty(): boolean;
  add(value: number): void;
  get(index: number): number;
  set(index: number, value: number): void;
  remove(index: number): void;
  clear(): void;
}

export class DynamicArray implements IDynamicArray {
  public data: number[];
  public length: number;

  constructor() {
    this.data = [];
    this.length = 0;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  add(value: number): void {
    this.data.push(value);
    this.length++;
  }

  get(index: number): number {
    if (this.isEmpty()) return -1;

    if (index < 0 || index >= this.length) {
      throw new Error("Index is out of bounds");
    }

    return this.data[index];
  }

  set(index: number, value: number): void {
    if (index < 0 || index >= this.length) {
      throw new Error("Index is out of bounds");
    }

    this.data[index] = value;
  }

  remove(index: number): void {
    if (index < 0 || index >= this.length) {
      throw new Error("Index is out of bounds");
    }

    this.data.splice(index, 1);
    this.length--;
  }

  clear(): void {
    this.data = [];
    this.length = 0;
  }
}
