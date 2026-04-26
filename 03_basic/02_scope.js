/**
 * if(true){
    let a = 10 
    const b = 20   // block scope (not global)
    var c = 30
}

console.log(a); 
// ❌ ReferenceError → 'a' is block scoped (let), not accessible outside

console.log(b); 
// ❌ ReferenceError → 'b' is block scoped (const), not accessible outside

console.log(c); 
// 30 → var is function scoped, so accessible outside block
 */


/** 
 let a = 300

if(true){
    let a = 30
    const b = 20
    console.log("INNER: ", a); // INNER: 30 → inner 'a' shadows outer 'a' (block scope)
}

console.log("OUTSIDE: ", a); // OUTSIDE: 300 → outer 'a' remains unchanged(global scope)
 */

//nested scope
/*
function one() {
    const username = "dasmat"

    function two(){
        const website = "instagram"
        console.log(username); // dasmat → inner function can access outer variable (closure)
    }

    console.log(website); 
    // ❌ ReferenceError → 'website' is defined inside two(), not accessible here

    two()
}

one()

*/

/*

if(true){
    const username = "dasmat"

    if(username === "dasmat"){
        const website = "instagram"
        console.log(username + " " +  website); 
        // dasmat instagram → both variables accessible inside this block
    }

   console.log(website); 
   // ❌ ReferenceError → 'website' is block scoped (inside inner if), not accessible here
}

console.log(username); 
// ❌ ReferenceError → 'username' is block scoped (inside outer if), not accessible here

*/
//+++++++++++++++++++++intresting+++++++++++++++++++++++++++++

/*
function addone(num) {
    return num + 1
}

console.log(addone(5)); // 6 → 5 + 1 = 6


const addtwo = function(num){
    return num + 2
}

console.log(addtwo(45)); // 47 → 45 + 2 = 47



--------------------------------------------------------------------------
console.log(addone(8)); 
// 9 → function declaration is hoisted (fully available before definition)

function addone(num) {
    return num + 1
}

console.log(addtwo(6)); 
// ❌ ReferenceError → cannot access 'addtwo' before initialization (TDZ for const)

const addtwo = function(num){
    return num + 2
}

🔥 What’s happening behind the scenes
✅ addone
Function declaration → fully hoisted
JS already knows the function before execution
👉 So it works ✔️
❌ addtwo
Stored in const
const is hoisted but stays in TDZ (Temporal Dead Zone)
👉 Cannot use before initialization

*/


