import { describe, test, expect } from "bun:test"
import { sumNumbersRecursive } from "./sumNumbersRecursive"

describe("sumNumbersRecursive", () => {
  test("sumNumbersRecursive should return a number", () => {
    expect(typeof sumNumbersRecursive([1, 2, 3])).toBe("number")
  })

  test("sumNumbersRecursive([]) should return 0", () => {
    expect(sumNumbersRecursive([])).toBe(0)
  })

  test("sumNumbersRecursive([1, 2, 3]) should return 6", () => {
    expect(sumNumbersRecursive([1, 2, 3])).toBe(6)
  })

  test("sumNumbersRecursive([5, 10, 15]) should return 30", () => {
    expect(sumNumbersRecursive([5, 10, 15])).toBe(30)
  })

  test("sumNumbersRecursive([0, 0, 0]) should return 0", () => {
    expect(sumNumbersRecursive([0, 0, 0])).toBe(0)
  })

  test("sumNumbersRecursive([-1, -2, -3]) should return -6", () => {
    expect(sumNumbersRecursive([-1, -2, -3])).toBe(-6)
  })

  test("sumNumbersRecursive([100]) should return 100", () => {
    expect(sumNumbersRecursive([100])).toBe(100)
  })
})
