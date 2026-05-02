# 📝 Notes — `04_control_flow/`

This folder covers **Control Flow** — how to control the execution of JavaScript code based on conditions.

---

## 📄 `01_control_flow.js` — Truthy, Falsy, and Conditions

### What it does
Covers the `switch` statement, truthy/falsy evaluations, checking empty arrays/objects, the nullish coalescing operator (`??`), and the ternary operator (`?:`).

### Key Concepts
- **`switch` statement**: Provides an alternative to multiple `if-else` blocks. Uses `break` to exit the block; otherwise, it falls through to the next cases.
- **Truthy and Falsy**: 
  - Falsy values: `false`, `0`, `-0`, `0n` (BigInt), `""`, `null`, `undefined`, `NaN`.
  - Truthy values: Everything else, including `"0"`, `"false"`, `" "`, `[]` (empty array), `{}` (empty object), and `function(){}`.
- **Checking Empty Array**: `array.length === 0`
- **Checking Empty Object**: `Object.keys(obj).length === 0`
- **Nullish Coalescing Operator (`??`)**: Returns the right-hand side operand when the left-hand side is `null` or `undefined`.
- **Ternary Operator (`?:`)**: A shorthand for `if-else`: `condition ? trueExpression : falseExpression`.

### Summary
> Control flow is essential for deciding what code executes. Always be aware of truthy/falsy values to prevent unexpected bugs when writing `if` conditions. The `??` operator is great for providing default values when dealing with potentially `null`/`undefined` data.

### 🧠 Easy-to-Remember Points
- `[]` and `{}` are **truthy**. To check if they are empty, check their length / keys length.
- `??` only checks for `null` or `undefined`, while `||` checks for any falsy value (like `0` or `""`).
- Always remember the `break` statement in a `switch` case, or it will execute the cases below it!
