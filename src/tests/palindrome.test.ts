import { isPalindrome } from "../random/palindrome";
import { describe, expect, it } from "bun:test";

describe("isPalindrome", () => {
  it("should return true for a palindrome", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });
});
