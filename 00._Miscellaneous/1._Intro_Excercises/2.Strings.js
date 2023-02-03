// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const resultEx3 = Number(numberOne) + Number(numberTwo)
console.log(resultEx3);

// --------------------------------------


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const resultEx4 = Number(numberOne) + Number(numberTwo)
const resultEx4TwoDecimals = resultEx4.toFixed(2);
console.log(resultEx4TwoDecimals);

// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

const sum = one + two + three
const avg = sum / 3
const avgFiveDecimals = avg.toFixed(5)
console.log(avgFiveDecimals);



// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

const letterByIndex = letters[2]
console.log(letterByIndex);



// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

const factWithCapJ = fact.replace('j', 'J')
console.log(factWithCapJ);

// --------------------------------------



