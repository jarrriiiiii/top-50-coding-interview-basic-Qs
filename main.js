//-------->>>1.	How do you reverse a string?

function stringReversal(myString) {
  for (let i = myString.length; i >= 0; i--) {
    console.log(myString[i]);
  }
}

stringReversal("abcdefgh");

///OR

function stringReversal(myString) {
  let reverseString = myString.split("").reverse();

  console.log(reverseString);
}

stringReversal("abcdefgh");

//-------->>>2.	How do you reverse a array?

let arr = ["One", "Two", "Three", "Four"];

let arrayLength = arr.length;

for (let i = arrayLength - 1; i >= 0; i--) {
  console.log(arr[i]);
}
//-------->>>3.	Determine if a string is a palindrome

//-------->>>4.	How do you calculate the number of numerical digits in a string?

function jerry() {
  let count = 0;
  let str = "abc123xyz456";

  for (let i = 0; i < str.length; i++) {
    if (/[0-9]/.test(str[i])) {
      count++;
    }
  }

  console.log(count);
}
jerry();
//-------->>>5.Find the count for the occurrence of a particular character in a string?

function countOccurance(givenStr, character) {
  let count = 0;

  for (let i = 0; i < givenStr.length; i++) {
    if (givenStr[i] === character) {
      count++;
    }
  }
  console.log(count);
}

countOccurance("jerrry", "r");

//-------->>>6.	How do you find the non-matching characters in a string?
function findNonMatchingChar(givenString, nonMatchingChar) {
  let nonMatchingArr = [];

  for (let i = 0; i < givenString.length; i++) {
    if (givenString[i] !== nonMatchingChar) nonMatchingArr.push(givenString[i]);
  }

  console.log(nonMatchingArr);
}

findNonMatchingChar("jerrry", "y");

//-------->>>7.	How do you find out if the two given strings are anagrams?

function areAnagrams(str1, str2) {
  // Remove spaces and convert to lowercase for case-insensitive comparison
  const cleanStr1 = str1.replace(/\s/g, "").toLowerCase();
  const cleanStr2 = str2.replace(/\s/g, "").toLowerCase();

  // Convert strings to arrays, sort them, and compare
  const sortedStr1 = cleanStr1.split("").sort().join("");
  const sortedStr2 = cleanStr2.split("").sort().join("");

  return sortedStr1 === sortedStr2;
}

// Example usage:
let string1 = "listen";
let string2 = "silent";
let result = areAnagrams(string1, string2);
console.log(`Are "${string1}" and "${string2}" anagrams? ${result}`);

//-------->>>8.	How do you calculate the number of vowels and consonants in a string?
function countVowelConsonant() {
  let str = "Corolla";
  let lowStr = str.toLowerCase();
  let countVowel = 0;
  let countConsonant = 0;

  for (let i = 0; i < lowStr.length; i++) {
    if (
      lowStr[i] === "a" ||
      lowStr[i] === "e" ||
      lowStr[i] === "i" ||
      lowStr[i] === "o" ||
      lowStr[i] === "u"
    ) {
      countVowel++;
    } else {
      countConsonant++;
    }
  }

  console.log(countConsonant);
  console.log(countVowel);
}

countVowelConsonant();

//-------->>>9.	How do you total all of the matching integer elements in an array?

function totalMatchingElements() {
  let arr = [2, 4, 6, 78, 5, 34, 3, 2, 4, 2, 2, 2];
  let matchingElement = 2;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === matchingElement) {
      sum = sum + arr[i];
    }
  }

  console.log(sum);
}

totalMatchingElements();

//-------->>>10.	How do you find the maximum element in an array?

function maxElement() {
  let arr = [2, 4, 6, 8, 10];

  let maxElement = Math.max(...arr);

  console.log(maxElement);
}

maxElement();

or;
function maxElement() {
  let arr = [2, 60, 8, 2, 6];

  let arrLast = arr.length;
  let sortArr = arr.sort((a, b) => a - b);

  console.log(sortArr[arrLast - 1]);
}

maxElement();
