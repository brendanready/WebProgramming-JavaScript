/*
        Brendan Ready
        Assignment 10
        M12 Assignment
*/

// Practice with JavaScript OOP Concepts
/* 
Within the provided script, create the following applications. 
Remember to comment out every application once you’ve finished with that step.

    1.  Create two classes, one called Cat and another called Dog. 
        Both classes should be created using constructor syntax. 
        The Cat class should be created using a named declaration and the Dog class should be created using an anonymous declaration.
    2.  Create a new instance of the Cat class. 
        Directly underneath, create a new instance of the Dog class.
    3.  Create a new class using constructor syntax called Animal. 
        Create a method within the Animal class that when called, displays the message “The Animal has been created” in the console window.
    4.  Now, replicate the above code but this time so that the class accepts an argument and that value is what is displayed in the console window. 
        The message should be passed into the constructor at the moment that the Animal class is instantiated.
    5.  Start over and now create a new class using constructor syntax called Animal. 
        Define five properties within your class including properties type, breed, color, height, and length. 
        These properties will be set within the object so you’ll need to pass in arguments into the function’s constructor, set the properties, and then pass in the actual values during the object’s instantiation.
    6.  Use a for-in loop to loop through and display all of the properties in the Animal class. 
        You should see a total of 5 properties displayed in a list within the console window.
    7.  Now, create a public method called speak. Within the speak method you will use a conditional to check the type of Animal being created. 
        If it’s a dog, return “The <color> dog is barking!” If it’s a cat return “The <color> cat is meowing!” instead. 
        Call that method after the Animal class has been instantiated.
    8.  Now, convert all of your properties to private properties. 
        Then, create a private method called checkType(). In this method you will check to see what the type is. If it’s dog, return dog, otherwise, return cat. 
        Then, create a privileged method called speak that returns the value of the checkType() method. The console window should now display “The <animal type> has made a noise!”
    9.  Create your own String method called findWords that inherits from the native String Object. 
        This method should find all instances of a specific word within a provided paragraph of text. It should then alert out to the user the number of time that word was found in the paragraph. 
        Remember, you’ll need to add your method to the String object’s prototype.
 */

// STEP 1
/* 
// Using ES5
function Cat() {}

const Dog = function() {};

// // Using ES6
// class Cat {
//     constructor() {}
// }

// const Dog = class {
//     constructor() {}
// };
*/

// STEP 2
/* 
class Cat {
    constructor() {}
}

const Dog = class {
    constructor() {}
};

const cat1 = new Cat();

const dog1 = new Dog();
*/

// STEP 3
/* 
class Animal {
    constructor() {
        console.log(`The Animal has been created`);
    }
}

const animal1 = new Animal();
const animal2 = new Animal();
*/

// STEP 4
/* 
class Animal {
    constructor(animal) {
        console.log(`The ${animal} has been created`);
    }
}

const animal1 = new Animal('dog');
const animal2 = new Animal('cat');
*/

// STEP 5
/* 
class Animal {
    constructor(type, breed, color, height, length) {
        this.type = type;
        this.breed = breed;
        this.color = color;
        this.height = height;
        this.length = length;
        console.log(`The Animal has been created and has the following properties:\n  type:   ${this.type}\n  breed:  ${this.breed}\n  color:  ${this.color}\n  height: ${this.height}\n  length: ${this.length}`);
    }
}

const dog = new Animal('dog', 'Boston Terrier', 'black and white', '17 inches', '22 inches');
const cat = new Animal('cat', 'Siamese', 'chocolate point', '8 inches', '14 inches');
*/

// STEP 6
/* 
class Animal {
    constructor(type, breed, color, height, length) {
        this.type = type;
        this.breed = breed;
        this.color = color;
        this.height = height;
        this.length = length;
    }
}

const dog = new Animal('dog', 'Boston Terrier', 'black and white', '17 inches', '22 inches');

for (const property in dog) {
    console.log(property);
}
*/

// STEP 7
/* 
class Animal {
    constructor(type, breed, color, height, length) {
        this.type = type;
        this.breed = breed;
        this.color = color;
        this.height = height;
        this.length = length;
        this.speak = () => {
            if (this.type.toLowerCase() === 'dog') {
                console.log(`The ${this.color} dog is barking!`);
            } else if (this.type.toLowerCase() === 'cat') {
                console.log(`The ${this.color} cat is meowing!`);
            } else {
                console.log(`The ${this.color} ${this.type.toLowerCase()} is making a sound!`);
            }
        };
    }
}

const dog = new Animal('dog', 'Boston Terrier', 'black and white', '17 inches', '22 inches');
const cat = new Animal('cat', 'Siamese', 'chocolate point', '8 inches', '14 inches');
const bird = new Animal('Bird', 'Budgerigar', 'green and yellow', '3 inches', '7 inches');

dog.speak();
cat.speak();
bird.speak();
*/

// STEP 8
/* 
class Animal {
    constructor(type, breed, color, height, length) {
        let _type = type;
        let _breed = breed;
        let _color = color;
        let _height = height;
        let _length = length;
        let checkType = () => {
            if (_type.toLowerCase() === 'dog') {
                return 'dog';
            } else if (_type.toLowerCase() === 'cat') {
                return 'cat';
            } else {
                return 'animal';
            }
        };
        this.speak = () => {
            console.log(`The ${checkType()} has made a noise!`);
        };
    }
}

const dog = new Animal('dog', 'Boston Terrier', 'black and white', '17 inches', '22 inches');
const cat = new Animal('cat', 'Siamese', 'chocolate point', '8 inches', '14 inches');
const bird = new Animal('Bird', 'Budgerigar', 'green and yellow', '3 inches', '7 inches');

dog.speak();
cat.speak();
bird.speak();
*/

// STEP 9

String.prototype.findWords = (string, word) => {
    this.string = string;
    this.word = word;
    let expression = `${word}`;
    let re = new RegExp(`\\b${expression}\\b`, 'gi');
    let count = (string.match(re) || []).length;
    return count;
};

let text = 'How much wood would a woodchuck chuck if a woodchuck could chuck wood?';

console.log(text.findWords(text, 'wood'));

let word = 'wood';

alert(`${text}\n\nThe number of times the word "${word}" was found in the paragraph was: ${text.findWords(text, word)}`);