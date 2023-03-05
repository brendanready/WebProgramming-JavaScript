/*
        Brendan Ready
        Assignment 04
*/

// The Basic Calculator

/*
In this part of the assignment you will build a simple calculator using the skills you’ve acquired in regards
to functions and modules. You will ask the user for a number, a second number, and then finally ask
them what kind of operation they want to perform, either add, subtract, multiply, or divide. Depending
on what they select, you will perform that operation. To complete this part of the assignment follow the
steps outlined here:

1. Create a module that abstracts away the main calculation logic of your application. This module will
have a private function called calculate and expose four different functions (add, subtract, multiply,
and divide). The shell of this module with some basic instruction has already been outlined for you.
2. In the main script, prompt the user for a number and store that in a variable. Convert that to a number.
3. Then, prompt the user for a second number and store that in a variable. Convert that to a number.
4. Finally, prompt the user for the operation they would like to perform (add, subtract, multiply,
divide) and store that in a variable.
5. Use a switch statement to evaluate the operation parameter being passed in. Depending on what it
is, perform that operation by calling the appropriate function from the module.
6. Display the result of the calculation within an alert.
7. Figure out how to make it so that if the user doesn’t enter either add, subtract, multiply, or divide,
they are displayed an alert message telling them that. Then you’ll have to rerun the application so
that the application asks the user for the numbers and operation once more. You’ll have to add this
functionality within a do while loop similarly how the labs were done in the previous lecture.
*/

let number1, number2, total, operation, sign;

// IMPORT THE MODULE
import { add, subtract, multiply, divide } from './modules/calculator.js';

// COLLECT FIRST NUMBER FROM USER
do {
	number1 = parseFloat(prompt("Please enter a 1st number: "));
	if (isNaN(number1)) {
		alert("You didn't enter a number. Please enter a valid number");
		continue;
	} else {
		break;
	}
} while (isNaN(number1));

// COLLECT SECOND NUMBER FROM USER
do {
	number2 = parseFloat(prompt("Please enter a 2nd number: "));
	if (isNaN(number2)) {
		alert("You didn't enter a number. Please enter a valid number");
		continue;
	} else {
		break;
	}
} while (isNaN(number2));

// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
do {
	operation = prompt("Please choose an operation to perform: add, subtract, multiply, divide.").toLowerCase();
        if (!(operation == "add" || operation == "subtract" || operation == "multiply" || operation == "divide")) {
                alert("You didn't enter an operation to perform. Please enter one of the following: add, subtract, multiply, or divide.");
        } else {
		break;
	}
} while (!(operation == "add" || operation == "subtract" || operation == "multiply" || operation == "divide"));

// CHECK TO SEE WHAT OPERATION THEY'RE USING
function calculator() {
	switch (operation) {
		case "add":
			total = add(number1, number2);
			sign = "+";
			break;

		case "subtract":
			total = subtract(number1, number2);
			sign = "-";
			break;

		case "multiply":
			total = multiply(number1, number2);
			sign = "*";
			break;

		case "divide":
			total = divide(number1, number2);
			sign = "/";
			break;
	}
}

// CALL THE APPROPRIATE FUNCTION
calculator();

console.log(`Total is ${total}`);
alert(`${number1} ${sign} ${number2} = ${total}`);