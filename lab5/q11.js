function sum(nums) {
  return nums.reduce((acc, curr) => (acc += curr), 0);
}

function multiply(nums) {
  return nums.reduce((acc, curr) => (acc *= curr), 0);
}
