import { describe, test, expect } from "bun:test"
import sumLinkedList from "./sum-linked-list.js"
import createLinkedList from "./create-linked-list.js"

describe("sumLinkedList", () => {
  const list = createLinkedList([1, 2, 3, 4])

  test("sumLinkedList(list) should return a number", () => {
    expect(sumLinkedList(list)).toBeNumber()
  })
})
