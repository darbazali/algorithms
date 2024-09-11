class Node {
  constructor(value) {
    this.value = value
    this.right = null
    this.left = null
  }
}

const a = new Node("a")
const b = new Node("b")
const c = new Node("c")
const d = new Node("d")
const e = new Node("e")
const f = new Node("f")

a.left = b
a.right = c

b.left = d
b.right = e

c.left = f

console.log(a)

//      a
//     / \
//    b    c
//   / \    \
//  d   e    f
