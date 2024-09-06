import { describe, test, expect } from "bun:test"
import { pairSum } from "../pairSum"

describe("pairSum", () => {
  test("pairSum should return an array of numbers", () => {
    expect(pairSum([1, 2, 3, 4], 5)).toBeArray()
  })

  test("pairSum should return the actual target sum", () => {
    expect(pairSum([3, 2, 5, 4, 1], 8)).toEqual([0, 2])
  })
})
