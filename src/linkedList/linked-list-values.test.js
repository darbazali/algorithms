import { describe, test, expect } from "bun:test"
import linkedListValues from "./linked-list-values.js"
import createLinkedList from "./create-linked-list"

describe("linkedListValues", () => {
  const list = createLinkedList([1, 2, 3, 4])
  test("linkedListValues should return an array", () => {
    expect(linkedListValues(list)).toBeArray()
  })
})
