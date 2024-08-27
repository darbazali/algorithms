export const filterRangeInPlace = (
  arr: number[],
  a: number,
  b: number
): void => {
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
};
