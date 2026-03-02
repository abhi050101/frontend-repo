// scope in browser's console and code editor are 2 different things

/* in browser console this refers to the window object, but in code editor this refers to the global object. in browser console we can access the properties of the window object directly, but in code editor we need to use globalThis to access the properties of the global object. 
   if no global object exists in editor, then we get a {}. */

function chai() {
    let user = "abhishek"
    console.log(this.user) // this will print undefined because this refers to the global object, and the global object does not have a user property.
}

const arrowFunction = () => {
    let username = "abhishek"
    console.log(this.username) // this will print undefined because arrow functions do not have their own this, they inherit this from the parent scope, which is the global scope in this case, and the global object does not have a username property.
}

const sampleArrowFunction = (name = "default") => {
    let name1 = name
    console.log(name1)
}
sampleArrowFunction()

const implicitReturnFunction = (num1, num2) => num1 + num2
// with (num1 + num2) we do not need return keyword but with { return num1 + num2 } we need return keyword because we are using curly braces to define the function body.
console.log(implicitReturnFunction(5, 10))

const implimplicitReturnFunction2 = () => ({username: "abhishek", age: 25})
console.log(implimplicitReturnFunction2()); // we need to wrap the object in parentheses because otherwise it will be treated as a block of code and not an object literal.

/* Immediately Invoked Function Expression (IIFE) is a function that is executed immediately after it is defined. It is a design pattern that is also known as a Self-Executing Anonymous Function and contains two major parts. The first part is the anonymous function with lexical scope enclosed within the Grouping Operator ().
   This prevents accessing variables within the IIFE idiom as well as polluting the global scope. The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function. */

(function test() {
    console.log("This is an IIFE")
})(); // Named IIFE... this will print "This is an IIFE" because the function is immediately invoked after it is defined. previous statement must have a closing using semicolon to avoid syntax error.

( (name) => {
    console.log(`${name} DB connected successfully`)
})('Mongo') // Simple IIFE... this will print "DB connected successfully" because the arrow function is immediately invoked after it is defined. previous statement must have a closing using semicolon to avoid syntax error.

/* Javascript Execution Context is the environment in which the JavaScript code is executed. It consists of three components: Variable Object, Scope Chain, and this. The Variable Object is where all the variables, functions, and arguments are stored. The Scope Chain is a list of all the variable objects that are accessible to the current execution context. The this keyword refers to the object that is currently executing the code.
   
   We first have the Global Execution Context (GEC) which is created when the JavaScript code is executed. It is the default execution context and it is created only once. It contains the global object (window in browsers) and the this keyword refers to the global object in this context.
   GEC varies for browsers and runtime environments. In browsers, the GEC is created when the HTML document is loaded and it is destroyed when the document is closed. In runtime environments like Node.js, the GEC is created when the script is executed and it is destroyed when the script finishes executing.
   Javascript is a single-threaded language, which means that it can only execute one piece of code at a time. However, it can handle asynchronous operations using callbacks, promises, and async/await. When an asynchronous operation is initiated, the JavaScript engine creates a new execution context for that operation and pushes it onto the call stack. Once the operation is completed, the execution context is popped off the call stack and the callback function is executed.

   Another is Function Execution Context (FEC) which is created when a function is invoked. It contains the arguments passed to the function, the local variables declared within the function, and the this keyword that refers to the object that is currently executing the function. Each time a function is invoked, a new FEC is created and pushed onto the call stack. Once the function finishes executing, the FEC is popped off the call stack and control is returned to the previous execution context.

   JS code is executed in 2 phases: Creation Phase and Execution Phase. In the Creation Phase, the JavaScript engine creates the execution context and sets up the variable object, scope chain, and this keyword. In the Execution Phase, the JavaScript engine executes the code line by line and updates the variable object and scope chain as needed.

   Flow: (for below code snippet)
   1) Global Execution (this)
   2) memory creation phase:
    a) a: undefined
    b) b: undefined
    c) sum: function definition (entire block of function)
    d) result1: undefined
    e) result2: undefined
   3) code execution phase:
    a) a: 10
    b) b: 5
    c) sum: function definition (entire block of function) ... nothing to execute here because we are just defining the function, not invoking it.
    d) result1: 15 (sum(10, 5) we get a new execution context comprising of New Variable Environment and Execution Thread)
     i - memory creation phase:
        - a: undefined
        - b: undefined
        - total: undefined
    ii - code execution phase:
        - num1: 10
        - num2: 5
        - total: 15
    e) result2: 50 (sum(20, 30))
   */

let a = 10
let b = 5
function sum(num1, num2) {
    let total = num1 + num2
    return total
}
let result1 = sum(a, b)
let result2 = sum(20, 30)

const month = 33

switch (month) {
    case 1:
        console.log("January")
        break
    case 2:
        console.log("February")
        break
    case 3:
        console.log("March")
        break
    default:
        console.log("Invalid month")
        break
}
// if no break, runs everything below except default.

/* remember that empty string is falsy value and non-empty string is truthy value. 
   falsy values => false, 0, -0, 0n (in BigInt), "", null, undefined, NaN
   truthy values => all values that are not falsy.
*/

const email = ""

if (email) {
    console.log("Email is valid")
} else {
    console.log("Email is invalid")
}

const obj = {}
// note that .keys always returns an array.
if (Object.keys(obj).length === 0) {
    console.log("Object is empty")
}

// Nullish Coalescing Operator (??) is a logical operator that returns the right-hand side operand when the left-hand side operand is null or undefined, and otherwise returns the left-hand side operand. It is used to provide a default value for a variable that may be null or undefined.
let res = null ?? undefined ?? 6 ?? 9
console.log(res) // result will be 6

const nations = ["India", "USA", "UK", "Australia"]

for (const nation of nations) {
    console.log(nation)
}

const map = new Map()
map.set("Marvel", "Hulk")
map.set("DC", "Flash")

for (const [key, value] of map ) {
    console.log(key, "=>", value)
}

const progLangs = {
    ts: "TypeScript",
    js: "JavaScript",
    py: "Python"
}

for (const lang in progLangs) {
//    if (!Object.hasOwn(progLangs, lang)) continue;
    
    const element = progLangs[lang];
    console.log(lang, "=>", element)
}

const langArr = ["js", "ts", "py", "cpp"]

for (const lang in langArr) {
    console.log(lang) // prints the keys i.e. indeices which is the default behavior of for...in loop when used with arrays. to get the values we can use langArr[lang]
}

for (const key in map) {
    console.log(key) // this will not print anything because for...in loop does not work with Map objects. we can use for...of loop to iterate over Map objects.
}

/* for in works on objects and iterates over their enumerable properties i.e. keys whereas for of works on iterable objects like arrays, strings, maps, sets etc. and iterates over their values.
   for of does not work on objects because objects are not iterable. If an object implements the Symbol.iterator method, it becomes iterable. 
   for in when applied on map gives no output because Map objects do not have enumerable properties in the same way that regular objects do. 
   To support the previous statement, try to get its keys using Object.keys(map). If empty array is returned, it confirms that Map objects are not iterable in the same way as regular objects.*/

for (const [key, value] of Object.entries(progLangs)) {
    console.log(key, "=>", value)
}

langArr.forEach((lang, index, arr) => {   // callback function approach 1... we have access to the current element, index and the entire array in the callback function of forEach method.
    console.log(lang, index, arr)
})

langArr.forEach( function (item) {   // callback function approach 2
    console.log(item)
})

function consoleMe(item) {
    console.log(item)
}

langArr.forEach(consoleMe)    // callback function approach 3... we can directly pass the function reference without invoking it because forEach will invoke it for each element in the array. if we invoke it like consoleMe(), it will execute immediately and not work as a callback function.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const evenNumbers = numbers.filter( num => num % 2 === 0 ) // if you used scope with {} explicit return would be required, but with implicit return we do not need to use return keyword because the expression is evaluated and returned automatically.
const modifiedNumbers = numbers.map( num => num ** 2 )

console.table( {numbers: numbers, evens: evenNumbers, squares: modifiedNumbers} )  // chaining can be used as well for filter and map.

const initialValue = 0
const sumOfArray = numbers.reduce(
    (acc, presentValue) => acc + presentValue,
    initialValue  // only passed once, as the second argument to reduce method, and it is used as the initial value of the accumulator (acc) in the first iteration. if we do not pass initialValue, then the first element of the array will be used as the initial value of acc and the iteration will start from the second element.
)

/*
const sumOfArray2 = numbers.reduce(
    function (acc, currVal) {
        console.log(`accumulator: ${acc} and current value: ${currVal}`)
        return acc + currVal
    }, 0 // initial value
)
*/

console.log(sumOfArray)