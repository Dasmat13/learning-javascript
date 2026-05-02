for (let index = 0; index < 10; index++) {
    const element = index;
    if(element == 5){
        console.log("5 is the best number"); // Output: 5 is the best number
    }
    console.log(element); // Output: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
} 
console.log("--------------------------------------------------------------------------");


for (let i = 0; i <= 10 ;i++) {
    // console.log(`outer loop value ${i}`);
    for (let j = 1; j < 10; j++) {
        // console.log(i + '*' + j + '=' + i*j); // Generates tables from 0 to 10
    }
}
console.log("--------------------------------------------------------------------------");

let myArray  = ["flash","batman","superman"]
console.log(myArray.length); // Output: 3

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element); // Output: flash, batman, superman
}
console.log("--------------------------------------------------------------------------");

//break and continue

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`detected 5`); // Output: detected 5
        break // Stops the loop entirely
    }
    console.log(`value of i is ${index}`); // Output: 1, 2, 3, 4
}
console.log("------------------------------------------------------------------------------");

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`detected 5`); // Output: detected 5
       continue // Skips current iteration, continues with next
    }
    console.log(`value of i is ${index}`); // Output: 1, 2, 3, 4, 6...20
}
