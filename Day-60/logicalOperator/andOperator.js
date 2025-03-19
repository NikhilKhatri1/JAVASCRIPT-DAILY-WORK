//and operator

let a = true;
let b = true;

console.log(a && b);   // true

let c = false;
console.log(c && b);  // false


function greet(name) {
    return `Hello ${name}`;
}


console.log(c && greet("john"))  // false

console.log(a && greet("alice"));  // alice

// Note: If first operand is false it will not check next operand 
































