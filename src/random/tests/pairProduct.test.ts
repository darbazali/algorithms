import { describe, test, expect } from "bun:test"
import { pairProduct } from "../pairProduct"

describe("pairProduct", () => {
  test("pairProduct should return an array of numbers", () => {
    expect(Array.isArray(pairProduct([1, 2, 3, 4], 5))).toBe(true)
  })

  test("pairProduct should return the correct pair for target product 8", () => {
    expect(pairProduct([3, 2, 5, 4, 1], 8)).toEqual([1, 3])
  })

  test("pairProduct should return the correct pair for target product 10", () => {
    expect(pairProduct([3, 2, 5, 4, 1], 10)).toEqual([1, 2])
  })

  test("pairProduct should return the correct pair for target product 5", () => {
    expect(pairProduct([4, 7, 9, 2, 5, 1], 5)).toEqual([4, 5])
  })

  test("pairProduct should return the correct pair for target product 35", () => {
    expect(pairProduct([4, 7, 9, 2, 5, 1], 35)).toEqual([1, 4])
  })

  test("pairProduct should return the correct pair for target product 16", () => {
    expect(pairProduct([4, 6, 8, 2], 16)).toEqual([2, 3])
  })

  test("pairProduct should handle large arrays correctly", () => {
    const numbers = []
    for (let i = 0; i <= 30000; i += 1) {
      numbers.push(i)
    }
    expect(pairProduct(numbers, 899970000)).toEqual([29999, 30000])
  })
})
