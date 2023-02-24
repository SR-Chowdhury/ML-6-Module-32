/**
 * 32-6 (optional) Explore Reduce and Dot notation
 */

/**
 * Array.reduce()
 * The reduce() method executes a reducer function for array element.
 * The reduce() method returns a single value: the function's accumulated result.
 * The reduce() method does not execute the function for empty array elements.
 * The reduce() method does not change the original array.
 */

const arr1 = [10, 50, 20, 60, 30, 40];

// Method 1
const reduce1 = arr1.reduce( (prev, curr) => prev + curr, 0);

// Method 2
const reduce2 = arr1.reduce((prev, curr) => {
    console.log(prev, curr);
    return prev + curr;
}, 0);

// console.log(reduce1);
console.log(reduce2);

/**
 * Dot Notaion & Bracket Notation
 */

const student1 = {
    id: 1,
    name: {
        fname: 'Shihan',
        lName: 'Chowdhury'
    }
}
// Dot notation method
const x1 = student1.name.fname;

// Bracket Notation
const x2 = student1['name']['lName'];
console.log(x1);
console.log(x2);

/**
 * Difference Between Dot Notaion & Bracket Notaiton
 * 1. Dot notation is faster to write and easier to read than bracket notation.
 * 2. However, you can use variables with bracket notation, but not with dot notation.
 * 3. Bracket notation allows you to access properties with special characters in their names, 
 *    while you can not do this with dot notation.
 */