import { describe, test, expect } from "bun:test"
import { pairSum, pairSumBruteForce } from "../pairSum"

describe("pairSum", () => {
  test("pairSum should return an array of numbers", () => {
    expect(pairSum([1, 2, 3, 4], 5)).toBeArray()
  })

  test("pairSum should return the actual target sum", () => {
    expect(pairSum([3, 2, 5, 4, 1], 8)).toEqual([0, 2])
  })

  test("pairSum should return correct indices for target sum 5", () => {
    expect(pairSum([4, 7, 9, 2, 5, 1], 5)).toEqual([0, 5])
  })

  test("pairSum should return correct indices for target sum 3", () => {
    expect(pairSum([4, 7, 9, 2, 5, 1], 3)).toEqual([3, 5])
  })

  test("pairSum should return correct indices for target sum 13", () => {
    expect(pairSum([1, 6, 7, 2], 13)).toEqual([1, 2])
  })

  test("pairSum should return correct indices for target sum 18", () => {
    expect(pairSum([9, 9], 18)).toEqual([0, 1])
  })

  test("pairSum should return correct indices for target sum 12", () => {
    expect(pairSum([6, 4, 2, 8], 12)).toEqual([1, 3])
  })
})

describe("pairSumBruteForce", () => {
  test("should return an array", () => {
    expect(Array.isArray(pairSumBruteForce([1, 2, 3], 3))).toBe(true)
  })

  test("should return correct indices for a valid pair", () => {
    expect(pairSumBruteForce([1, 2, 3], 3)).toEqual([0, 1])
  })

  test("should return an empty array if no pair sums to the target", () => {
    expect(pairSumBruteForce([1, 2, 3], 7)).toEqual([])
  })

  test("should handle negative numbers correctly", () => {
    expect(pairSumBruteForce([-1, -2, -3, 4], 2)).toEqual([1, 3])
  })

  test("should handle multiple pairs correctly and return the first pair found", () => {
    expect(pairSumBruteForce([1, 2, 3, 4, 5], 5)).toEqual([0, 3])
  })

  test("should handle an empty array", () => {
    expect(pairSumBruteForce([], 5)).toEqual([])
  })

  test("should handle an array with one element", () => {
    expect(pairSumBruteForce([5], 5)).toEqual([])
  })

  test("should handle an array with duplicate elements", () => {
    expect(pairSumBruteForce([1, 1, 1, 1], 2)).toEqual([0, 1])
  })
})
