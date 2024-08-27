import { describe, expect, test } from "bun:test";
import { filterRange } from "../filterRange";

describe("Testing for filterRange", () => {
  test("filterRange(...) should return an array", () => {
    expect(filterRange([1, 2, 3], 1, 2)).toBeArray();
  });

  test("filterRange([5, 3, 8, 1] should return [3, 1]", () => {
    expect(filterRange([5, 3, 8, 1], 1, 4)).toEqual([3, 1]);
  });
});
