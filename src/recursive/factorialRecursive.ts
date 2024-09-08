export const factorialRecursive = (n: number): number => {
  if (n < 0) throw new Error("n should be a positive integer")

  if (n <= 1) return 1
  return n * factorialRecursive(n - 1)
}
