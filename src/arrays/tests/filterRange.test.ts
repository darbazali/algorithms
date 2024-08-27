import { describe, expect, test } from "bun:test";
import { filterRange } from "../filterRange";

describe("Testing for filterRange", () => {
  test("filterRange(...) should return an array", () => {
    expect(filterRange([1, 2, 3], 1, 2)).toBeArray();
  });
});
