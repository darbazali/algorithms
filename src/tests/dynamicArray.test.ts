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
});
