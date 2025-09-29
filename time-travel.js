/* Task 1: Declare a Destination Variable */
// TODO: Use `let` to declare a variable named `destination` and assign it the value `"Ancient Egypt"`. Print the destination to the console.

let destination = "Ancient Egypt";
console.log(`Destination: ${destination}`);

/* Task 2: Change the Destination */
// TODO: Now, change the `destination` variable to `"Medieval Europe"`. Print the new destination to the console.

destination = "Medieval Europe";
console.log(`Destination: ${destination}`);

/* Task 3: Declare a Constant Travel Date */
// TODO: Use `const` to declare a variable named `travelDate` and set it to `"2024-03-15"`. Try to change the `travelDate` to another value and observe and explain what happens as a comment.

const travelDate = "2024-03-15";
console.log(`Travel Date: ${travelDate}`);
/*
 * Observations:
 * TODO: Explain here.
 * When an attempt to change the value of `travelDate`, a **TypeError** is thrown. This happened because the const function decalres
 * reference, meaning its value cannot be reassigned after initialization
 */
/*

/* Task 4: Experiment with Variable Hoisting */
// TODO: Before declaring any variable, try to print a variable named `timeMachineModel` to the console.
//  Then, declare `timeMachineModel` using `var` and assign it the value `"T-800"`.
//  Observe and explain what happens as a comment.

console.log(`Time Machine Model: ${timeMachineModel}`);
var timeMachineModel = "T-800";

/*
 * Observations:
 * TODO: Explain here.
 * when console.log(timeMachineModel is called before the the variable the ouput is not defined, this shows the importance 
 * of hoisting, where the declaration of timeMachineModel is moved to the top of the scope but where it iws assigned to T-800
 * remians at the same position.
 */
