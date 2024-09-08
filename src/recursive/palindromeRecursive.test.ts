import { describe, test, expect } from "bun:test"
import { palindromeRecursive } from "./palindromeRecursive"

describe("palindromeRecursive", () => {
  test("palindromeRecursive should return a boolean", () => {
    expect(typeof palindromeRecursive("")).toBe("boolean")
  })

  test("palindromeRecursive('') should return true", () => {
    expect(palindromeRecursive("")).toBe(true)
  })

  test("palindromeRecursive('p') should return true", () => {
    expect(palindromeRecursive("p")).toBe(true)
  })

  test("palindromeRecursive('racecar') should return true", () => {
    expect(palindromeRecursive("racecar")).toBe(true)
  })

  test("palindromeRecursive('hello') should return false", () => {
    expect(palindromeRecursive("hello")).toBe(false)
  })

  test("palindromeRecursive('pop') should return true", () => {
    expect(palindromeRecursive("pop")).toBe(true)
  })

  test("palindromeRecursive('pops') should return true", () => {
    expect(palindromeRecursive("pops")).toBe(false)
  })
})
