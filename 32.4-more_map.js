/**
 * 32-4 Map string array, array of objects map, foreach
 */

const arr1 = [10, 20, 30, 40];
const arr2 = ['Shakib', 'Tamim', 'Mash', 'Mushi', 'Mahmudullah'];
const arr3 = [
    {id: 1, price: 5000, brand: 'apple'},
    {id: 2, price: 7000, brand: 'oppo'},
    {id: 3, price: 2000, brand: 'samsung'},
    {id: 4, price: 6000, brand: 'apple'},
];

const map1 = arr1.map(element => element / 2);
console.log(`map1:  ${map1}`);

const map2 = arr2.map(element => element.length);
console.log(`map2: ${map2}`);

const map3 = arr3.map(element => element.price);
console.log(`map3: ${map3}`);