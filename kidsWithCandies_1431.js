var kidsWithCandies = function (candies, extraCandies) {
  result = [];
  flag = false;
  for (let i = 0; i < candies.length; i++) {
    let sum = candies[i] + extraCandies
    const max = Math.max(...candies);
    if (sum < max) {
      flag = false
    } else {
      flag = true;
    }
    result.push(flag);
  }
  return result;
};
console.log(kidsWithCandies([2, 3, 5, 1, 3], 3))