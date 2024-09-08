import { describe, test, expect } from "bun:test"
import { anagrams } from "../anagrams"

describe("anagrams", () => {
  test("anagrams should return a boolean value", () => {
    expect(anagrams("a", "b")).toBeBoolean()
  })
})
