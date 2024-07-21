/*
  Practical explanation about var , let and const keyword in javascript
*/

let a = 10;
var b = 10;
const c = 10;
{
  let a = 12; // in bock level its can be reassigned
  console.log(a); // indirectly changes the values of a
  var b = 22;
  console.log(b);
  const c = 50; // locally we can reassign const value and it will not change
  // c = 123 // it will throw error
  console.log(c);
}
// const c = 50 // identifier 'c' has already been dec
// c = 80 //assignment to constant variable . so in const we can not change the value as wel as reassign the value
// let a = 15 --> identifier 'a' has already been dec
b = 90; // using var locally as well as golbally can be reassigned as well as redeclared
console.log(a);
console.log(b);
console.log(c);
