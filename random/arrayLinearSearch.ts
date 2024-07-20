/**
 * Performs a linear search to find a target value in an array.
 *
 * @param {Array<number>} arr - The array to search in.
 * @param {number} target - The value to find.
 * @returns {number} The index of the target if found, -1 otherwise.
 *
 * Time Complexity: O(n) where n is the number of elements in the array.
 * Space Complexity: O(1), since only variables are used.
 */
const linearSearch = (arr: Array<number>, target: number): number => {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    const middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (arr[middleIndex] === target) {
      return middleIndex;
    }

    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }

  return -1;
};

console.log(linearSearch([10, 15, 20, 25, 30], 50));
