const getLastDigit = (number: number): number => {
  return Math.abs(number) % 10;
};

const isEven = (number: number): boolean => {
  return getLastDigit(number) % 2 === 0;
};

console.log(isEven(12345));
