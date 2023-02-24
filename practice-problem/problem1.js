/**
 * Map, filter, find
 */

/**
* Problem 1.a for loop
*/

function makeEven(arr) {
    const even = [];
    for ( const element of arr) {
        even.push(element + 1);
    }
    return even;
}

const arr = [1, 3, 5, 7, 9];
console.log('Even arr: ' + makeEven(arr));


/**
* Problem 1.a map()
*/

const even = arr.map(element => element + 1);
console.log('Even arr: ' + even);

/**
* Problem 2 filter()
*/

const arr2 = [33, 50, 79, 78, 90, 101, 30];

const divisibleBy10 = arr2.filter(element => element % 10 == 0);
console.log('Filter: ' + divisibleBy10);



/**
* Problem 3 find()
*/

const divisibleBy10Second = arr2.find(element => element % 10 == 0);
console.log('Find: '+ divisibleBy10Second);
