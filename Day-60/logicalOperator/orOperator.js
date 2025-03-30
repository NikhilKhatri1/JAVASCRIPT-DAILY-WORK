// Or Operator


let a = true;
let b = false;

console.log(a || b);   // true

let c = false;
function greet(name) {
    return name;
}

console.log(c || greet("alice"));


// map method

const persons = [
    {
        name: "person1",
        age: 20
    },
    {
        name: "person2",
        age: 30
    },
    {
        name: "person3",
        age: 40
    }
]

let personName = persons.map(person => {
    return person.name
})

console.log(personName);

// find method

let findPersonAge30 = persons.find(person => person.age === 30);
console.log(findPersonAge30);

// filter method

let filterPersonAge30 = persons.filter(person => person.age >= 30);
console.log(filterPersonAge30);
