/**
 * 32-3 Array map to do one line loop magic
 * What is array map: The map() method creates a new array populated with the results of calling a provided function
 * on every element in the calling array.
 */

// Old (ES5) System

function oldES5 (arr) {
    const sum = [];

    for (const element of arr) {
        sum.push(element * 2);
    }
    return sum;
}
const arr = [2, 4, 6];
console.log(oldES5(arr));

// New (ES6) system

const newES6 = num => {
    const sum = [];

    for (const element of arr) {
        sum.push(double(element));
    }
    return sum;
}

const double = (num) => num * 2;

const arr1 = [2, 4, 6];
console.log(newES6(arr1));

// New ES6 + Map
const mapMethod = arr1.map(double);
console.log(mapMethod);

// Or 
const mapMethodDirect = arr1.map(num => num * 2);
console.log(mapMethodDirect);