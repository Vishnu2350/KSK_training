//Operation 1: Destructuring
const person = { name: "Alice", age: 28 };
const { name, age } = person;
console.log(name); // Output: Alice
console.log(age);  // Output: 28


// Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // Output: [1, 2, 3, 4, 5]
