/*
        Brendan Ready
        Assignment 08
        M9 Assignment
*/

// The Asynchronous Loading Employee Management Application

// Use async / await to load the JSON data
async function fetchEmployees() {
	// Use try and catch to handle any errors
	try {
		// Use the .fetch() method to fetch the JSON data and return a Promise object
		const response = await fetch('../../data/employees.json');
		// Collect the response from response.json()
		const employees = await response.json();
		return employees;
	} catch (error) {
		console.error(error);
	}
}

// Export module
export { fetchEmployees };