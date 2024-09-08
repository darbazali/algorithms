import { describe, test, expect } from "bun:test"
import { sumOfLengthsRecursive } from "./sumOfLengthsRecursive"

describe("sumOfLengthsRecursive", () => {
  test("sumOfLengthsRecursive should return a number", () => {
    expect(typeof sumOfLengthsRecursive([])).toBe("number")
  })

  test('sumOfLengthsRecursive(["goat", "cat", "purple"]) should return 13', () => {
    expect(sumOfLengthsRecursive(["goat", "cat", "purple"])).toBe(13)
  })

  test('sumOfLengthsRecursive(["a", "bb", "ccc"]) should return 6', () => {
    expect(sumOfLengthsRecursive(["a", "bb", "ccc"])).toBe(6)
  })

  test('sumOfLengthsRecursive(["", "", ""]) should return 0', () => {
    expect(sumOfLengthsRecursive(["", "", ""])).toBe(0)
  })

  test('sumOfLengthsRecursive(["hello"]) should return 5', () => {
    expect(sumOfLengthsRecursive(["hello"])).toBe(5)
  })

  test("sumOfLengthsRecursive([]) should return 0", () => {
    expect(sumOfLengthsRecursive([])).toBe(0)
  })
})
