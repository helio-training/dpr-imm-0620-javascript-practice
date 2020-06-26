console.log('Practicing JavaScript Functions');

// for Loop
// for ( [Initial Condition] ; [Ending Condition] ; [Incrementing Expression] ) 
//    { loop block }
// for ( starting point; ending point; how you get to the end ) 
//    { what you're doing each time } 
// Simple counting loop
for ( let count = 0; count < 10; count++ ){
    console.log('for count', count);
}
// Prints Even Values
for (let count = 1; count < 20; count++) {
    if( (count % 2) === 0 ) {
        console.log('even', count);
    }
}
// Makes use of functions and shorthands
const isOdd = input => input % 2 === 1
for (let count = 1; count < 20; count++) {
    // Single line if statement doesn't need {}
    if(isOdd(count)) console.log('odd', count);
}

// while Loops
// while ( [Continuing Condition] ) 
//    { loop block, should reach an Ending Condition }
// Simple counting loop
let i = 0;
while(i < 10) { // loop will run while condition is true
    console.log('while count', i);
    i++;
}
