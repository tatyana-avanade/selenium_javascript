const { data } = require("./external");

const { greet, greetByName, greetReturn } = require('./external_functions');

const textMessage = "This is the JavaScript review file";
// Print the variable to the terminal window 
console.log(textMessage);

var username = "tomsmith";
var password = "SuperSecretPassword!";

let age = 30;

const pi = 3.14;

console.log(username);

// using string concatination
console.log("Password: " + password);
console.log("Age: " + age);
console.log("Pi: " + pi);

// using template literals
// note the ticks `` used instead of single or double quotes

console.log(`Username: ${username}`);
console.log(`Password: ${password}`);
console.log(`Age: ${age}`);
console.log(`Pi: ${pi}`);


// const data = {
//     username: "tomsmith",
//     password: "SuperSecretPassword!",
//     baseUrl: "https://the-internet.herokuapp.com/",
//     pageTitle: "Welcome to the-internet"
// };

// // to print object variables using .notation

console.log(data.username); // Output: "tomsmith"
console.log(data.baseUrl); // Output: "https://the-internet.herokuapp.com/"

// // Step 1: Basic function
// function greet() {
//     console.log("Hello!");
// }

// greet(); // Output: Hello!

// // Step 2: Function with arguments
// function greetByName(name) {
//     console.log(`Hello, ${name}!`);
// }

// greetByName("John"); // Output: Hello, John!

// // Step 3: Function with a return value

// function greetReturn(name) {
//     return "Hello, " + name + "!";
// }

// const greeting = greetReturn("John");
// console.log(greeting); // Output: Hello, John!

// Step 2: Use the functions
greet(); // Output: Hello!

greetByName("John"); // Output: Hello, John!

const greeting = greetReturn("Jane");

console.log(greeting); // Output: Hello, Jane!