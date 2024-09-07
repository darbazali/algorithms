import { describe, test, expect } from "bun:test"
import { uncompress } from "../uncompress"

describe("uncompress", () => {
  test("uncompress should return a string", () => {
    expect(uncompress("2a3b3c")).toBeString()
  })

  test("uncompress should handle simple input", () => {
    expect(uncompress("2c3a1t")).toBe("ccaaat")
  })

  test("uncompress should handle multiple characters with different counts", () => {
    expect(uncompress("2a3b1c")).toBe("aabbbc")
  })

  test("uncompress should handle a single character with a large count", () => {
    expect(uncompress("10a")).toBe("aaaaaaaaaa")
  })

  test("uncompress should handle an empty string", () => {
    expect(uncompress("")).toBe("")
  })
})
