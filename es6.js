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

// array destruction

//object destruction

//rest operator

// spread operator 