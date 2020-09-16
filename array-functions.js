const numbers = [];
for(let i = 0; i < 10; i++){
    numbers.push(`${i + 1}`);
}

const map2 = numbers.map((num, index, array) => {
    console.log(num, index, array, num * 4);
    return num * 4;
});

const map1 = numbers.map(x => x * 2);

console.log(numbers);
console.log(map1);
console.log(map2);