import { describe, test, expect } from "bun:test"
import { compress } from "../compress"

describe("compress", () => {
  test("compress should return a string", () => {
    expect(compress("2a3b3c")).toBeString()
  })

  test("compress('ccaaatsss') should return '2c3at3s'", () => {
    expect(compress("ccaaatsss")).toEqual("2c3at3s")
  })

  test("compress('') should return ''", () => {
    expect(compress("")).toEqual("")
  })

  test("compress('a') should return 'a'", () => {
    expect(compress("a")).toEqual("a")
  })

  test("compress('abc') should return 'abc'", () => {
    expect(compress("abc")).toEqual("abc")
  })

  test("compress('a2b3c') should return 'a2b3c'", () => {
    expect(compress("a2b3c")).toEqual("a2b3c")
  })

  test("compress('aaaaabbbbccccc') should return '5a4b5c'", () => {
    expect(compress("aaaaabbbbccccc")).toEqual("5a4b5c")
  })
})
