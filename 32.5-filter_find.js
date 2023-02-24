/**
 * 32-5 Implement filter, find on an array of objects
 */

// Array.filter()
// Definition: The filter() method creates a new array filled with elements that pass a test provided by a function
// The filter() method does not change the original array.

const arr1 = [10, 50, 20, 60, 30, 40];
const arr2 = ['Shakib', 'Tamim', 'Mash', 'Mushi', 'Mahmudullah'];
const arr3 = [
    {id: 1, price: 5000, brand: 'apple'},
    {id: 2, price: 7000, brand: 'oppo'},
    {id: 3, price: 2000, brand: 'samsung'},
    {id: 4, price: 6000, brand: 'apple'},
];

const filter1 = arr1.filter(element => element > 25);
console.log(filter1);

const filter2 = arr2.filter(element => element[0] == 'M');
console.log(filter2);

const filter3 = arr3.filter(element => element.price <= 5000);
console.log(filter3);

/**
 * Find
 * The find() method returns the value of the first element that passes a test.
 * The find() method executes a function for each array element.
 * The find() method returns undefined if no elements are found.
 */

const filter4 = arr3.find(element => element.price <=5000);
console.log(filter4);