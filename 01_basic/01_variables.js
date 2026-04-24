const accountId = 34571
let accountEmail = "dasmat@lpu.in"
var accountPassword = "12345"
accountCity = "Rourkela"
let accountState
/*
prefer not to use var
because of issue in block scope and functional scope
*/
//accountId = 2 //not allowed

accountEmail = "sunny.lpu.in"
accountPassword = "87643"
accountCity = "varanasi"

console.log(accountId);
/*
34571
*/

console.log(accountEmail);
/*
sunny.lpu.in
*/

//to print all the things in table we use console.table([])
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
/*
(index)  Values
0        34571
1        sunny.lpu.in
2        87643
3        varanasi
4        undefined
*/