/**
 * Returns the last digit of a given number.
 *
 * @param {number} number - The number from which to extract the last digit.
 * @throws {TypeError} Throws a TypeError if the input is not a number.
 * @return {number} The last digit of the given number.
 */
const getLastDigit = (number: number): number => {
  if (typeof number !== "number") {
    throw new TypeError("Input must be a number");
  }
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
  if (typeof number !== "number") {
    throw new TypeError("Input must be a number");
  }
  return getLastDigit(number) % 2 === 0;
};

console.log(isEven(12345));
