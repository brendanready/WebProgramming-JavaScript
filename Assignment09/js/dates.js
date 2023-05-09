/*
        Brendan Ready
        Assignment 09
        M11 Assignment
*/

// Part 3 - Date and Date Functions

/* 
1.  Create an application that gets the number of days in a month. 
    Display that result within the console window.
2.  Create an application that gets the month name from a particular date. 
    Display that result within the console window.
3.  Create an application that tests whether a date is a weekend. 
    Display that result within the console window.
4.  Create an application that gets yesterday’s day of the week. 
    For instance, if today is Tuesday, the console window should display Monday.
5.  Create an application that gets the current day of the week. 
    The twist here is that I want only the first letter of the day. 
    If today is Tuesday, the letter T should be displayed in the console window.
 */

//STEP 1

const daysInMonth = (year, month) => new Date(year, month, 0).getDate();

let date = new Date();
let curDay = date.getDate();
let curMonth = date.getMonth() + 1;
let curMonthName = date.toLocaleString('default', { month: 'long' });
let curYear = date.getFullYear();

console.log('The number of days in the month of February of 2020 was:');
console.log(daysInMonth(2020, 2));

console.log('');
console.log(`Today is ${curMonthName} ${curDay}, ${curYear}`);
console.log('');

console.log('The number of days in the current month is:');
console.log(daysInMonth(curYear, curMonth));


//STEP 2
/* 
const date = (year, month, day) => new Date(year, month-1, day);

let myDate = date(1990, 12, 25);

let monthName = myDate.toLocaleString('default', { month: 'long' });

console.log(`The name of the month for the date of ${myDate.toLocaleDateString()} was:`);
console.log(monthName);
 */

//STEP 3
/* 
let date = new Date();
let curWeekDay = date.getDay();

let curWeekDayName = date.toLocaleString('default', { weekday: "long" });

if (curWeekDay === 6) {
    console.log(`Today is ${curWeekDayName}. It's a weekend!`);
} else if (curWeekDay === 0) {
    console.log(`Today is ${curWeekDayName}. It's a weekend, but it's almost over.`);
} else if (curWeekDay === 5) {
    console.log(`Today is ${curWeekDayName}. The weekend starts tonight!`);
} else {
    console.log(`Today is ${curWeekDayName}. There are ${6 - curWeekDay} more days until the weekend.`);
}
 */

//STEP 4
/* 
let today = new Date();
let yest = new Date(today);

yest.setDate(yest.getDate() - 1);

let yestWeekDayName = yest.toLocaleString('default', { weekday: "long" });

console.log("Yesterday was:");
console.log(yestWeekDayName);
 */

//STEP 5
/* 
let date = new Date();

let curWeekDayName = date.toLocaleString('default', { weekday: "long" });
let firstLetter = curWeekDayName.charAt(0);

console.log("The first letter of the current day of the week is:");
console.log(firstLetter);
 */