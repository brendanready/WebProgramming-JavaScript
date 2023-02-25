/*
        Brendan Ready
        Assignment 03
*/

// Looping a Triangle

/*
Write a loop that displays the following triangle within a console window:

#
##
###
####
#####
######
#######
*/

let triangle = "";

for (let i = 0; i <= 6; i++) {
	triangle = triangle + "#";
	console.log(triangle);
}