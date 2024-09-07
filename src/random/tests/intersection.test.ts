import { describe, test, expect } from "bun:test"
import { intersection } from "../intersection"

describe("intersection", () => {
  test("intersection should return an array", () => {
    expect(intersection([], [])).toBeArray()
  })

  test("intersection of two empty arrays should return an empty array", () => {
    expect(intersection([], [])).toEqual([])
  })

  test("intersection of one empty array and one non-empty array should return an empty array", () => {
    expect(intersection([], [1, 2, 3])).toEqual([])
    expect(intersection([1, 2, 3], [])).toEqual([])
  })

  test("intersection of two arrays with no common elements should return an empty array", () => {
    expect(intersection([1, 2, 3], [4, 5, 6])).toEqual([])
  })

  test("intersection of two arrays with some common elements should return the common elements", () => {
    expect(intersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3])
  })

  test("intersection of two arrays with all elements in common should return the same array", () => {
    expect(intersection([1, 2, 3], [1, 2, 3])).toEqual([1, 2, 3])
  })
})
