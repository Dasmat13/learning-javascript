const myNumbers = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNumbers.map( (num) => num + 10 )
console.log(newNums); // Output: [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]

const fornums = []
myNumbers.forEach( (num) => {
    fornums.push(num + 10)
})
console.log(fornums); // Output: [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]

//chaining 

const chainNums = myNumbers
                .map((num) => num * 10) // 10, 20, 30...
                .map( (num) => num + 1) // 11, 21, 31...
                .filter((num) => num >= 40 ) // 41, 51, 61...

console.log(chainNums); // Output: [ 41, 51, 61, 71, 81, 91, 101 ]
