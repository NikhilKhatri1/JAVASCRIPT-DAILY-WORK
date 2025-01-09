// Primitive and non-primitive

let a = 10;
let b = a;
a = 20;
console.log(b);


let x = [1, 2, 3];
let y = x;

x[2] = 4;
console.log(x);
console.log(y);

function parent() {
    let a = 10;
    function child() {
        let b = 20;
        console.log('a = ', a);
        console.log('b = ', b);
    }
    child();
}

parent();


// shallow copy and deep copy

let shallowArray = [1, 2, { name: 'Alice' }]

let shallowCopy = [...shallowArray];

shallowCopy[2].name = 'Bob';

console.log(shallowCopy);
console.log(shallowArray);


let deepArray = [1, 2, { name: 'Alice' }]
let deepCopy = JSON.parse(JSON.stringify(deepArray))

deepCopy[2].name = 'John';

console.log(deepCopy);
console.log(deepCopy);


// Currying in javascript

function first(a) {
    return function second(b) {
        return a * b;
    }
}


const result = first(3)(2);
console.log(result);



