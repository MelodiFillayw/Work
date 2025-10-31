/* Task 1: Compile Participant Details with Shorthand Property Names */
// TODO: Construct an object named `participant` with properties for `name`, `age`, and `studyField`. 
// Utilize shorthand property names to simplify your code.

const name = "ace";
const age = "22";
const studyField = "MarineBiology";

const participant = {name, age, studyField};
console.log(participant);

/* Task 2: Implement a Shorthand Function for Participant Info */
// TODO: Copy the `participant` object by adding a shorthand method named `displayInfo` 
// that prints the participant's details using `this` and a template string.

const participant = {
    name: "ace",
    age: "22",
    city:"Los Angeles",
    displayInfo() {
        console.log('Name: ace, age: 22, city: Los Angeles')
    }
};
participant.displayInfo();

/* Task 3: Implement a Same Shorthand Arrow Function for Participant Info */
// TODO: Echo the above task with an arrow function. 
// Observe the behavior of `this` and explain your findings.

const participant = {
    name: "ace",
    age: "22",
    city:"Los Angeles",
    displayInfo() {
        console.log('Name: ${this.name}, age: ${this.age}, city: ${this.city}')
    }
};
participant.displayInfo();

/*
 * Observations:
 * TODO: Explain here.
 * 
 */

/* Task 4: Using Computed Property Names */
// TODO: Implement a function named `updateParticipantInfo` that takes a property name and value as 
// arguments alongside an object and returns a new object with that property dynamically set.

