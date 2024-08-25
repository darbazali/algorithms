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
}
