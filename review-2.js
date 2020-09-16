// Valid syntax, not valid element organization
const dontDoThis = [ 'Hello', 'World', 616, { universe: "MCU" } ]
console.log("----Don't do this")
dontDoThis.forEach((curEle) => {
    console.log(curEle.universe);
});

const funcArray = [ 
    () => { console.log('hello') }, // Index: 0
    () => { console.log('world') }, // Index: 1
    () => { console.log('616') }, // Index: 2
    () => { console.log('MCU') }, // Index: 3
    616
]
console.log('----Uncomment this code to break the file');
// funcArray.forEach( curEle => curEle() );
// console.log(typeof funcArray.forEach);

const heroes = ["Batman", "Spider-Man", "Thor", "Starlord", "Deadpool"];
const printCallback = (value, index, arr) => console.log(index, value, arr);
console.log('----forEach Method');
heroes.forEach(printCallback);
// heroes.forEach((value, index, arr) => console.log(index, value, arr));
// heroes.forEach((value) => console.log(value));
console.log('----for loop');
for(let index = 0; index < heroes.length; index++){
    printCallback(heroes[index], index, heroes);
}

console.log('----Classes');
// This class sets up a template for Hero objects
class Hero {
    constructor(name = 'Superman'){
        this.name = name;
    }
    savesDay () {
        console.log(`${this.name} saves the day!`);
    }
}
// convert heroes[] to a collection of type Hero (class objects)
const heroObjects = heroes.map((name) => { // name is the Current Element
    const hero = new Hero(name);
    console.log('Registered', hero.name);
    return hero;
});
console.log(heroObjects);
heroObjects.push(new Hero());
console.log(heroObjects);
// execute savesDay on each Hero in the new collection
heroObjects.forEach((hero) => { hero.savesDay() });