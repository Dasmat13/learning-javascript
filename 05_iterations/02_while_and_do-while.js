let index = 0
while (index <= 10) {
    console.log(`value of index is ${index}`); // Output: 0, 2, 4, 6, 8, 10
    index = index + 2
}
console.log("--------------------------------------------------------------------------");

let myArray = ["flash","superman","batman"]
let arr = 0
while(arr < myArray.length){
    console.log(`value is ${myArray[arr]}`); // Output: flash, superman, batman
    arr = arr + 1
}
console.log("-------------------------------------------------------------------------");

let score = 1
do {
    console.log(`score is ${score}`); // Output: 1, 2, 3...10 (do-while runs at least once)
    score++
} while (score <= 10);