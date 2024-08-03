const countDigits = (n: number | null | undefined): number => {
  if (n === null || n === undefined) {
    throw new Error("Input must not be null or undefined");
  }
  const numString = n.toString();
  if (numString === "") {
    throw new Error("Input must be a non-empty string");
  }
  return numString.length;
};
