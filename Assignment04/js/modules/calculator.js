// ADD A PRIVATE FUNCTION CALLED CALCULATE
function calculate(a, b, operationSign) {
	switch (operationSign) {
		case "+":
			return a + b;

		case "-":
			return a - b;

		case "*":
			return a * b;

		case "/":
			return a / b;
	}
}

// ADD FOUR PUBLIC FUNCTIONS BELOW

// ADD FUNCTION
const add = (x, y, z) => {
    console.log(`PRIVATE FUNCTION CALCULATE() IS WORKING and the total of calling the function add(${x}, ${y}, "${z}") is ${calculate(x, y, z)}`);
    return calculate(x, y, z);
};

// SUBTRACT FUNCTION
const subtract = (x, y, z) => calculate(x, y, z);

// MULTIPLY FUNCTION
const multiply = (x, y, z) => calculate(x, y, z);

// DIVIDE FUNCTION
const divide = (x, y, z) => calculate(x, y, z);

// EXPORT THE FOUR PUBLIC FUNCTIONS
export { add, subtract, multiply, divide };