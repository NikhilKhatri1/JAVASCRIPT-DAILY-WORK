const number = parseInt(prompt("Enter the Number = "));

function FindPrime(number) {
    const primes = [];
    if (number <= 1) {
        if (number === 1) {
            return `${number} is not a prime`;
        } else {
            return `no Negative number`;
        }
    }

    for (let i = 2; i <= number; i++) {
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(i);
        }
    }

    console.log(`Prime numbers in range ${number} are ${primes}`)
}

FindPrime(number);