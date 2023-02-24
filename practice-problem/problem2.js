/**
 * Problem 2.a for loop()
 */
function sum(arr) {
    let sum = 0;
    for (const element of arr) {
        sum += element;
    }
    return sum;
}

const arr1 = [1, 9, 17, 12];
console.log('Sum of arr by using for loop: ' + sum(arr1));

/**
 * Problem 2.a reduce()
 */

const sumAll = arr1.reduce((prev, curr) => prev + curr, 0);
console.log('Sum of arr by using reduce(): ' + sumAll);


/**
 * Problem 2.b reduce()
 */

const arr2 = [
    {id: 1, age: 20},
    {id: 2, age: 15},
    {id: 3, age: 22},
];

const sumAll2 = arr2.reduce((prev, curr) => prev + curr.age, 0 );
console.log(sumAll2);