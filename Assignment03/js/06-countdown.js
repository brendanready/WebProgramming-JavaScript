/*
        Brendan Ready
        Assignment 03
*/

// Countdown

/*
Write an application that counts down to 0 based on the number that a user passes into a prompt. 
If the number is 10, it should count down from 10 to 0. If the number is 100, it should count down from 100 to 0 and so on.
*/

let num = parseInt(prompt("Please enter a number"));

if (isNaN(num)) {
        console.log("You did not enter a number.");
}

for (let i = num; i >= 0; i--) {
	console.log(i);
}