function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error('Cannot divide by Zero');
        }
        let result = a / b;
        console.log('Result ', result)
    } catch (error) {
        console.log('Error ', error.message);
    } finally {
        console.log("Operation End");
    }
}


divide(10, 2);
console.log("-------------");
divide(20, 0);