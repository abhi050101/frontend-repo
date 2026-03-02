// String Interpolation
const name = "Alice";
const greeting = `Hello, ${name}!`;
console.log(greeting); // Output: Hello, Alice!

const player = new String('Joshoua'); // try inside browser console... note that its an object not an array. "josh" is stored as key value pairs.. 

console.log(player[3]);
console.log(player.__proto__); // this is the prototype of the string object, it has all the methods of string.
console.log(player.indexOf('o'));

console.log(player.slice(1, -16)) // negatives permitted here but not in substring method. and start must be less than end. for negatives, add length to get positive index.

const min = 10
const max = 20
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min; // generates a random number between min and max (inclusive)
console.log(randomNum);

let todayDate = new Date();
console.table({op1: todayDate.toDateString(), op2: todayDate.toISOString(), op3: todayDate.toJSON(), op4: todayDate.toLocaleDateString(), op5: todayDate.toLocaleString(), op6: todayDate.toLocaleTimeString()})

let myDate = new Date(2026, 0, 25);
console.log(myDate.toDateString()) // 25 Jan 2026, month is 0-indexed, so 0 is January, 1 is February, and so on.

// todayDate.getTime() gets you total milliseconds from 1 Jan 1970 to todayDate. this is called timestamp. we can use this to compare dates, or to get the difference between two dates in milliseconds.

const val1 = todayDate.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'          // ctrl + space to see all options for formatting the date. --- intellisense in action ---
})

console.log(val1) // Sunday, 16 June 2024

// array.push => adds an element to the end of the array and returns the new length of the array.
// array.pop => removes the last element from the array and returns that element.
// array.unshift => adds an element to the beginning of the array and returns the new length of the array.
// array.shift => removes the first element from the array and returns that element.
// array.join => joins all the elements of the array into a string and returns that string. we can specify a separator as an argument to join, if we don't specify any separator, it will use comma as the default separator.
// slice => returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). The original array will not be modified. we can use negative indices to specify the end of the array. for example, slice(-2) will return the last 2 elements of the array.
// splice => changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. it modifies the original array and returns an array containing the removed elements.

const arr = [1, 2, 3];
console.log(arr.push(7)) // 4
console.log(arr) // [1, 2, 3, 4]

const marvelHeroes = ["Ironman", "Hulk", "Thor"]
const dcHeroes = ["Batman", "Superman", "Flash"]
const allHeroes = marvelHeroes.concat(dcHeroes) // this will return a new array that is the concatenation of marvelHeroes and dcHeroes. it does not modify the original arrays.
console.log(allHeroes) // ["Ironman", "Hulk", "Thor", "Batman", "Superman

const allHeroes2 = [...marvelHeroes, ...dcHeroes] // this is the spread operator, it does the same thing as concat, but it's more concise and easier to read. it also does not modify the original arrays.
console.log(allHeroes2) // ["Ironman", "Hulk", "Thor", "Batman", "Superman"]

// use Array. and use methods available for Array class.

Array.from({name: "Joe"}) // we need to specify whether to make an array of keys or values. Hence array returns empty array.

const awards = Symbol("totalAwards")

// Object literal
let player3 = {
    name: "Kohli",
    age: 35,
    country: "India",
    [awards]: 27
}

console.log(player3.name)
console.log(player3["age"]) // this is useful when we want to access a property using a variable. for example, if we have a variable that contains the name of the property we want to access, we can use bracket notation to access that property.

player3["IPL_team"] = "RCB"

console.log(player3) // { name: 'Kohli', age: 35, country: 'India', IPL_team: 'RCB' }
console.log(player3[awards]) // accessing a symbol

//Object.freeze(player3) // this will freeze the object, which means we cannot add, delete, or modify any properties of the object. we can only read the properties of the object.

player3["name"] = "Rohit"
console.log(player3) // Kohli, we cannot modify the name property of the object because it's frozen.

player3["Player stats"] = function() {
    console.log(`This is ${this.name} age ${this.age}. A right handed batsman from ${this.country} playing for ${this.IPL_team} in IPL.`)
    return "hello"
}

console.log(player3["Player stats"]()) // this will print the function definition, we need to call the function to execute it.

//Object using constructor function
const player4 = new Object() // empty object created using constructor function... Its SINGLETON, we can create only one object using this constructor function, if we try to create another object using this constructor function, it will return the same object.

const bossOne = new Object()
const bossTwo = new Object()
const bossThree = {}

bossOne["name"] = "Elon Musk"

console.table([bossOne, bossTwo, bossThree])

const obj1 = {1: "one", 2: "two", 3: "three"}
const obj2 = {4: "four", 5: "five", 6: "six"}
const obj3 = {5: "FIVE", 6: "SIX", 7: "seven"}

const resultant = Object.assign({},obj1, obj2, obj3) // this will merge the properties of obj1, obj2, and obj3 into a new object. if there are duplicate keys, the value from the last object will overwrite the previous value. first argument is the target object, which is an empty object in this case, and the rest of the arguments are the source objects. we can also use the spread operator to achieve the same result.
console.table({op1: resultant, op2: obj1}) // { '1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'FIVE', '6': 'SIX', '7': 'seven' }

const course = {
    courseName: "JavaScript",
    price: 999,
    courseInstructor: "Hitesh Sir",
}

const {courseInstructor} = course // this is called object destructuring, it allows us to extract properties from an object and assign them to variables. we can also rename the variable while destructuring by using the syntax: const {propertyName: newVariableName} = object.
console.log(courseInstructor) // Hitesh Sir

const {courseName: cn, price: p} = course
console.log(cn) // JavaScript
console.log(p) // 999

/* 
function sample(a,b) {     a and b are parameters, they are placeholders for the values that will be passed to the function when it is called. they are used to define the function and specify what kind of arguments the function expects.
    return a + b
} 

sample(2,3)     2 and 3 are arguments, they are the actual values that are passed to the function when it is called. they are used to execute the function and produce a result based on the logic defined in the function.
NOTE: sample becomes reference whereas sample() is the call to execute the function.

if arguments are not passed to the function, then the parameters will be undefined. we can also assign default values to the parameters in case arguments are not passed. for example:

function sample(a = 0, b = 0) {
    return a + b
}
*/

function sum(...nums) {
    return nums // this will print an array of all the arguments passed to the function. we can use the rest operator to collect all the arguments into an array.
}

console.log(sum(10,20,30,40))