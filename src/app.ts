//
// const, let vs var
//

const userName = "Stasi";
// userName = "Stasia";

let age = 35;
age = 21;

// don't use var
// var only knows function and global state (not if, for eg)
// let is block scoped - available only within { block }

//
// arrow functions
//

const add = (a: number, b: number) => {
	return a + b;
};

// can also be
const add2 = (a: number, b: number) => a + b;
// but only works with one expression

const printOutput: (a: number | string) => void = (output) =>
	console.log(output);

const button = document.querySelector("button");

if (button) {
	button.addEventListener("click", (event) => console.log(event));
}

console.log(add(2, 5));
console.log(add2(3, 9));
printOutput(add(1, 3));

//
// default function parameters
//

const add3 = (a: number, b: number = 1) => a + b;
// means can pass only one argument
// must be last in the list as they aren't skipped

//
// spread operator
//

const hobbies = ["Gaming", "Guitar"];
const activeHobbies = ["Yoga"];

// activeHobbies.push(hobbies)
// this will nest the array

// activeHobbies.push(hobbies[0], hobbies[1])
// this is cumbersome

activeHobbies.push(...hobbies);
const newHobbies = ["Meditation", ...hobbies];

const person = {
	Name: "Stasi",
	Age: 21,
};

//const copiedPerson = person;
// copying pointer wire, not object

const copiedPerson = { ...person };
// copy of object not just pointer

//
// rest parameters
//

// don't want fixed # parameters
// works with tuples: (...numbers: [number, number, number])

const add4 = (...numbers: number[]) => {
	return numbers.reduce((curResult, curValue) => {
		return curResult + curValue;
	}, 0);
};

const addNumbers = add4(4, 5, 6, 7, 2, 2, 4);
console.log(addNumbers);

//
// array and object destructuring
//

// const hobby1 = hobbies[0];
// const hobby1 = hobbies[1];
// langweilig

// creating variables from array
// doesn't change original array
// elements pulled out IN ORDER

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobby1);
console.log(hobby2);

// order NOT GUARANTEED, by property name
// renaming/alias first variable (don't have to, like age)

const { Name: firstName, Age } = person;

console.log(firstName, Age, person);
