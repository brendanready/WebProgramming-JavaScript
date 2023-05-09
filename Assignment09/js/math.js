/*
        Brendan Ready
        Assignment 09
        M11 Assignment
*/

// Part 2 - Math and Math Functions

/* 
1.  Create an application that prompts the user for a number. 
    Regardless of whether they enter a negative or positive number, make sure to display the positive version of that number in the console window. 
    If I enter -15 in the prompt and -15 is displayed in the console window, you did this one wrong.
2.  Create an application that prompts the user for a floating point value (decimal). 
    Store the result of that input in a variable and then round it up to the nearest whole number. 
    Display the result within a console window.
3.  Create an application that prompts the user for a floating point value (decimal). 
    Store the result of that input in a variable and then round it down to the nearest whole number. 
    Display the result within a console window.
4.  Create an application that prompts the user for 5 numbers. 
    Ask them to comma delimit each number so you get 1,2,3,4,5 for example. 
    Store the result of that input in a variable and then find the largest and smallest numbers in that list. 
    Display both of those numbers within a console window.
5.  Create an application that prompts the user for a number. 
    Now find the square root of that number and display the result within a console window.
 */

//STEP 1

let number = parseInt(prompt('Please enter a number:'));
let absNumber = Math.abs(number);

console.log('The positive version of the number is:');
console.log(absNumber);


//STEP 2
/* 
let floatNumber = parseFloat(prompt('Please enter a floating point value (decimal)'));
let ceilNumber = Math.ceil(floatNumber);

console.log('The number rounded up is:');
console.log(ceilNumber);
 */

//STEP 3
/* 
let floatNumber = parseFloat(prompt('Please enter a floating point value (decimal)'));
let floorNumber = Math.floor(floatNumber);

console.log('The number rounded down is:');
console.log(floorNumber);
 */

//STEP 4
/* 
let numbers = prompt('Please enter five numbers separated by commas (eg. 1,2,3,4,5):');
let numberList = numbers.split(',');

const getLargestNumber = (numbers) => {
	let largestNumber = Math.max(...numbers);
	return largestNumber;
};

const getSmallestNumber = (numbers) => {
	let smallestNumber = Math.min(...numbers);
	return smallestNumber;
};

console.log('The largest number is:');
console.log(getLargestNumber(numberList));
console.log('');
console.log('The smallest number is:');
console.log(getSmallestNumber(numberList));
 */

//STEP 5
/* 
let number = parseInt(prompt('Please enter a number:'));
let sqrt = Math.sqrt(number);

console.log('The square root is:');
console.log(sqrt);
 */