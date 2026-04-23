// // primitive
// /* 
// 7 types : string, number, boolean, null, undefined, symbol, BigInt
// */
// const score= 300
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemo = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol("123")

// console.log(id === anotherId)

// const bigNumber = 2356543234565n



// //refrence(non primitive)
// /*
// array, objects, function
// */


// const heroes = ["spide",'hulk','thor']
// {
//     name1: "dasmat"
//     age: 22
// }
// let myObj = {
//     name1: "dasmat"
//     age: 22
// }


// const myFunction = function (){
//     console.log("hello Dasmat")
// }

//  ``

//======================================================================

//stack(primitive)idhar copy milta hai , heap (non-primitive) idhar refrence milta hai

let myyoutubename = "dasmathansda"
let anothername = myyoutubename


anothername = "chaiwithcode"
console.log(anothername)
console.log(myyoutubename)

let userone = {
    email: "user@google.com",
    upi: "user@ybl"
}

let usertwo = userone

usertwo.email = "yoyyo@gmsail.com"

console.log(userone.email)
console.log(usertwo.email)