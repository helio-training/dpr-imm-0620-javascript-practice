// STRINGS
// Different ways to write String Literals
const singleQuote = 'Simple Strings with Single Quotes';
const doubleQuote = "Let's us use Single Quotes";
const templateInjection = 'variables' // For use in the template string
const backTicks = `Is able to use ${templateInjection}, even numbers such as ${5}`;
const alternativeToTemplates = "Is able to use " + 
                    templateInjection + 
                    ", even numbers such as " +
                    5; 
// alternativeToTemplate uses the concatenation shorthand for strings
// alternativeToTemplates is what we had to do before Template Strings

// VARIABLES
// const, let, var : in order of preferred usage
// Use of 'const' is for Constant variables
const constant = "Can't be changed"; // Start here, ask yourself, 'Does this need to change?'
let letMeChange = 'Can be changed'; // If a variable needs to change, use this
var variable = "Can be change and ignores scope"; // Avoid if at all possible

// FUNCTIONS
// Function Keyword Syntax is older (ES5 and before, 1995 to 2015)
// Arrow Syntax is newer (ES6 and after, 2015 to present)
// Functions on a single line
function singleLineFunc () { console.log('Single Line Function Syntax'); }
const singleLineArrow = () => { console.log('Single Line Arrow Syntax'); }
// Functions with an input, can exist on multiple lines
function inputFunc (input) { console.log(input); } // input is a parameter or argument
const inputArrow = (input) => { console.log(input); } // input is a parameter or argument
// Functions with an output, can exist on a single line
function outputFunc () { 
    return 'Inside output Function Syntax'; 
}
const outputArrow = () => { 
    return 'Inside output Arrow Syntax';
}
// Functions with an input & an output
function inputOutputFunc(inputOutput) { // inputOutput is a parameter or argument
    return `${inputOutput} has been received`;
}  
const inputOutputArrow = (inputOutput) => { // inputOutput is a parameter or argument
    return `${inputOutput} has been received`;
}
// Functions with multiple inputs
function multiInputFunc (input1, input2) { // input1 & input2 are parameters or arguments
    console.log(input1, input2);
}
const multiInputArrow = (input1, input2) => { // input1 & input2 are parameters or arguments
    console.log(input1, input2);
}
// Functions with a default input, input is assigned the default when nothing is given
function defaultInputFunc(input = "Empty Func") { // input is a parameter or argument with a default value
    console.log(input);
}
const defaultInputArrow = (input = "Empty Arrow") => { // input is a parameter or argument with a default value
    console.log(input);
}
// Arrow Function shorthands
// Functions as Callbacks, named and anonymously
// Functions as Methods inside Objects
// Execute/Call/Run/Use these Functions
singleLineFunc();
singleLineArrow();
inputFunc('Single Input Func');
inputArrow('Single Input Arrow');
// Passing the output directly into console.log
console.log(outputFunc());
console.log(outputArrow());
// Capturing the output then passing that variable to console.log
const inOutFuncResult = inputOutputFunc('Input to Func');
const inOutArrowResult = inputOutputArrow('Input to Arrow');
console.log(inOutFuncResult);
console.log(inOutArrowResult);
multiInputFunc('Multiple', 'Inputs to Func');
multiInputArrow('Multiple Inputs', 'to Arrow');
defaultInputFunc();
defaultInputArrow();