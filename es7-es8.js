//String.prototype.padStart/PadEnd

const string = '12345';

console.log(string.padStart(10, '.....'));
console.log(string.padEnd(10, '......'));

// Object.values

const object = {
    name: "John",
    age: 20,
    favouriteBooks : [ "Harry Potter 1, Harry Potter 2"],
}

console.log(Object.values(object));
// Object.entries

console.log(Object.entries(object))
// Exponentiation
Math.pow(2, 3);
console.log(2 ** 3);

// Trailing Commas
const anotherObject = {
    first: 1,
    second: 2, 
    third: 3,
}

const array = [1, 2, 3, ,];