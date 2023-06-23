const { data } = require("./external");

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

