const newNums = [1,2,3,4,5,6]

const Total = newNums.reduce(function (acc, currval){
    // console.log(`acc: ${acc}, currval: ${currval}`); // Shows the process step by step
    return acc + currval
}, 0) // 0 is the initial value of accumulator
console.log(Total); // Output: 21

const arrowTotal = newNums.reduce( (acc, currval) => acc+currval,0)
console.log(arrowTotal); // Output: 21


const shoppingCart = [
    {
        inteName: "js course",
        price: 299
    },

    {
        inteName: "python course",
        price: 199
    },

    {
        inteName: "ruby course",
        price: 349
    },

    {
        inteName: "mobile course",
        price: 1299
    }
]

const TotalCart = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(TotalCart); // Output: 2146
