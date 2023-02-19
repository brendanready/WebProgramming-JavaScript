/*
        Brendan Ready
        Assignment 02
*/

// The “Coin Flip” Game

/*
Usage: Use nested conditional statements

In this part of the assignment you will explore what you’ve learned so far about variables, prompts, conditionals,
operators, math, and more to create a “coin flip game”. To complete the game follow the steps outlined below:
*/

/*
1. Begin your application by creating a variable called coinFlip and set it equal to a random number. You will have to use a Math method to get this number:
*/

let coinFlip = Math.round(Math.random());

/*
2. Prompt the user to select “Heads or Tails” and set the result to a new variable called choice.
*/

let choice = prompt("Select Heads or Tails");

choice = choice.toLowerCase();

if (choice !== "heads" && choice !== "tails") {
    window.alert("Please make a valid selection of either Heads or Tails");
}

/*
3. Use a conditional to check the result of the coin flip. If it’s less than a certain number, it will be heads. If it’s greater
than a certain number, it will be tails.
*/

let result = (coinFlip == 1) ? "heads" : "tails";

/*
4. If the result is heads and the user selects heads, display the following message within an alert:
The flip was heads and you chose heads...you win!
*/

if (choice == "heads" && result == "heads") {
    alert("The flip was heads and you chose heads...you win!");
}

/*
5. If the result is heads and the user selects tails, display the following message within an alert:
The flip was heads but you chose tails...you lose!
*/

if (choice == "tails" && result == "heads") {
    alert("The flip was heads but you chose tails...you lose!");
}

/*
6. If the result is tails and the user selects heads, display the following message within an alert:
The flip was tails but you chose heads...you lose!
*/

if (choice == "heads" && result == "tails") {
    alert("The flip was tails but you chose heads...you lose!");
}

/*
7. If the result is tails and the user selects tails, display the following message within an alert:
The flip was tails and you chose tails...you win!
*/

if (choice == "tails" && result == "tails") {
    alert("The flip was tails and you chose tails...you win!");
}