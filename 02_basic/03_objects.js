// singleton

//object literALS

const mySym = Symbol("key1")
const Jsuder = {
    name: "dasmAt",
    "full name": "dasmat hansda",
    age: 23,
    [mySym]: "key11",
    location: "rourkela",
    email: "dasmat@gmail.com",
    isloggedin: false,
    lastLoginIn: ["monday","wednesday"]
}

 console.log(Jsuder.email); //dasmat@gmail.com
 console.log(Jsuder["email"]);//dasmat@gmail.com
 console.log(Jsuder["full name"]);//dasmat hansda
 console.log(Jsuder.mySym);//undefined
 console.log(Jsuder[mySym]);//key11
 console.log(typeof Jsuder.mySym);//undefined

 Jsuder.email = "dasmatgpt.com"
 console.log(Jsuder);/*
                       {
                        name: 'dasmAt',
                        'full name': 'dasmat hansda',
                        age: 23,
                        location: 'rourkela',
                        email: 'dasmatgpt.com',
                        isloggedin: false,
                        lastLoginIn: [ 'monday', 'wednesday' ],
                        Symbol(key1): 'key11'
                       
  */
 //Object.freeze(Jsuder)
 Jsuder.email = "dasmatgoogle@gmail.com"
 console.log(Jsuder);/*
                       {
                         name: 'dasmAt',
                         'full name': 'dasmat hansda',
                         age: 23,
                         location: 'rourkela',
                         email: 'dasmatgpt.com',
                         isloggedin: false,
                         lastLoginIn: [ 'monday', 'wednesday' ],
                         Symbol(key1): 'key11'
                       }
 */


Jsuder.greeting = function(){
    console.log("heelo yoyyyoo");   
}

 Jsuder.greetingtwo = function(){
     console.log(`hello whaere you live, ${this.name}`);   
 }

 console.log(Jsuder.greeting); //[Function (anonymous)]
 console.log(Jsuder.greeting())/*heelo yoyyyoo
                                 undefined
 */
console.log(Jsuder.greetingtwo());/**hello whaere you live, dasmAt
                                     undefined
 */
