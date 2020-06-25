console.log('Practicing JavaScript Conditionals');

// Data to use in Conditionals
let steve = {
    name: "Steve",
    age: 8 // Change this age to impact below
}
let nancy = {
    name: "Nancy",
    age: 14 // Change this age to impact below
}

// Checking Voting Eligibility 
if(steve.age > 17 && nancy.age >= 18){
    console.log('Both people are eligible to vote!');
}
else if(steve.age >= 18){
    console.log('Steve can vote');
}
else if(nancy.age > 17){
    console.log('Nancy can vote');
}
//if(steve.age < 18 && nancy.age <= 17 ){
else {
    console.log('Neither people can vote');
}

let newYear = false;
if(newYear){
    steve.age++;
    nancy.age++;
}
console.log('Steve', steve.age, ": Nancy", nancy.age);