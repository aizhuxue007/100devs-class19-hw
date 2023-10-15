/** THE JSWAY */

/** Chapter 7 Arrays */

// Musketeers
// Write a program that:

// Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
// Shows each array element using a for loop.
// Adds the "D'Artagnan" value to the array.
// Shows each array element using the forEach() method.
// Remove poor Aramis.
// Shows each array element using a for-of loop.
let musketeers = ['Athos', 'Porthos', 'Aramis'];

for (let i = 0; i < musketeers.length; i++) {
    console.log(musketeers[i])
}

musketeers.push("D'Artagnan");

musketeers.forEach(musketeer => {
    console.log(musketeer)
})

musketeers.splice(2, 1)

for (musketeer of musketeers) {
    console.log(musketeer);
}

// Sum of values
// Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).
const vals = [3, 11, 7, 2, 9, 10];
let countVal = 0;

vals.forEach(num => countVal += num)

console.log(`sum of values = ${countVal}`)


// Array maximum
// Write a program that creates the following array, then calculates and shows the array's maximum value
const values = [3, 11, 7, 2, 9, 10];
let max = 0;

values.forEach(value => {
    if (value > max) max = value;
})

console.log(`max = ${max}`);

// List of words
// Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".

let input;
let words = [];


while (input !== 'stop') {
    input = prompt('Enter a word').toLowerCase();
    words.push(input);
}

for (word of words) {
    console.log(word)
}