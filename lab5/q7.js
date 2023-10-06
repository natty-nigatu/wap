function filterLongWords(words, len) {
  let result = [];

  for (let word of words) {
    if (word.length > len) result.push(word);
  }

  return result;
}
