//Immediately Invoked Function Expressions (IIFE)

// IIFE (Immediately Invoked Function Expression)

// Iska matlab hota hai: aisa function jo declare hote hi turant execute ho jaye.

// Kabhi-kabhi global scope me bahut saare variables aur declarations ho jaate hain,
// jisse "global scope pollution" hota hai (conflicts aur bugs badh jaate hain).

// Is problem ko avoid karne ke liye IIFE use kiya jata hai,
// taki variables aur functions ek private scope ke andar rahein
// aur global scope ko affect na karein.


// IIFE (Immediately Invoked Function Expression)

// It means a function that executes immediately after it is defined.

// Sometimes, too many variables and declarations in the global scope
// can cause "global scope pollution" (leading to conflicts and bugs).

// To avoid this problem, IIFE is used so that variables and functions
// stay inside a private scope and do not affect the global scope.




(function iife(){
    console.log('DB CONNECTED');
    // prints immediately → function is invoked right after definition
})();
// ; ensures this IIFE ends properly


(function iife1(){
    console.log(`DB CONNECTED`);
    // prints again → second IIFE executes instantly
})();
// ; prevents chaining issue


(() => {
    console.log(`DB CONNECTED`);
    // arrow IIFE → executes immediately
})();
// arrow function wrapped in () and invoked


((name) => {
    console.log(`DB CONNECTED to ${name}`);
    // prints with argument passed → "MongoDB"
})("MongoDB");
// argument "MongoDB" is passed instantly


(function nameIIFE(){
    console.log(`DB CONNECTED IIFE`);
    // named IIFE → runs immediately
})()
// last IIFE also executes instantly