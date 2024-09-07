/*
intersection
Write a function, intersection, that takes in two arrays, a,b, as arguments. The function should return a new array containing elements that are in both of the two arrays.

You may assume that each input array does not contain duplicate elements.

@example
intersection([4,2,1,6], [3,6,9,2,10]) // -> [2,6]

@complexity
Time: O(n+m)
Space: O(n)
*/

export const intersection = (a: number[], b: number[]): number[] => {
  const result: number[] = []

  const setA = new Set(a)

  for (let item of b) {
    if (setA.has(item)) {
      result.push(item)
    }
  }

  return result
}
