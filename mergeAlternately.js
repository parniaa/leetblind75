var mergeAlternately = function (word1, word2) {
  let length = word1.length
  if (word2.length > word1.length) {
    length = word2.length
  }
  let result = [];
  for (let index = 0; index < length; index++) {
    result.push(word1[index])
    result.push(word2[index])
  }
  return result.join("")
};
console.log(mergeAlternately("abc", "pqr"));