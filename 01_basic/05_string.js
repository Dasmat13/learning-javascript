const name = "dasmat"
const repoCount = 50

//console.log(name + repoCount + " value");
console.log(`hello my name is ${name} and my repocount is ${repoCount}`);

//another way of declaring string 

const gameName = new String('dasmat-dh-com')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4);
console.log(newString)

const anotherString = gameName.slice(-8,9)
console.log(anotherString);

const newStringone = "    dasmat    "
console.log(newStringone);
console.log(newStringone.trim());

const url = "https://dasmat.com-dasmat%20hansda"
console.log(url.replace('%20','-'))
console.log(url.includes('dasmat'))

console.log(gameName.split('-'))
 

//explore more 