// Or Operator


let a = true;
let b = false;

console.log(a || b);   // true

let c = false;
function greet(name) {
    return name;
}

console.log(c || greet("alice"));