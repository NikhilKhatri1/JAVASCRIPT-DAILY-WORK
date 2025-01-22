// O(1) constant notation

// regardless of the size of data it will access the specfic data of diclared location

// It will always takes same time

const numbers = [1, 2, 3, 4, 5];
const getNumber = (arr, index) => console.log(`${arr} Number is ${arr[index]}`);

getNumber(numbers, 2);  // 3