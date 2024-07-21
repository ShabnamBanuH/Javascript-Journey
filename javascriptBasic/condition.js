const prompt = require("prompt-sync")();
const a =Number.parseInt(prompt("Enter the number :  "));
const b = Number.parseInt(prompt("Enter the number :  "));

console.log(typeof a)
console.log(typeof b)

// Logical Operator is used to combine conditional statements and condioinal is used to check whether the condition is true or false.

if (a > 10 && b < 20) {
  // If both the conditions are true then only the code inside the if statement will be executed.
  console.log("The number is greater than 10 and less than 20");
  console.log("And Operator");
} else if (a > 10 || b < 20) {
  //If any one of the conditions is true then the code inside the else if statement will be executed.
  console.log("The number is greater than 20 or less than 20");
  console.log("Or operator");
} else if (a != b) {
  //If both the conditions are false then the code inside the else statement will be executed.
  // Not operatore is used to reverse the condition.
  console.log("The number is not equal");
  console.log("Not Operator");
} else {
  // If none of the conditions are true then the code inside the else statement will be executed.
  console.log("Not a valid number");
}
