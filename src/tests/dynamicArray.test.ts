import { DynamicArray } from "../arrays/dynamicArray";
import { describe, expect, test } from "bun:test";

describe("Dynamic Array", () => {
  test("Should return dynamic array length to be 0", () => {
    const arr = new DynamicArray();
    expect(arr.length).toBe(0);
  });

  test("Should return isEmpty() to be true", () => {
    const arr = new DynamicArray();
    expect(arr.isEmpty()).toBe(true);
  });

  test("Should add an element to the array", () => {
    const arr = new DynamicArray();
    arr.add(1);
    expect(arr.length).toBe(1);
  });
});
