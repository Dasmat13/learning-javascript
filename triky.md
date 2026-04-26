let a = 10
console.log(a); // 10 → value of a is 10

const b = 20
console.log(b); // 20 → const b initialized with 20

a = 30
console.log(a); // 30 → let allows reassignment


// ❌ ERROR (redeclaration with let)
let c = 10
let c = 23
console.log(c); 
// SyntaxError → let cannot be redeclared in same scope


let a = 10;

{
  let a = 20;
  console.log(a); // 20 → block scope, inner 'a' is different variable
}

console.log(a); // 10 → outer 'a' remains unchanged


var a = 10;

{
  var a = 20;
}

console.log(a); // 20 → var is function scoped, same variable updated


const a = 10;
a = 20;

console.log(a);
// TypeError → const cannot be reassigned


const obj = { name: "dasmat" };

obj.name = "rahul";
obj.name = "shubham"

console.log(obj.name); // shubham → object properties can be modified even with const


const obj = { name: "dasmat" };

obj = { name: "rahul" };

console.log(obj.name);
// TypeError → const object reference cannot be reassigned


console.log(a);
let a = 10 ;
// ReferenceError → accessing before initialization (TDZ)


console.log(a);
var a = 10;
// undefined → var is hoisted with default value undefined

| Feature   | var           | let     | const   |
| --------- | ------------- | ------- | ------- |
| Scope     | Function      | Block   | Block   |
| Redeclare | ✅             | ❌       | ❌       |
| Reassign  | ✅             | ✅       | ❌       |
| Hoisting  | ✅ (undefined) | ❌ (TDZ) | ❌ (TDZ) |


