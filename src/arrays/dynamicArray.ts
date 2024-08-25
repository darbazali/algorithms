interface IDynamicArray {
  length: number;
  data: number[];
  isEmpty(): boolean;
  add(value: number): void;
  get(index: number): number;
  set(index: number, value: number): void;
  remove(index: number): void;
}

class DynamicArray implements IDynamicArray {
  public length: number;
  public data: number[];
  constructor() {
    this.length = 0;
    this.data = [];
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  get(index: number): number {
    if (index < 0 || index >= this.length) {
      throw new Error("Index out of bounds");
    }
    return this.data[index];
  }
}

const dynamicArray = new DynamicArray();

console.log(dynamicArray.get(1));
