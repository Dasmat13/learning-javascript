//object constructor

//const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123asd"
tinderUser.name = "sunny"
tinderUser.isLoggedIn = false
console.log(tinderUser); //[ [ 'id', '123asd' ], [ 'name', 'sunny' ], [ 'isLoggedIn', false ] ]

const regularUser = {
    fullname: {
        useerFullname: {
            firstName: "dasmat",
            lastName: "hansda"
        }
    }
}

 console.log(regularUser.fullname); //{ useerFullname: { firstName: 'dasmat', lastName: 'hansda' } }
 console.log(regularUser.useerFullname); //undefined
 console.log(regularUser.fullname.useerFullname.firstName);//dasmat
 console.log(regularUser.fullname.useerFullname.lastName);//hansda

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

//const obj3 = {obj1 , obj2}
//onst obj3  = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
console.log(obj3) //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const users = [
    {
        id: 1,
        email: "ffgmil.com"
    }
]
console.log(tinderUser); //[ [ 'id', '123asd' ], [ 'name', 'sunny' ], [ 'isLoggedIn', false ] ]

console.log(Object.keys(tinderUser)); //{ id: '123asd', name: 'sunny', isLoggedIn: false }
console.log(Object.values(tinderUser));//[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.entries(tinderUser));//[ [ 'id', '123asd' ], [ 'name', 'sunny' ], [ 'isLoggedIn', false ] ]
console.log(tinderUser.hasOwnProperty('isLoggedIn'));//True
console.log(tinderUser.hasOwnProperty('isLoggedddIn'))//false