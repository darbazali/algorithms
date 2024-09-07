import { describe, test, expect } from "bun:test"
import { pairSum } from "../pairSum"

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
