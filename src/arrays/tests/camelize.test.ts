import { camelize } from "../camelize";
import { describe, expect, test } from "bun:test";

describe("camelize", () => {
  test("camelize(str) should return a string", () => {
    expect(camelize("hello")).toBeString();
  });
});
