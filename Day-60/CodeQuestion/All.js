Here are 20 JavaScript coding questions, ranging from beginner to intermediate levels:
1. Reverse a String

Write a function that takes a string as input and returns it reversed.

function reverseString(str) {
    return str.split('').reverse().join('');
}

2. Factorial

Write a function that returns the factorial of a number.

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

3. Check if a Number is Prime

Write a function that checks whether a number is prime.

function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

4. Sum of Digits

Write a function that takes an integer and returns the sum of its digits.

function sumOfDigits(num) {
    return num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
}

5. Fibonacci Sequence

Write a function that returns the n - th Fibonacci number.

function fibonacci(n) {
    if (n <= 1) return n;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}

6. Palindrome Check

Write a function to check if a string is a palindrome.

function isPalindrome(str) {
    const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return normalized === normalized.split('').reverse().join('');
}

7. Find the Largest Number in an Array

Write a function to find the largest number in an array.

function findLargest(arr) {
    return Math.max(...arr);
}

8. Find the Missing Number

Given an array containing n distinct numbers taken from 1 to n + 1, find the missing number.

function findMissingNumber(arr) {
    const n = arr.length + 1;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}

9. Remove Duplicates from an Array

Write a function that removes duplicate values from an array.

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

10. Check if a String is an Anagram

Write a function that checks if two strings are anagrams.

function areAnagrams(str1, str2) {
    return str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('');
}

11. Flatten an Array

Write a function that flattens a nested array into a single array.

function flattenArray(arr) {
    return arr.reduce((flat, item) => flat.concat(Array.isArray(item) ? flattenArray(item) : item), []);
}

12. Count Vowels in a String

Write a function that counts the number of vowels in a string.

function countVowels(str) {
    return str.match(/[aeiouAEIOU]/g)?.length || 0;
}

13. Convert a String to a Number

Write a function that converts a string to a number.

function stringToNumber(str) {
    return Number(str);
}

14. Check if a Number is Even or Odd

Write a function that returns whether a number is even or odd.

function isEvenOrOdd(num) {
    return num % 2 === 0 ? 'Even' : 'Odd';
}

15. Find the Most Frequent Element

Write a function that returns the most frequent element in an array.

function mostFrequent(arr) {
    const count = {};
    let maxCount = 0;
    let mostFrequentElem = null;

    arr.forEach(num => {
        count[num] = (count[num] || 0) + 1;
        if (count[num] > maxCount) {
            maxCount = count[num];
            mostFrequentElem = num;
        }
    });

    return mostFrequentElem;
}

16. Convert Celsius to Fahrenheit

Write a function that converts Celsius to Fahrenheit.

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

17. Debounce Function

Write a debounce function that delays the execution of a function until after a specified amount of time.

function debounce(func, delay) {
    let timeout;
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(func, delay);
    };
}

18. Throttle Function

Write a throttle function that ensures a function is called at most once every specified number of milliseconds.

function throttle(func, delay) {
    let lastTime = 0;
    return function () {
        const now = Date.now();
        if (now - lastTime >= delay) {
            func();
            lastTime = now;
        }
    };
}

19. Find the Index of the First Occurrence

Write a function that returns the index of the first occurrence of a value in an array.

function indexOfFirstOccurrence(arr, value) {
    return arr.indexOf(value);
}

20. Find the Average of an Array

Write a function that calculates the average of an array of numbers.

function average(arr) {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
}

Feel free to ask if you'd like to explore solutions or explanations for any of these in more detail!