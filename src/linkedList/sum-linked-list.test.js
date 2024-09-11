import { describe, test, expect } from "bun:test"
import sumLinkedList from "./sum-linked-list.js"
import createLinkedList from "./create-linked-list.js"

describe("sumLinkedList", () => {
  const list = createLinkedList([1, 2, 3, 4])
  const emptyList = createLinkedList([])

  test("sumLinkedList(list) should return a number", () => {
    expect(sumLinkedList(list)).toBeNumber()
  })

  test("sumLinkedList(list) should return 10", () => {
    expect(sumLinkedList(list)).toBe(10)
  })

  test("sumLinkedList(emptyList) should return 0", () => {
    expect(sumLinkedList(emptyList)).toBe(0)
  })
})
