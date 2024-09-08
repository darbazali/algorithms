import { describe, test, expect } from "bun:test"
import { factorialRecursive } from "./factorialRecursive"

describe("factorialRecursive", () => {
  test("factorialRecursive(0) should return 1", () => {
    expect(factorialRecursive(0)).toBe(1)
  })

  test("factorialRecursive(1) should return 1", () => {
    expect(factorialRecursive(1)).toBe(1)
  })

  test("factorialRecursive(5) should return 120", () => {
    expect(factorialRecursive(5)).toBe(120)
  })

  test("factorialRecursive(10) should return 3628800", () => {
    expect(factorialRecursive(10)).toBe(3628800)
  })

  test("factorialRecursive should handle negative input gracefully", () => {
    expect(() => factorialRecursive(-1)).toThrow()
  })
})
