import { describe, test, expect } from "bun:test"
import { fiveSort } from "../fiveSort"

describe("fiveSort", () => {
  test("fiveSort should return an array of numbers", () => {
    expect(fiveSort([1, 2, 3, 4])).toBeArray()
  })

  test("fiveSort should sort the array correctly - case 1", () => {
    expect(fiveSort([12, 5, 1, 5, 12, 7])).toEqual([12, 7, 1, 12, 5, 5])
  })

  test("fiveSort should sort the array correctly - case 2", () => {
    expect(fiveSort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5])).toEqual([
      2, 2, 10, 6, 1, 5, 5, 5, 5, 5,
    ])
  })

  test("fiveSort should sort the array correctly - case 3", () => {
    expect(fiveSort([5, 5, 5, 1, 1, 1, 4])).toEqual([4, 1, 1, 1, 5, 5, 5])
  })

  test("fiveSort should sort the array correctly - case 4", () => {
    expect(fiveSort([5, 1, 2, 5, 5, 3, 2, 5, 1, 5, 5, 5, 4, 5])).toEqual([
      4, 1, 2, 1, 2, 3, 5, 5, 5, 5, 5, 5, 5, 5,
    ])
  })
})
