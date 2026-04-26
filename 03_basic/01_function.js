//function

function sayMyName() {
    console.log("d"); // prints d → function not called yet
    console.log("a"); // prints a
    console.log("s"); // prints s
    console.log("m"); // prints m
    console.log("a"); // prints a
    console.log("t"); // prints t
}

//sayMyName() → not called, so no output


function addTwoNumbers(num1, num2) {
   let result = num1 + num2
   return result // returns sum (or concatenation)
}

addTwoNumbers("das", 2) // "das2" → string + number = string concat (not printed)
addTwoNumbers(2,4) // 6 → not printed
addTwoNumbers(3.45,2) // 5.45 → not printed
addTwoNumbers(5,null); // 5 → null treated as 0
addTwoNumbers(3.4567,"werf"); // "3.4567werf" → string concat

const result = addTwoNumbers(2,7)
console.log("result:", result); // result: 9 → 2+7


function loginUserMessage(username) {
    if(username === undefined){
        console.log("please enter username"); // runs when no argument passed
        return
    }
    return `${username} just logged in `
}

console.log(loginUserMessage("Damsat")); // Damsat just logged in  → normal string

console.log(loginUserMessage("")); //  just logged in  → empty string is still valid (not undefined)

console.log(loginUserMessage()); 
// please enter username → printed from inside function
// undefined → because function returns nothing


function login(username = "das"){
    return `${username} is logedin in your account`
}

console.log(login("dasmat")); // dasmat is logedin in your account

console.log(login()); // das is logedin in your account → default value used


function login1(username){
    if(!username){
        console.log("enter username"); // runs for "", undefined, null, 0
        return
    }
    return `${username} has logedin the system`
}

console.log(login1("manish")); // manish has logedin the system


function calculatecartprice(...num1) {
    return num1 // returns array of all values
}
console.log(calculatecartprice(200,400,500,600)); 
// [200, 400, 500, 600] → rest operator collects all values


function calculatecartprice1(val1,val2, ...num1) {
    return num1 // first 2 values go to val1,val2, rest in num1
}
console.log(calculatecartprice1(200,400,500,600)); 
// [500, 600] → remaining values only


const user  = {
    username: "dasmat",
    price: 500
}

function handleObject(anyobject) {
    console.log(`user is ${anyobject.username} and the total is ${anyobject.price}`);
}

//handleObject(user)

handleObject({
    username: "subham",
    price: 400
}) 
// user is subham and the total is 400 → object passed directly


const myNewArray = [200,400,600,100]

function returnSecondValue(getarray) {
    return getarray[1] // returns element at index 1
}

console.log(returnSecondValue(myNewArray)); 
// 400 → second element

console.log(returnSecondValue([499,32,24554,222]));
// 32 → index 1 of new array