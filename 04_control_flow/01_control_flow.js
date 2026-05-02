const month = 2

switch (month){
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb"); 
        // matched case → month = 2
        break;
    default:
        console.log("default case");
        break;
}
// Output: feb


const userEmail = []

if(userEmail){
    console.log("yes");
    // [] is truthy → runs if block
}
else{
    console.log("no");
}
// Output: yes


const username = ""

if(username){
    console.log("yes");
}
else{
    console.log("no");  
    // "" is falsy → else block runs
}
// Output: no


// falsy values:
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values:
// "0", "false", " ", [], {}, function(){}


if(userEmail.length === 0){
    console.log("array is empty");
    // empty array → length = 0
}
// Output: array is empty


const emptyobj = {}

if(Object.keys(emptyobj).length === 0){
    console.log("object is empty");   
    // no keys → empty object
}
// Output: object is empty


// Nullish coalescing operator (??)
// works only for null and undefined

let val1 = 5 ?? 10
// 5 is NOT null/undefined → returns 5

let val2 = null ?? 20
// null → fallback → 20

let val3 = undefined ?? 30
// undefined → fallback → 30

console.log(val1);
// 5

console.log(val2);
// 20

console.log(val3);
// 30


// ternary operator

const car = 100

car >= 80 
    ? console.log("less than 80") 
    : console.log("more than 80");
// condition true (100 >= 80)
// Output: less than 80 (⚠️ message is logically wrong but code works)