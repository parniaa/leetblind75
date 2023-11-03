var gcdOfStrings = function (str1, str2) {

  let smallString = str2
  let bigString = str1
  if (str1.length < str2.length) {
    smallString = str1
    bigString = str2
  }
  if (smallString.length % 2 == 1) {
    repeatC = (bigString.length / smallString.length);
    let result = smallString.repeat(repeatC);
    if (result == bigString) return smallString;
  } else {

  }

};

// console.log(gcdOfStrings("ABCABCABC", "ABC"));
console.log(gcdOfStrings("ABABABAB", "ABABAB"));
