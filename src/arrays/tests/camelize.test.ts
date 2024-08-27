import { camelize } from "../camelize";
import { describe, expect, test } from "bun:test";

describe("camelize", () => {
  test("camelize(str) should return a string", () => {
    expect(camelize("hello")).toBeString();
  });

  test("camelize('background-color') should return 'backgroundColor'", () => {
    expect(camelize("background-color")).toBe("backgroundColor");
  });

  test("camelize('-webkit-transition') should return 'WebkitTransition'", () => {
    expect(camelize("-webkit-transition")).toBe("WebkitTransition");
  });

  test("camelize('list-style-image') should return 'listStyleImage'", () => {
    expect(camelize("list-style-image")).toBe("listStyleImage");
  });
});
