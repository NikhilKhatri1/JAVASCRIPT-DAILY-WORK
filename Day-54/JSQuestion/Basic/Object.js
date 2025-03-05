// how to create Object

let myObj = {
    name: "Anil",
    class: "12th",
    subject: ["Math", "English", "Physics", "Chemistry"],
    greet: function () {
        console.log(`Hello, ${this.name}`);
    }
}

myObj.greet();

function ListOfSubject() {
    let count = 0;
    let sub = myObj.subject;
    sub.map(s => {
        console.log(`Subject = ${s} and count = ${count}`);
        count++;
    })

}

ListOfSubject();


// ==== add properties in object ===== //

let myObj1 = {
    name: 'bob',
    age: 22
}

console.log(myObj1)

myObj1.hobby = "Cricket"

console.log(myObj1)

// iterate object using Object.entries
Object.entries(myObj1).map(prop => console.log(prop))



// this //

let person1 = {
    name: "James",
    greet() {
        console.log(`Hello, ${this.name}`);
    }
}

person1.greet(); // Hello, James

let person = {
    name: "Ron",
    greet: () => {
        console.log(`Hello, ${this.name}`)
    }

}

person.greet();   // Hello, undefined


// === splice === ///


let val = ["a", "b", "c"];

val.splice(3, 0, "d");

console.log(val);