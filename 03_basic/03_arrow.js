const { use } = require("react"); 
// ❌ Runtime Error → Cannot find module 'react' (remove this line to run rest)


const user = {
    username: "dasmat",
    price: 4566,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // prints username → 'this' refers to user object

        console.log(this)
        // prints full object → { username: "...", price: ..., welcomeMessage: f }
    }
    
}

user.welcomeMessage()
// "dasmat, welcome to website"
// { username: "dasmat", price: 4566, welcomeMessage: [Function] }

user.username = "sunny"
// property updated

user.welcomeMessage()
// "sunny, welcome to website"
// { username: "sunny", price: 4566, welcomeMessage: [Function] }


console.log(this);
// {} → Node.js module global object


function one(){
    let username = "dasmat"
    console.log(this);
    // {} → normal function → global object
}
one()


function two(){
    let username = "dasmat"
    console.log(this.username);
    // undefined → global object has no 'username'
}
two()


// arrow function
const three = () => {
    let username = "dasmat"
    console.log(this);
    // {} → arrow inherits 'this' from outer scope (global)
}
three()


// arrow function
const addTwo = (num1, num2) => {   
    return num1 + num2
    // when using {} → must use 'return'
}

console.log(addTwo(4,2));
// 6 → normal addition


// implicit return
const addtwo1 = (num1, num2) => num1 + num2
// no {} → automatic return

console.log(addtwo1(3,78));
// 81 → 3 + 78


const addTwo2 = (num1, num2) => (num1 + num2)
// () used → implicit return

console.log(addTwo2(45,7));
// 52 → 45 + 7


const object = () => ({username: "dasmat"})
// () required → otherwise {} treated as function body

console.log(object());
// { username: "dasmat" } → returns object