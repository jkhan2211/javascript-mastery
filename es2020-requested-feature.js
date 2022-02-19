// Optional Chaining
// const user = {
//     firstName: 'John',
//     lastName: 'Doe',
//     address: {
//         city: 'NYC',
//         street: 'Test Road',
//         house : {
//             number: 4,
//         }
//     }
// }

// console.log(user.address.house.number)

const user = {
    firstName: 'John',
    lastName: 'Doe',
    address: 'undefined'
}

user
    && user.address
        && user.address.house
            && console.log(user.address.house.number);
// Nullish coalescing
// Dynamic import()
// globalThis
// Promise combinators
// String.prototype.matchAll
// Module namespace exports
// BigInt