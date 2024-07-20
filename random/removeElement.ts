const removeElement = (nums: number[], val: number): number => {
  let lastIndex = nums.length - 1;
  for (let i = 0; i <= lastIndex; ) {
    if (nums[i] === val) {
      nums[i] = nums[lastIndex];
      lastIndex--;
    } else {
      i++;
    }
  }
  return lastIndex + 1;
};
