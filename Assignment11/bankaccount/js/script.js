/*
        Brendan Ready
        Assignment 11
        M13 Assignment
*/

// The Bank Account Application (Creating a Closure Function)

/* 
In this simple bank account application, you will use closures as a way to maintain state (to keep track of the account balance), 
to offer external code a way to get and set information (make a deposit or get the current balance), 
and to protect data (like the balance) from inappropriate tampering.

To successfully complete this part of the assignment, follow the steps outlined below:

Part 1 – The UI

    1. Within the web page, add buttons for Name, Deposit, and Withdrawal.
    2. When the user clicks the Name button, a prompt should appear that allows the user to enter their name.
    3. When the user clicks the Deposit button, a prompt should appear that allows the user to enter .
    4. When the user clicks the Withdrawal button, a prompt should appear that allows the user to enter an amount to withdrawal.
    5. Add a div element that will be used to display the user’s name and their balance as they deposit and withdrawal money.

Part 2 – The Closure Function

    1. Create a function called bankAccount that accepts a single parameter: ownerName.
    2. Add local variables balance and owner. Owner should be set by the incoming parameter.
    3. Return an object with methods for withdrawal that accepts a parameter (withdrawalAmount), deposit that accepts a parameter (depositAmount), getBalance(), and getOwnerName().
    4. Add validation to ensure only appropriate withdrawals and deposits are allowed.
    5. The balance and ownerName methods will return the values of the private variables.
    6. The withdrawal function will withdrawal money from the owner’s bank account and the balance should be reflected.
    7. The deposit function should add money to the owner’s bank account and the balance should be reflected.
 */

    let account;
    let nameBtn = document.querySelector('#name');
    let depositBtn = document.querySelector('#deposit');
    let withdrawalBtn = document.querySelector('#withdrawal');
    let accountSummary = document.querySelector('#accountSummary');
    let accountName = document.querySelector('#accountName');
    let accountBalance = document.querySelector('#accountBalance');
    let accountmsg = document.querySelector('#accountMsg');
    
    function reset_animation() {
        let el = document.querySelector('#accountSummary');
        el.style.animation = 'none';
        el.offsetHeight; /* trigger reflow */
        el.style.animation = null; 
      }
    
    const bankAccount = ownerName => {
        let balance = 0;
        let owner = ownerName;
        let msg ='';
    
        return ({
            withdrawal: function(withdrawalAmount) {
    
                if (withdrawalAmount===null) {
                    msg = ``;
                } else {
                    withdrawalAmount = parseFloat(withdrawalAmount);
    
                    if (isNaN(withdrawalAmount)) {
                        msg = `Withdrawal amount must be valid number. A number wasn't entered. Please enter a number.`;
                    } else if (withdrawalAmount > balance) {
                        msg = `Withdrawal amount exceeds current balance. Please enter a number that is equal to or less than your current balance.`;
                    } else {
                        balance -= withdrawalAmount;
                        msg = `You withdrew $${withdrawalAmount.toFixed(2)}`;
                    }
                }
            },
            deposit: function(depositAmount) {
                if (depositAmount===null) {
                    msg = ``;
                } else {
                    depositAmount = parseFloat(depositAmount);
    
                    if (isNaN(depositAmount)) {
                        msg = `Deposit amount must be valid number. A number wasn't entered. Please enter a number.`;
                    } else {
                        balance += depositAmount;
                        msg = `You deposited $${depositAmount.toFixed(2)}`;
                    }
                }
            },
            getBalance: function() {
                return balance.toFixed(2);
            },
            getOwnerName: function() {
                return owner;
            },
            getMsg: function() {
                return msg;
            }
        });
    };
    
    nameBtn.addEventListener('click', () => {
        const owner = prompt('Please enter your name:');
        if (owner) {
            account = bankAccount(owner);
            accountSummary.classList = 'fade';
            accountName.innerText = `Account Name: ${account.getOwnerName()}`;
            accountBalance.innerText = `Account Balance: $${account.getBalance()}`;
            accountmsg.innerText = `${account.getMsg()}`;
            reset_animation();
        }   
    });
    
    depositBtn.addEventListener('click', () => {
        if (account) {
            let depositAmount = prompt('Please enter an amount to deposit:');
            account.deposit(depositAmount);
            accountSummary.classList = 'fade';
            accountName.innerText = `Account Name: ${account.getOwnerName()}`;
            accountBalance.innerText = `Account Balance: $${account.getBalance()}`;
            accountmsg.innerText = `${account.getMsg()}`;
            reset_animation();
        } else {
            alert('Please login with your account name before making a depsoit');
        }
    });
    
    withdrawalBtn.addEventListener('click', () => {
        if (account) {
            let withdrawalAmount = prompt('Please enter an amount to withdraw:');
            account.withdrawal(withdrawalAmount);
            accountSummary.classList = 'fade';
            accountName.innerText = `Account Name: ${account.getOwnerName()}`;
            accountBalance.innerText = `Account Balance: $${account.getBalance()}`;
            accountmsg.innerText = `${account.getMsg()}`;
            reset_animation();
        } else {
            alert('Please login with your account name before making a withdrawal');
        }
    });