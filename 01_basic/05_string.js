const name = "dasmat"
const repoCount = 50

console.log(`hello my name is ${name} and my repocount is ${repoCount}`); // hello my name is dasmat and my repocount is 50

//another way of declaring string 

const gameName = new String('dasmat-dh-com')

console.log(gameName[0]); // d
console.log(gameName.__proto__); // {}
console.log(gameName.length); // 13
console.log(gameName.toUpperCase()); // DASMAT-DH-COM
console.log(gameName.charAt(3)); // m
console.log(gameName.indexOf('t')); // 5

const newString = gameName.substring(0,4);
console.log(newString) // dasm

const anotherString = gameName.slice(-8,9)
console.log(anotherString); // t-dh

const newStringone = "    dasmat    "
console.log(newStringone); //     dasmat    
console.log(newStringone.trim()); // dasmat

const url = "https://dasmat.com-dasmat%20hansda"
console.log(url.replace('%20','-')) // https://dasmat.com-dasmat-hansda
console.log(url.includes('dasmat')) // true

console.log(gameName.split('-')) // [ 'dasmat', 'dh', 'com' ]