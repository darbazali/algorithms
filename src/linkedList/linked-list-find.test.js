import { describe, test, expect } from "bun:test"
import linkedListFind, { linkedListFindRecursive } from "./linked-list-find"
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

describe("linkedListFindRecursive", () => {
  const list = createLinkedList(["a", "b", "c"])

  test('linkedListFindRecursive(null, "c") should return a boolean', () => {
    expect(linkedListFindRecursive(list, "c")).toBeBoolean()
  })

  test('linkedListFindRecursive(list, "c") should return true', () => {
    expect(linkedListFindRecursive(list, "c")).toBeTrue()
  })

  test('linkedListFindRecursive(list, "d") should return false', () => {
    expect(linkedListFindRecursive(list, "d")).toBeFalse()
  })
})
