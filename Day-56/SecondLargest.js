function SecondLargest(arr) {
    let largest = null;
    let second = null;

    // Find largest and second largest values
    for (let val of arr) {
        if (largest === null || val > largest) {
            second = largest;
            largest = val;
        } else if (second === null || val > second) {
            second = val;
        }
    }

    // Remove the largest value from the array
    // same largest number also
    arr = arr.filter(val => val !== largest);
    
    console.log("Largest value in array = ", largest);
    console.log("Second largest value in array = ", second);
    console.log("Array after removing largest value = ", arr);
}

const arr = [23, 0, 3, 19];
SecondLargest(arr);
