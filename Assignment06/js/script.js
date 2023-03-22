/*
        Brendan Ready
        Assignment 06
        M7 Assignment
*/

// The Employee Management System (Add, View, and Delete Employees)

/* 
In this assignment, the idea is to have the ability for a user to add an employee, view an employee via a tabular interface, and then delete an employee from the table.

Adding an Employee

You will want to capture the values of the Add Employee form. These values will then be displayed within the table to the right, in the “Employees” pane.

    General Considerations

        - Upon submission, the form should completely clear itself of the entered values.

        - Upon submission, the user’s cursor should immediately return to the Employee ID field.

Viewing Employees

Adding an employee will result in the values entered being shown in a tabular view. Each form field’s value has its own cell in the table that matches up with its
respective table header. 

    Steps for dynamically creating the tabular data

        -   In this assignment you will get the table from the DOM.

        -   You’ll need to create a new row for the selected table. This can be accomplished easily by calling the .insertRow() method for the selected table like this:
            let row = selectedtable.insertRow();

        -   Next, you’ll have to create new cells within the new row. One cell for each piece of data captured from the Add Employee form. This can be done using the .insertCell() method for the row as follows (shown for ID cell only):
            let cellID = row.insertCell();

        -   Then you’ll have to add the text value as a text node within the newly created cell. This can be done using the .createTextNode() method and passing it in to the .appendChild() method for each cell in the row.

        -   Don’t forget to designate a cell for the delete button. This will also have to be coded and added to a cell in the row.
 
Deleting Employees

The entry should be removed when the user clicks the delete button.

    General Considerations

        -   Confirm the deletion to the user. If the user clicks OK, the row should be deleted.

        -   Use the .deleteRow() method of the table to delete the row. This method will accept the rowIndex for the row you want to select. You’ll need to select the <tr> tag that the delete button exists within. Think about how you will accomplish this. 
            The code to delete the selected row from the table will look something like this (replace path-to-tr-tag with DOM properties for selecting the <tr> tag):
            table.deleteRow(e.target.path-to-tr-tag.rowIndex);

Maintaining an Employee Count

When an employee is added to or deleted from the table, the count of employees in the table should be maintained in the <output> tag next to the heading. 
You’ll need to create a count variable in code, increment it when a new employee is added, decrement it when an employee is deleted, and display the result in the output tag when an employee is added or deleted.
*/

// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.querySelector('#addForm');
let table = document.querySelector('#employees');

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = document.querySelector('#empCount');
count.innerHTML = `(${0})`;

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    let id = document.querySelector('#id').value;
    let name = document.querySelector('#name').value;
    let ext = document.querySelector('#extension').value;
    let email = document.querySelector('#email').value;
    let dept = document.querySelector('#department').value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = table.insertRow();

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellID = row.insertCell();
    let cellName = row.insertCell();
    let cellExt = row.insertCell();
    let cellEmail = row.insertCell();
    let cellDept = row.insertCell();
    let cellDelete = row.insertCell();

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellID.appendChild(document.createTextNode(id));
    cellName.appendChild(document.createTextNode(name));
    cellExt.appendChild(document.createTextNode(ext));
    cellEmail.appendChild(document.createTextNode(email));
    cellDept.appendChild(document.createTextNode(dept));

    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    cellDelete.appendChild(deleteBtn);

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.querySelector('#id').focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count.innerHTML = `(${table.rows.length - 1})`;
});

// DELETE EMPLOYEE
table.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        if (confirm(`Are you sure you want to delete employee ${e.target.parentElement.parentElement.children[1].innerText}?`)) {
            table.deleteRow(e.target.parentElement.parentElement.rowIndex);
            count.innerHTML = `(${table.rows.length - 1})`;
        }
    }
});