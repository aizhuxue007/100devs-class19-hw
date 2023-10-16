/**Translate border-left-width to borderLeftWidth
importance: 5
Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.

Examples:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.S. Hint: use split to split the string into an array, transform it and join back.*/

function camelize(str) {
    let splittedStr = str.split('-');
    let camelCaseArray = splittedStr.slice(1).map(word => word[0].toUpperCase() + word.slice(1))
    return splittedStr[0].toLowerCase() + camelCaseArray.join('')
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));
console.log('------------------------------');
/**
 * Filter range
    importance: 4
    Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

    The function should not modify the array. It should return the new array.
 */

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);


function filterRange(arr, a, b) {
    return arr.filter(item => item >= a && item <= b);
}

console.log(filtered);
console.log(arr);
console.log('------------------------------');

/**
 * Filter range "in place"
importance: 4
Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

The function should only modify the array. It should not return anything.
 */

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i <= arr.length; i++) {
        if (!(arr[i] >= a && arr[i] <= b)) {
            arr.splice(i, 1)
        }
    }
}
let arr2 = [5, 3, 8, 1];

filterRangeInPlace(arr2, 1, 4); // removed the numbers except from 1 to 4

console.log( arr2 ); // [3, 1]

console.log('------------------------------');

/**
 * Sort in decreasing order
 */

let arr3 = [5, 2, 1, -10, 8];

function compareNumbers(a, b) {
    return a - b;
}

// ... your code to sort it in decreasing order
arr3.sort((a, b) => b - a);


console.log( arr3 ); // 8, 5, 2, 1, -10
console.log('------------------------------');

/**
 * Copy and sort array
importance: 5
We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

Create a function copySorted(arr) that returns such a copy.
 */

function copySorted(arr) {
    return arr.map(str => str).sort()
}

let arr4 = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr4);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr4 ); // HTML, JavaScript, CSS (no changes)
console.log('------------------------------');

/**
 * Create an extendable calculator
importance: 5
Create a constructor function Calculator that creates “extendable” calculator objects.


The task consists of two parts.

First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.

Usage example:

let calc = new Calculator;

console.log( calc.calculate("3 + 7") ); // 10
Then add the method addMethod(name, func) that teaches the calculator a new operation. It takes the operator name and the two-argument function func(a,b) that implements it.

For instance, let’s add the multiplication *, division / and power **:

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log( result ); // 8
No parentheses or complex expressions in this task.
The numbers and the operator are delimited with exactly one space.
There may be error handling if you’d like to add it.

 */

class Calculator {
    constructor() {
        this.operations = {
            '+': (a, b) => a + b,
            '-': (a, b) => a - b
        }
    }

    calculate(str) {
        let split = str.split(' ');
        let a = Number(split[0]), operator = split[1], b = Number(split[2]);
        if (typeof a === 'number' && typeof b === 'number') {
            return this.operations[operator](a, b);
        }
    }

    addMethod(oper, func) {
        this.operations[oper] = func;
    }
}
let calc = new Calculator;

console.log( calc.calculate("3 + 7") ); // 10

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);


let result = powerCalc.calculate("2 ** 3");
console.log( result ); // 8

console.log('------------------------------');

/**
 * Map to names
importance: 5
You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = 

//console.log( names ); // John, Pete, Mary */


let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(user => user.name);

console.log(names);
console.log('------------------------------');

/**
 * Map to objects
importance: 5
You have an array of user objects, each one has name, surname and id.

Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

For instance:

let john1 = { name: "John", surname: "Smith", id: 1 };
let pete1 = { name: "Pete", surname: "Hunt", id: 2 };
let mary1 = { name: "Mary", surname: "Key", id: 3 };

let users = [ john1, pete1, mary1 ];

let usersMapped = /* ... your code ... */

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

/** console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullName ) // John Smith
So, actually you need to map one array of objects to another. Try using => here. There’s a small catch.
 */

let john1 = { name: "John", surname: "Smith", id: 1 };
let pete1 = { name: "Pete", surname: "Hunt", id: 2 };
let mary1 = { name: "Mary", surname: "Key", id: 3 };

let users1 = [ john1, pete1, mary1 ];
let usersMapped = users1.map(user => 
    ({
        fullName: `${user.name} ${user.surname}`,
        id: user.id,
    })
)


console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullName )
console.log('-------------------------------------------');
/**
 * Sort users by age
importance: 5
Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];


// now: [john, mary, pete]
console.log(arr[0].name); // John
console.log(arr[1].name); // Mary
console.log(arr[2].name); // Pete
 */

function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
}


let john3 = { name: "John", age: 25 };
let pete3 = { name: "Pete", age: 30 };
let mary3 = { name: "Mary", age: 28 };

let arr5 = [pete3, john3, mary3];

sortByAge(arr5);
console.log(arr5[0].name); // John
console.log(arr5[1].name); // Mary
console.log(arr5[2].name); // Pete