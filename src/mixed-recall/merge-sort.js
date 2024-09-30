/* 
merge sort
----------
Write a function, mergeSort, that takes in an array of numbers as an argument. 
The function should return a new array containing elements of the original array sorted in ascending order. 

@test-cases:
------------
const numbers = [10, 4, 42, 5, 8, 100, 5, 6, 12, 40];
mergeSort(numbers); // -> [ 4, 5, 5, 6, 8, 10, 12, 40, 42, 100 ] 

const numbers = [7, -30, -4, -1, 12, 0, 20];
mergeSort(numbers); // -> [ -30, -4, -1, 0, 7, 12, 20 ] 

*/

const mergeSort = (arr = []) => {
  if (arr.length <= 1) return arr

  const mid = Math.floor(arr.length / 2)
  const left = arr.slice(0, mid)
  const right = arr.slice(mid)

  const sortedLeft = mergeSort(left)
  const sortedRight = mergeSort(right)

  return merge(sortedLeft, sortedRight)
}

const merge = (arr1, arr2) => {
  arr1.reverse()
  arr2.reverse()
  const merged = []

  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[arr1.length - 1] < arr2[arr2.length - 1]) {
      merged.push(arr1.pop())
    } else {
      merged.push(arr2.pop())
    }
  }

  merged.push(...arr1.reverse())
  merged.push(...arr2.reverse())

  return merged
}

const numbers = [10, 4, 42, 5, 8, 100, 5, 6, 12, 40]
console.log(mergeSort(numbers))
