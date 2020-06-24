'use strict';
console.log('Practicing JavaScript Objects');
// Exploring Objects and related topics

console.log( Date.now() / 1000 / 60 / 60 / 24 / 365 );
let today = new Date();
console.log(today);
console.log( Date.now() );
console.log( Math.PI );
console.log( Math.random() );

// Sharing resources between files
// Refer to variables.js for the export
// Look right below for the import
const variables = require('./variables');
console.log('variables object:', variables);
console.log(variables.person.name);