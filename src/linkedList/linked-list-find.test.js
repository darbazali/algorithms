import { describe, test, expect } from "bun:test"
import linkedListFind from "./linked-list-find"
import createLinkedList from "./create-linked-list"

describe("linkedListFind", () => {
  const list = createLinkedList(["a", "b", "c"])

  test('linkedListFind(null, "c") should return a boolean', () => {
    expect(linkedListFind(list, "c")).toBeBoolean()
  })

  test('linkedListFind(list, "c") should return true', () => {
    expect(linkedListFind(list, "c")).toBeTrue()
  })

  test('linkedListFind(list, "d") should return false', () => {
    expect(linkedListFind(list, "d")).toBeFalse()
  })
})
