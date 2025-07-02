// # Primitive

// 7 types : String, Number, Boolean, null, undefinedd, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber =  2496566565991592454854n



//Reference (Non Primitive)

//Array, Objects, Functions


const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "renish",
    age: 20,
}

const myFunction = function(){
    console.log("Hello World!");
    
}

console.log(typeof heros);

//++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "renishpatel"

let anothername = myYoutubename
anothername = "chai"

console.log(myYoutubename);
console.log(anothername);

let userOne ={
    email:"renish@gmail.com",
    upi:"renish@ybl"
}

let userTwo = userOne

userTwo.email = "rmi@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
