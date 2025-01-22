// O(n^2) Notation

function findPairs(arr) {
    // O(n^2)

    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length; j++) {
            console.log(`Pairs: ${arr[i]} ${arr[j]}`);
        }
    }

    for (q = 0; q < arr.length; q++) {
        console.log(`------- ${arr[q]}`)
    }
}


const arr = [1, 2, 3, 4, 5];
findPairs(arr)