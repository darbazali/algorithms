import { describe, test, expect } from "bun:test"
import { isPrime } from "../random/isPrime"

describe("isPrime ", () => {
  test("isPrime(7) should return true", () => {
    expect(isPrime(7)).toBe(true)
  })

  test("isPrime(8) should return false", () => {
    expect(isPrime(8)).toBe(false)
  })

  test("isPrime(1) should return false", () => {
    expect(isPrime(1)).toBe(false)
  })
})
