import { describe, test, expect } from "bun:test"
import { reverseStringRecursive } from "./reverseStringRecursive"

describe("reverseStringRecursive", () => {
  test("reverseStringRecursive should return a string", () => {
    expect(reverseStringRecursive("")).toBeString()
  })

  test("reverseStringRecursive('') should return empty string", () => {
    expect(reverseStringRecursive("")).toBe("")
  })

  test("reverseStringRecursive('a') should return 'a'", () => {
    expect(reverseStringRecursive("a")).toBe("a")
  })

  test("reverseStringRecursive('abc') should return 'cba'", () => {
    expect(reverseStringRecursive("abc")).toBe("cba")
  })

  test("reverseStringRecursive('hello') should return 'olleh'", () => {
    expect(reverseStringRecursive("hello")).toBe("olleh")
  })

  test("reverseStringRecursive('racecar') should return 'racecar'", () => {
    expect(reverseStringRecursive("racecar")).toBe("racecar")
  })

  test("reverseStringRecursive should throw an error if input is not a string", () => {
    expect(() => reverseStringRecursive(123 as any)).toThrow("s must be of type string")
  })
})
