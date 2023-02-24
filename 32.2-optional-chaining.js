/**  
 * 32-2 Access Value, nested object Optional chaining
*/

const users = [
    {id: 1, name: 'Shakib', age: 35},
    {id: 2, name: 'Mash', age: 42},
];

// console.log(users);
// console.log(users[0]);
// console.log(users[0].name);

const data = {
    count: 5000,
    data: [
        {id: 1, name: 'Shakib', age: 35},
        {id: 2, name: 'Mash', age: 42}, 
    ]
}

// console.log(data);
// console.log(data.data);
// console.log(data.data[1]);
// console.log(data.data[1].name);

const person = {
    name: {
        firstname: 'Tamim',
        lastname: 'Ikbal'
    },
    address: {
        postcode: '3210',
        city: 'Dhaka',
        country: 'BD'
    },
    profession: {
        goodAt: {
            batting : {
                onSide: '100%',
                ofSide: '100%',
            },
            bowling: 'Not Good'
        }
    }
}

// console.log(person);
// console.log(person.profession);
// console.log(person.profession.goodAt);
// console.log(person.profession.goodAt.batting);
console.log(person.profession.goodAt.battin?.onSide);


/**
 * This error will occur: TypeError: Cannot read properties of undefined (reading 'onSide')
 * Cause 'battin' is undefined. To stop nested chaing we can do optional chaining
 * console.log(person.profession.goodAt.battin?.onSide); [It means it will stop on '?' if it will find undefined]
 * Thats call optional chaining
 */

// [Uncomment below line]
// console.log(person.profession.goodAt.battin?.onSide);
// Output: undefined