/*
        Brendan Ready
        Assignment 09
        M11 Assignment
*/

// Part 1 - Strings and String Manipulation

/* 
1.  Create an application that prompts the user for their name. 
    Then, find the length of characters in the person’s name. 
    Use the alert method to display the result.
2.  Create an application that prompts the user for their name. 
    Then, prompt the user for a numeric value so that they can find the letter in the string based on the number they specify. 
    Use the alert method to display the result.
3.  Create an application that prompts the user for their first name. 
    Then, prompt the user for their last name using a second prompt. 
    Use the alert method to display the text "Your name is: " along with the result of the first name and last name concatenated together. 
    You will use a concatenation operator to concatenate the literal string with the result of the String object method’s result.
4.  Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. 
    Then, find and display within an alert the index of the word “fox”.
5.  Create an application that stores the text “The quick brown fox jumps over the lazy fox” within a variable. 
    Then, find and display within an alert the index of the last instance of the word “fox”.
6.  Create an application that stores the text “The quick brown fox jumped over the lazy dog” within a variable. 
    Then, prompt the user for their full name. 
    Then, replace the text “the lazy dog” in the variable with the name that the user enters within the prompt. 
    Use the alert method to display the result.
7.  Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. 
    Then, prompt the user for a word. Next, search for the word within the string that the user enters into the prompt. 
    Use the alert method to display the result.
8.  Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable called old_string. 
    Then, use slice(), substr(), or substring() to extract the words “the lazy dog” from the old_string variable and store that result in a second variable called new_string. 
    Use the alert method to display the uppercase result of new_string.
9.  Create an application that stores the text “ THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ” within a variable. 
    Make sure to add space before and after the text so that appears very similar to the text here. 
    Use the alert method to display the lowercase result of the variable once the space has been trimmed off.
10. Create an application that stores the text “the quick brown fox jumps over the lazy dog” within a variable. 
    The user clearly forgot to capitalize the first letter in the sentence. 
    Programmatically capitalize the first letter in the sentence and display the result in an alert.
 */

//STEP 1

let userName = prompt('Please enter your name');
alert(userName.length);


//STEP 2
/* 
let userName = prompt('Please enter your name:');
let userNumber = parseInt(prompt('Please enter a number so you can find the letter in your name based on the number (eg. Entering 1 will find the "T" in Tom):'));

if (userNumber < 1) {
    alert('Please enter a number greater than 0.');
} else if (userNumber <= userName.length) {
    alert(userName.charAt(userNumber-1));
} else {
    alert('Your name does not contain that many letters.');
}
 */

//STEP 3
/* 
let firstName = prompt('Please enter your first name:');
let lastName = prompt('Please enter your last name:');

alert(`Your name is: ${firstName.concat(lastName)}`);
 */

//STEP 4
/* 
let text = 'The quick brown fox jumps over the lazy dog';
alert(text.indexOf('fox'));
 */

//STEP 5
/* 
let text = 'The quick brown fox jumps over the lazy fox';
alert(text.lastIndexOf('fox'));
 */

//STEP 6
/* 
let text = 'The quick brown fox jumped over the lazy dog';
let userName = prompt('Enter your name');
alert(text.replace('the lazy dog', userName));
 */

//STEP 7
/* 
let text = 'The quick brown fox jumps over the lazy dog';
text = text.toLowerCase();
let userWord = prompt('Please enter a word');
userWord = userWord.toLowerCase();

let words = text.split(' ');
let index = words.indexOf(userWord);
let wordPosition = index + 1;

if (text.search(userWord) === -1) {
    alert(`The word "${userWord}" was not found in the text.`);
} else if (text.search(userWord) >= 0) {
    alert(`The word "${userWord}" was first found as the #${wordPosition} word in the text.`);
}
 */

//STEP 8
/* 
let old_string = 'The quick brown fox jumps over the lazy dog';
let new_string = old_string.substring(31,43);
alert(new_string.toUpperCase());
 */

//STEP 9
/* 
let text = ' THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ';

alert(text.trim().toLowerCase());
 */

//STEP 10
/* 
let text = 'the quick brown fox jumps over the lazy dog';

alert(text.charAt(0).toUpperCase() + text.slice(1));
 */