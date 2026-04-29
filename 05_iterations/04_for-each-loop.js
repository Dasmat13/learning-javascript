//foreach loop


const coding = ["java","python","ruby","cpp","javascript","kotlin","Go"]

coding.forEach( function (item) {
    console.log(item);   
} )

console.log("---------------------------------------------------------");
//arrow function
coding.forEach( (item) => {
    console.log(item);
    
})

console.log("----------------------------------------------------------");

function PrintMe(item){
    console.log(item);
}

coding.forEach(PrintMe)

console.log("----------------------------------------------------------");

coding.forEach( (item,index,arr) => {
    console.log(item,index,arr);
     
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
    console.log(value.languageFile,index,array);
    
})