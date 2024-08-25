interface IDynamicArray {
  length: number;
  isEmpty(): boolean;
  add(value: number): void;
  get(index: number): number;
  set(index: number, value: number): void;
  remove(index: number): void;
}

class DynamicArray implements IDynamicArray {
  public length: number;
  constructor() {
    this.length = 0;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }
}

const dynamicArray = new DynamicArray();

console.log(dynamicArray.isEmpty());
