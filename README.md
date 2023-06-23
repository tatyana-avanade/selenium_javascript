
# JavaScript review, GitHub practice

jsreview.js file content at this point

```javascript
const textMessage = "This is the JavaScript review file";
// Print the variable to the terminal window 
console.log(textMessage);
```

## Comments

```javascript
// Comment Shortcut in VScode: put cursor on the line or select multip lines and press Ctrl+/
```

## About Semicolon
* In JavaScript, the semicolon (;) is used to mark the end of a statement.
* While it is optional in most cases, it is considered a good practice to include it to separate statements clearly, avoid potential issues with automatic semicolon insertion and to ensure code readability and maintainability.

## About Quotes
In JavaScript, single quotes (''), double quotes ("") and backticks (``) can be used in strings declarations and printing the output to console. 
* Single quotes and double quotes are interchangeable and can be used to define simple string literals. 
```javascript
var username = "tomsmith";
const password = 'SuperSecretPassword!';
```
* Backticks, also known as template literals, offer additional functionality. They allow for embedding expressions and variables within the string using ${}. 
```javascript
console.log(`Password: ${password}`);
```

## Variables
In JavaScript, you can declare variables using three different keywords: var, let, and const. Each has its own usage and scope.

* `var`: This is the oldest way to declare variables in JavaScript. It has function scope and can be redeclared and reassigned.
* `let`: Introduced in ES6, let allows block scope variables that can be reassigned but not redeclared.
* `const`: Also introduced in ES6, const is used to declare variables that cannot be reassigned or redeclared. It has block scope.


```javascript
var username = "tomsmith";
var password = "SuperSecretPassword!";

let age = 30;

const pi = 3.14;
```

## Printing to Console

```javascript
console.log(username);
```

```javascript
// using string concatination
console.log("Password: " + password);
console.log("Age: " + age);
console.log("Pi: " + pi);
```

```javascript
// using template literals
// note the ticks `` used instead of single or double quotes

console.log(`Username: ${username}`);
console.log(`Password: ${password}`);
console.log(`Age: ${age}`);
console.log(`Pi: ${pi}`);
```

## Object Variables

Object variables allow you to store multiple values as key-value pairs.

```javascript
const data = {
    username: "tomsmith",
    password: "SuperSecretPassword!",
    baseUrl: "https://the-internet.herokuapp.com/",
    pageTitle: "Welcome to the-internet"
};
```

to print object variables using .notation

```javascript
console.log(data.username); // Output: "tomsmith"
console.log(data.baseUrl); // Output: "https://the-internet.herokuapp.com/"
```

### Using Object Variables from External File:

* Create a new JavaScript file, for example "external.js".
* Move the object variable into the "external.js" file.
* Export the variables using the module.exports statement:
* In the file where you want to use these variables, import them using the require() function:

```javascript
// external.js
// ===========

// objects can be accesed using dot notation and bracket notation:

// dot notation
// data.username

// bracket notation
// data["username"]


const data = {
    username: "tomsmith",
    password: "SuperSecretPassword!",
    baseUrl: "https://the-internet.herokuapp.com/",
    pageTitle: "Welcome to the-internet"
};
  
  module.exports = { data };
  
  
```
Use variables from external file in jsrevew.js file:
```javascript
const { data } = require("./external");

// You can now access the variables in your current file (jsreview.js) from external file, for example:
console.log(data.username); // Output: "tomsmith"
console.log(data.baseUrl); // Output: "https://the-internet.herokuapp.com/"
```

##  GitHub Update practice :octocat: ------------------------------------------------------

Run the following commands to push updates to GitHub repo:

```bash
git status
```
```bash
git add .
```
```bash
git commit -m "JavaScript refresher files updates"
```
```bash
git push
```

Go to you GitHub repo in the browser, refresh the page and check the updates.

## Functions in JavaScript


```javascript
// Step 1: Basic function
function greet() {
    console.log("Hello!");
}

greet(); // Output: Hello!
```

```javascript
// Step 2: Function with arguments
function greetByName(name) {
    console.log(`Hello, ${name}!`);
}

greetByName("John"); // Output: Hello, John!
```

```javascript
// Step 3: Function with a return value

function greetReturn(name) {
    return "Hello, " + name + "!";
}

const greeting = greetReturn("John");
console.log(greeting); // Output: Hello, John!
```

## Using functions from external file

### Add file external_functions.js

add the following code

```javascript
// external_functions.js
// ===========


function greet() {
    console.log("Hello!");
}

function greetByName(name) {
    console.log(`Hello, ${name}!`);
}

function greetReturn(name) {
    return "Hello, " + name + "!";
}
  
  // Export the functions <-- this allows using these functions from other files
  module.exports = { greet, greetByName, greetReturn };
  
```

## Use functions from external file in your main file

in jsreview.js file:
```javascript
// Step 1: Import the functions from external_functions.js
const { greet, greetByName, greetReturn } = require('./external_functions');
```

```javascript
// Step 2: Use the functions
greet(); // Output: Hello!

greetByName("John"); // Output: Hello, John!

const greeting1 = greetReturn("Jane");

console.log(greeting1); // Output: Hello, Jane!
```

##  GitHub Update practice :octocat: ------------------------------------------------------

Run the following commands to push updates to GitHub repo:

```
git status
```
```
git add .
```
```
git commit -m "JavaScript refresher files updates"
```
```
git push
```

Go to you GitHub repo in the browser, refresh the page and check the updates.