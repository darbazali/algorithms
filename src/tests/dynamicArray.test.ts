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

  test("Should get(index) return and index from array", () => {
    const arr = new DynamicArray();
    arr.add(1);
    arr.add(2);
    arr.add(3);

    expect(arr.get(2)).toBe(3);
  });

  test("Should set arr[0] to be 1", () => {
    const arr = new DynamicArray();
    arr.add(3);
    arr.set(0, 1);
    expect(arr.get(0)).toBe(1);
  });

  test("Should remove an element from array", () => {
    const arr = new DynamicArray();
    arr.add(1);
    arr.remove(0);

    expect(arr.isEmpty()).toBe(true);
  });
});
