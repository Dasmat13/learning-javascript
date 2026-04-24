const myArr = [0,1,2,3,4,5,6]
//javascript array are resizable

console.log(myArr[3])
/*
3
*/

//in javascript array copy operations create shallow copies
/*
shallow copies of an object whose properties share the same 
refrence {point to the same underlying values} as those

deep copy of an object is a copy whose properties do not share the 
same refrences as those of the source object from which the copy made 
*/

const myHeroes = ["spiderman", "ironman"]
const myArr2 = new Array(1,2,3,45,6)

//array methods 

myArr.push(7)
myArr.pop()
console.log(myArr)
/*
[
  0, 1, 2, 3,
  4, 5, 6
]
*/

myArr.unshift(7)
console.log(myArr)
/*
[
  7, 0, 1, 2,
  3, 4, 5, 6
]
*/

myArr.shift()
console.log(myArr)
/*
[
  0, 1, 2, 3,
  4, 5, 6
]
*/

console.log(myArr.includes(9))
/*
false
*/

console.log(myArr.indexOf(9))
/*
-1
*/

console.log(myArr.indexOf(3))
/*
3
*/


const newArr = myArr.join()
console.log(myArr)
/*
[
  0, 1, 2, 3,
  4, 5, 6
]
*/

console.log(newArr)
/*
0,1,2,3,4,5,6
*/

console.log(typeof newArr)
/*
string
*/


//slice , splice

console.log("A", myArr)
/*
A [ 0, 1, 2, 3, 4, 5, 6 ]
*/

const myn1 = myArr.slice(1,3)

console.log(myn1)
/*
[ 1, 2 ]
*/

console.log("B", myArr)
/*
B [ 0, 1, 2, 3, 4, 5, 6 ]
*/

const myn2 = myArr.splice(1,3)

console.log("C", myArr)
/*
C [ 0, 4, 5, 6 ]
*/

console.log(myn2)
/*
[ 1, 2, 3 ]
*/