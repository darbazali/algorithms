import { describe, test, expect } from "bun:test"
import { mostFrequentChar } from "../mostFrequentChar"

describe("mostFrequentChar", () => {
  test('mostFrequentChar("bookeeper") should return "e"', () => {
    expect(mostFrequentChar("bookeeper")).toBe("e")
  })

  test('mostFrequentChar("") should return ""', () => {
    expect(mostFrequentChar("")).toBe("")
  })

  test('mostFrequentChar("abcdef") should return "a"', () => {
    expect(mostFrequentChar("abcdef")).toBe("a")
  })

  test('mostFrequentChar("aabbcc") should return "a"', () => {
    expect(mostFrequentChar("aabbcc")).toBe("a")
  })

  test('mostFrequentChar("aabbccdd") should return "a"', () => {
    expect(mostFrequentChar("aabbccdd")).toBe("a")
  })

  test('mostFrequentChar("aabbccdde") should return "a"', () => {
    expect(mostFrequentChar("aabbccdde")).toBe("a")
  })

  test('mostFrequentChar("aabbccddeeff") should return "a"', () => {
    expect(mostFrequentChar("aabbccddeeff")).toBe("a")
  })

  test('mostFrequentChar("aabbccddeeffg") should return "a"', () => {
    expect(mostFrequentChar("aabbccddeeffg")).toBe("a")
  })

  test('mostFrequentChar("aabbccddeeffgg") should return "a"', () => {
    expect(mostFrequentChar("aabbccddeeffgg")).toBe("a")
  })

  test('mostFrequentChar("aabbccddeeffggh") should return "a"', () => {
    expect(mostFrequentChar("aabbccddeeffggh")).toBe("a")
  })

  test('mostFrequentChar("aabbccddeeffgghh") should return "a"', () => {
    expect(mostFrequentChar("aabbccddeeffgghh")).toBe("a")
  })

  test('mostFrequentChar("aabbccddeeffgghhi") should return "a"', () => {
    expect(mostFrequentChar("aabbccddeeffgghhi")).toBe("a")
  })

  test('mostFrequentChar("aabbccddeeffgghhii") should return "a"', () => {
    expect(mostFrequentChar("aabbccddeeffgghhii")).toBe("a")
  })

  test('mostFrequentChar("aabbccddeeffgghhiij") should return "a"', () => {
    expect(mostFrequentChar("aabbccddeeffgghhiij")).toBe("a")
  })
})
