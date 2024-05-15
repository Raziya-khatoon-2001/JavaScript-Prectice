// primitive

// 7 types: String, Number, Boolean, null, Undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

console.log(score === scoreValue);

const isLoggeIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

//const bigNumber = 123474983387879n;


// Reference (Non primitive)

// Array, Object, Function

const heros = ["shaktiman", "naagraj", "doga"];

let myObj ={
    name: "Raziya",
    age: 21,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);
