import { describe, test, expect } from "bun:test"
import linkedListValues from "./linked-list-values.js"
import createLinkedList from "./create-linked-list"

describe("linkedListValues", () => {
  const list = createLinkedList([1, 2, 3, 4])
  const list2 = createLinkedList(["a", "b", "c"])

  test("linkedListValues(list) should return an array", () => {
    expect(linkedListValues(list)).toBeArray()
  })

  test("linkedListValues(list) should return a [1, 2, 3, 4]", () => {
    expect(linkedListValues(list)).toEqual([1, 2, 3, 4])
  })

  test('linkedListValues(list2) should return a ["a", "b", "c"]', () => {
    expect(linkedListValues(list2)).toEqual(["a", "b", "c"])
  })
})
