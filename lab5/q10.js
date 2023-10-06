function computeSumOfSquresOfEvensOnly(nums) {
  let result = 0;

  for (let num of nums) if (num % 2 == 0) result += num * num;

  return result;
}
