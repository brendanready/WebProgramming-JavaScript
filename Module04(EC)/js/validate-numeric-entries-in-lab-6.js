/*
        Brendan Ready
        Module 4 (EC)
*/

// Validate Numeric Entries in Lab 6 (Extra Credit 5 points)

/*
There are 3 lines of code in lab 6 where a user must enter their investment amount, the rate, and the number of years
they would like to invest for.

Your job in this part of the assignment is to validate those entries. Within investment, the number should be numeric.
Within rate, the number should be numeric and between 0 and a realistic rate like 6%. For years, the number should be
numeric and between 1 and 30.
*/

// GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;

// COLLECT VALUES FROM THE USER
investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));

// Validate Investment
while (isNaN(investment)) {
	alert('Please enter a valid number for investment amount.');
	investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));
}

rate = parseFloat(prompt('Enter interest rate as xx.x'));

// Validate Rate
while (rate < 0 || rate > 6 || isNaN(rate)) {
	if (isNaN(rate)) {
		alert('Please enter a valid number for interest rate.');
		rate = parseFloat(prompt('Enter interest rate as xx.x'));
	} else {
		alert('Please enter a valid number between 0 and 6.0 for interest rate.');
		rate = parseFloat(prompt('Enter interest rate as xx.x'));
	}
}

years = parseInt(prompt('Enter the number of years you want to invest for'));

// Validate Years
while (years < 1 || years > 30 || isNaN(years)) {
	if (isNaN(years)) {
		alert('Please enter a valid number for the number of years.');
		years = parseInt(prompt('Enter the number of years you want to invest for'));
	} else {
		alert('Please enter a valid number between 1 and 30 for the number of years.');
		years = parseInt(prompt('Enter the number of years you want to invest for'));
	}
}

// CALCULATE FUTURE VALUE
futureValue = investment;
for (let i = 0; i < years; i++) {
	futureValue = futureValue + (futureValue * rate / 100);
}

// DISPLAY RESULT
document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Future value: $${futureValue.toFixed(2)}`);