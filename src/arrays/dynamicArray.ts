interface IDynamicArray {
  length: number;
  data: number[];
  isEmpty(): boolean;
  add(value: number): void;
  get(index: number): number;
  set(index: number, value: number): void;
  remove(index: number): void;
  clear(): void;
}

export class DynamicArray implements IDynamicArray {
  public length: number;
  public data: number[];
  constructor() {
    this.length = 0;
    this.data = [];
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  add(value: number): void {
    this.data.push(value);
    this.length++;
  }

  get(index: number): number {
    if (this.isEmpty()) {
      return -1;
    }

    if (index < 0 || index >= this.length) {
      throw new Error("Index out of bounds");
    }

    return this.data[index];
  }

  clear(): void {
    this.length = 0;
    this.data = [];
  }

  set(index: number, value: number): void {
    if (index < 0 || index >= this.length) {
      throw new Error("Index out of bounds");
    }

    this.data[index] = value;
  }
}

const dynamicArray = new DynamicArray();

// console.log(dynamicArray.get(1));
