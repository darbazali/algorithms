/*
Translate border-left-width to borderLeftWidth

@Examples:
camelize('background-color') => 'backgroundColor'
camelize('-webkit-transition') => 'WebkitTransition'
*/

const capitalizeFirstLetter = (word: string): string =>
  word.charAt(0).toUpperCase() + word.slice(1);

export const camelize = (str: string): string => {
  return str
    .split("-")
    .map((word, index) => (index === 0 ? word : capitalizeFirstLetter(word)))
    .join("");
};
