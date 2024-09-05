import { describe, test, expect } from "bun:test"
import { mostFrequentChar } from "../mostFrequentChar"

describe("mostFrequentChar", () => {
  test('mostFrequentChar(bookeeper) should return "e"', () => {
    expect(mostFrequentChar("bookeeper")).toBe("e")
  })
})
