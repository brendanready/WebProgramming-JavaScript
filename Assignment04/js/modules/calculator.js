// ADD A PRIVATE FUNCTION CALLED CALCULATE
const calculate = () => "PRIVATE FUNCTION CALCULATE() IS WORKING";

// ADD FOUR PUBLIC FUNCTIONS BELOW

// ADD FUNCTION
const add = (x, y) => {
    console.log(`${calculate()} and the total of calling the function add(${x}, ${y}) will be logged`);
    return x + y;
};

// SUBTRACT FUNCTION
const subtract = (x, y) => x - y;

// MULTIPLY FUNCTION
const multiply = (x, y) => x * y;

// DIVIDE FUNCTION
const divide = (x, y) => x / y;

// EXPORT THE FOUR PUBLIC FUNCTIONS
export { add, subtract, multiply, divide };