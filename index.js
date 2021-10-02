let reversedWord;
function isPalindrome(word) {
  
     reversedWord = word.split("").reverse().join("").toLowerCase()
    word = word.toLowerCase()
        if (word === reversedWord) {
          return true
        } else {
          return false
        }
}


/* 
  Add your pseudocode here:

  Step1: reverse a string => (split, reverse, join)
  Step2: convert string and reversed string to lowercase
  Step3: if (string === reversedString) {
    return true
  } else return false
*/

/*
  Add written explanation of your solution here:

  The Palindrome function is returning true when a string reads the same forwards and backwards. First, the function main task is to reverse the string. Since the reverse() built in Javascript method works only on arrays, we split the string characters using split() which will transform the string into an array. After that, the reverse method can be applied then we join the array back into a string using join(). Then, the string received as an argument as well as the reversed one should be all in lower case to avoid case sensitivity. Next, a conditional statment will evaluate if the reverse string matches the original string.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("Madam"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("saippuaKIvikauppias"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("palindrome"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
