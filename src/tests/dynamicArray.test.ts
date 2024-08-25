import { DynamicArray } from "../arrays/dynamicArray";
import { describe, expect, test } from "bun:test";

describe("Dynamic Array", () => {
  test("should return dynamic array length with empty", () => {
    const array = new DynamicArray();
    expect(array.length).toBe(0);
  });

  test("should return dynamic array isEmpty() to be true", () => {
    const array = new DynamicArray();
    expect(array.isEmpty()).toBe(true);
  });

  test("should add an element to the array", () => {
    const array = new DynamicArray();
    array.add(1);
    expect(array.get(0)).toBe(1);
  });

  test("should dynamic array return an element of index 0", () => {
    const array = new DynamicArray();
    array.add(1);
    expect(array.get(0)).toBe(1);
  });

  test("should remove all the elements from the array", () => {
    const array = new DynamicArray();
    array.add(1);
    array.clear();
    expect(array.isEmpty()).toBe(true);
  });
});
