export const pairProduct = (numbers: number[], targetProduct: number): number[] => {
  const previousNums: Record<number, number> = {}

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i]
    const complement = targetProduct / num
    if (complement in previousNums) return [previousNums[complement], i]
    previousNums[num] = i
  }

  return []
}
