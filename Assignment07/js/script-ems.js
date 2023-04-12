/*
        Brendan Ready
        Assignment 07
        M8 Assignment
*/

// Part 2, The Employee Management System

/* 
In this assignment you will build on the M8 Assignment. If you recall, in the M8 Assignment, the user was able to add an employee, view that employee within the grid, and then delete an employee by clicking the delete button that appears to the right of each row. 
While this was a great learning opportunity as it relates to DOM scripting, it wasn’t realistic as it didn’t allow you to persist the employee data in any way. When the browser was closed, the data was gone and had to be reentered again. 
In this version, you will modify the application to use arrays and then store the populated array within web storage (localStorage) in order to persist the data across browser sessions.

The Interface

As was the case in M8 Assignment, the UI has been created for you using Bootstrap and will look identical to the M8 Assignment. You will not need to touch the HTML.

Pay close attention to the table markup of this version of the assignment however. You will create the row structure differently in this assignment than what you did in the M8 Assignment. More on this in a bit.

Loading an Initial Set of Employees

For this assignment you will use arrays to structure your data. You will need to create an initial array and populate it with at least 5 employees. When the page loads, the grid should automatically populate with those initial 5 employees. 
The data for each employee should be structured so that you’re storing the employee ID (number), employee name (string), 4 digit extension (number), email (string), and department (string).

Building the Grid

In the M8 Assignment you used the table’s DOM methods insertRow(), insertCell(), and deleteRow() to manipulate the row structure for the table. In this assignment you will take a different approach. In this assignment, you’ll see the table includes a <tbody> tag. 
Use this tag as a ‘hook’ and rely on the innerHTML property to programmatically construct the row and cell structure for the table using a template literal string.

Considerations:

    - This will be its own function. It will be called when the page loads, when an employee is added, and when an employee is deleted.
    - Use a for / of loop here to loop through the array and build each row in code.
    - Use the appendChild() method to append the constructed row to the <tbody> tag.

Adding and Removing Data

You’ll need two separate functions for adding and removing employees. Remember to pass the array into these functions and then use array specific methods to add / remove employees from the array. Don’t forget to call the function to build the grid once an employee has been added or removed.

Considerations:

When a new employee is added, you’ll need to create a new array. This array is what will be added into the main employees array.
Storing Data

Use web storage (localStorage) to persist the array. It should be stored when the page loads / when the grid is built, when a new employee is added, and when an employee is deleted. When the page loads, make sure to check to see if the object exists in storage before you attempt to extract the data from storage.

Considerations

    - You’ll need to use JSON.stringify() to store the array in storage.
-   - You’ll need to use JSON.parse() to retrieve the array from storage.
*/

// Part 2, The Employee Management System

// CREATE AN ARRAY OF EMPLOYEES
let employees = [
    [12434355, 'Donald Rush', 9256, 'drush@dynacorp.com', 'Executive'], 
    [23452444, 'Sarah Smith', 4143, 'ssmith@dynacorp.com', 'Sales'], 
    [34352354, 'Susan Jenkins', 6347, 'sjenkins@dynacorp.com', 'Administrative'], 
    [44358855, 'Ron Parker', 7434, 'rparker@dynacorp.com', 'Engineering'],
    [58274432, 'Nick Keuger', 3767, 'nkeuger@dynacorp.com', 'Marketing']
];

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
let storedEmployees = [];

if (localStorage.getItem('storedEmployees') !== null) {
    storedEmployees = JSON.parse(localStorage.getItem('storedEmployees'));
    employees = storedEmployees;
} else {
    storedEmployees = employees;
}

// GET DOM ELEMENTS
const $ = (id) => document.getElementById(id);
let form = $('addForm');
let employeeTable = $('empTable');
let empCount = $('empCount');

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid();

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    let id = $('id').value;
    let name = $('name').value;
    let ext = $('extension').value;
    let email = $('email').value;
    let dept = $('department').value;

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let newEmployee = [id, name, ext, email, dept];

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    storedEmployees.push(newEmployee);

    // BUILD THE GRID
    buildGrid();

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.querySelector('#id').focus();
});

// DELETE EMPLOYEE
employeeTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    if (e.target.classList.contains('delete')) {
        let employeeName = e.target.parentElement.parentElement.children[1].innerText;
        let tableRow = e.target.parentElement.parentElement;

        if (confirm(`Are you sure you want to delete employee ${employeeName}?`)) {
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            let rowIndex = tableRow.rowIndex;

            // REMOVE EMPLOYEE FROM ARRAY
            storedEmployees.splice(rowIndex - 1, 1);

            // BUILD THE GRID
            buildGrid();
        }
    }
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    employeeTable.removeChild(employeeTable.children[1]);

    // REBUILD THE TBODY FROM SCRATCH
    let tableBody = document.createElement('tbody');

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    for (let employee of storedEmployees) {
        let tableRow = document.createElement('tr');
        tableRow.innerHTML = '';
        for (let data of employee) {
            tableRow.innerHTML += `<td>${data}</td>`;
        }
        tableRow.innerHTML += `<td><button class='btn btn-danger btn-sm float-right delete'>X</button></td>`;
        tableBody.appendChild(tableRow);
    }

    // BIND THE TBODY TO THE EMPLOYEE TABLE
    employeeTable.appendChild(tableBody);

    // UPDATE EMPLOYEE COUNT
    empCount.innerText = storedEmployees.length;

    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('storedEmployees', JSON.stringify(employees));
}