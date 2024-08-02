// worker.js

// This event listener will receive messages from the main script
self.onmessage = function (event) {
    const number = event.data;
    const result = calculateSum(number);

    // Send the result back to the main thread
    self.postMessage(result);
};

// Function to calculate the sum of numbers from 1 to N
function calculateSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
