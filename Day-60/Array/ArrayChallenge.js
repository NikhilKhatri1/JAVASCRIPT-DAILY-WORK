function ArrayChallenge(arr) {
    for (let i = 0; i < arr.length - 2; i++) {
        if (arr[i] > arr[i + 1]) {
            return arr[i + 2];
        }
    }
    return -1;
}

console.log(ArrayChallenge([1, 2, 4, 6, 4, 3, 1]));
