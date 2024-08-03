import { isSubArray } from "../random/isSubArray";
import { describe, expect, test } from "bun:test";

describe("isSubArray", () => {
  test("should return true for a subarray", () => {
    expect(isSubArray([1, 2, 3, 4, 5], [3, 4])).toBe(true);
  });
});
