function countingSort(arr) {
    let max_arr = Math.max(...arr);
    let result = new Array(max_arr + 1).fill(0);
    for (let value of arr) {
        result[value] += 1;
    }
    return result;
}

const arr = [1, 1, 3, 2, 1];
console.log(countingSort(arr)); // [0, 3, 1, 1, 0]