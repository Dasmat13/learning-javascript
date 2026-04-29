//for of

// ["","",""]
//[{},{},{}]

const arr = [1,2,3,4,5,6,7,8,9]

for (const i of arr) {
    console.log(i);
    
}
console.log("----------------------------------------------------------");
for (const key in arr ) {    
    console.log(key);
    
}
console.log("----------------------------------------------------------");

const greeting = "hello world!"
for(const greet of greeting){
    console.log(`each char ${greet}`);
    
}

console.log("----------------------------------------------------------");

//maps he Map object holds key-value pairs and remembers the original
//insertion order of the keys. Any value (both objects and primitive 
//values) may be used as either a key or a value.

//for map we used forof
const map = new Map()
map.set('IN',"India")
map.set('USA',"USA")
map.set('FR',"france")
map.set('FR',"france")

console.log(map);
console.log("----------------------------------------------------------");
for (const key of map) {
    console.log(key);
}
console.log("----------------------------------------------------------");
for (const [key, value] of map) {
    console.log(key,":-",value);
    
}
console.log("----------------------------------------------------------");

// const myObj = {
//     'game1': "NFS",
//     'game2': "spiderman"
// }
// for (const [key,value] of myObj) {
//     console.log(key,":-",value);
    
// }
//for object we used forin
const myObj = {
    js: "javascript",
    cpp: "c++",
    py: "python"
}

for (const key in myObj) {
    console.log(`${key} shortcut of ${myObj[key]}`);
    
}
console.log("---------------------------------------------------------");

//forin in array

const pro = ["java","cpp","ruby","python","js"]

for (const key in pro) {
    console.log(`${key} of ${pro[key]}`);
    
}
console.log("----------------------------------------------------------");
for (const key in map) {
    console.log(key);
    
}
console.log("----------------------------------------------------------");

