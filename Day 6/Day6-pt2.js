let time = 42686985;
let distance = 284100511221341;

let count = 0;

for (let j = 1; j < time; j++){
    j*(time-j) > distance ? count++ : count = count;
}

console.log(count);