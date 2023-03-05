/*
        Brendan Ready
        Assignment 04
*/

// Practice with Functions

/*
1.	Write a function called halfNumber() that accepts one argument (a number), divide it by 2, and
	return the result. It should log a string like "Half of 5 is 2.5.".
2.	Write a function called squareNumber() that accepts one argument (a number), square that
	number, and return the result. It should also log a string like "The result of squaring the number 3 is
	9."
3.	Write a function called percentOf() that accepts two numbers, figure out what percent the first
	number represents of the second number, and return the result. It should log a string like "2 is 50%
	of 4."
4.	Write a function called findModulus() that accepts two numbers. Within the function write a
	statement that returns the modulus of the first and second parameters. It should log a string like "2
	is the modulus of 4 and 10."
*/

//STEP 1

function halfNumber(number) {
	let total = Number(number) / 2;
	console.log(`Half of ${number} is ${total}`);
}

halfNumber(5);
halfNumber(10);
halfNumber(50);
halfNumber(100);

//STEP 2

function squareNumber(number) {
	let total = Number(number) ** 2;
	console.log(`The result of squaring the number ${number} is ${total}`);
}

squareNumber(3);
squareNumber(5);
squareNumber(10);
squareNumber(100);

//STEP 3

function percentOf(number1, number2) {
	let total = Number(number1 / number2) * 100;
	console.log(`${number1} is ${total}% of ${number2}`);
}

percentOf(2, 4);
percentOf(15, 50);
percentOf(25, 100);
percentOf(50, 1000);

//STEP 4

function findModulus(number1, number2) {
	let total = Number(number2 % number1);
	console.log(`${total} is the modulus of ${number1} and ${number2}`);
}

findModulus(4, 10);
findModulus(5, 24);
findModulus(25, 106);
findModulus(9, 323);