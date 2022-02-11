// Javascript Mastery = JS ES6 For beginner

// const and let
// let - changing

let age = 20 // can be reassign
const name = "Junaid"

console.log(age);

age = age + 1;

console.log(age)

// arrow function
// implicit return

const add = (a, b) => {
    console.log(a + b);


}
add(2, 2);

const array = [ 1, 2, 3 ];

array.map(n => console.log(n));

// template string
const greeting = (name) => {
    const string = 'Hello, ' + name + "!";
    const templateString = `Hello, ${name}!`;
    const templateString_2 = `Hello, ${name}!`;

    console.log(templateString);
    console.log(templateString_2)

}

greeting('John');


// default parameters

const add = ( a = 2, b= 2) => console.log(a + b);

// array destruction

const array_1 = [ 1, 2, 3, 4];

const first = array_1[0];
const third = array_1[2];

const [ first, second, third] = array_2;
console.log(first, second, third);
console.log(first, third);

//object destruction
const object = {
    channelName: "Junaid Use Case",
    views: 1500,

}
const channelName = object.channelName;
const views = object.views
console.log(channelName, views)

const { channelName, views } = object;
//rest operator
const add = (...numbers) => console.log([a, b, c].reduce((a, b) => a + b, 0));

add(1, 2, 3, 4, 5, 6, 7)


// spread operator
const array = [1, 2, 3];

console.log(array[0], array[1], array[2]);
console.log(...array);



