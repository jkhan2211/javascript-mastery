// Optional Chaining
const user = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        city: 'NYC',
        street: 'Test Road',
        house : {
            number: 4,
        }
    }
}

// console.log(user.address.house.number)

const user = {
    firstName: 'John',
    lastName: 'Doe',
    address: 'undefined'
}

const searchedProperty = 'number';
console.log(use?.address?.house?.[searchedProperty])



// Optional CHAINING
// ?. null or undefined => undefined 
// Nullish coalescing
// Dynamic import()
// globalThis
// Promise combinators
// String.prototype.matchAll
// Module namespace exports
// BigInt