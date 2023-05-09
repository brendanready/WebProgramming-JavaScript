/*
        Brendan Ready
        Assignment 09
        M11 Assignment
*/

// Part 4 - Death by JavaScript

/* 
Solve the following string/math/number/function/array-related problems. 
Each solution should be written within its own function and the output should be displayed within a console window. 
The display should be the return value of the function call.

1.  Write a JavaScript function that returns a passed string with letters in alphabetical order. 
    Assume punctuation and number symbols are not included in the passed-in string.

    Sample Data and Output
    Example string: 'webmaster'
    Expected Output: 'abeemrstw'
 

2.  Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string to upper case.

    Sample Data and Output
    Example string: 'the quick brown fox'
    Expected Output: 'The Quick Brown Fox'
 

3.  Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

    Sample Data and Output
    Example string: 'The quick brown fox'
    Expected Output: 5
 

4.  Write a JavaScript function that generates a string id (specified length) of random characters.

    Sample Data and Output
    Expected Output: RCv1SBUC or PmJkc2Y2 or nIi5L0FA
 

5.  Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.

    Sample Data and Output
    Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
    Expected output: "United States of America"
 */

//STEP 1

const sortLetters = string => string.split('').sort().join('');

let string = 'webmaster';

console.log(sortLetters(string));


//STEP 2
/* 
const capitalizeWords = string => {
    let wordList = string.split(' ');
    let capWordList = [];
    for (let word of wordList) {
        let words = word.charAt(0).toUpperCase() + word.slice(1);
        capWordList.push(words);
    }
    return capWordList.join(' ');
};

let string = 'the quick brown fox';

console.log(capitalizeWords(string));
 */

//STEP 3
/* 
const countVowels = string => {
    string = string.toLowerCase();
    let vowels = 'aeiou';
    let vowelCount = 0;

    for (let letter of string) {
        if (vowels.indexOf(letter) !== -1) {
            vowelCount += 1;
        }
    }
    return vowelCount;
};

let string = 'The quick brown fox';

console.log(countVowels(string));
 */

//STEP 4
/* 
const getStringId = length => {
    let randomChars = '';
    let charSet = 'abcdefghijlkmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    for (let i = 0; i < length; i++) {
        randomChars += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }
    return randomChars;
};

console.log(getStringId(8));
 */

//STEP 5
/* 
const getLongestCountryName = countryNames => countryNames.reduce(longestCountry);

const longestCountry = (longest, country) => longest.length > country.length ? longest : country;

let countryNames = ["Australia", "Germany", "United States of America"];

console.log(getLongestCountryName(countryNames));
 */