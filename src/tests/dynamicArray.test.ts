import { DynamicArray } from "../arrays/dynamicArray";
import { describe, expect, test } from "bun:test";

describe("Dynamic Array", () => {
  test("Should return dynamic array length to be 0", () => {
    const arr = new DynamicArray();
    expect(arr.length).toBe(0);
  });
});
