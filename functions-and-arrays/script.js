// Functions

// function declaration
function greetDalina() {
  console.log("Hello Dalina!");
}

// function call
greetDalina(); // "Hello Dalina!" in the console

function greetAndre() {
  console.log("Hello André!");
}

greetAndre(); // "Hello André!" in the console
greetDalina(); // "Hello Dalina!" in the console

function greet(firstName) {
  console.log("This will show in the console");
  return "Hello " + firstName + "!";
  console.log(
    "No further statement is executed when a return keyword is reached"
  );
}

greet();

greet("Pierre");

const cssQueen = "Svenja";

greet(cssQueen);

let greeting = greet();
greeting; // "Hello undefined!"

greeting = greet("William");
greeting; // "Hello William!"

// write a function that returns, depending on a student's name: "<Name> has an even/odd number of letters"

/*
function oddOrEvenCount(name) {
  if (name.length % 2 === 0) {
    return name + " has an even number of letters";
  } else {
    return name + " has an odd number of letters";
  }
}
*/

/*
function oddOrEvenCount(name) {
  if (name.length % 2 === 0) {
    return name + " has an even number of letters";
  }
  return name + " has an odd number of letters";
}
*/

function oddOrEvenCount(name) {
  let oddOrEven;
  if (name.length % 2 === 0) {
    oddOrEven = "even";
  } else {
    oddOrEven = "odd";
  }
  return name + " has an " + oddOrEven + " number of letters";
}

console.log(oddOrEvenCount("Noam"));
const foo = oddOrEvenCount("Noubar");
console.log(foo);

const sum = add(1, 4);

function add(a, b) {
  return a + b;
}

// const product = multiply(4, 5); ❌

// function expression
const multiply = function(a, b) {
  return a * b;
};

const product = multiply(4, 5);

// arrow functions

// prettier-ignore
const double = (n) => {
    return 2 * n
};

// triple(3); ❌

const triple = n => 3 * n;

console.clear();

// Arrays

const bootcamps = ["UX/UI", "Data", "WebDev"];
const cities = ["Berlin", "Madrid", "Paris", "Amsterdam", "Mexico"];

// let studentsCountries = [];

const studentsCountries = ["Italy", "Switzerland", "Tunisia", "Norway"];

studentsCountries[0]; // "Italy"

// Arrays are mutable
studentsCountries[3] = "Israel";

// Strings are not
let city = "Berlin";
city[city.length - 1] = "m";

// mutates the array by appending elements
studentsCountries.push("Norway");

// mutates the array by inserting elements at the start of the array
studentsCountries.unshift("New Zealand");

// splice(index, deleteCount, ...elements)
// mutates the array by inserting `elements` at a given `index` and potentially removing `deleteCount` elements starting from that index
studentsCountries.splice(3, 0, "Venezuela");

studentsCountries.splice(3, 1, "Venezuela");

// mutates the array by removing `deleteCount` elements starting from given `index`
studentsCountries.splice(0, 1);

// mutates the array by removing the last element
studentsCountries.pop();

// mutates the array by removing the first element
studentsCountries.shift();

// iterating with a for loop
for (let i = 0; i < studentsCountries.length; i += 1) {
  console.log(studentsCountries[i]);
}

console.clear();

// iterating with forEach

studentsCountries.forEach(done);

function done(country, index) {
  console.log(country, index);
}

studentsCountries.forEach(function(country, index) {
  console.log(country, index);
});

function customForEach(countries, callback) {
  console.log("for loop w/ callback function");

  for (let i = 0; i < countries.length; i += 1) {
    callback(countries[i], i);
  }
}

// customForEach(studentsCountries, done);
