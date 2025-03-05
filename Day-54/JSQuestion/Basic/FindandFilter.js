// find is used to return first value tht match the condition


let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// short hand

// let GreaterThen4 = numbers.find(num => num > 4);

// long hand

let GreaterThen4 = numbers.find(num => {
    if (num > 4) {
        return num;
    }
})

console.log(GreaterThen4);

// filter is used to return all value tht mathc the condition

let values = [1, 2, 3, 4, 5];
let findOdd = values.filter(val => {
    if (val % 2 !== 0) {
        return val;
    }
});

console.log(findOdd);
