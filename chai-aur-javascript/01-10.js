const name1 = "Abhishek";
let age = 25;
var car = "nano";

console.table({ name1, age, car });

car = "santro";
age++;

console.table({ name1, age, car }); // ===>> Object Property Shorthand, we can use this syntax to create an object with properties that have the same name as the variables.

"use strict"; //treat all JS code as newer version

// alert(3+3) // we arein node environment, not browser

//null => standalone value, empty value, nothing
//undefined => variable is declared but not assigned any value
//symbol => unique identifier, to create unique keys for objects

console.log(typeof undefined) // so type of undefined is undefined
console.log(typeof null) // type of null is object, this is a bug in JS, but we can't change it now

const score = "56t"
const newScore = Number(score) // this will convert the string to a number, but since it's not a valid number, it will return NaN
console.log(typeof newScore) // NaN stands for Not a Number, it's a special value in JS that indicates that the value is not a valid number
console.log(newScore) // type of newScore is number, even though it's NaN, because NaN is considered a number in JS

const value = -245
const newValue = Boolean(value) // this will convert the string to a boolean, since it's a non-empty string, it will return true
console.log(typeof newValue) // type of newValue is boolean
console.log(newValue) // true

// non-zero numbers are considered true in boolean context, while 0 is considered false
// empty strings are considered false, while non-empty strings are considered true

let num = 5;
let result = num++;
console.table({ num, result }) //post-increment operator, first assigns the value of num to result, then increments num by 1

num = 5;
result = ++num;
console.table({ num, result }) //pre-increment operator, first increments num by 1, then assigns the value of num to result

/* comparison and equality operators are 2 different things.
null is converted to 0 when compared with numbers, for comparison operators, not for equality operators. So null > 0 is false, null == 0 is false, but null >= 0 is true. This is because for comparison operators, 
null is converted to 0, but for equality operators, null is not converted to anything, it's just null. 
for undefined, its always false. */

console.log("2" == 2)
console.log("2" === 2)

/* 1. Primitive: String, Number, Boolean, null, undefined, Symbol, BigInt => Call by Value types. We get a copy; 
   2. Non-Primitive: Objects, Arrays, Functions => Call by Reference types. We get a reference to the same memory.
   const bigNum = 9237936n <= syntax. */

console.log(Symbol("176"))

// stack (primitive datatypes go here), heap (non-primitive datatypes go here).