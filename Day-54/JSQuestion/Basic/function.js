// way to define function

// function declaration

function GreetOne(name) {
    console.log(`Hello, ${name}`);
}

GreetOne("John");
// function Expression

var GreetTwo = function (name) {
    console.log(`Hello, Good Morning ${name}`);
}

GreetTwo('alice');

// Arrow function 
let GreetThree = (name) => {
    console.log(`Hello Good Morning, ${name}`);
}

GreetThree('bob');






/// ----------------- High Order Function -------------------///


function operator(x, y, operation) {
    return operation(x, y);
}

let add = (a, b) => {
    return a + b;
}

let subtract = (a, b) => Math.abs(a - b);


let result = operator(5, 3, subtract);
console.log(result);
