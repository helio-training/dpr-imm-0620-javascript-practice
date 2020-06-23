console.log('Practicing JavaScript Variables');
// Exploring Variables, how to create, use, and change them in JavaScript

// Using 'var', avoid 'var' (See below)
// In English: Declare a variable named 'count' and assigning it the number 0
var count = 0; // Declaration and Assignment
count = 1; // Reassigning 'count' the number 1
count = count + 1; // Reassign 'count' the value of 'count' plus 1
console.log('count', count);

// Using 'let', use after asking yourself, "Will this ever change?"
// Splits the declaration from the assignment, refer to line 6 for it on 1 line
let age; // Declaration
age = 20; // Assignment
age++; // Shorthand for : age = age + 1

console.log('age', age);

// Using 'const', use by default
// Declaration and Assignment cannot be split
const pi = 3.1415927; // Declaration and Assignment
// pi = 4; // Breaks the process, cannot reassign
console.log('pi', pi);


// Block Scope
{
    let hidden = 'Only seen in Scope';
    var exposed = 'Can be seen everywhere';
    console.log('inside scope', hidden, ':', exposed);
}
console.log(exposed);
console.log(typeof hidden);