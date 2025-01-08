// example of NAN

const a = 'abc1';
console.log(Number(a));


console.log(NaN + 5);

console.log(NaN == NaN); // false

console.log(NaN === NaN);   // false


// map and forEach

const arr = [1, 2, 3, 4];
const mapMethod = arr.map((val) => val * 2);
console.log(arr);
console.log(mapMethod);

// chaining with other method

const mapChaining = arr.map((val) => val * 2).filter(val => val > 4);

console.log(mapChaining);


const arr1 = [1, 2, 3, 4];
const forEachMethod = arr1.forEach((val, index) => {
    arr1[index] = val * 2;
});
console.log(arr1);
console.log(forEachMethod);


//const

const BooleanResult = arr.map((val) => {
    return val > 2;
})

console.log(BooleanResult);
