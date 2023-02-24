/**
 * 32-4 Map string array, array of objects map, foreach
 * Array.forEach() also works same as map() just map() returns a new array
 * Where as forEach() return nothing
 */

const arr1 = [10, 20, 30, 40];
const arr2 = ['Shakib', 'Tamim', 'Mash', 'Mushi', 'Mahmudullah'];
const arr3 = [
    {id: 1, price: 5000, brand: 'apple'},
    {id: 2, price: 7000, brand: 'oppo'},
    {id: 3, price: 2000, brand: 'samsung'},
    {id: 4, price: 6000, brand: 'apple'},
];


arr1.forEach(elemenet => console.log(elemenet));
arr2.forEach(elemenet => console.log(elemenet));
arr3.forEach(elemenet => console.log(elemenet.brand));
