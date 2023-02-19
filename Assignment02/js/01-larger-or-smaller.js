/*
        Brendan Ready
        Assignment 02
*/

// Larger or Smaller?

/*
Usage: Use simple conditional statements

Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two
within the browser window. Don’t forget to handle the fact that the two could be equal.
*/

let number1 =  parseInt(prompt("Please enter a number"));

// console.log(number1);

let number2 = parseInt(prompt("Please enter another number."));

// console.log(number2);

if (number1 > number2) {
    alert("The larger number you entered is: " + number1);
} else if (number1 == number2) {
    alert("You entered two equal numbers.");
} else {
    alert("The larger number you entered is: " + number2);
}