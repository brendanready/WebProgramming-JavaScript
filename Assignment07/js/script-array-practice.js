/*
        Brendan Ready
        Assignment 07
        M8 Assignment
*/

// Part 1, Practice with Arrays 

/* 
1. 	Create a string array that contains your five favorite movies. Then, use the console to display the
	second movie in your array.

2. 	Declare an array called movies using the function constructor method. Add the length of 5 into the
	constructor. Then, assign one of your favorite movies to each index in the array until you have 5
	total movies in your array. Then, use the console to display the first movie in your array.

3. 	Copy your code from step 2. Add a new movie into the 3rd position within your array. Then, use the
	console to display the length of the array. You should now have 6 total movies stored in the array.

4. 	Declare an array called movies using literal notation. Then, assign one of your favorite movies to
	each index in the array until you have 5 total movies in your array. Now, use the delete operator to
	remove the first movie in the array. Use the console to display the contents of the array.

5. 	Declare an array called movies using literal notation. Then, assign one of your favorite movies to
	each index in the array until you have 7 total movies in your array. Now, use a for/in loop to iterate
	through the array and display each movie within the console window.

6. 	Copy the code from step 5. Now, use a for/of loop to iterate through the array and display each
	movie within the console window.

7. 	Copy the code from step 5. Using the for/of loop to iterate through the array, display each movie
	within the console window in a sorted view.

8. 	Copy the code from step 5. Under the existing array, create a new array called leastFavMovies.
	Populate the array with the 3 movies that you regret watching. Display both arrays within the
	console window so that it’s formatted to look like this (note the spacing, you must include that too):
        Movies I like:
        Movie 1
        Movie 2
        Movie 3
        …
        Movies I regret watching:
        Movie 1
        Movie 2
        Movie 3
        …

9. 	Copy the code from step 8. Now, use the concat() method to merge the two arrays together into a
	single array called movies. Use the console window to display the list in reverse sorted order.

10. Copy the code from step 9. Use an array function to return just the last item in the array and display
	it within the console window.

11. Copy the code from step 10. Remove the previous method and this time use a method to return just
	the first item in the array and display it within the console window.

12. Programmatically retrieve the movies in your array that you do not like and return their indices.
	Then, using those indices, programmatically add movies that you do like.
	
13. Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5.
	The array should look something like this:
        movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];
	Now, loop through the array and filter out and display only the movie names. You must use the
	filter() method and you’ll need to filter out the names by their primitive data type.

14. Create a string array called employees using literal notation and populate the array with several
	employee names. Then, create an anonymous function called showEmployee. The function should
	accept a parameter. Call this function, passing in the employees array into the function as a
	parameter. Make sure to display the result in the console window. Within the function, loop
	through the passed in array and display the result so that it looks exactly like this in the console
	window:
        Employees:
        
        ZAK
        JESSICA
        MARK
        FRED
        SALLY

15. Write a JavaScript function to filter false, null, 0 and blank values from an array.
        Test Data: console.log(filterValues([58, '', 'abcd', true, null, false, 0]));
        Expected Result: [58, "abcd", true]

16. Write a JavaScript function to get a random item from an array. So if I create a numeric array with 10
	numbers and then pass that array into my function, the function should randomly return one of
	those numbers.

17. Write a JavaScript function to get the largest number from a numeric array.
*/

//STEP 1
/*
let favMovies = ['No Country For Old Men', 'The Godfather Part II', 'Road to Perdition', 'Scarface', 'Platoon'];
console.log(favMovies[1]);
*/

//STEP 2
/* 
let movies = new Array(5);
movies[0] = 'No Country For Old Men';
movies[1] = 'The Godfather Part II';
movies[2] = 'Road to Perdition';
movies[3] = 'Scarface';
movies[4] = 'Platoon';
console.log(movies[0]);
*/

//STEP 3
/*
let movies = new Array(5);
movies[0] = 'No Country For Old Men';
movies[1] = 'The Godfather Part II';
movies[2] = 'Road to Perdition';
movies[3] = 'Scarface';
movies[4] = 'Platoon';
movies.splice(2, 0, 'Pulp Fiction');
console.log(movies.length);
*/

//STEP 4
/*
let movies = [];
movies[0] = 'No Country For Old Men';
movies[1] = 'The Godfather Part II';
movies[2] = 'Road to Perdition';
movies[3] = 'Scarface';
movies[4] = 'Platoon';
delete movies[0];
console.log(movies);
*/

//STEP 5
/*
let movies = [];
movies[0] = 'No Country For Old Men';
movies[1] = 'The Godfather Part II';
movies[2] = 'Road to Perdition';
movies[3] = 'Scarface';
movies[4] = 'Platoon';
movies[5] = 'Pulp Fiction';
movies[6] = 'Gangs of New York';

for (let movie in movies) {
	if (movies.hasOwnProperty(movie)) {
		console.log(movies[movie]);
	}
}
*/

//STEP 6
/*
let movies = [];
movies[0] = 'No Country For Old Men';
movies[1] = 'The Godfather Part II';
movies[2] = 'Road to Perdition';
movies[3] = 'Scarface';
movies[4] = 'Platoon';
movies[5] = 'Pulp Fiction';
movies[6] = 'Gangs of New York';

for (let movie of movies) {
	console.log(movie);
}
*/

//STEP 7
/*
let movies = [];
movies[0] = 'No Country For Old Men';
movies[1] = 'The Godfather Part II';
movies[2] = 'Road to Perdition';
movies[3] = 'Scarface';
movies[4] = 'Platoon';
movies[5] = 'Pulp Fiction';
movies[6] = 'Gangs of New York';

movies.sort();

for (let movie of movies) {
	console.log(movie);
}
*/

//STEP 8
/*
let movies = [];
movies[0] = 'No Country For Old Men';
movies[1] = 'The Godfather Part II';
movies[2] = 'Road to Perdition';
movies[3] = 'Scarface';
movies[4] = 'Platoon';
movies[5] = 'Pulp Fiction';
movies[6] = 'Gangs of New York';

let leastFavMovies = ['Bridget Jone\'s Diary', 'The Sound of Music', 'Glitter'];

console.log('Movies I Like:');
console.log('');
for (let movie of movies) {
	console.log(movie);
}
console.log('...');
console.log('');
console.log('Movies I regret watching:');
console.log('');
for (let leastFavMovie of leastFavMovies) {
	console.log(leastFavMovie);
}
console.log('...');
*/

//STEP 9
/*
let movies = [];
movies[0] = 'No Country For Old Men';
movies[1] = 'The Godfather Part II';
movies[2] = 'Road to Perdition';
movies[3] = 'Scarface';
movies[4] = 'Platoon';
movies[5] = 'Pulp Fiction';
movies[6] = 'Gangs of New York';

let leastFavMovies = ['Bridget Jone\'s Diary', 'The Sound of Music', 'Glitter'];

movies = movies.concat(leastFavMovies).sort().reverse();

console.log('Movies I Like and Movies I regret watching:');
console.log('');
for (let movie of movies) {
	console.log(movie);
}
console.log('...');
*/

//STEP 10
/*
let movies = [];
movies[0] = 'No Country For Old Men';
movies[1] = 'The Godfather Part II';
movies[2] = 'Road to Perdition';
movies[3] = 'Scarface';
movies[4] = 'Platoon';
movies[5] = 'Pulp Fiction';
movies[6] = 'Gangs of New York';

let leastFavMovies = ['Bridget Jone\'s Diary', 'The Sound of Music', 'Glitter'];

movies = movies.concat(leastFavMovies).sort().reverse();

let lastMovie = movies.pop();

console.log('Last movie in the list:');
console.log('');
console.log(lastMovie);
*/

//STEP 11
/*
let movies = [];
movies[0] = 'No Country For Old Men';
movies[1] = 'The Godfather Part II';
movies[2] = 'Road to Perdition';
movies[3] = 'Scarface';
movies[4] = 'Platoon';
movies[5] = 'Pulp Fiction';
movies[6] = 'Gangs of New York';

let leastFavMovies = ['Bridget Jone\'s Diary', 'The Sound of Music', 'Glitter'];

movies = movies.concat(leastFavMovies).sort().reverse();

let firstMovie = movies.shift();

console.log('First movie in the list:');
console.log('');
console.log(firstMovie);
*/

//STEP 12
/*
let movies = [];
movies[0] = 'No Country For Old Men';
movies[1] = 'The Godfather Part II';
movies[2] = 'Road to Perdition';
movies[3] = 'Scarface';
movies[4] = 'Platoon';
movies[5] = 'Pulp Fiction';
movies[6] = 'Gangs of New York';

let leastFavMovies = ['Bridget Jone\'s Diary', 'The Sound of Music', 'Glitter'];

movies = movies.concat(leastFavMovies).sort().reverse();

let moreMovies = ['The Matrix', 'Terminator 2', 'The Lord of the Rings: The Return of the King'];

const replaceLeastFavMovies = (movies) => {
	for (let movie of movies) {
		// console.log(movie);
		if (movie === leastFavMovies[0] || movie === leastFavMovies[1] || movie === leastFavMovies[2]) {
			let index = movies.indexOf(movie);
			console.log(`Index of ${movie}: ${index}`);
			movies[index] = moreMovies.shift();
		}
	}
};

replaceLeastFavMovies(movies);

console.log('');
console.log('The movies I don\'t like have now been replaced with ones I do like:');
console.log('');
for (let movie of movies) {
	console.log(movie);
}
*/

//STEP 13
/*
let movies = [['The Godfather Part II', 1], ['No Country For Old Men', 2], ['Gangs of New York', 3], ['Pulp Fiction', 4], ['Scarface', 5]];

for (let movie of movies) {
	let movieName = movie.filter((name) => {
		return typeof name === 'string';
	});
	console.log(movieName.toString());
}
*/

//STEP 14
/*
let employees = ['Zak', 'Jessica', 'Mark', 'Fred', 'Sally'];

const showEmployee = (employees) => {
	for (let employee of employees) {
		console.log(employee.toUpperCase());
	}
};
console.log('Employees:');
console.log('');
showEmployee(employees);
*/

//STEP 15
/*
let testData = [58, '', 'abcd', true, null, false, 0];

const filterValues = (values) => {
	return values.filter(function(value) {
		return (value != '' && value != false && value != null && value != 0);
	});
};

console.log(filterValues(testData));

testData = filterValues(testData);
*/

//STEP 16
/*
let myArray = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

const randomArrayItem = (array) => {
    if (array.length === 0) {
        return null;
    } else {
	    let item = array[Math.floor(array.length * Math.random())];
	    return item;
    }
};
console.log(randomArrayItem(myArray));
*/

//STEP 17
/*
let numbers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
let numbers2 = [-12, -34, -1, 0, -22, -12, -7, -22, -99, -79];
let numbers3 = [100, 20, 30_000, 1_000_000, 5_000, 6_000, 700_000, 800_000, 900_000, 20_000];

const getLargestNumber = (array) => {
	let largestNumber = Math.max(...array);
	return largestNumber;
};

console.log(getLargestNumber(numbers));
console.log(getLargestNumber(numbers2));
console.log(getLargestNumber(numbers3));
*/