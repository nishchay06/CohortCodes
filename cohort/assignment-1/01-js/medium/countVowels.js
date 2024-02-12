/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/
function isVowel(ch){
  return (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u');
}
function countVowels(str) {
    // Your code here
    str = str.toLowerCase();
    let count = 0;
    const n = str.length;
    for(let i = 0; i < n; i++){
      if(isVowel(str[i])) count++;
    }
    return count;
}

module.exports = countVowels;