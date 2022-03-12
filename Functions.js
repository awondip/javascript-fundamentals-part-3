
//Another essential concept in coding is functions, 
// which allow you to store a piece of code that does a single task inside a defined block,
//  and then call that code whenever you need it using a single short command 
//  — rather than having to type out the same code multiple times. 

//Invoking functions

//This is done by including the name of the function in the code somewhere, followed by parentheses.

function myFunction() {
    alert('hello');
  }
  
  myFunction();
  // calls the function once

  //Anonymous functions


//   Anonymous Function is a function that does not have any name associated with it. 
//   Normally we use the function keyword before the function name to define a function in JavaScript,
//    however, in anonymous functions in JavaScript, we use only the function keyword without the function name.
  
function() {
    alert('hello');
  }
  

//   Function scope

//   A function in JavaScript defines a scope for variables declared using var, let and const.
  
//   Let's declare a var variable within a function body:
  

function run() {
  // "run" function scope
  var message = 'Run, Forrest, Run!';
  console.log(message); // 'Run, Forrest, Run!'s
}
run();
console.log(message); // throws ReferenceError
//run() function //body creates a scope.
 //The variable message is accessible inside of the function scope, but inaccessible outside.


 //Same way, a function body creates a scope for let, const and even function declarations.

function run() {
  // "run" function scope
  const two = 2;
  let count = 0;
  function run2() {}
  console.log(two);   // 2
  console.log(count); // 0
  console.log(run2);  // function
}
run();
console.log(two);   // throws ReferenceError
console.log(count); // throws ReferenceError
console.log(run2);  // throws ReferenceError

//What are return values?

//Return values are just what they sound like — the values that a function returns when it has completed
//An important thing to remember is that return, upon being called, also ends the function block it is called in. 
//Another thing worth remembering is that returncan only be used inside a function.

//example
function myFunction(number1, number2) {
    return number1 + number2;
    console.log("I am never executed"); // unreachable code
}

//To return multiple values from a function you can use curly braces to store the returned values inside an object:
function myFunction(number1, number2) {
    return {
        number1,
        number2,
        result: number1 + number2
    }    
}


//This creates a function func that accepts arguments arg1..argN, then evaluates the expression on the right side with their use and returns its result.

let func = function(arg1, arg2, ... argN) {
    return expression;
  };


  //example

  let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Hello') :
  () => alert("Greetings!");

welcome();
