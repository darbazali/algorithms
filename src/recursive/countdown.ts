export const countDown = (n: number) => {
  if (n === 0) return
  console.log(n)
  countDown(n - 1)
}

countDown(10)
