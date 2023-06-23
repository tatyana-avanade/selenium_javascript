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
