/*
        Brendan Ready
        Assignment 02
*/

// The “Grade Assigner” Application

/*
Usage: Use else if or switch statements
*/

// 1. Collect a number between 1 and 100 from the user.

let number = parseInt(prompt("Please enter a number between 1 and 100"));

/*
2. Make sure that number is between 1 and 100, if it is not, let the user know that only numbers between 1 and 100
are accepted.
*/

if (number > 100 || number < 1) {
    window.alert("The number you entered is not between 1 and 100. Only numbers between 1 and 100 are accepted.  \n \nPlease enter a number between 1 and 100");
}

// 3. If the score is between 60 and 69, write out “You received a D” into the console.

else if (number >= 60 && number <= 69) {
    console.log("You received a D");
}

// 4. If the score is between 70 and 79, write out “You received a C” into the console.

else if (number >= 70 && number <= 79) {
    console.log("You received a C");
}

// 5. If the score is between 80 and 89, write out “You received a B” into the console.

else if (number >= 80 && number <= 89) {
    console.log("You received a B");
}

// 6. If the score is between 90 and 100, write out “You received an A” into the console.

else if (number >= 90 && number <= 100) {
    console.log("You received an A");
}

// 7. If the score is less than 60, write out “You received an F” into the console.

else {
    console.log("You received an F");
}