// function statement
function greet(name) {
    console.log('Hello '+ name);
}

greet('John');

// using a funciton expression
var greetFunc = function(name) {
    console.log('hello ' + name);
}

greetFunc('John')

// using an Immediately Invoked Function Expression (IIFE)
var greeting = function(name) {
    return 'hello ' + name;
}('John');

console.log(greeting)

var firstname = 'John';

(function(name) {
    var greeting = 'Inside IIFE: Hello';
    console.log(greeting + ' ' + name);
}(firstname));
