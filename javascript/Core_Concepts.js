/*Operation 1: Variable Declaration and Scopes*/

let name = "Alice"; // Block scoped
const age = 30;     // Constant variable

if (age > 18) {
  let message = `${name}, you are an adult.`;
  console.log(message);
}

/* Operation 2: Control Structures (If-Else) */

let temperature = 35;

if (temperature > 30) {
  console.log("It's hot outside.");
} else {
  console.log("It's a cool day.");
}

