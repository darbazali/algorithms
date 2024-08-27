export const filterRange = (arr: number[], a: number, b: number): number[] => {
  return arr.filter((item) => a <= item && item <= b);
};
