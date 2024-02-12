/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  const n = str.length;
  let newStr = "";
  for(let i = 0; i < n; i++){
    if(str[i] <= 'z' && str[i] >= 'a') newStr += str[i];
  }
  const m = newStr.length;
  for(let i = 0; i < m/2; i++){
    if(newStr[i] != newStr[n-1-i]) return false;
  }
  return true;
}

module.exports = isPalindrome;
