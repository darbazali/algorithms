const iterateRecursively = <T>(arr: T[], i: number = 0): void => {
  if (i === arr.length) return
  console.log(arr[i])
  iterateRecursively(arr, i + 1)
}

const arr = ["A", "B", "C", "D", "E", "F"]

iterateRecursively(arr)
