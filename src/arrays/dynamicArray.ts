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
