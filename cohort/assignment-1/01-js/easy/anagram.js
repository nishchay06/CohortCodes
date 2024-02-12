/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const n = str1.length;
  const m = str2.length;
  if(n != m) return false;
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  const count1 = {}, count2 = {};
  for(let i = 0; i < n; i++){
    count1[str1[i]] = 1 + (count1[str1[i]]||0);
    count2[str2[i]] = 1 + (count2[str2[i]]||0);
  }
  for(let i = 0; i < n; i++){
    if(count1[str1[i]] != count2[str1[i]]) return false;
  }
  return true;
}

module.exports = isAnagram;
