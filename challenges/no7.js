// Prompt

// Given a string, return true if the letters can be re-arranged to make a palindrome using every letter. Otherwise, return false.

// Strategy: At most 1 character in a palindrome can have an odd frequencey.  So, calculate the frequency of the characters in the word. 
// If more than one character has an odd frequency return false.

function isPalindromeAnagram(word) {
  /* your code here */

  // create a frequency map of word
  let freq = {};

  for (let i of word) {
    freq[i] = freq[i] +1 || 1;
  }
  console.log(freq)
  let oddCount = 0;
  for (let i in freq){
    if (freq[i] % 2 === 1) oddCount++;
  }

  return oddCount <= 1;

}

console.log(isPalindromeAnagram("masma"));