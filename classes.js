console.log('Practicing JavaScript Classes');

// Working in Class Syntax
class Person {
    constructor(name, age = null, weight = null, height = null) {
        this._name = name;
        this._age = age;
        this._weight = weight;
        this._height = height;
    }
    greet(){
        console.log(`Hello, my name is ${this._name}, I am ${this._age} years old.`);
    }

    // What are Getters and Setters?
}
const wes = new Person('Wes', 89, 205, `6'4"`);
console.log(wes);
wes.greet();
const mike = new Person('Mike', 56, 160, `5'11"`);
mike.greet();

const people = [ wes, mike ];
console.log(people);
console.table(people);

class Student extends Person {
    constructor(name, options) { // options is an object with optional: age, weight, height, course
        super(name, options.age, options.weight, options.height);
        this._course = options.course;
    }
    studying(){
        console.log(`I, ${this._name}, am studying ${this._course}`);
    }
}

const tim = new Student('Tim', { course: 'Web Development', age: 24});
console.log(tim);
tim.greet();
tim.studying();