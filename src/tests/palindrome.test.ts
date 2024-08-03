import { isPalindrome } from "../random/palindrome";
import { describe, expect, it } from "bun:test";

describe("isPalindrome", () => {
  it("should return true for a palindrome", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it("should return false for a non-palindrome", () => {
    expect(isPalindrome("hello")).toBe(false);
  });

  it("should return true for an empty string", () => {
    expect(isPalindrome("")).toBe(true);
  });
});
