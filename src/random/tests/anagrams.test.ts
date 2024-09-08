import { describe, test, expect } from "bun:test"
import { anagrams } from "../anagrams"

describe("anagrams", () => {
  test("anagrams should return a boolean value", () => {
    expect(typeof anagrams("a", "b")).toBe("boolean")
  })

  test("should return true for anagrams", () => {
    expect(anagrams("listen", "silent")).toBe(true)
    expect(anagrams("evil", "vile")).toBe(true)
    expect(anagrams("anagram", "nagaram")).toBe(true)
  })

  test("should return false for non-anagrams", () => {
    expect(anagrams("hello", "world")).toBe(false)
    expect(anagrams("foo", "bar")).toBe(false)
    expect(anagrams("apple", "pale")).toBe(false)
  })

  test("should return false for strings of different lengths", () => {
    expect(anagrams("abc", "ab")).toBe(false)
    expect(anagrams("abcd", "abcde")).toBe(false)
  })

  test("should return true for identical strings", () => {
    expect(anagrams("test", "test")).toBe(true)
    expect(anagrams("anagram", "anagram")).toBe(true)
  })

  test("should handle empty strings", () => {
    expect(anagrams("", "")).toBe(true)
    expect(anagrams("a", "")).toBe(false)
    expect(anagrams("", "a")).toBe(false)
  })

  test("should be case sensitive", () => {
    expect(anagrams("Listen", "Silent")).toBe(false)
    expect(anagrams("Evil", "Vile")).toBe(false)
  })
})
