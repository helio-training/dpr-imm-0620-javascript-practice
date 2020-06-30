console.log('Practicing JavaScript Arrays');

// Array Syntax
const heroes = [ "Batman", "Spider-Man", "Thor", "Starlord", "Deadpool" ];
const villains = [ 
    "Joker", 
    "Venom",
    "Loki",
    "Thanos",
    "Francis"
];

const printArrays = (msg) => {
    console.log(msg);
    console.log(heroes);
    console.log(villains);
}
printArrays("----PreStart:");
// Using the MDN or W3Schools
// Add a value to the back of each array
heroes.push("Hulk");
villains.push("General Ross");
printArrays("----After Push:");
// Remove a value from the back of each array
const hulk = heroes.pop();
const ross = villains.pop();
printArrays(`----After Pop ${hulk} & ${ross} :`);
// Add a value to the front of each array
heroes.unshift('Shazam');
villains.unshift('Black Atom');
printArrays('----After Unshift:');
// Remove a value from the front of each array
const shazam = heroes.shift();
const atom = villains.shift();
printArrays(`----After Shift ${shazam} & ${atom} :`);
// Break up each array at Index 2
const brokenHeroes = heroes.slice(2);
const brokenVillains = villains.slice(2);
printArrays('----Originals after Slice:');
console.log('Broken Heroes', brokenHeroes);
console.log('Broken Villains', brokenVillains);
// Add a value to somewhere in the middle of each array
heroes.splice(2, 0, "Buzz Lightyear");
villains.splice(2, 0, "Zurg");
printArrays('----After Splice Add:');
// Remove a value from somewhere in the middle of each array
const buzz = heroes.splice(2, 1);
const zurg = villains.splice(2, 1);
printArrays(`----After Splice Delete ${buzz} & ${zurg} :`);