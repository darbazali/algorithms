export const pairSum = (numbers: number[], target: number): number[] => {
  const previousNums: Record<number, number> = {}

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i]
    const complement = target - num
    if (complement in previousNums) return [previousNums[complement], i]
    previousNums[num] = i
  }

  return []
}
