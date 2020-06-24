console.log('Practicing JavaScript Functions');
// Exploring Functions, how to define, execute, and use Functions

// Simple Function Keyword Syntax
// doubler function definition
function doubler (value) {
    const result = value * 2;
    return result; 
}
// doubler function usage as an assignment to a variable
const printedResult = doubler(10);
console.log(printedResult);

// Simple Arrow Function Syntax
// increment arrow definition
const increment = (value) => { // the value variable here is not the same as line 6
    const result = value + 1;
    return result;
}
// increment function usage right in the console log
console.log(increment(2));

// Having a bit of nested fun
console.log(increment(printedResult));
console.log(doubler(increment(doubler(2))));

// Shorthand Syntax
const printMessage = (msg) => console.log(msg);
printMessage('See here!');

// Callback Usages
const addition = (x, y, printer) => { // Printer is supposed to be a function
    const result = x + y;
    printer(result);
}
addition(20, 5, printMessage);

// Not all Functions take input, 
const squeak = () => { console.log('SQUEAK McSqueakins'); }
function squawk () { console.log('SQUAWK'); }
// Functions allow for suspension and reuse of code
squeak();
squawk();
squeak();
squawk();
squeak();
squawk();
squeak();
squawk();
console.log('SQUEAK');
console.log('SQUAWK');
console.log('SQUEAK');
console.log('SQUAWK');
console.log('SQUEAK');
console.log('SQUAWK');
console.log('SQUEAK McSqueakins');
console.log('SQUAWK');
