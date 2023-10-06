function computeSumOfSquares(nums) {
  return nums.reduce((acc, curr) => (acc += curr * curr), 0);
}
