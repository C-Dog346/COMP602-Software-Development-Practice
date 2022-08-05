// same commment syntax
/*
as

C
*/

/*data types
undefined, null, booleam, string, symbol, number, and object*/

console.log("Hello World");

var myName;
console.log(myName);

var firstName = "Callum"; // var can be used in the whole program - avoid using 'var' and instead use 'let'
let lastName = "Clow"; // let can only be used in the scop it is decleared within - cannot be declared twice

myName = firstName + lastName; 

console.log(myName);

// use standard math operators

// can + strings

// standard index notation

// strings are immutable (cant use indexing to replace)

function functionTest(test)
{
    return test;
}

console.log(functionTest("bob"));

// arrays are NOT immutable (CAN use indexing to replace)
var testRay = [1,2,3];
console.log(testRay[2]) ;


// push() adds elements to the end of an array
var pushRay = testRay.push(9);
console.log(pushRay); // prints the number of elements

// pop() removes the last element from an array into another array
var popRay = testRay.pop();
console.log(popRay); // for somereason this does not print the number of elements but instead prints the popped value

// shift() removes the first element from an array into another array
var shiftedRay = testRay.shift();
console.log(shiftedRay);

// unshift() adds elements to the start of an array
var unshiftedRay = testRay.unshift(999);
console.log(unshiftedRay); // prints the number of elements

// variables defined outside functions have global scope, whilst variables inside of functions do not (unless you do not use the 'var' keyword, the variable becomes global then. This is bad practice however, do not use it (i think))

// local variables of the same name as global variables have priority

// functions will return 'undefined' if they return nothing

// JSON.stringify([array]) converts an array to a string for easy printing

// standard if/else if/else notation

// == is standard equality but === (triple equals) will not convert the variables to the same type beforehand, a string "10" and number 10 are not equal with === even though they are wtih ==

// same thing for inequality (an extra equals), which goes '!=='

// standard and/or notation

/* standard switch notation (as follows) 

switch
{
    case x: 
        -----;
        -----;
        break;
    case y:
        -----;
        -----;
        break;
    default:
        -----;
        -----;
        breal;

} */

// object

var myDog = {
    "name": "Cazzie",
    "legs": 4,
    "tails": 1,
    "friends": ["family", "certain other humans he warms up to"]
};

var legsVal = myDog.legs
var friendsVal = myDog.friends[0] + " " + myDog.friends[1]

console.log(legsVal + " " + friendsVal);

myDog.name = "Caswell 'Cazzie' Gordon Clow";

console.log(myDog.name);

myDog["bark"] = "ruff";

console.log(myDog.bark);

delete myDog.bark;

console.log(myDog.bark);


// testing for object properties, will return value if yes, "Not Found" if no

function checkObj(checkProp)
{
    if (myDog.hasOwnProperty(checkProp))
    {
        return myDog[checkProp];
    }
    
    return "Not Found";
}

console.log(checkObj("legs"))
console.log(checkObj("feet"))

// complex object

var doubleObject = [
    {
        "name": "Object One"
    },

    {
        "name": "Object One"    
    }
];

// nested object

var myStorage = {
    "car": {
        "inside": {
            "driver seat": "driver",
            "passenger seat": "passenger"
        },
        "outside": {
            "fuel tank": "fuel"
        }
    }
}

console.log(myStorage.car.inside["driver seat"])

// nested array

var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion:"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

var tree = myPlants[1].list[1];

console.log(tree);

// record collection

var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": [ ]
    },
    "5439": {
        "album": "ABBA Gold"
    }
};

// console.log(JSON.parse(JSON.stringify(collection)));

function updateRecords(id, prop, value) {
    if (value === "") {
        delete collection[id][prop];
    }
    
    else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    }
    else {
        collection[id][prop] = value
    }

    return collection;
}

updateRecords(2468, "tracks", "test");
console.log(updateRecords(5439, "artist", "ABBA"))

// standard C loop notation

// do while loop - will always run once then check the condition

var i = 0;

do {
    console.log('loop '+(i+1));
     i++;
} while (i < 5)

// 'Math.random()' cannot generate 1. You can use 'math.floor()' to round down and therefore make the number u 
// multiply by the upper limit exclusive e.g. "math.floor(math.random() * 10)" will make a number between 0 and 9.

// 'parseint()' will turn a string to number, inclucing non-base 10 numbers

// w?tf (condition(what) (statement if true (true) statement if false (false)) - this is a condensedd true/false based
// if statement. can compund w?tf statements inside of each other. Also called turnery operator

// ' "use strict" ' - used to warn about bad coding

// 'Object.freeze(x)' will protect object mutation such as "ARRAY_OF_CONSTANTS.X = 10"

// anonymous functions are functions without names. They can be replaced with '() =>' functions. An arrow function is 
// simialr to lambda as it allows you to remove curly brackets, return statement and write it on one line

// "array1.concat(array2)" joins arrays into one

// when passing in a vairable to a function, can assign a default value

// '...' the rest operator is used to pass in any number of arguements into an array - useful especially for functions

// '...' can also be used as a spread operator to copy array contents to another variable (instead of a pointer/psuedo-pointer, its a copy)

const TEST_VARIABLES = {
	x: 1,
	y: 2
}

function getTestVariable(testVariables) {
	"use strict";

	const {x : testReturn } = testVariables;

	return testReturn;
}

console.log(getTestVariable(TEST_VARIABLES));

// empty commas before a rest operator will omit the first two elements

// ' `xxxxx` ' a template literal is used for complex string such as multi line strings and formatting with "${variable.property}" 

// can shorten object assignment with arrow functions by simplig passing input into a function with variables and nothing else

// constructors, getters and setters in classes are different to standard functions, do not require the function keyword and do not need brackets when calling

// can only import a function that has been exported with 'export'

// import syntax matches python

