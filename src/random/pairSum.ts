export const pairSum = (numbers: number[], target: number): number[] => {
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j]
      }
    }
  }

  return []
}

export const pairSum2 = (numbers: number[], targetSum: number): number[] => {
  const previousNums: Record<number, number> = {}

  for (let i = 0; i < numbers.length; i += 1) {
    const num = numbers[i]
    const complement = targetSum - num
    if (complement in previousNums) return [i, previousNums[complement]]

    previousNums[num] = i
  }

  return []
}
