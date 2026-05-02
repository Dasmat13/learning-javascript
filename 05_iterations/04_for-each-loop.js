//foreach loop


const coding = ["java","python","ruby","cpp","javascript","kotlin","Go"]

coding.forEach( function (item) {
    console.log(item); // Output: java, python, ruby...
} )

console.log("---------------------------------------------------------");
//arrow function
coding.forEach( (item) => {
    console.log(item); // Output: java, python, ruby...
})

console.log("----------------------------------------------------------");

function PrintMe(item){
    console.log(item); // Output: java, python, ruby...
}

coding.forEach(PrintMe) // Passed as reference, not executed like PrintMe()

console.log("----------------------------------------------------------");

coding.forEach( (item,index,arr) => {
    console.log(item,index,arr); // Output: java 0 [ 'java', 'python', ... ], etc.
} )

console.log("----------------------------------------------------------");

const myCoding = [
    {
        languageName: "javascript",
        languageFile: ".js"      
    },
    {
        languageName: "python",
        languageFile: ".py"
    },
    {
        languageName: "cpp",
        languageFile: "c++"

    }
]

myCoding.forEach( (value,index,array) => {
    console.log(value.languageFile,index,array); // Output: .js 0 [ { languageName: 'javascript', languageFile: '.js' }, ... ], etc.
})