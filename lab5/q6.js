function findLongestWordLength(words) {
  let max = 0;

  for (let word of words) {
    if (word.length > max) max = word.length;
  }

  return max;
}
