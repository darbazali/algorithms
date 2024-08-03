/**
 * Checks if a given string is a palindrome.
 *
 * A palindrome is a word, phrase, number, or other sequence of characters that reads the same
 * backward as forward.
 *
 * @param {string} str - The string to check for palindrome-ness.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 * Complexity: O(n) time | O(1) space
 */

export const isPalindrome = (str: string): boolean => {
  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }

  let left: number = 0;
  let right: number = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;

    left++;
    right--;
  }
  return true;
};
