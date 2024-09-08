import { describe, test, expect } from "bun:test"
import { fibonacciRecursive } from "./fibonacciRecursive"

describe("fibonacciRecursive", () => {
  test("should return 0 for n = 0", () => {
    expect(fibonacciRecursive(0)).toBe(0)
  })

  test("should return 1 for n = 1", () => {
    expect(fibonacciRecursive(1)).toBe(1)
  })

  test("should return 1 for n = 2", () => {
    expect(fibonacciRecursive(2)).toBe(1)
  })

  test("should return 2 for n = 3", () => {
    expect(fibonacciRecursive(3)).toBe(2)
  })

  test("should return 3 for n = 4", () => {
    expect(fibonacciRecursive(4)).toBe(3)
  })

  test("should return 5 for n = 5", () => {
    expect(fibonacciRecursive(5)).toBe(5)
  })

  test("should return 8 for n = 6", () => {
    expect(fibonacciRecursive(6)).toBe(8)
  })

  test("should return 13 for n = 7", () => {
    expect(fibonacciRecursive(7)).toBe(13)
  })

  test("should return 21 for n = 8", () => {
    expect(fibonacciRecursive(8)).toBe(21)
  })

  test("should return 34 for n = 9", () => {
    expect(fibonacciRecursive(9)).toBe(34)
  })

  test("should return 55 for n = 10", () => {
    expect(fibonacciRecursive(10)).toBe(55)
  })
})
