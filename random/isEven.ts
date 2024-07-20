const getLastDigit = (number: number): number => {
  return Math.abs(number) % 10;
};

/**
 * Determines if a given number is even.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is even, false otherwise.
 * Complexity: O(1) time | O(1) space
 */
const isEven = (number: number): boolean => {
  return getLastDigit(number) % 2 === 0;
};

console.log(isEven(12345));
